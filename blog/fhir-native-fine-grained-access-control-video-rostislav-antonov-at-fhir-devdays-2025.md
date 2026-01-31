---
{
  "url": "https://www.health-samurai.io/articles/fhir-native-fine-grained-access-control-video-rostislav-antonov-at-fhir-devdays-2025",
  "title": "🔥 [Video] FHIR Native Fine-Grained Access Control – Rostislav Antonov at FHIR DevDays 2025",
  "description": "FHIR security labels can limit access not just to whole resources but to individual fields. Rostislav Antonov’s DevDays talk shows how this works in Aidbox and what trade-offs it creates around leakage, performance, and write protection.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/68aef2efb14ccebe22668ab6_Group%203.png",
  "date": "2025-12-15",
  "author": "Rostislav Antonov",
  "slug": "fhir-native-fine-grained-access-control-video-rostislav-antonov-at-fhir-devdays-2025"
}
---

This post is part of a series on Health Samurai sessions from HL7 FHIR DevDays 2025. In this article, “FHIR native fine-grained access control,” Rostislav Antonov, Health Samurai&#x27;s Software Engineer, shows how FHIR security labels can protect sensitive clinical data while keeping records usable for care teams.

**What you&#x27;ll learn:**
- Why different clinicians (for example, psychiatrists vs GPs) need different views of the same patient record.
- How FHIR security labels work at both resource and element (field) level.
- How the Aidbox [**FHIR server**](https://www.health-samurai.io/fhir-server) implements label-based access control using database filtering and inline masking.
- Key trade-offs around privacy, safety, performance, and FHIR conformance.



## Why roles are not enough

Healthcare data often mixes highly sensitive details (addresses, identifiers, psychiatric notes) with routine clinical information inside the same resource. Simple role-based access on whole resources cannot give a psychiatrist and a general practitioner appropriately different views without either hiding too much or exposing too much. The model described in the talk assumes the system must be able to hide specific fields while still returning the rest of the resource, consistently across users and use cases.



## FHIR security labels in practice

FHIR provides security labels that can express confidentiality and purpose-of-use using HL7 code systems. The talk distinguishes between hierarchical labels (for example, confidentiality levels where “restricted” includes “normal”) and flat labels (such as purpose-of-use codes with no hierarchy). Labels can sit on the resource (meta.security) or inline at element level via extensions, allowing patterns like “psychiatry-only observations” or a home address marked as location-sensitive while a billing address remains visible.



## Two-level access checking

Access control combines resource-level and element-level checks. First, each resource is stored with security labels, and each user has a label set derived from identity and tokens. Incoming queries are rewritten with label-based filters, so the database only returns resources whose labels match the user’s labels. Second, inline labels are evaluated as the server walks each resource: allowed fields are returned normally; blocked fields are replaced with a data-absent-reason extension to indicate that the value is intentionally hidden. This keeps access rules independent of resource type while avoiding duplicate records.



## Benefits and trade-offs

Used this way, security labels provide fine-grained control, reuse existing HL7/FHIR standards, and support both role-based and attribute-based policies. At the same time, the talk underlines important trade-offs: visible “absent” markers and labels can leak that hidden data exists; masking required elements can break strict FHIR conformance; and element-level traversal adds measurable performance overhead. Access policy therefore cannot be purely technical, deployments must decide how to balance transparency, privacy, and correctness.



## Operational considerations and demo

Operationally, the model relies on careful label management and auditing. User labels come from identity systems, clients must label resources correctly, and historic data may need re-labelling migrations. A “break-glass” label enables emergency overrides but requires strong logging, and current implementations focus more on read protection than on guarding writes such as label removal. The demo scenarios show how JWT-based labels drive Postman calls where one user sees both psychiatric and general observations and another sees only the general ones, or where only certain addresses are visible, illustrating selective disclosure without duplicating resources.
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/693ff7ea31376442e13b4a24_Frame%203402.png)


## How this helps FHIR teams

For organizations implementing FHIR-based systems, this approach shows how standard FHIR security labels can form the backbone of fine-grained access control instead of a proprietary model. It demonstrates that resource-level and element-level labels can coexist to support expressive, interoperable policies, while the explicit discussion of leakage, performance, and write risks helps teams design deployments that are clear about their trade-offs rather than treating labels as a complete solution.



## Resources

Watch Rostislav&#x27;s full presentation from FHIR DevDays 2025 and the complete Health Samurai playlist:[**
Watch the full video
Full playlist on YouTube**](https://youtu.be/jPvkpE_tx-4)

Connect with Rostislav on [**LinkedIn**](https://www.linkedin.com/in/rostislav-antonov/).


