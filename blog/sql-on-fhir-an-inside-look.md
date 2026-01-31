---
{
  "url": "https://www.health-samurai.io/articles/sql-on-fhir-an-inside-look",
  "title": "🔥 SQL on FHIR: An inside look at benefits and opportunities",
  "description": "What is SQL on FHIR and why is it perfect for working with large amounts of FHIR data? Capability to perform complex queries, such as join, filter, sort, and aggregate data, are among the many benefits it brings to digital health developers and data engineers.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/64da20445ffe2951302bc125_Frame%203129%201.png",
  "date": "2024-05-08",
  "author": "Mike Kulakov, Svetlana Golubeva",
  "slug": "sql-on-fhir-an-inside-look"
}
---

Demo the ELT implementation for PostgreSQL using [Aidbox](https://health-samurai.io/aidbox?utm_source=web&utm_medium=artsqlinside&utm_campaign=nikolai), open-source [**ViewDefinition Builder**](https://sqlonfhir.aidbox.app/?utm_source=web&utm_medium=artsqlinside&utm_campaign=nikolai), and Grafana.



Let&#x27;s face the facts – FHIR has firmly established itself with increasing amounts of health data put into the FHIR format. But what’s the most efficient way to get insights from this data?

In this blog post, we&#x27;ll explore how to bridge the gap between FHIR and SQL using the new SQL on FHIR v2 specification, making FHIR data not only interoperable, but also queryable and analyzable.

As you read, you&#x27;ll discover:
- What is SQL on FHIR?
- How to use it in the wild?
- How will this technology evolve?


![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2aef_64d61d309da29c9182f02e47_3156679(4).png)
## **Challenge**

FHIR comes with a built-in search API, but it&#x27;s not sufficient for performing advanced queries on FHIR data. It lacks essential features such as aggregations, joins and other database tools you might need.

The main challenge is that FHIR data is nested, which is a departure from the traditional flat relational database approach. This difference makes it hard to perform standard SQL queries straight away. We could compare it to trying to fit a square peg into a round hole.

Of course, there are advanced database technologies like JSONB in PostgreSQL or Parquet in Spark SQL that can handle nested data structures. Both users and tools, however, are used to working with flat tables that are traditional for SQL.

To work around this, developers may need to create flattened views of the data or use specific database features that support nested data structures.

That’s where SQL on FHIR comes into play.


![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2ad1_64d61d498b2d5acba12771c8_3156680(3).png)
## Bridging Two Worlds to Unlock FHIR Data

SQL on FHIR spec proposes to define flattened views of FHIR data in a standard way to make it portable between systems. This means you can easily perform standard SQL queries on these flattened views. Simply put, it unlocks the data for the SQL ecosystem, much like a toolbox that works for both round and square pegs.



> The SQL on FHIR engine in Aidbox is currently in preview, but available for testing and feedback. [Learn more](https://hubs.li/Q02xxk3W0)



### **What is a flattened view?**

In the context of SQL, a flattened view is a table that presents data in a simplified, single-layer structure. Developers and data engineers can define flattened views using a subset of standardized FHIRPath expressions. This allows consumers to get the data they are more familiar with. 

>  Use our free online [ViewDefinition Builder](https://sqlonfhir.aidbox.app/) to convert FHIR data stored in JSON representation into a tabular, flat format for convenient data analysis. [Go to ViewDefinition Builder](https://sqlonfhir.aidbox.app/)



As we mentioned, FHIR nested data is organized in a hierarchical structure, where pieces of information are contained within other pieces, creating layers of related data.

Here&#x27;s how a Patient resource is structured in FHIR:
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2b0d_64d62c1d813a4f01ad3b40a9_Code%2520block(9).png)
Let&#x27;s look at how to "translate" complex FHIR data into a table-like format. For that, we need to create a flattened View Definition for a Patient resource. In our case, the view will contain patient id, birthdate, gender, race and name parameters.
- Specify the resource type you want to flatten in the "from" row.
- Use the "select" row to define columns along with their associated FHIRPath extraction expressions.

![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2b20_64d62c50fbb1b930c5fddbf2_Code%2520block(11).png)
As a result, we will create the following flat table:
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2ae3_64d6294d6970ec176e5b0ec5_Table(6)_cropped%25201.png)
Let&#x27;s take one more FHIR resource – Condition:
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2b15_64d62c3231b1661c9fc37f2f_Code%2520block(10).png)
Let’s flatten the Condition resource just the way we did with the Patient resource. The view will contain id, patient id, code, status, verification status and recorded date parameters:
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2b12_64d62c67a0b4c9b5dbc53646_Code%2520block(12).png)
As a result, we will get the following flat table:
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2af7_64d629ecc4eb4c8de38ffdcd_Table(7)_cropped%25201.png)


