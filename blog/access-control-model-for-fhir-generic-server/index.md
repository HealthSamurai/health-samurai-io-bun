---
{
  "url": "https://www.health-samurai.io/articles/access-control-model-for-fhir-generic-server",
  "title": "Choosing Access Control Model for a Generic FHIR Server",
  "description": "Making sure your healthcare data is secure is a top priority for any health information system. Here’s what you should think about when managing access control for your FHIR server. ",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/6373537d18c74294e83859ab_1200x628%20-%20build%20apps.png",
  "date": "2016-01-16",
  "author": "Nikolai Ryzhikov",
  "slug": "access-control-model-for-fhir-generic-server",
  "reading-time": "5 min read",
  "tags": [
    "Fhir",
    "Access Control Security"
  ],
  "category": "System Design"
}
---

Every information system deals with access control, while development of platforms makes choosing the right security model even more critical. There's always the question how to minimize trade-offs.

An Access Control Subsystem should answer following question:

> *Can some****agent****make specific****operations****in a system?*

Sometimes it’s convenient to expand this question:

> *Can some****agent****make specific****operations****on specific****resources****?*

There are two popular models: **RBAC** (Role-Based Access Control) and **ACL** (Access Control List). These models are located on two different poles: RBAC attaches permissions to **agent**, while ACL associate access rules with **resource**.

So if you could classify you system as “user-centric” or “resource-centric”, you may pick appropriate one. Both of them require some “hacks” to work on other poles. “User-centric” models need “magic” permission modifiers to deal with access decisions, which related to resource properties and relations. You may see permissions with ownership modifiers like **“edit my posts”** etc. More complicated rules of such type are often just “hard-coded”. Another anomalies are virtual “**anonymous**” or “**all**” agent concepts, which are used to define access rules, when agent is unknown, not important or abstracted. For “resource-centric” models it is not always obvious what is a subject (resource) of operations. For example, what is resource for in creation or search operations?

While playing quite well in some domains, both models could not be used to produce generic access control model. We left with only one option — put **operation** in the center of model. We can introduce concept of **policy,**which define access on operation level. Policy describe which agents (i.e. identity) are allowed or disallowed to perform specific operations on specific resource under some conditions. All parts of policy could be optional or abstract. Policy could be associated with agent or resource or both. When we attach policy to agent, we can build RBAC-like system. Policy on resource works like ACL. We also could model hybrid solution, when to control access we evaluate agent policy and resource policy together. This approach could solve corner cases like “physician can view all patients” \& “celebrity should be visible only to her primary physician”.

## 

## Enhancing FHIR Access Control: Video Insights and Meetup Recap

Check out the video from our recent FHIR® Access Control Meetup, where we dive into the intricacies of access control models for FHIR servers. Plus, don’t miss [our detailed recap](https://www.health-samurai.io/news/fhir-access-control-meetup-recap) of the event, covering key discussions on privacy policies, authorization nuances, and innovative access control strategies from John Moehrke, Josh Mandel, Mohammad Jafari, and Mike Kulakov.

## Implementation Details

Health Samurai are working on generic FHIR server. FHIR standard does not define any access control model, just some helpful features to build security such as: security labels, AuditEvent \& Provenance resources, Digital Signature and OAuth 2 recomendation. SMART Platform defines set of OAuth scopes, but it too tightly focused on it’s primary scenario — to provide interface to existing EHR systems — and delegates most of decisions to underlying information systems. If we think FHIR REST server as platform to build healthcare applications from scratch, we need to provide access control subsystem, which makes possible to build different types of applications: from patient portals and integration buses to full EHR solutions.

We think, that access control using **Policy** is flexible enough for us. There are successful applications of this model in real systems — Amazon S3 for example. Next step is to design possible implementation of policies.

## Declarative Policy

Sometime policy is so complicated, that it requires Turing machine power and access to all system data and operation context to decide about access. It’s quite convenient to represent access control as a interceptor/filter function, which is passed information about agent and session, all system data and operation details as parameters and returns true or false:

**if** accessControl(agentInfo, systemData, operationData) **then** allow **else** deny

In our FHIR platform you can provide JavaScript function as a policy, which will be called with request object and has access to whole database to control access. The only limitation is that, this function could not call external services. To work out situations when you need this information, you can get it somehow before and put into request data.

To make policy more declarative we have to shape and constraint parameters and ideally turn policy into pure-function (i.e. result of this function should depends only from parameters). Then we can represent access control as generic function:

accessControl(request, policy)

which accepts request and policy definition and gives the answer.

## JSON schema as a Policy

Because we are talking mostly about REST API, we can represent request like a HTTP request as a JSON data structure (as many web-frameworks do):

{   **url**: “/patient/”,   **method**: “POST”,   **headers**: {...}  **body**: {resourceType: ‘Patient’, ….}  **agent**: {....} }

Most of policy engines use custom DSLs to describe policy, but we can leverage existing at JSON schema format, which has many implementations, well-documented and familiar to developers. So policy could be defined as JSON schema and schema validation function could be used as generic accessControl function.

Let’s illustrate this idea with some examples:

{  **title**: ‘Read Access to everything’,   **type**: ‘Object’,   **properties**: {**method**: {**enum**: \[“GET”}}

Or we could constraint url by regexp:

{  **title**: “Read Patient”,   **properties**: {    **method**: {**enum**: \[“GET”]},     **url**: {**type**: “string”, **pattern**: “/patient/.\*”}  }}

If we encode query string as parameters object, we could even constraint search parameters:

{ **title**: “Only search by name and fetch less then 100 items”,  **properties**: {    **params**: {      **properties**: {        **name**: {**type**: “string”},         **_limit**: {**type**: 'integer', **maximum**: 100}      },       **additionalProperties**: false    } }}

For create and update operations, if we have request with JSON body, we can force specific requirements on resource. For example, allow POST resources only with specific Profiles.

To make policy statements more expressive first option is to populate request object with additional information (i.e. location, agent context, session context, even response or related resource could be added). JSON schema specification quite expressive and **v5** with many extra features are coming. For FHIR and security specific requirements, which may not fit into JSON schema, this specification specification supports extensions.

Today we are in active design and implementation phase and any feedback and participation are very appreciated.

We hope, that in future FHIR standard may include Policy-based access control specification and bring interop in this area too.

> Get started with the Aidbox [FHIR Server](https://www.health-samurai.io/aidbox) for data storage, integrations, healthcare analytics, and more, or [hire our team](https://www.health-samurai.io/services) to support your software development needs.

[![Aidbox FHIR Platform Free Trial](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/6373537d18c74294e83859ab_1200x628%20-%20build%20apps.png)](https://www.health-samurai.io/aidbox)
