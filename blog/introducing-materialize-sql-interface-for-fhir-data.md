---
{
  "url": "https://www.health-samurai.io/articles/introducing-materialize-sql-interface-for-fhir-data",
  "title": "🔥 Introducing $materialize: SQL interface for FHIR data",
  "description": "The new $materialize operation in Aidbox creates SQL tables or views from FHIR ViewDefinition resources, making nested FHIR data easier to query. It helps turn complex JSON structures into familiar tabular formats for use with standard SQL tools.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/68ca9099eaf5979f7591bf7d_Group%204.png",
  "author": "",
  "slug": "introducing-materialize-sql-interface-for-fhir-data"
}
---

FHIR data structures are complex and nested, which makes them challenging to work with using standard SQL tools and analytics platforms.

To address this, Aidbox introduces a new SQL on FHIR operation `$materialize`. It creates a SQL representation of a `ViewDefinition` resource, turning complex FHIR structures into familiar table formats that work seamlessly with tools like DBeaver, Metabase, and other SQL-based analytics platforms.

As of September 2025, this is not yet in the [SQL on FHIR spec](https://build.fhir.org/ig/FHIR/sql-on-fhir-v2/), but we hope to see it standardized in the future. 



## What `$materialize` does

At its core, `$materialize` bridges two worlds: the flexibility of FHIR and the familiarity of SQL. It:
- Creates a SQL table or view from a `ViewDefinition` resource.
- Transforms nested FHIR data into flat, queryable structures that SQL tools can understand.
- Provides a familiar interface for analysts and developers working with FHIR data.



## Why this matters

FHIR resources have complex, nested JSON structures that are difficult to query directly with SQL.

Traditionally, this required:
- Writing complex JSON path queries
- Understanding FHIR resource structures in detail
- Custom code to flatten and transform data

`$materialize` solves this by letting you define the data transformation once as a `ViewDefinition`, then creating a simple SQL interface that any analyst can use with familiar tools.

Benefits at a glance:
- **Simple SQL queries** instead of complex JSON operations****
- **Works with any SQL tool** (DBeaver, Metabase, Tableau, etc.)****
- **Reusable definitions** — define once, query anywhere****
- **Standard FHIR approach** using `ViewDefinition` resources****
- **Performance benefits** — avoid complex JSON queries on every request



## Materialization types

$materialize supports three types of materialization, giving you flexibility depending on your use case:

- `view` (default) — creates a database view that transforms data on the fly

  - **Always up-to-date** with the latest FHIR data

  - **No extra storage** required

  - **Ideal for most use cases** needing a SQL interface

- `table` — creates a persistent table with a snapshot of the data

  - **Fastest reads** for large datasets and complex queries

  - **Requires manual refresh** to update data

  - **Uses storage** but eliminates query-time processing

- `materialized-view` — creates a materialized view that can be refreshed

  - **Balanced approach** between performance and freshness

  - **Can be refreshed** on demand or scheduled

  - **Supports indexes** for optimized query performance



## How it works
- Create a `ViewDefinition` resource that maps FHIR data to simple columns.
- POST to /`fhir/ViewDefinition/$materialize`.
- Server creates a SQL view/table with the flattened data.
- The resulting representation is available in the database.
- Alternatively, you can query it with any SQL tool or Aidbox&#x27;s `/$sql` endpoint.



## Example request

Here’s what it looks like in practice.

```javascript
POST /fhir/ViewDefinition/$materialize
Content-Type: application/json

{
  "resourceType": "Parameters",
  "parameter": [{
    "name": "type",
    "valueCode": "view"
  }, {
    "name": "viewResource",
    "resource": {
      "name": "patient_view",
      "status": "draft",
      "resource": "Patient",
      "description": "Patient flat view",
      "id": "a099e84c-b3c2-4b6e-8115-a580d25f6495",
      "resourceType": "ViewDefinition",
      "select": [{
        "column": [{
          "name": "id",
          "path": "id",
          "type": "id"
        }, {
          "name": "birth_date",
          "path": "birthDate",
          "type": "date"
        }, {
          "name": "family_name",
          "path": "name.family",
          "type": "string"
        }]
      }]
    }
  }]
}
```



The response contains information about the created view:

```javascript
{
  "resourceType": "Parameters",
  "parameter": [{
    "name": "viewName",
    "valueString": "sof.patient_view"
  }, {
    "name": "viewType",
    "valueString": "view"
  }, {
    "name": "viewSchema",
    "valueString": "sof"
  }]
}

```



Now you can query the flattened data with simple SQL:

```javascript
SELECT * FROM sof.patient_view WHERE birth_date > &#x27;1990-01-01&#x27;;
```

  Example: Patient IDs and demographics

  
    
      
        
          id
          birth_date
          family_name
        
      
      
        
          d3c79580-592d-491b-acdf-db335896a886
          1991-02-21
          Smith
        
        
          4a37e330-1bf9-48f6-9891-52a39e3a0579
          1990-08-02
          Johnson
        
        
          4ae699f4-8efa-4879-84ef-e5301397f3ae
          1998-11-11
          Williams
