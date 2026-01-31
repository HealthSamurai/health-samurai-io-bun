---
{
  "url": "https://www.health-samurai.io/articles/sql-on-fhir-in-postgresql",
  "title": "🔥 SQL on FHIR in PostgreSQL",
  "description": "SQL on FHIR in PostgreSQL. Two types of SQL on FHIR View Runners - ETL (in-memory) &amp; ELT (in-database) and demo the ELT implementation for PostgreSQL.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/672e0f830feaa72b8006d983_Frame%20427319235.png",
  "author": "",
  "slug": "sql-on-fhir-in-postgresql"
}
---

# SQL on FHIR in PostgreSQL

Two types of SQL on FHIR View Runners - ETL (in-memory) & ELT (in-database) and demo the ELT implementation for PostgreSQL using:
[**Aidbox**](https://www.health-samurai.io/aidbox?utm_source=Article&utm_medium=persNikolai&utm_campaign=conf)
Open-source [**ViewDefinition Builder**](https://sqlonfhir.aidbox.app/?utm_source=Article&utm_medium=persNikolaiview&utm_campaign=conf)
Grafana

[The slides](https://docs.google.com/presentation/d/1XHjzNeooGogpo4quoRaf3KuCKdu7Q2eLT936lDzuA8o/edit?usp=sharing)
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/672e0db30c6bc8161ad3b8e5_672e0acb5888a7b3c63fac26_2.png)***FHIR Database & FHIR Server for FHIR-first apps***![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/672e0db30c6bc8161ad3b8ef_672e0af2f03c83588416352d_3.png)***SQL on FHIR Runners***![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/672e0db30c6bc8161ad3b8e8_672e0b05f83ff47bc95a1374_4.png)***ETL: in memory runner***![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/672e0db20c6bc8161ad3b8ad_672e0c2ed13e4f9ef33d042f_5.png)***ETL: in memory runner***![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/672e0db30c6bc8161ad3b8ce_672e0c3ca600d0a85429bf04_6.png)***ELT: in-database runners***![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/672e0db20c6bc8161ad3b8a7_672e0c57600484d651744272_8.png)***Compare ETL and ELT***![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/672e0db20c6bc8161ad3b8b0_672e0c7a7c47154b3a55102f_9.png)***FHIR Server with SQL on FHIR***![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/672e0db20c6bc8161ad3b8b3_672e0c8bbfaf846d92d465f2_10.png)***How to store & query FHIR in PostgreSQL***![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/672e0db20c6bc8161ad3b8b6_672e0c9cbbe142281cda286b_11.png)***Translate ViewDefinition to SQL***![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/672e0db30c6bc8161ad3b8cb_672e0cacdd5eea47bfcabdc2_12.png)***How does translation works***![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/672e0db30c6bc8161ad3b8d3_672e0cc5ec799e3a3c248fa4_13.png)***What we can do with view def (query)***
**Run aidbox:**

> mkdir aidbox && cd aidbox 
curl -JO https://aidbox.app/runme && docker compose up

in aidbox sandbox - [https://aidbox.app](https://aidbox.app/?utm_source=article&utm_compaign=conf&utm_medium=persNiksql)

in viewbuilder - [https://sqlonfhir.aidbox.app](https://sqlonfhir.aidbox.app/?utm_source=article&utm_compaign=conf&utm_medium=persNiksql)

Related article - [SQL on FHIR: What is a ViewDefinition, and how does it work?](https://www.health-samurai.io/articles/what-is-a-viewdefinition?utm_source=article&utm_medium=persNiksql&utm_campaign=conf)

Author:
[Nikolai Ryzhikov](https://www.linkedin.com/in/nikolai-ryzhikov-586a6913/),
CTO at Health Samurai
