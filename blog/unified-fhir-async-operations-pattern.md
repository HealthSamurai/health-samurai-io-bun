---
{
  "url": "https://www.health-samurai.io/articles/unified-fhir-async-operations-pattern",
  "title": "🔥 Unified FHIR Async Operations Pattern",
  "description": "Master unified FHIR async patterns for bulk exports and other long-running operations using Bulk Data Access and R5/R6: Prefer headers (bundle/redirect/manifest), polling, callbacks, long polling, plus HTTP examples and visual flows for Manifest, Bundle, Redirect, Cancel, and Callback workflows.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/681dcbba90ffeb168bda2eb0_image.png",
  "author": "",
  "slug": "unified-fhir-async-operations-pattern"
}
---

Some operations are computationally intensive and can take minutes or hours (bulk export, search-parameter reindexing, full resource revalidation). Running them asynchronously prevents blocking the client and lets the server manage the load. In an async flow the client kicks off the job, the server runs it in the background, and the client either polls for status or receives a callback when it completes.

FHIR already provides [async support](https://hl7.org/fhir/async.html) through [Bulk Data Access](https://build.fhir.org/ig/HL7/bulk-data/en/export.html) and the [R5 Asynchronous Interaction Request pattern](https://hl7.org/fhir/async-bundle.html). They share the same lifecycle:

  
  
  
  Highlighted Text

  
    - Kick-off request -> 202 Accepted with Content-Location.

    - Status request (while running) -> 202 Accepted with Retry-After and optionally X-Progress.

    - Optional cancel -> DELETE to the status URL returns 202 Accepted.

    - Terminal status -> either 200 OK (payload inline) or 303 See Other (redirect to the payload).

  

  
  
  
  Highlighted Text

  
Inline modes (Bundle, Bulk manifest) always return 200 OK on completion; success vs. failure is indicated by the payload (e.g., a result Bundle vs. an OperationOutcome, or error links inside a manifest). Redirect mode surfaces the original synchronous status codes on the redirected request (e.g., 200/201 on success, 4XX/5XX on failure).

The patterns mainly differ by the envelope for the final payload:
- Bulk Data Access returns a custom JSON manifest.
- Asynchronous Interaction Request returns a FHIR Bundle.
- Redirect mode returns whatever the synchronous interaction would have returned (Parameters, Bundle, Binary, etc.).

This breaks down when the payload cannot be expressed as a Bundle (e.g., streaming outputs or binary content).

  
  
  
  Highlighted Text

  
R6 work aims to standardize async across all interactions. Each interaction now allows 202 Accepted, and [Josh's draft spec](https://hackmd.io/@jmandel/async-pattern-simplified) proposes an additional redirect pattern: the terminal status response is 303 See Other with a Location pointing to the result; that endpoint returns the actual payload and its status.

  
  
  
  Highlighted Text

  
Ideally, we can unify these patterns into a single parameterized one. Use Prefer: respond-async plus a custom  Prefer token to request the mode. For backward compatibility the default is bundle; if  _outputFormat is present, treat the request as Bulk and return a manifest (servers MAY reject a conflicting async-mode with  400 Bad Request).

```javascript
GET /fhir/[$operation] HTTP/1.1
Prefer: respond-async, async-mode=[redirect|bundle]   # async-mode is a proposed extension token
```

  
  
  
  Highlighted Text

  
Servers SHOULD echo honored preferences via Preference-Applied..

  
  
  
  Highlighted Text

  
Clients should assume unknown Prefer tokens are ignored and be prepared to fall back to the default bundle mode.

When the operation is completed:

  
  
  
  Highlighted Text

  
    - async-mode=bundle: server SHOULD respond with 200 OK and a Bundle body; failures use an OperationOutcome payload.

    - _outputFormat parameter present: server SHOULD respond with 200 OK and a Bulk Manifest body; failures surface via manifest error links and/or an OperationOutcome entry.

    - async-mode=redirect: server SHOULD respond with 303 See Other and a Location URL pointing to the result of the operation; the redirected request returns the same status codes as the synchronous interaction.

  

  
Clients can infer completion and the mode from the status code (200 or 303); success vs. failure depends on the final payload or the redirected response status.



## Extensions

Here is a list of extra extensions which can be added to improve support for async operations:



### Long polling extension

Servers may use [long polling](https://en.wikipedia.org/wiki/Long_polling) for status requests to minimize latency. The server keeps the connection open until the operation is completed or a timeout occurs. On timeout the client retries, and the server controls the frequency of incoming status requests. Long polling reduces needless polling traffic while still delivering fast notification when the state changes (completion or cancellation).



### Callback extension

**Purpose:** allow the server to notify the client when a job finishes so the client can pause or stop polling.

**Motivation:** callbacks keep response latency low without aggressive polling. Clients can back off to slow, cheap polls (or none) while still getting near-real-time notification when the job finishes.

**Flow:**

  
  
  
  Highlighted Text

  
    - Client includes callback-url with Prefer: respond-async (and optional async-mode).

    - When the job completes or is cancelled, the server sends one POST to that URL.

    - If the callback fails or never arrives, the client relies on polling.

  

Example kick-off with callback:

```javascript
POST /fhir/$operation HTTP/1.1
Prefer: respond-async, async-mode=redirect, callback-url=https://example.com/callback
Accept: application/fhir+json
Content-Type: application/fhir+json

{ ...normal operation body... }
```

  
  
  
  Highlighted Text

  
**Payload**: a FHIR Parameters resource containing:

  
    - status (completed | failed | cancelled)

    - resultUrl (URL the client can fetch for the final payload)

    - Optional OperationOutcome parameter when the job failed

  

  
**Delivery**: best-effort, no retries; callbacks are a signal, not the primary delivery channel (polling is). Callbacks SHOULD be idempotent so duplicates are harmless.

  
**Security**: servers SHOULD authenticate callbacks (e.g., OAuth2 bearer token, mTLS, or HMAC).

  
**Client handling**: respond with 2XX on success; non-2XX just means the client will poll.

Example callback request:

```javascript
POST https://example.com/callback HTTP/1.1
Content-Type: application/fhir+json
Authorization: Bearer eyJhbGciOi...

{
  "resourceType": "Parameters",
  "parameter": [
    { "name": "status", "valueCode": "completed" },
    { "name": "resultUrl", "valueUrl": "https://fhir.example.com/whatever/path/1ab7162f-result" }
  ]
}
```



## Example Visual Flows

Here are some example visual flows for the different modes.



### Bulk Manifest Mode
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/69285d5e0446530225baed19_Example%20Visual%20Flows%20-%20Bulk%20Manifest%20Mode.png)


### Bundle Mode
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/69285e5eb0b679d114c7eb2e_Example%20Visual%20Flows%20-%20Bundle%20Mode%20.png)


### Redirect Mode
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/69285e84781cfc7eacedfdd9_Example%20Visual%20Flows%20-%20Redirect%20Mode.png)


### Cancellation Flow
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/69285ea6ff653afa9b9cd1a2_Example%20Visual%20Flows%20-%20Cancellation%20Flow.png)


### Callback Mode
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/69285ec353bf579c2850f394_Example%20Visual%20Flows%20-%20Callback%20Mode.png)


## Have questions? Ask our CTO

If you have more questions about this pattern, feel free to reach out directly to our CTO, [Nikolai Ryzhikov](https://www.linkedin.com/in/nikolai-ryzhikov-586a6913/). We are always happy to talk about FHIR and real-world implementations.
