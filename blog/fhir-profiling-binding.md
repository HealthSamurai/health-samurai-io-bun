---
{
  "url": "https://www.health-samurai.io/articles/fhir-profiling-binding",
  "title": "🔥 FHIR Profiling: Binding",
  "description": "Binding is used to define an allowed set of values for an element.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/680635484e655293597a83c0_image.png",
  "date": "2025-04-11",
  "author": "Ivan Bagrov",
  "slug": "fhir-profiling-binding"
}
---

## Binding

[FHIR Profiling](https://www.health-samurai.io/articles/fhir-profiling) Binding is used to define an allowed set of values for an element.

For example, to limit the value of a patient’s `maritalStatus` field, the following profile can be described:

```javascript
resourceType: StructureDefinition
url: http://example.org/fhir/StructureDefinition/patient-profile
name: patient-profile
derivation: constraint
type: Patient
status: active
kind: resource
abstract: false
differential:
  element:
	- id: Patient.maritalStatus
  	  path: Patient.maritalStatus
  	  binding:
           strength: required
           valueSet: http://hl7.org/fhir/ValueSet/marital-status

```
