---
{
  "url": "https://www.health-samurai.io/articles/aidbox-becomes-the-first-fhir-server-to-pass-all-sql-on-fhir-tests",
  "title": "🔥 Aidbox Becomes the First FHIR Server to Pass All SQL-on-FHIR Tests",
  "description": "Aidbox just became the first FHIR server to pass all SQL-on-FHIR tests — thanks to full support for the repeat element. This update lets engineers query deeply nested FHIR structures like QuestionnaireResponse.item with a single, elegant definition.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/68d278cd7d98059841c6c707_image%20(1).png",
  "date": "2025-11-06",
  "author": "Aleksandr Kislitsyn",
  "slug": "aidbox-becomes-the-first-fhir-server-to-pass-all-sql-on-fhir-tests"
}
---

We’ve recently added support for the 
  [
    repeat element
  ](https://build.fhir.org/ig/FHIR/sql-on-fhir-v2/StructureDefinition-ViewDefinition-definitions.html#diff_ViewDefinition.select.repeat) 
  from the 
  [
    SQL-on-FHIR Specification
  ](https://build.fhir.org/ig/FHIR/sql-on-fhir-v2/index.html) —making Aidbox the first FHIR server to passing all tests from the 
  [
    SQL-on-FHIR test suite
  ](https://sql-on-fhir.org/extra/impls.html).

  [
    ![SQL-on-FHIR test suite results](https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/690ccf1c475b41c4557d6a61_Group%202%20(1).png)
  ](https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/690ccf1c475b41c4557d6a61_Group%202%20(1).png)

  This milestone reflects our ongoing work to make structured clinical data easier to query, analyze, and reuse — without complex transformations or custom logic. SQL-on-FHIR bridges the gap between FHIR’s flexible data model and the simplicity of SQL, enabling healthcare teams to unlock insights directly from their FHIR data.

## What is the repeat Element and How It Works?

The select.repeat allows you to specify a list of FHIRPath expressions, each of them defines a path to traverse a FHIR resource recursively. Aidbox then automatically follows each path to any depth, collecting the results from all levels.

In simple terms, it helps flatten complex, deeply nested healthcare data into an easy-to-query table — saving hours of manual setup and data preparation.

For instance, a [
    FHIR QuestionnaireResponse
  ](https://build.fhir.org/questionnaireresponse.html) resource may contain sections, questions, and follow-up items organized hierarchically. Each item element can include other item elements of the same type — and those can include additional ones, forming a recursive structure with any level of nesting.

Consider the following example:

```javascript
{
 "resourceType": "QuestionnaireResponse",
 "status": "amended",
 "id": "qr1",
 "item": [
  {
   "linkId": "1",
   "text": "Group 1",
   "item": [
    {
     "linkId": "1.1",
     "text": "Question 1.1",
     "answer": [
      {
       "valueString": "Answer 1.1",
       "item": [
        {
         "linkId": "1.1.1",
         "text": "Follow-up to 1.1"
        }
       ]
      }
     ]
    },
    {
     "linkId": "1.2",
     "text": "Question 1.2",
     "item": [
      {
       "linkId": "1.2.1",
       "text": "Question 1.2.1"
      }
     ]
    }
   ]
  },
  {
   "linkId": "2",
   "text": "Group 2"
  }
 ]
}
```



Instead of having a separate `forEach` element for each level of nesting, you can use `repeat` to traverse the entire structure recursively, and extract all the `item` elements at once:

ViewDefinition:

```javascript
{
  "resource": "QuestionnaireResponse",
  "status": "active",
  "select": [
    {
      "column": [
        {
          "name": "id",
          "path": "id",
          "type": "id"
        }
      ]
    },
    {
      "repeat": [
        "item"
      ],
      "column": [
        {
          "name": "linkId",
          "path": "linkId",
          "type": "string"
        },
        {
          "name": "text",
          "path": "text",
          "type": "string"
        }
      ]
    }
  ]
}
```

Result of running this ViewDefinition will be a table with the following columns:

  
    
      id
      linkId
      text
    
  
  
    qr11Group 1
    qr11.1Question 1.1
    qr11.2Question 1.2
    qr11.2.1Question 1.2.1
    qr12Group 2
  



## **Try it yourself**

You can try it yourself by running a new Aidbox instance by following the instructions in the [Run Aidbox locally](https://www.health-samurai.io/docs/aidbox/getting-started/run-aidbox-locally) guide.