> Get started with the Aidbox [FHIR Server](https://www.health-samurai.io/aidbox) for data storage, integrations, healthcare analytics, and more, or [hire our team](https://www.health-samurai.io/services) to support your software development needs.



### Standardized SQL on FHIR data

Once we have flat tables, we can run complex queries that allow us to join, filter, sort, and aggregate data in various ways. You can also use subqueries, window functions, and other advanced features to extract the exact information you need.

For example, let&#x27;s use the previously flattened Condition view and find all patients with a prediabetes condition using a simple SQL query:
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2ada_64d62c7331085d23a21c562c_Code%2520block(13).png)
As a result, we will get the following flat table:
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2ae6_64d62a7d3b1eec199e545286_Table(8)_cropped%25201.png)
Now we&#x27;re going to use both Patient and Condition views to get even more insights. Let’s count how many men and women have a prediabetes condition:
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2b19_64d62c873b43b2c87c819855_Code%2520block(14).png)
Here&#x27;s what we get:
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2b07_64d60a2a3585f6bbbaef4708_Table(3).png)
Now let’s find out the condition duration:
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2af4_64d62caa0ccc37b64e35ce7d_Code%2520block(15).png)
The resulting flat table looks as follows:
![SQL Flat table with condition duration](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2afe_64d62ac63b1eec199e54a62f_Table(9)_cropped%25201.png)
Now let’s find the average prediabetes duration for men and women:
![JSON to count average prediabetes duration](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2b04_64d62cb7b29bb31b82f9c914_Code%2520block(16).png)
As a result, we find out the average condition duration for each gender:
![SQL average condition duration](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2ad5_64d60abddd99e63d40cbbbba_Table(5).png)


## **Summing Up**

SQL on FHIR is a powerful approach that amalgamates the power of SQL and FHIR, allowing you to work with complex health data stored in FHIR resources while using familiar SQL query tools and frameworks.

Here’s a short summary of the benefits:
- **Smart Decisions:** It excels at extracting meaningful insights from complex FHIR datasets.
- **Familiar Territory: **If you know SQL, you&#x27;ll get it easily.
- **Portability**: SQL on FHIR uses FHIRPath to define views that can be used across different systems. The FHIR community can define flat views and queries that can be executed in any SQL-based ecosystem.

Overall, SQL on FHIR bridges the gap between FHIR nested data and SQL, offering a streamlined way to manage and utilize health data effectively.

****Disclaimer****

It&#x27;s important to note that using SQL on FHIR doesn&#x27;t replace the need for FHIR APIs, which are essential for data exchange between healthcare systems and for implementing interoperability standards. SQL on FHIR complements these capabilities by providing a way to interact with healthcare data in the FHIR format more effectively for analytical, research, and reporting purposes. It&#x27;s like having a universal key that can open many doors, making it easier to work with FHIR data across different technologies.

To explore how SQL on FHIR can be applied in your projects, consider using the [free version of Aidbox](https://www.health-samurai.io/aidbox#run). It offers a comprehensive environment to test and experiment with these capabilities, providing all the necessary tools without any feature limitations.

## **The Near Future**

The SQL on FHIR draft will be presented in September 2023 at [HL7 FHIR Connectathon 34](https://confluence.hl7.org/display/FHIR/2023+-+09+Connectathon+34) in Phoenix, Arizona.

SQL on FHIR v2 is an open initiative and welcomes involvement from interested parties. Join the SQL on FHIR working group, participate in discussions, and contribute to the development of this solution.
- [Read the SQL on FHIR v2 spec](https://build.fhir.org/ig/FHIR/sql-on-fhir-v2/)
- [Join the discussion on GitHub ](https://github.com/FHIR/sql-on-fhir-v2/discussions)
- [Ask any questions in the Zulip chat](https://chat.fhir.org/#narrow/stream/179219-analytics-on-FHIR)
- [Watch on YouTube](https://youtube.com/playlist?list=PLEOOqZS1Ntwa7HnP3PgTLT7zPDJydsdx1)

Health Samurai is actively driving the SQL on FHIR Working Group, which is also represented by Google, CSIRO, Microsoft, Philips, NCQA, CQLab, Center Square Solutions, and Vermonster. The working group is focused on early implementations to build a standardized solution with zero lock-in.

Health Samurai&#x27;s SQL on FHIR engine is available for preview and testing. If you have any questions or specific use cases in mind, please feel free to share them. [**Book a meeting to see it in action.**](https://bit.ly/sql-on-fhir-meet)
[![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/66ab9c4d3539ed9160be2b01_64d64a525fe778911c153c6d_SQL%2520on%2520FHIR%2520banner(2).png)](https://bit.ly/sql-on-fhir-meet)

    
    
    Follow US
