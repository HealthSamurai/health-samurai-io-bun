---
{
  "url": "https://www.health-samurai.io/articles/aidbox-2025-building-a-future-proof-fhir-platform",
  "title": "Aidbox 2025: Building a Future‑Proof FHIR Platform",
  "description": "In 2025, Aidbox focused on performance, FHIR conformance, and developer experience—removing bottlenecks and aligning deeply with the FHIR ecosystem. This post highlights the key architectural changes that make Aidbox faster, more transparent, and production-ready.",
  "image": "",
  "date": "2026-01-21",
  "author": "Aleksandr Kislitsyn",
  "slug": "aidbox-2025-building-a-future-proof-fhir-platform",
  "reading-time": "7 minutes",
  "tags": [],
  "category": "FHIR"
}
---

In 2025, Aidbox development was guided by three clear pillars: performance, FHIR conformance, and developer experience. Rather than chasing isolated features, the focus was on removing architectural bottlenecks, aligning more deeply with the FHIR ecosystem, and making core platform capabilities more transparent and inspectable.

This overview covers the most important architectural and platform changes in Aidbox in 2025.

## Performance

#### Database \& Infrastructure

- Read-only replica support: Aidbox can now delegate read-only workloads to a [PostgreSQL read-only replica](https://www.health-samurai.io/docs/aidbox/database/overview#postgresql-with-read-only-replica), enabling better resource utilization and horizontal scaling for analytics and reporting.
- CRUD optimization: Core CRUD operations now run 30% faster thanks to internal optimizations rolled out in December.
- Deprecated AidboxDB: We completed our transition to the official PostgreSQL distribution, simplifying deployment and maintenance.

#### Analytics \& Real-Time Data

- ClickHouse integration: New [AidboxTopicDestination for ClickHouse](https://www.health-samurai.io/docs/aidbox/tutorials/subscriptions-tutorials/clickhouse-aidboxtopicdestination) enables real-time analytics by exporting ViewDefinitions directly to ClickHouse.
- SQL-on-FHIR improvements: Implemented the [$run operation](https://www.health-samurai.io/docs/aidbox/modules/sql-on-fhir/operation-run) for direct querying through ViewDefinitions, plus explicit [materialization control](https://www.health-samurai.io/docs/aidbox/modules/sql-on-fhir/operation-materialize) for better resource management.

#### Subscriptions \& Event Streaming

- AMQP support: Topic-based subscriptions now support [AMQP message brokers](https://www.health-samurai.io/docs/aidbox/modules/topic-based-subscriptions/aidbox-topic-based-subscriptions#currently-supported-channels) as a destination channel.
- Change tracking functions: Introduced [%previous and %current functions](https://www.health-samurai.io/docs/aidbox/modules/topic-based-subscriptions/aidbox-topic-based-subscriptions#aidboxsubscriptiontopic) in AidboxSubscriptionTopic for precise version-to-version change tracking.
- FHIR-native subscriptions: Released full support for [FHIR-native topic-based subscriptions](https://www.health-samurai.io/docs/aidbox/modules/topic-based-subscriptions/fhir-topic-based-subscriptions) in December.
- External audit repository: AuditEvents can now stream to an [external FHIR AuditRecord Repository](https://www.health-samurai.io/docs/aidbox/access-control/audit-and-logging#external-audit-record-repository-support).

## FHIR Conformance

#### FHIR Schema Engine

- New validation engine: We [transitioned to the FHIR Schema engine](https://www.health-samurai.io/news/aidbox-transitions-to-the-fhir-schema-engine), replacing the legacy Zen-based approach. This centralizes schema and validation logic using standard FHIR IGs and profiles.
- Migration tool: Published the [FHIR Schema migration tool](https://github.com/HealthSamurai/fhir-schema-migration-tool) to help teams transition existing configurations.

#### FHIR Version Support

- FHIR R6 preview: Added support for FHIR 6.0.0-ballot3 and published a [tutorial on running Aidbox with R6](https://www.health-samurai.io/docs/aidbox/tutorials/other-tutorials/run-aidbox-with-fhir-r6).
- DomainResource migration: Migrated system resources to the FHIR DomainResource model with [comprehensive reference documentation](https://www.health-samurai.io/docs/aidbox/reference/system-resources-reference).

#### Implementation Guide Management

- NPM registry integration: Added [integration with external NPM package registries](https://www.health-samurai.io/docs/aidbox/artifact-registry/artifact-registry-overview#integration-with-package-registries) for IG loading.
- Dependency optimization: Introduced [pinning and tree shaking](https://www.health-samurai.io/docs/aidbox/artifact-registry/artifact-registry-overview#pinning-and-tree-shaking) for optimizing IG dependency resolution.
- FAR package API: Released the new [FAR package management API](https://www.health-samurai.io/docs/aidbox/reference/package-registry-api) for managing published IG artifacts.
- Init bundle tutorial: Published a guide on [loading FHIR IGs via Init Bundle](https://www.health-samurai.io/docs/aidbox/tutorials/artifact-registry-tutorials/upload-fhir-implementation-guide/how-to-load-fhir-ig-with-init-bundle).

#### Terminology

- New terminology engine: Integrated a [new Terminology engine](https://www.health-samurai.io/docs/aidbox/terminology-module/overview) supporting local operations while delegating to external Terminology Servers for external code systems.
- $translate operation: Added support for the [$translate operation on ConceptMap resources](https://www.health-samurai.io/docs/aidbox/terminology-module/aidbox-terminology-module/capabilities).

#### Access Control \& Certification

- SMART-on-FHIR v2: Added support for SMART-on-FHIR v2 scopes with [search parameters](https://www.health-samurai.io/docs/aidbox/access-control/authorization/smart-on-fhir/smart-scopes-for-limiting-access#scopes-with-search-parameters).
- Hierarchical access control: Implemented [Organization-based hierarchical access control](https://www.health-samurai.io/docs/aidbox/modules/topic-based-subscriptions/aidbox-topic-based-subscriptions#organization-based-hierarchical-filtering) in Topic-based Subscriptions.
- Inferno test guide: Published a comprehensive [tutorial on passing Inferno tests](https://www.health-samurai.io/docs/aidbox/solutions/providers-or-onc-health-it-certification-program/g-10-standardized-api-for-patient-and-population-services/pass-inferno-tests-with-aidbox) for US Core 6.1.0/USCDI v3 and SMART App Launch 2.0.0.

## Developer Experience

#### Configuration \& API

- Settings surface: Introduced first-class [Settings](https://www.health-samurai.io/docs/aidbox/configuration/settings) for instance configuration with a comprehensive [reference surface](https://www.health-samurai.io/docs/aidbox/reference/all-settings).
- FHIRPath PATCH: Implemented [FHIRPath PATCH](https://www.health-samurai.io/docs/aidbox/api/rest-api/crud/patch#fhirpath-patch) for more expressive resource updates.
- FHIR factory API: Added support for the [FHIR Factory API](https://build.fhir.org/fhirpath.html#factory) in the FHIRPath engine.

#### Code Generation \& Frameworks

- Open-source code generator: Released an [open-source code generator](https://github.com/atomic-ehr/codegen) based on FHIR type schemas.
- Atomic EHR framework: Launched [Atomic EHR](https://github.com/atomic-ehr), a TypeScript framework for building FHIR applications.

#### UI \& Integrations

- New UI tech stack: Started migrating [AidboxUI](https://github.com/HealthSamurai/aidbox-ui) from ClojureScript to React and TypeScript, and began open-sourcing it to serve as an example of how to build production-grade applications on top of the Aidbox FHIR Server.
- MCP server module: Released the [Aidbox MCP Server](https://www.health-samurai.io/docs/aidbox/modules/other-modules/mcp) module, exposing Aidbox operations and metadata for external MCP clients and agents.

## See Aidbox in Action

Interested in how Aidbox’s future-proof FHIR platform can accelerate your healthcare projects? We invite you to [schedule a demo](https://www.health-samurai.io/contacts?utm_source=blog&utm_medium=cta&utm_campaign=2025-recap) with our team and explore how Aidbox can support your next product milestone.
