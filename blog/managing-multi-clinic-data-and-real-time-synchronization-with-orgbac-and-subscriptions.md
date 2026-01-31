---
{
  "url": "https://www.health-samurai.io/articles/managing-multi-clinic-data-and-real-time-synchronization-with-orgbac-and-subscriptions",
  "title": "🔥 Managing Multi-Clinic Data and Real-time Synchronization with OrgBAC and Subscriptions",
  "description": "Managing multiple clinics is hard: every facility needs autonomy, but the network still needs oversight and real-time data flow. OrgBAC and Subscriptions in Aidbox make this easy with automatic isolation and instant event delivery.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/68aef2efb14ccebe22668ab6_Group%203.png",
  "author": "",
  "slug": "managing-multi-clinic-data-and-real-time-synchronization-with-orgbac-and-subscriptions"
}
---

Healthcare organizations often manage complex hierarchical structures — regional hospital networks comprising diverse facilities that must balance shared resources with organizational autonomy. Additionally, many clinic-specific healthcare systems need event-driven architecture for real-time data synchronization across interconnected entities. Aidbox solves these challenges with two powerful features: [Organization-Based Hierarchical Access Control (OrgBAC)](https://www.health-samurai.io/docs/aidbox/access-control/authorization/scoped-api/organization-based-hierarchical-access-control) and [Topic-Based Subscriptions](https://www.health-samurai.io/docs/aidbox/modules/topic-based-subscriptions/aidbox-topic-based-subscriptions).



## OrgBAC: Hierarchical Data Isolation

OrgBAC allows you to represent an organizational hierarchy inside Aidbox FHIR server and provides FHIR API endpoints with automatic data isolation.

Imagine a healthcare network such as:
- **MedCorp HQ** (parent organization with full access to all data across the network)**City General Hospital** (branch with limited access restricted to their own organizational data)
- **Riverside Clinic** (branch with limited access restricted to their own organizational data)

To illustrate this, the bundle below shows how each organization in the hierarchy is created through the REST API:

```javascript
POST /fhir

resourceType: Bundle
type: batch
entry:
- request:
    method: PUT
    url: Organization/med-corp
  resource:
    name: MedCorp HQ
    resourceType: Organization
- request:
    method: PUT
    url: Organization/city-general-hospital
  resource:
    name: City General Hospital
    resourceType: Organization
    partOf:
      reference: Organization/med-corp
- request:
    method: PUT
    url: Organization/riverside-clinic
  resource:
    name: Riverside Clinic
    resourceType: Organization
    partOf:
      reference: Organization/med-corp

```

Each gets a dedicated endpoint:
- `/Organization/med-corp/fhir` for MedCorp HQ
- `/Organization/city-general-hospital/fhir` for City General Hospital
- `/Organization/riverside-clinic/fhir` for Riverside Clinic

Any resource created through an organization’s endpoint is automatically tagged with its organization ID, ensuring proper isolation without any additional configuration:

```javascript
PUT /Organization/city-general-hospital/fhir/Patient/pt-123

name: [ { family: &#x27;John&#x27; } ]

---

meta:
  extension:
    - url: https://aidbox.app/tenant-organization-id
      valueReference:
        reference: Organization/city-general-hospital
id: pt-123
resourceType: Patient
name:
  - family: Smith
```

The underlying access logic is simple and predictable:
- MedCorp HQ sees everything from all branches (`GET /Organization/med-corp/fhir/Patient`)
- City General sees only its own data (`GET /Organization/city-general-hospital/fhir/Patient`)
- Riverside sees only its own data (`GET /Organization/riverside-clinic/fhir/Patient`)

For more details about OrgBAC features and configuration, see the documentation: [Organization-Based Hierarchical Access Control (OrgBAC)](https://www.health-samurai.io/docs/aidbox/access-control/authorization/scoped-api/organization-based-hierarchical-access-control)



## Topic-Based Subscriptions: Real-Time Events

Subscriptions enable real-time data synchronization through webhooks, Kafka, and various message queues. Beginning with [Aidbox 2509](https://www.health-samurai.io/docs/aidbox/overview/release-notes#september-2025-stable-2509), subscriptions automatically respect organizational boundaries. When subscription is created through an organization&#x27;s API, it inherits hierarchical filtering rules.

This ensures:
- **Hierarchical Flow**: MedCorp HQ&#x27;s subscription captures events from all branches****
- **Scoped Topics**: City General&#x27;s and Riverside&#x27;s subscriptions only receive their own events****
- **Security**: Events never leak between sibling organizations

Two key components are required for setup:
- **AidboxSubscriptionTopic** - defines what types of events should trigger notifivations. The example below captures every final Observation across the entire MedCorp network:

```javascript
POST /Organization/med-corp/fhir/AidboxSubscriptionTopic

{
  "resourceType": "AidboxSubscriptionTopic",
  "url": "http://aidbox.example/observation-feed",
  "status": "active",
  "trigger": [{
    "resource": "Observation",
    "fhirPathCriteria": "status = &#x27;final&#x27;"
  }]
}
```

  - 
    **AidboxTopicDestination** – specifies where to send notifications.
    Each organization has its own destination created through its dedicated endpoint.
    The following bundle demonstrates how these destinations are created through the REST Console.
  

```javascript
POST /

resourceType: Bundle
type: batch
entry:
# MedCorp HQ destination - receives events from entire network
- request:
    method: POST
    url: /Organization/med-corp/fhir/AidboxTopicDestination
resource:
    id: med-corp-observation-feed
    resourceType: AidboxTopicDestination
    meta:
    profile: ["http://aidbox.app/StructureDefinition/aidboxtopicdestination-webhook-at-least-once"]
    kind: webhook-at-least-once
    topic: http://aidbox.example/observation-feed
    parameter:
    - name: endpoint
    valueUrl: https://med-corp-hq.requestcatcher.com/test

# City General Hospital destination - receives only its events
- request:
    method: POST
    url: /Organization/city-general-hospital/fhir/AidboxTopicDestination
resource:
    id: city-general-observation-feed
    resourceType: AidboxTopicDestination
    meta:
    profile: ["http://aidbox.app/StructureDefinition/aidboxtopicdestination-webhook-at-least-once"]
    kind: webhook-at-least-once
    topic: http://aidbox.example/observation-feed
    parameter:
    - name: endpoint
    valueUrl: https://city-general-hospital.requestcatcher.com/test

# Riverside Clinic destination - receives only its events
- request:
    method: POST
    url: /Organization/riverside-clinic/fhir/AidboxTopicDestination
resource:
    id: riverside-observation-feed
    resourceType: AidboxTopicDestination
    meta:
    profile: ["http://aidbox.app/StructureDefinition/aidboxtopicdestination-webhook-at-least-once"]
    kind: webhook-at-least-once
    topic: http://aidbox.example/observation-feed
    parameter:
    - name: endpoint
    valueUrl: https://riverside-clinic.requestcatcher.com/test
```

You can monitor requests received by each organization using the following URLs (open them before producing events):
- [https://med-corp-hq.requestcatcher.com](https://med-corp-hq.requestcatcher.com/)
- [https://riverside-clinic.requestcatcher.com](https://riverside-clinic.requestcatcher.com/)
- [https://city-general-hospital.requestcatcher.com](https://city-general-hospital.requestcatcher.com/)

The diagram below illustrates how event flows through the system. Green arrows show MedCorp HQ event flow, while yellow arrows show City General Hospital event flow:
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/69382b9efccdf522f066bfa0_Screenshot%202025-12-09%20at%2014.00.47.png)


### Test it yourself via REST Console


- Create a patient:

```javascript
POST /Organization/city-general-hospital/fhir/Patient

id: pt-1
name: [{"family": "Smith"}]
```

  - 
    Create an observation:
  

```javascript
POST /Organization/city-general-hospital/fhir/Observation

resourceType: Observation
status: final
code:
  coding:
  - system: http://loinc.org
    code: 15074-8
    display: Glucose [Moles/volume] in Blood
subject:
  reference: Patient/pt-1
valueQuantity:
  value: 6.3
  unit: mmol/l
  system: http://unitsofmeasure.org
  code: mmol/L
```

  - 
  Check that http://med-corp-hq.requestcatcher.com and https://city-general-hospital.requestcatcher.com should receive observation create events.
  





## Conclusion

OrgBAC and topic-based subscriptions together create a robust foundation for multi-tenant healthcare architectures. This combination delivers immediate value:
- **Hierarchical oversight**: Parent organizations monitor all branches while each facility maintains data autonomy
- **Zero-configuration isolation**: Data boundaries are enforced automatically - no manual access control needed
- **Real-time synchronization**: Critical events flow instantly to dashboards, billing, and quality systems
- **Built-in security**: Organizational boundaries prevent data leakage between sibling facilities
- **Developer efficiency**: Native FHIR compliance without custom middleware or complex infrastructure

Whether you&#x27;re architecting a regional hospital network, managing multiple clinics, or building a multi-practice EHR, Aidbox provides a secure, scalable foundation your healthcare system needs.

[Start using a free developer license](https://www.health-samurai.io/docs/aidbox/getting-started) to implement OrgBAC and topic-based subscriptions in your organization, or [explore the documentation](https://www.health-samurai.io/docs) for detailed implementation guides.
