---
{
  "url": "https://www.health-samurai.io/articles/fhir-profiling-slicing",
  "title": "🔥 FHIR Profiling: Slicing",
  "description": "The slicing mechanism enables the specification of requirements for array elements.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/68063592568b7857133c348e_image.png",
  "date": "2025-04-11",
  "author": "Ivan Bagrov",
  "slug": "fhir-profiling-slicing"
}
---

## Slicing

The slicing mechanism enables the specification of requirements for array elements. For instance, slices can be used to define requirements such as:
- A specific extension must be included on the resource.
- If a patient has a home address, it must include state information.
- A transactional bundle must contain a [resource](https://www.health-samurai.io/articles/extending-fhir-resources) that conforms to a specific profile.

An example of slicing that requires the patient’s home address to include state information:

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
	- id: Patient.address
  	  path: Patient.address
  	  slicing:
    	    discriminator:
      	      - type: pattern
               path: use
    	    rules: open
	- id: Patient.address:home
  	  path: Patient.address
  	  sliceName: home
  	  min: 1
  	  max: "1"
  	  type:
    	    - code: Address
  	  patternAddress:
    	    use: home
	- id: Patient.address:home.state
  	  path: Patient.address.state
  	  min: 1
  	  type:
    	    - code: string

```
