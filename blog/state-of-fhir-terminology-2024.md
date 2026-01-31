---
{
  "url": "https://www.health-samurai.io/articles/state-of-fhir-terminology-2024",
  "title": "🔥 Navigating the FHIR terminology data: Insights and challenges",
  "description": "We focused on the FHIR IG Registry as it offers a comprehensive dataset. By doing this, we aimed to identify the most pressing issues, challenges, and use cases we were likely to encounter.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/5b915ef1885443777259a836_lightbulb.jpg",
  "author": "",
  "slug": "state-of-fhir-terminology-2024"
}
---

### **Introduction**

****When we set out to build a terminology solution for Aidbox and started work on the Babylon project, we decided to take a closer look at the state of the terminology data within the FHIR community. We focused on the FHIR IG Registry as it offers a comprehensive dataset. By doing this, we aimed to identify the most pressing issues, challenges, and use cases we were likely to encounter. This article presents our findings, including general insights, data quality issues, specific patterns observed in the dataset, and challenges faced during implementation.


As our data source, we used the [FHIR package server](https://packages2.fhir.org/packages/catalog) [[1](#Appendix)]. We downloaded all available packages, extracted the terminology-related resources [[2](#Appendix)], and loaded them into a Postgres database. For visualization purposes, we created Grafana dashboards, which are included in the appendix. This analysis was conducted on June 14, 2024.

### **Insights **

**Some Numbers**

We downloaded **2,357** different packages from the registry, representing **468** unique package names and their versions. As shown in Fig 1 (note that we&#x27;re using a logarithmic scale), the package with the largest number of terminology resources was, by far, *us.nlm.vsac*, mostly comprised of ValueSets; followed by *hl7.terminology.** and *hl7.fhir.**.
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66b648339d0baf932b7b04ff_668423a32cfdc747bb7b0b9d_Top%252020%2520Packages%2520by%2520resource%2520(log%2520scale).png)*			Fig 1. Top 20 Packages by resource (log scale)				*
After loading the resources, we found **75.8K** CodeSystem resources, comprising **6.36K** unique canonical urls. From these, we were able to extract **15** million individual concepts, of which** 3.89** million are unique [[3](#Appendix)]. Additionally, we loaded **454K** ValueSet resources, with **33.7K** being unique.


Most resources don&#x27;t have a publisher name, among the ones who do, HL7 is the top publisher, although the naming is not always consistent, see Fig 2.
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66b648329d0baf932b7b04dc_6684244f0738614d677dfa69_Top%252020%2520publishers.png)*Fig 2. Top 20 publishers*
When analyzing the publishing of new resources over the years [[4](#Appendix)](Fig 3), we notice that there is a spike in new resources in 2014, which coincides with DSTU 1.
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66b648339d0baf932b7b04ee_668424ad5f04ceb49df716e5_Resources%2520over%2520the%2520years.png)*Fig 3. Resources over the years*
Looking at the top publishers over time (Fig 4)
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66b648339d0baf932b7b0540_668424eabc12ae53eb5f62d8_Top%2520Publishers%2527%2520share%2520over%2520the%2520years.png)*Fig 4. Top Publishers&#x27; share over the years*
#### **Data Quality Issues**

Our analysis of the FHIR terminology data revealed several data quality issues that could impact the usability and reliability of these resources. These issues make it harder for implementers to reliably support operations such as validation, lookup, expansion, etc. Here, we outline some of the primary issues we encountered.

#### **Invalid Resources**

One challenge we faced while loading the resources was that sometimes the resources wouldn&#x27;t conform to the base FHIR spec, e.g., missing required fields, invalid data types, and constraints violations. Some of these issues are corrected in subsequent versions of the packages, but others are still invalid in the latest versions.
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66b648339d0baf932b7b04eb_6696a7e48150a22ec490efed_table.jpeg)
In some cases, these problems make it almost impossible to fully load the data, since there doesn&#x27;t seem to be a strategy or workaround to deal with these resources. In some [extreme cases](http://app://obsidian.md/(https://simplifier.net/packages/ca.on.ppr.r4/1.2.0/files/2360389/~json)) we only get a list of concepts, nothing more; in others, such as the null codes, there&#x27;s just no fallback value [[5](#Appendix)].


We also noticed another category of issues. While these wouldn&#x27;t make a resource invalid or non-conformant to the constraints, they would still pose a problem from an implementation standpoint. Specifically, we found code systems with or malformed URLs. Fortunately, on the latest version of the packages, only one of these remain [[6](#Appendix)].

#### **Duplicates and Conflicts**

Sometimes, the exact same resource is published across different versions of the same package. In other cases, the resource is transferred to a different package, but the version remains the same. These scenarios shouldn&#x27;t be problematic as long as the resource stays the same, but this is not always the case. Especially when the changes are conflicting [[7](#Appendix)].


The most impactful types of conflict appear in the concepts, since they represent the actual content of the code system. Oftentimes we load two concepts coming from the same logical code system (same `url` and `version` ), they have a matching `code` but either their `display, definition` or `property` don&#x27;t match.


One possible strategy to follow is to always trust the more recent changes, but this is not always successful, as an example, we can look at `eng.fhir.profile.dev` , from version` 0.0.4-beta` to `0.0.7-beta` one of the displays was changed as follows:

    
    
    

    
        
- Oscuramento del oscuramento

        
+ Oscuramento del documento

    

Seemingly, a regression of a typo fix.


It&#x27;s common to find conflicting code systems where the concepts with differing properties are not actually content conflicts but rather presentation conflicts (i.e., they retain the semantics but the syntax changes). Some of the most common cases are as follows:


- datatype change, e.g., `valueString` to `valueCode` .
- locale/configuration change, e.g., `valueDateTime: "2009-08-20"` to `valueDateTime:
     "2009-08-20T00:00:00-04:00"`
Sometimes, a CodeSystem can have two concepts with the same code, thus violating [csd-1](https://www.hl7.org/fhir/codesystem.html#invs) , this would be a simple data error if it were just a duplication mistake, but these codes could be representing different concepts semantically, making the problem significantly worse.

#### **Semantic conflicts: ISO-3166 (Country Codes)**

We can have a CodeSystem with some concepts that share a code but essentially represent different concepts, this is especially challenging for implementation since semantic uniqueness of the concepts is one of the core axioms of FHIR terminology.

Let&#x27;s look at [ISO-3166](https://www.iso.org/iso-3166-country-codes.html) (urn:iso:std:iso:3166|57), the CodeSystem loaded from [`fhir.tx.support.r4`](https://simplifier.net/packages/fhir.tx.support.r4/0.18.0/~files) until version `0.18.0` , contained a list of concepts from ISO-3166 mixing Alpha-2, Alpha-3 and Numeric codes as the concepts&#x27; `code` and adding a property `canonical` with the Alpha-2 code.

Now, for some countries that have changed name (e.g., Burma to Myanmar, Zaire to DRC, Yugoslavia to Serbia and Montenegro, etc), the numerical code is maintained, only the Alpha codes change. So they represent two different concepts in ISO-3166 but have the same code in the FHIR resource.

#### **Some more numbers**

In this section, we explore the quantitative aspects of the FHIR terminology dataset, examining totals, distributions, and patterns.

#### **Code Systems**

In Fig 5 we can see that, from the code systems that explicitly list their concepts, most of the largest ones are compendiums of geographical data, the largest one being Quebec&#x27;s postal codes with over **200k** concepts, followed by a few versions of ICD10.
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66b648329d0baf932b7b04df_668429577097741aa49bfdbd_Top%252020%2520largest%2520code%2520systems.png)*Fig 5. Top 20 largest code systems*
In terms of popularity, the most referenced code system is, unsurprisingly, SNOMED. Following SNOMED, other frequently referenced systems include LOINC, ICD10, ICD9, RxNorm, DICOM, and CPT (See Fig 6).
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66b648349d0baf932b7b05c3_6684298c7097741aa49c1881_Most%2520referenced%2520code%2520system.png)*Fig 6. Most referenced code system*
From Fig 7 we can see that the majority of code systems explicitly include all their concepts in the resource [[8](#Appendix)]. Only 41 are supplement, even though this seems like a very useful way of augmenting existing concepts, it&#x27;s not very widely used, most of them are translations [[9](#Appendix)].
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66b648339d0baf932b7b0520_668429b8a4d72dda923ec35e_Code%2520System%2520content%2520breakdown.png)*Fig 7. Code System content breakdown*
#### **Value Sets**

When analyzing value sets, their most interesting aspect is, arguably, their `compose` rules. We classified the value sets in 5 main categories [[10](#Appendix)]:
- **Extensional**: Explicit enumeration of concepts
- **Intensional (copy)**: Copy from existing code system or value set
- **Intensional (filter)**: Algorithmically defined based on selection rules on an existing code system
- **Mixed**: mixture of previous techniques
- **No Compose**: `compose` field is not present

Interestingly, the majority (Over **60**%) are classified as extensional and only **10**% use the ValueSet filtering capabilities, see Fig 8.
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66b648339d0baf932b7b0505_66842aa733f4f9f0d031e6cd_Value%2520Set%2520Classification%2520by%2520Compose.png)*Fig 8. Value Set Classification by Compose*
While the majority of value sets are not expanded (see Fig 9), almost **40**% appear pre- expanded in their packages.
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66b648339d0baf932b7b0509_66842ac9f903b990ae41c50c_ValueSet%2520expansion%2520breakdown.png)*Fig 9. ValueSet expansion breakdown*
#### **Filter Analysis**

FHIR [provides](https://build.fhir.org/valueset.html#compositions) a powerful and extensible mechanism to define selection criteria to define value sets algorithmically using existing code systems. The main tool to express these rules are [filters](https://build.fhir.org/valueset.html#filters).

  

    **Re: `valueset-rules-text` and `valueset-expression`**

    Although value sets can be defined in [two more ways](https://build.fhir.org/valueset.html#compose), only one of them is really used apart from example resources.

    
      - **`valueset-expression`**

        
> [...] An expression that provides an alternative definition of the content of the value set [[11](#Appendix)]

      

      - **`valueset-rules-text`**

        
> [...] instructions that could only be followed by a human. [[12](#Appendix)]

      

    

    This is maybe good news for implementers, since the other two options seem challenging for interoperability.
