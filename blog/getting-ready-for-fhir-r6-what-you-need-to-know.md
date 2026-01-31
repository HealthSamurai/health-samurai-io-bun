---
{
  "url": "https://www.health-samurai.io/articles/getting-ready-for-fhir-r6-what-you-need-to-know",
  "title": "🔥 Getting Ready for FHIR R6: What You Need to Know",
  "description": "FHIR R6 is on the way, and it’s definitely a major step forward. Although its final publication is not expected until late 2026, Aidbox already supports version 6.0.0-ballot3, allowing you to begin evaluating and prototyping with R6 today — either in the cloud or on a local installation.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/68121c15eec36fcc2e721a2c_image.png",
  "date": "2025-04-25",
  "author": "Mike Kulakov",
  "slug": "getting-ready-for-fhir-r6-what-you-need-to-know"
}
---

FHIR R6 is on the way, and it’s definitely a major step forward. Although its final publication is not expected until late 2026, Aidbox already supports version 6.0.0-ballot3, allowing you to begin evaluating and prototyping with R6 today — either in the cloud or on a local installation.



## **Quick recap: FHIR R4 → R6**

Each FHIR version is a significant milestone in healthcare interoperability standards, but breaking changes across versions still raise a lot of concerns and discussions:
- **FHIR R4** (2019) was the first release with **normative content **— parts of the spec marked as stable. It became the default for production use.

- **FHIR R5** (2023) introduced new resources and better support for public health and population-level data, but had limited normative advancement and introduced many breaking changes, leaving future compatibility uncertain.

- **FHIR R6** (expected in 2026) aims to move **most clinical and administrative resources to normative status**, providing a long-term stability.


> **“R6 is the release we anticipate will progress most clinical and administrative resources to &#x27;normative&#x27;… giving us a solid foundation going forward.”
 — *Lloyd McKenzie, Chief Standards Officer at Dogwood Health Consulting***



## **What’s new in FHIR R6**

### **
Resource Count and normative stability**
- **R4**: ~145 resources
- **R5**: ~160 resources
- **R6**: Expected ~160

The majority of the FHIR spec will be frozen from breaking changes — a key shift toward long-term compatibility.


### **New resources in R6**

DeviceAlert, ClinicalAssessment, InsuranceProduct, PersonalRelationship, MolecularDefinition


### **Additional resources**

FHIR R6 introduces a new concept called additional resources. These are not part of the core specification but can still function as full FHIR resources if registered and approved by HL7. This allows new resource types to be developed and adopted more quickly, without waiting for major FHIR releases. Especially important as the core release cycle slows after R6.


### **Group resource overhaul**

The Group resource has been redesigned to support public health use cases, low- and middle-income countries (LMICs), and evidence-based medicine.


### **Vital Signs rework**

Vital signs profiles have been improved to ensure greater clinical accuracy and consistency across implementations.


### **Thousands of fixes**

R6 incorporates thousands of changes and refinements, all driven by community feedback across real-world implementations.


> ***“The most important change is… moving the bulk of the standard to stability… Beyond that, there are thousands of changes across the entire specification.”
 — Grahame Grieve, FHIR Product Director at HL7®***



## **Choosing between R4, R5, and R6: What makes sense now? **

If you&#x27;re planning a new implementation or considering an upgrade, it&#x27;s important to understand the trade-offs between versions. 

**FHIR R4** is the most widely adopted release. It’s stable, production-ready, and offers the best compatibility with existing systems. It’s ideal when short-term interoperability with external parties is a priority.

**FHIR R5** introduced many modelling improvements (along with breaking changes) and has seen limited adoption. It can serve as a transitional option for teams preparing for R6 by leveraging its inter-version extensions. 

**FHIR R6**, while still in ballot, is the clear long-term direction. It introduces a highly stable foundation, with most resources marked as normative. For systems that won’t go live until 2026 or beyond, adopting R6 as the internal data model — even during the ballot stage — could reduce future migration complexity compared to starting with R4 or R5.

Widespread support for R6 in production environments isn’t expected until late 2027. Systems that require short-term interoperability may still need to rely on R4 for time being.


> **“R6 advances the vision by making FHIR a formal standard no longer subject to breaking change — a significant cost saver for implementers.”
 — *Grahame Grieve, FHIR Product Director at HL7®***



## **How to start testing R6 in Aidbox**

We’ve made it easy to test **FHIR R6 (6.0.0-ballot3)** with Aidbox. You can explore it in the cloud or locally, depending on your setup.


### **Option A – Aidbox Cloud Sandbox
**
- Go to the [Aidbox portal 
](https://aidbox.app/)
- Create New Box
 
- Select “Sandbox”

- Choose:  
**Version: Edge** 
- **FHIR Version:** 6.0.0‑ballot3


- Launch the box, load synthetic data, and start exploring R6.



### **Option B – Local Docker Setup

**
- Make sure you have both Docker & Docker Compose are installed.

- Create a working directory:

```bash
mkdir aidbox && cd aidbox
```


- Run script

```bash
curl -JO https://aidbox.app/runme/r6
```


- Start Aidbox

```bash
docker compose up
```


- Open [http://localhost:8080](http://localhost:8888), load synthetic data, and start exploring FHIR R6.
