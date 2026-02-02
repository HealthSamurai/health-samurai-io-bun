---
{
  "url": "https://www.health-samurai.io/articles/automate-terminology-translation-with-aidbox-tx-engine",
  "title": "Automate Terminology Translation with Aidbox TX Engine",
  "description": "Healthcare systems constantly exchange data using different code sets, creating thousands of daily terminology translations. Aidbox TX Engine automates this process with FHIR ConceptMap and $translate, eliminating spreadsheets, custom scripts, and integration errors.",
  "image": "",
  "date": "2025-12-08",
  "author": "Guillermo Rodríguez",
  "slug": "automate-terminology-translation-with-aidbox-tx-engine",
  "reading-time": "7 minutes",
  "tags": [],
  "category": "Terminologies"
}
---

## The Terminology Mismatch

Organizations face a persistent integration challenge: terminology mismatch across systems. Legacy HL7v2 interfaces and data, modern FHIR implementations, internal procedure catalogs, and third-party requirements create a complex web of code translation needs. A lab system sends results using internal codes while the EHR requires LOINC. Radiology uses proprietary procedure codes while billing demands CPT. Each mismatch requires translation, and at scale, these translations multiply into thousands of daily conversions.

Manual approaches break down quickly. Maintaining spreadsheets of code mappings becomes error-prone as multiple teams update different versions. Custom translation logic embedded in integration engines creates technical challenges and makes updates costly. Without systematic mapping management, organizations face integration failures, data quality issues, and escalating maintenance costs.

The FHIR `ConceptMap` resource and `$translate` operation provide a structured, interoperable way to manage terminology mappings. `ConceptMap` defines the relationships between concepts from different code systems, creating reusable, version-controlled mapping rules. The `$translate` operation executes these mappings programmatically, enabling automated, consistent translations across your ecosystem. This article explores how to use `ConceptMap` and `$translate` for automated code translation, and its behavior when operating in a hybrid environment.

## Understanding the Basics

### What is a `ConceptMap`?

