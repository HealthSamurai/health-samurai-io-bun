---
{
  "url": "https://www.health-samurai.io/articles/fhir-schema-first-year-results-video-evgenii-mukha-at-fhir-devdays-2025",
  "title": "🔥 [Video] FHIR Schema First Year Results – Evgenii Mukha at FHIR DevDays 2025",
  "description": "Despite shared specs, FHIR validators disagree on edge cases. FHIR Schema fixes this with a JSON Schema-inspired format and simple, universal algorithm. Learn Aidbox insights, snapshot-less validation, and the roadmap.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/68aef2efb14ccebe22668ab6_Group%203.png",
  "date": "2025-12-15",
  "author": "Evgenii Mukha",
  "slug": "fhir-schema-first-year-results-video-evgenii-mukha-at-fhir-devdays-2025"
}
---

This post is part of a series on Health Samurai sessions from HL7 FHIR DevDays 2025. In this article, “FHIR Schema First Year Results: Ecosystem Evolution and Dev‑UX,” Evgenii Mukha, Software Engineer at Health Samurai, shares lessons from running a new FHIR validation engine in production for a year.

**What you&#x27;ll learn:**
- Why existing FHIR validators disagree on the same data and what that means for interoperability.
- What FHIR Schema is and how it differs from raw StructureDefinitions.
- How the snapshot‑less validation algorithm enables multi‑profile checks and runtime tweaks.
- What the team learned from real‑world use and where **FHIR Schema** is heading next.



## The problem: inconsistent validation

The talk opens with a simple but revealing edge case: a Patient resource containing a primitive extension with null values that should violate an `el-1` FHIRPath constraint. Different public servers handle it in completely different ways, from silently trimming the value to accepting it or reporting unrelated errors. This illustrates that validation, which should be a cornerstone of interoperability, behaves unpredictably across implementations.

The core issue is not just bugs but an underspecified validation spec, with key details about slicing, terminology, and edge cases scattered across conversations in Zulip and tickets in JIRA rather than in a clear, implementer‑oriented document. Engine authors lack precise guidance comparable to what exists for FHIRPath, making full compatibility hard to achieve.



## The FHIR Schema approach

FHIR Schema is introduced as a way to give implementers a shared, language‑agnostic representation of validation constraints and a precise validation algorithm. It is derived from StructureDefinitions rather than replacing them, and consists of three main parts: a transpiler that converts StructureDefinitions into schema files, a JSON/YAML schema format that represents constraints as a tree, and a validation algorithm with an accompanying test suite.

The goal is for validation engines in different stacks to reuse the same schema representation instead of inventing their own internal models. This should make behavior more predictable and reduce divergence between servers.


![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/693ff756e8549a49dcb14dc6_Frame%203401.png)


## **Tree-shaped schema and snapshot‑less validation**

Where StructureDefinitions list elements as a flat table, FHIR Schema organizes them into an explicit tree that mirrors real FHIR data. Elements define possible keys, arrays are first‑class, terminology bindings and polymorphic elements are modeled directly, and required or excluded fields are represented without guessing from cardinality. Slicing is expressed as matchers that decide whether an element belongs to a slice, based on criteria like bindings, patterns, or profile validity.

The validation algorithm builds a set of relevant schemas (base resource, profiles, and ancestors), checks top‑level invariants, then walks the resource tree, applying node‑level checks and slicing rules. Because it works without pre‑built snapshots, it supports runtime changes to constraints, simultaneous validation against multiple profiles, and profile discovery by testing which schemas fit existing data.



## Production insights and roadmap

After a year of production use in [**Aidbox**](https://www.health-samurai.io/fhir-server), several lessons emerged: transpilation needs to be stateless and reproducible; slicing groups must be uniquely scoped when multiple profiles are applied; and a clearer error‑reporting model is required so tools and test suites can compare results reliably. These points show that standardizing format and algorithm is only part of the job—error semantics also matter.

Looking ahead, the team plans to open their test suite, publish reference implementations in JavaScript and Clojure, and release a versioned specification in a more “FHIR‑like” form alongside a working group focused on validator implementers. The aim is to move from one engine plus internal tests to a broader ecosystem of compatible engines and shared test cases.



## Why this matters for FHIR teams

For organizations building or integrating FHIR servers and validators, FHIR Schema offers a clearer path to consistent validation. Engine authors get an implementable format and algorithm instead of reverse‑engineering behavior from a single reference implementation. Teams gain better chances of consistent pass/fail results across servers and unlock advanced scenarios such as multi‑profile validation and runtime tuning of constraints. This makes FHIR‑based systems easier to debug and more predictable in real‑world interoperability scenarios.



## Resources

Watch Evgenii&#x27;s full presentation from FHIR DevDays 2025 and the complete Health Samurai playlist:[**
Watch the full video
Full playlist on YouTube**](https://youtu.be/h7QILlzkkfY)

Connect with Evgenii on [**LinkedIn**](https://www.linkedin.com/in/evgeny-mukha-192293228/)** **or via the FHIR Schema Zulip stream.

Explore these FHIR Schema resources:[**
Specification Draft**](https://fhir-schema.github.io/fhir-schema/)[**
Playground**](https://fhir-validator.aidbox.app/)[**
Transpiled Package Dump**](https://console.cloud.google.com/storage/browser/fhir-schema-registry/1.0.0)[**
Ref. Implementation (CLJ)**](https://github.com/fhir-clj/fhir-schema)[**
Ref. Implementation (JS)**](https://github.com/fhir-schema/fhir-schema/tree/main/fhirschema-js)
