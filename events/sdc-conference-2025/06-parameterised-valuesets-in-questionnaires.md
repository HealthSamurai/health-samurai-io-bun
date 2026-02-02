---
{
  "name": "Usage of parameterised valueSets in Questionnaires",
  "speaker": "Sean Fong",
  "role": "Software Engineer, CSIRO",
  "youtube": "https://www.youtube.com/watch?v=iHMUHQ9jfL8"
}
---

# Usage of parameterised valueSets in Questionnaires

The presentation explores the use of parameterized ValueSets in FHIR Questionnaires to enable dynamic, context-sensitive answer options. It addresses the challenge of making one question's choices depend on another's answer (e.g., filtering states by selected country), which is complex with standard FHIR mechanisms. The talk introduces a solution using dynamic ValueSet expansion with parameter filters (like `p-country`), supported by Ontoserver and a new FHIR extension for binding parameters. Live demos showcase how this approach streamlines form authoring, improves scalability, and enhances user experience in digital health assessments and EHR-integrated smart forms.
