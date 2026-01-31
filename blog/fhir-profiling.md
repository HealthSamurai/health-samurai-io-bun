---
{
  "url": "https://www.health-samurai.io/articles/fhir-profiling",
  "title": "🔥 FHIR Profiling",
  "description": "The base FHIR specification outlines a set of fundamental resources utilized in various contexts within healthcare.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/68063459a4a7351c88399fc6_image.png",
  "author": "",
  "slug": "fhir-profiling"
}
---

## FHIR profile

The base FHIR specification outlines a set of fundamental resources utilized in various contexts within healthcare. However, notable variation exists among jurisdictions and throughout the healthcare ecosystem concerning data requirements.

For this reason, FHIR provides the ability to impose additional constraints on the basic resources:
- Require completion of a specific field in a [resource](https://www.health-samurai.io/articles/extending-fhir-resources). (cardinality)
- Limit the maximum number of items in an array field. (cardinality)
- Define a permissible set of values. (binding)
- Apply limitations to a particular element of an array (slicing)
- Describe more complex validation rules using the FHIRPath language (constraints)


