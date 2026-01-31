---
{
  "url": "https://www.health-samurai.io/articles/sql-on-fhir-validation",
  "title": "🔥 SQL on FHIR Validation: How Aidbox Proved a New Data Standard",
  "description": "FHIR (Fast Healthcare Interoperability Resources) revolutionized medical data exchange between systems. However, its nested JSON structure makes data analytics challenging.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/68e4ecc0a90b2bafdc501388_image%20(2).png",
  "date": "2026-01-15",
  "slug": "sql-on-fhir-validation"
}
---

## The Problem and the Study

FHIR (Fast Healthcare Interoperability Resources) revolutionized medical data exchange between systems. However, its nested JSON structure makes data analytics challenging. Analysts struggle with complex semantics, multiple data types, and resource references, which leads to inconsistent results and duplicated efforts across the industry.

SQL on FHIR v2 was created to solve this problem - balancing implementation simplicity with practical utility for real analytical tasks. To validate that SQL on FHIR works in practice, an international team led by researcher [John Grimes](https://www.linkedin.com/in/johngrimes/) from CSIRO conducted a peer-reviewed study [published in npj Digital Medicine](https://www.nature.com/articles/s41746-025-01708-w) (Nature Portfolio). They replicated a real clinical study on two completely different platforms to prove the standard&#x27;s effectiveness.



## What Was Done

The research replicated a clinical study that identified racial disparities in oxygen therapy. The team used:

- MIMIC-IV data in FHIR format (approximately 580 million resources)  
- The same SQL on FHIR ViewDefinitions  
- Two different view runners: Pathling (Apache Spark-based) and Aidbox (PostgreSQL-based)  
- Identical SQL queries and an R script for statistical analysis  

The critical result: both platforms produced identical results and successfully replicated the original study&#x27;s findings. This proved that SQL on FHIR delivers true portability and consistency of analytical processes across diverse technology stacks. The code for replicating the study is open source on GitHub in the `[aehrc/sql-on-fhir-evaluation](https://github.com/aehrc/sql-on-fhir-evaluation)` repository, ensuring scientific transparency.



## Aidbox&#x27;s Role

[Aidbox by Health Samurai](https://www.health-samurai.io/fhir-server) was selected as one of two reference implementations for good reasons.

### Technical advantages

- PostgreSQL-native architecture stores FHIR data directly in JSONB format, enabling powerful SQL queries and indexing  
- ELT approach (Extract-Load-Transform in database) converts ViewDefinitions into native PostgreSQL queries instead of using slow in-memory processing  
- Flexible view options: database views, materialized tables, or direct queries based on user needs  

### Production readiness

- Used in over 100 solutions worldwide, including EHR systems, care coordination platforms, and data analytics tools  
- Supports all major FHIR versions (STU3, R4, R4B, R5, R6) with HIPAA compliance  
- Handles terabyte-scale data  

### Execution capability

- Successfully processed complex ViewDefinitions with nested structures, joins, and aggregations  
- Produced identical results to Pathling despite completely different technology stacks  

Health Samurai played a lead role in developing SQL on FHIR itself. [Nikolai Ryzhikov](https://www.linkedin.com/in/nikolai-ryzhikov-586a6913/), CTO of Health Samurai, is a co-author of the study. The company did not just implement the specification - it actively shaped the standard through contributions to architectural decisions and best practices.

Aidbox now offers [SQL on FHIR engine](https://www.health-samurai.io/docs/aidbox/modules/sql-on-fhir) capabilities including a ViewDefinition Builder for visual creation of views, AI-assisted view generation, integration with BI tools (PowerBI, Grafana), and FHIR standard operations for executing and materializing views.



### Significance

This peer-reviewed publication validates SQL on FHIR as a production-ready standard. The study proved that organizations can:

- Write ViewDefinitions once and execute them on different technology platforms  
- Use SQL on FHIR for non-trivial research and analytics tasks  
- Reduce duplication and improve consistency of analytical results  
- Choose their preferred technology stack while sharing analytical artifacts  

For organizations seeking reliable FHIR analytics solutions, [Aidbox](https://www.health-samurai.io/fhir-server) offers a platform built by the people who wrote the standard itself.



## **Additional Resources**
- [SQL on FHIR in PostgreSQL](https://www.health-samurai.io/articles/sql-on-fhir-in-postgresql)
Dive into the practical implementation of SQL on FHIR using PostgreSQL, exploring real-world use cases and performance considerations.

- [What is a ViewDefinition?](https://www.health-samurai.io/articles/what-is-a-viewdefinition)
Understand the core concept of ViewDefinition—how it enables standardized, reusable tabular views of FHIR data for analytics and interoperability.

- [SQL on FHIR: An Inside Look](https://www.health-samurai.io/articles/sql-on-fhir-an-inside-look)
Get an insider’s perspective on the development, challenges, and future of SQL on FHIR, directly from the project’s technical leadership.



Health Samurai’s [SQL on FHIR engine](https://www.health-samurai.io/docs/aidbox/modules/sql-on-fhir) is available for preview and testing. For inquiries and demonstrations, please contact Health Samurai via the contact form below.
