---
{
  "url": "https://www.health-samurai.io/articles/two-phase-fhir-terminology",
  "title": "🔥 Two-phase FHIR terminology",
  "description": "Terminology in Health IT is a very important and complicated aspect. A lot of interoperability depends on how accurately do you encode your data.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/5cc86a5e5168e9eecde0a939_IMG_20190430_181552_2.jpg",
  "date": "2019-04-30",
  "author": "Niquola Ryzhikov",
  "slug": "two-phase-fhir-terminology"
}
---

Terminology in Health IT is a very important and complicated aspect. A lot of interoperability depends on how accurately do you en**code** your data.

FHIR Terminology Service specification does a great job to provide developers with simple and straight-forward API for [terminology service](https://www.hl7.org/fhir/terminology-service.html).

Terminology management is a complicated domain — you have to keep up-to-date external code systems, understand their internal structure, provide authoring, versioning and publishing tools.

We can imagine an architecture with separated FHIR server & Terminology service. But “good” FHIR server has a quite strong dependency on Terminology — for validation, lookups and subsumption queries. Implementing full terminology service specification in FHIR server is a big deal. Using external terminology service make your FHIR server non-autonomous. So we have a trade-off :(



> Get started with the Aidbox [FHIR Server](https://www.health-samurai.io/aidbox) for data storage, integrations, healthcare analytics, and more, or [hire our team](https://www.health-samurai.io/services) to support your software development needs.



### Authoring vs Usage

If you look closer into FHIR terminology you might notice that terminology can be decomposed into two parts — **authoring/manage** and **usage**. For **authoring cases,** you need up-to-date CodeSystems, ValueSets design tools with expansion engine, versions management etc. For **usage, **you mostly will work with immutable ValueSets and have to provide efficient filtering and lookup for validation.

To reduce coupling between Terminology and FHIR server, we can separate responsibilities in the following way:
- Design ValueSets on Terminology Service and publish in expanded form by some kind of bulk export API/format
- Load and use ValueSets in an optimized form into FHIR servers

Here are the technical details of how we can do this.

### Concept Resource

In [Aidbox ](https://www.health-samurai.io/new-aidbox)we split CodeSystem into header info and set of [Concept](https://app.gitbook.com/@aidbox/s/project/terminology/concept) (Non-FHIR-yet :) resources, which have a similar structure as [CodeSystem.concept](https://www.hl7.org/fhir/codesystem-definitions.html#CodeSystem.concept)element and Coding datatype. This allows us to translate part of Terminology Service API into unified FHIR crud/search API over Concept Resources.

We convert popular terminologies into a set of Concept resources, which can be distributed as ndjson files for efficient bulk export/import. Here is an example for LOINC:

> ---
*- ****code****: 10000-8
****  display****: R wave duration in lead AVR
****  names****:
  - R wave dur L-AVR
  - Cardiac
  - "Durat"
  - "ECG"
  ....
****  property****:
****      loinc****:
****          relatednames2****: Cardiac; Durat; ECG; EKG.MEASUREMENTS; ...
****          method_typ****: EKG
****          classtype****: &#x27;2&#x27;
****          system****: Heart
****          time_aspct****: Pt
****          common_order_rank****: &#x27;0&#x27;
****          property****: Time
****          order_obs****: Observation
****          unitsrequired****: Y
          ....*

### Expansion denormalization

If we add to Concept Resource multiple links to Value Sets we can denormalize all sophisticated Value Set expansions like this:

> ***code****: 10000-8
****system****: *[*http://loinc.org*](http://loinc.org/)***display****: R wave duration in lead AVR
****valueSet****:
- ****reference****: ValueSet/LL1162-8
- ****reference****: ValueSet/another-vs*

Set of Concepts with denormalized ValueSets can be dumped into ndjson with kinda bulk export API and uploaded into FHIR server.

### FHIR server runtime

Concept resource with links to ValueSets can be used in FHIR server to implement basic usage operations — **$expand** with filter,** $validate-code** and **$lookup** — by simple search API over Concept:

> *GET /ValueSet/v1/$expand?_filter=x 
****=>**** GET /Concept?vs=v1&display=???/ValueSet/v1/$validate-code?system=???&code=???
****=>**** /Concept?vs=v1&system=???&code=???*

### Conclusion

To simplify usage of terminology and decouple FHIR servers from terminology, we can introduce new Concept resource type, do all ValueSet authoring on terminology service and bulk export/import denormalized (expanded) Concepts into FHIR servers with much more simple implementation of basic operations.

Your feedback is welcome!

    
    
    Follow US

    
    

[![Aidbox FHIR Platform Free Trial](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/6372827a1dc615dd429dbed4_1200x628%20-%20reliable(1).png)](https://www.health-samurai.io/aidbox)