[ConceptMap](https://build.fhir.org/conceptmap.html) is a FHIR resource that defines how codes in one terminology system map to codes in another. Think of it as a translation dictionary for medical codes — one that is machine-readable, versioned, and shareable.

For example, your hospital might have internal lab codes that need to map to LOINC for external sharing:

- Hospital Code: GLU-FAST-001 → LOINC: 1558-6 (Fasting glucose)
- Hospital Code: HBA1C-TOTAL → LOINC: 4548-4 (Hemoglobin A1c)

Each mapping includes a relationship type — like "equivalent" (same meaning) or "source-is-broader-than-target" (target is more specific), so consuming systems understand how closely the codes align. With these definitions in place, a `ConceptMap` becomes a single source of truth that is reusable, version-controlled, and can be shared across your organization or even published for others to use.

### What is `$translate`?

The [$translate](https://build.fhir.org/conceptmap-operation-translate.html) operation is a FHIR API that uses `ConceptMaps` to automatically translate codes from one system to another. Instead of writing custom lookup logic, you make a simple HTTP request:

Input: "Translate code GLU-FAST-001 from our hospital system to LOINC"

Output: "Code 1558-6 in LOINC, with relationship: equivalent"

Behind the scenes, the operation handles all the complexity — finding relevant `ConceptMaps`, looking up the code, filtering by target system, and returning structured results. As a result, you get consistent, reliable translations without maintaining custom code accross multiple systems.

### Simple Request/Response Example

Here's what a basic translation request looks like:

```javascript
POST /fhir/ConceptMap/$translate
Content-Type: application/json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "sourceCode",
      "valueCode": "female"
    },
    {
      "name": "sourceSystem",
      "valueUri": "http://hl7.org/fhir/administrative-gender"
    },
    {
      "name": "targetSystem",
      "valueUri": "http://terminology.hl7.org/CodeSystem/v2-0001"
    }
  ]
}
```

The response tells you whether a translation was found (result: true) and provides the target code:

```javascript
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "result",
      "valueBoolean": true
    },
    {
      "name": "match",
      "part": [
        {
          "name": "relationship",
          "valueCode": "equal"
        },
        {
          "name": "concept",
          "valueCoding": {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0001",
            "code": "F",
            "display": "F"
          }
        },
        {
          "name": "source",
          "valueUri": "http://hl7.org/fhir/ConceptMap/cm-administrative-gender-v2"
        }
      ]
    }
  ]
}
```

## Multiple Matches

As soon as you start using `ConceptMap` in real-world scenarios, you’ll notice that some codes appear across multiple mapping contexts. This is especially common with generic status codes or administrative concepts that are reused by different FHIR resources and implementation guides. In such cases, `$translate` behaves predictably: instead of choosing one “best” mapping, it returns all relevant matches so that clients can decide how to handle them.

The most basic usage for `$translate` is when trying to find mapping matches for a coding. Users are allowed to specify only the system and code, and translate is able to locate the `ConceptMaps` that apply and the matching entries. That's the case of the previous example. There may be cases where the concept being translated matches mappings defined in different code systems. Assuming we have multiple `ConceptMaps` in our Aidbox instance including mapping for `http://hl7.org/fhir/event-status|completed`, we get all the matches coming from the different `ConceptMaps`.

**Request**

```javascript
POST /fhir/ConceptMap/$translate
Content-Type: application/json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "sourceCode",
      "valueCode": "completed"
    },
    {
      "name": "sourceSystem",
      "valueUri": "http://hl7.org/fhir/event-status"
    }
  ]
}
```

```javascript
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "result",
      "valueBoolean": true
    },
    {
      "name": "match",
      "part": [
        {
          "name": "relationship",
          "valueCode": "equivalent"
        },
        {
          "name": "concept",
          "valueCoding": {
            "system": "http://hl7.org/fhir/resource-status",
            "code": "complete",
            "display": "complete"
          }
        },
        {
          "name": "source",
          "valueUri": "http://hl7.org/fhir/ConceptMap/sc-clinicalimpression-status"
        }
      ]
    },
    {
      "name": "match",
      "part": [
        {
          "name": "relationship",
          "valueCode": "equivalent"
        },
        {
          "name": "concept",
          "valueCoding": {
            "system": "http://hl7.org/fhir/resource-status",
            "code": "complete",
            "display": "complete"
          }
        },
        {
          "name": "source",
          "valueUri": "http://hl7.org/fhir/ConceptMap/sc-event-status"
        }
      ]
    },
    {
      "name": "match",
      "part": [
        {
          "name": "relationship",
          "valueCode": "equivalent"
        },
        {
          "name": "concept",
          "valueCoding": {
            "system": "http://hl7.org/fhir/resource-status",
            "code": "complete",
            "display": "complete"
          }
        },
        {
          "name": "source",
          "valueUri": "http://hl7.org/fhir/ConceptMap/sc-immunization-status"
        }
      ]
    }
  ]
}
```

## Well-known ConceptMap

ConceptMap defines groups of mappings. Each group has a `source` and `target` system which represent, respectively, the source system where the code to be mapped is defined and the target system where the concept will be mapped to. In some cases, you already know which `ConceptMap` you want to use. Perhaps you're implementing a specific profile, or following a particular IG's mapping rules. Instead of relying on system-wide search, you can instruct `$translate` to use a single, known `ConceptMap`.

This narrows the scope of the translation and ensures predictable, context-specific results—especially valuable when multiple `ConceptMaps` define similar mappings.

**Request**

```javascript
POST /fhir/ConceptMap/$translate
Content-Type: application/json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "url",
      "valueUri": "http://hl7.org/fhir/ConceptMap/sc-composition-status"
    },
    {
      "name": "sourceCode",
      "valueCode": "preliminary"
    },
    {
      "name": "sourceSystem",
      "valueUri": "http://hl7.org/fhir/composition-status"
    }
  ]
}
```

The `url` parameter specifies the `ConceptMap` to be used while translating. The server is instructed to use that specific mapping container while translating.

**Response**

```javascript
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "result",
      "valueBoolean": true
    },
    {
      "name": "match",
      "part": [
        {
          "name": "relationship",
          "valueCode": "equivalent"
        },
        {
          "name": "concept",
          "valueCoding": {
            "system": "http://hl7.org/fhir/resource-status",
            "code": "draft",
            "display": "draft"
          }
        },
        {
          "name": "source",
          "valueUri": "http://hl7.org/fhir/ConceptMap/sc-composition-status"
        }
      ]
    }
  ]
}
```

## The Hybrid Advantage

Creating `ConceptMaps` for your organization's specific needs, like internal codes to LOINC, makes perfect sense. You know your codes, you control the mappings, and you can update them as needed. But creating every possible `ConceptMap` is unrealistic. Similar to external/standard code systems, there are `ConceptMaps` that define translation data for common scenarios. Let's see some examples:

- FHIR administrative codes → HL7 V2
- All US Core ConceptMaps
- ICD-10 → SNOMED CT
- Regional and specialty-specific maps

This is where Aidbox's hybrid approach shines. Aidbox checks your local `ConceptMaps` first. If a translation is found, it returns immediately, fast and local. If no translation is found and no local `ConceptMap` exists for that source system, Aidbox automatically delegates translation to the configured [external terminology server](https://www.health-samurai.io/docs/aidbox/terminology-module/aidbox-terminology-module/hybrid#external-terminology-servers) (like tx.health-samurai.io).

This means you get:

- Your custom mappings (maintained by you, used first)
- Standard mappings (maintained externally, accessed automatically)
- No duplication (you don't recreate standard maps)

**Request**

```javascript
POST /fhir/ConceptMap/$translate
Content-Type: application/json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "sourceCode",
      "valueCode": "D"
    },
    {
      "name": "sourceSystem",
      "valueUri": "http://hl7.org/fhir/us/vr-common-library/CodeSystem/codesystem-ije-vr"
    },
    {
      "name": "targetSystem",
      "valueUri": "http://snomed.info/sct"
    }
  ]
}
```

**Response**

```javascript
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "result",
      "valueBoolean": true
    },
    {
      "name": "match",
      "part": [
        {
          "name": "equivalence",
          "valueCode": "equivalent"
        },
        {
          "name": "concept",
          "valueCoding": {
            "system": "http://snomed.info/sct",
            "code": "434651000124107"
          }
        },
        {
          "name": "source",
          "valueString": "http://hl7.org/fhir/us/vrdr/ConceptMap/CertifierTypesCM"
        }
      ]
    },
    {
      "name": "match",
      "part": [
        {
          "name": "equivalence",
          "valueCode": "equivalent"
        },
        {
          "name": "concept",
          "valueCoding": {
            "system": "http://snomed.info/sct",
            "code": "449951000124101"
          }
        },
        {
          "name": "source",
          "valueString": "http://hl7.org/fhir/us/vrdr/ConceptMap/MethodOfDispositionCM"
        }
      ]
    }
  ]
}
```

## ConceptMap translation in Aidbox

Aidbox introduced `ConceptMap` in [release 2508](https://www.health-samurai.io/docs/aidbox/overview/release-notes#august-2025-2508), with support for `$translate` operation, see the [capabilities registry](https://www.health-samurai.io/docs/aidbox/terminology-module/aidbox-terminology-module/capabilities). If you want to try this locally, start by running Aidbox following the [Run Aidbox locally guide](https://www.health-samurai.io/docs/aidbox/getting-started/run-aidbox-locally).

**Prepare local mapping resource**

Open Aidbox's [REST console](http://localhost:8080/ui/console#/rest) and send:

```javascript
PUT /fhir/ConceptMap/cm1
Content-Type: application/json

{
  "resourceType": "ConceptMap",
  "id": "cm1",
  "url": "http://hl7.org/fhir/ConceptMap/sc-clinicalimpression-status-TEST",
  "version": "0.1.0",
  "status": "active",
  "group": [
    {
      "source": "http://hl7.org/fhir/event-status|5.0.0",
      "target": "http://hl7.org/fhir/resource-status",
      "element": [
        {
          "code": "entered-in-error",
          "target": [
            {
              "code": "error",
              "equivalence": "equivalent"
            }
          ]
        },
        {
          "code": "preparation",
          "target": [
            {
              "code": "planned",
              "equivalence": "equivalent"
            }
          ]
        },
        {
          "code": "in-progress",
          "target": [
            {
              "code": "active",
              "equivalence": "equivalent"
            }
          ]
        },
        {
          "code": "on-hold",
          "target": [
            {
              "code": "suspended",
              "equivalence": "equivalent"
            }
          ]
        },
        {
          "code": "stopped",
          "target": [
            {
              "code": "failed",
              "equivalence": "equivalent"
            }
          ]
        },
        {
          "code": "completed",
          "target": [
            {
              "code": "complete",
              "equivalence": "equivalent"
            }
          ]
        },
        {
          "code": "not-done",
          "target": [
            {
              "code": "abandoned",
              "equivalence": "equivalent"
            }
          ]
        },
        {
          "code": "unknown",
          "target": [
            {
              "code": "unknown",
              "equivalence": "equivalent"
            }
          ]
        }
      ]
    }
  ]
}
```

**Run ConceptMap $translate operation**

```javascript
POST /fhir/ConceptMap/$translate
Content-Type: application/json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "url", 
      "valueUri": "http://hl7.org/fhir/ConceptMap/sc-clinicalimpression-status-TEST"
    },
    {
      "name": "sourceCode",
      "valueCode": "completed"
    },
    {
      "name": "sourceSystem",
      "valueUri": "http://hl7.org/fhir/event-status"
    },
    {
      "name": "sourceVersion",
      "valueString": "5.0.0"
    }
  ]
}
```

**Response**

```javascript
{
 "resourceType": "Parameters",
 "parameter": [
  {
   "name": "result",
   "valueBoolean": true
  },
  {
   "name": "match",
   "part": [
    {
     "name": "relationship",
     "valueCode": "equivalent"
    },
    {
     "name": "concept",
     "valueCoding": {
      "system": "http://hl7.org/fhir/resource-status",
      "code": "complete",
      "display": "complete"
     }
    },
    {
     "name": "source",
     "valueUri": "http://hl7.org/fhir/ConceptMap/sc-clinicalimpression-status-TEST"
    }
   ]
  }
 ]
}
```

Start your Aidbox instance and automate terminology translation the FHIR way. Stop writing custom lookup and translation code.

See also:

- [Introducing Hybrid Terminology Engine](https://www.health-samurai.io/articles/introducing-hybrid-terminology-engine)
- [Aidbox TX Engine - ConceptMap](https://www.health-samurai.io/docs/aidbox/terminology-module/fhir-terminology/conceptmap)
- [Aidbox TX Engine - Hybrid Mode](https://www.health-samurai.io/docs/aidbox/terminology-module/aidbox-terminology-module/hybrid)
