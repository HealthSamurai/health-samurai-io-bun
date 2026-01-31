---
{
  "url": "https://www.health-samurai.io/articles/fhir-fuse-fhir-in-a-unix-way",
  "title": "🔥 FHIR FUSE: FHIR in a Unix Way",
  "description": "What if working with FHIR didn’t start with APIs and clients, but with files and folders? This article explores FHIR-FUSE, a filesystem interface for FHIR servers, what it makes easier, and where its limits become clear.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/694ac57f5b884e8aaa8bb291_image%20(5).png",
  "date": "2025-12-23",
  "author": "Marat Surmashev, Aleksandr Penskoi",
  "slug": "fhir-fuse-fhir-in-a-unix-way"
}
---

For decades, Unix systems have been built on a simple but powerful philosophy: **everything is a file**. This abstraction enables small, focused utilities to compose seamlessly. Need to process data? Pipe one command into another. Use `grep`, `sed`, `jq`, `diff` and other standard tools you already know.

What if working with FHIR data followed the same Unix way? No complex APIs, no authentication headaches, no custom tooling — just your favorite text editor, standard Unix commands, and a folder full of FHIR resources. FHIR-FUSE brings this Unix philosophy to healthcare interoperability.



## Quick Summary
- FHIR-FUSE maps healthcare data to filesystem concepts, enabling Unix tools instead of API clients
- Dynamic discovery, lazy loading, and intuitive abstractions make FHIR exploration simpler
- Ideal for development, learning, data analysis, and migrations—not for high-load production systems
- Brings decades of Unix composition wisdom to healthcare interoperability


## The X-mas Hackathon Challenge

Every year, our X-mas Hackathon brings together healthcare enthusiasts to explore bold ideas that push the boundaries of health IT. This year, we asked ourselves a provocative question: **What if we could remove the friction between developers and FHIR data?**

In practice, healthcare developers spend countless hours writing API clients, managing authentication, handling pagination, parsing JSON responses, and debugging HTTP requests. But what if none of that was necessary? What if you could just `cd` into your FHIR server and start working?

The result was **FHIR-FUSE**: a filesystem interface to FHIR servers built on FUSE (Filesystem in Userspace). You can explore the fully open source project on [GitHub](https://github.com/healthsamurai/fhir-fuse).



## Reimagining FHIR as a Filesystem

Working with FHIR usually means APIs, clients, and request logic—but the data itself already has a clear structure. The core insight behind FHIR-FUSE is simple: **FHIR resources already map naturally to filesystem concepts.**
- **Resource types** (Patient, Observation, Encounter) → **Directories**
- **Individual resources** → **JSON files**
- **Resource IDs** → **Filenames**
- **CRUD operations** → **File operations** (create, read, update, delete)
- **Search queries** → **Special directories**
- **Resource history** → **Hidden version folders**
- **Operations** → **Special files**

This mental model is intuitive for anyone who&#x27;s ever worked with files. Instead of learning yet another API, you leverage knowledge you already have.



### The Filesystem Structure

When you mount a FHIR server with FHIR-FUSE, you see a virtual filesystem structure like this:

```javascript
./mnt/
├── README.md                          # Documentation
├── Patient/                           # Resource type directory
│   ├── patient-001.json               # Individual resources
│   ├── patient-002.json
│   ├── .patient-001/                  # Hidden history folder
│   │   ├── 1.json                     # Version 1
│   │   ├── 2.json                     # Version 2
│   │   └── 3.json                     # Version 3
│   └── _search/                       # Search directory
│       └── name=Smith/                # Search query
│           └── Patient/
│               └── patient-003.json
├── Observation/
│   ├── observation-001.json
│   └── _search/
└── ViewDefinition/
    ├── patient_demographics.json
    └── $run/                          # Operation directory
        └── patient_demographics.csv   # Operation results
```

Every directory and file in this virtual filesystem structure is **dynamically generated** based on the FHIR server&#x27;s capabilities or created by user files or directories.



## Design Principles

Treating a FHIR server like a filesystem sounds simple in theory, but it raises practical questions. How do you handle different servers, large datasets, and evolving schemas? FHIR-FUSE answers these questions through a few core design principles.
