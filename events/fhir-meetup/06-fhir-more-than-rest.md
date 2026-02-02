---
{
  "name": "FHIR. More than REST",
  "speaker": "Josh Mandel, Nikolai Ryzhikov",
  "role": "Microsoft Healthcare, Health Samurai",
  "date": "2021-10-01",
  "youtube": "https://www.youtube.com/watch?v=1WalljTHuus"
}
---

# FHIR. More than REST

This meetup explored advanced FHIR interaction patterns beyond standard REST protocols. The discussion centered on why FHIR's current Asynchronous Request Pattern designed for long-running operations doesn't effectively support CRUD interactions, as bulk data manifests suit large unordered resource transfers rather than individual operations.

## Speakers

- **Josh Mandel** – Chief Architect for Microsoft Healthcare and SMART Health IT
  - Examined limitations of existing async patterns for complex scenarios

- **Nikolai Ryzhikov** – CTO at Health Samurai
  - Presented queue-based protocols as superior alternatives for reliable server-to-server data replication
