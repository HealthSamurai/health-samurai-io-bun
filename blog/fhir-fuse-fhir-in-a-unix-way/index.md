---
{
  "url": "https://www.health-samurai.io/articles/fhir-fuse-fhir-in-a-unix-way",
  "title": "FHIR FUSE: FHIR in a Unix Way",
  "description": "What if working with FHIR didn’t start with APIs and clients, but with files and folders?\nThis article explores FHIR-FUSE, a filesystem interface for FHIR servers, what it makes easier, and where its limits become clear.",
  "image": "",
  "date": "2025-12-23",
  "author": "Marat Surmashev, Aleksandr Penskoi",
  "slug": "fhir-fuse-fhir-in-a-unix-way",
  "reading-time": "10 minutes",
  "tags": ["FHIR", "Unix", "Open Source", "Developer Tools"],
  "category": "System Design",
  "tldr": "FHIR-FUSE is a filesystem interface for FHIR servers built on FUSE, letting you work with healthcare data using standard Unix tools like grep, sed, and jq. No APIs or custom clients needed—just cd into your FHIR server and start exploring."
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

This mental model is intuitive for anyone who's ever worked with files. Instead of learning yet another API, you leverage knowledge you already have.

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

Every directory and file in this virtual filesystem structure is **dynamically generated** based on the FHIR server's capabilities or created by user files or directories.

## Design Principles

Treating a FHIR server like a filesystem sounds simple in theory, but it raises practical questions. How do you handle different servers, large datasets, and evolving schemas? FHIR-FUSE answers these questions through a few core design principles.

### 1. Dynamic Discovery

FHIR-FUSE doesn't hardcode resource types. Instead, it queries the server's `CapabilityStatement` at startup to discover what resources are available. This means it works with **any FHIR R4 server** out of the box - whether it's Aidbox, HAPI FHIR, or a custom implementation.

```javascript
pub async fn fetch_capability_statement(
    client: &Client,
    fhir_base_url: &str,
) -> anyhow::Result<ServerCapabilities> {
    let url = format!("{}/metadata", fhir_base_url);
    let response = client.get(&url).send().await?;
    let capability_statement: CapabilityStatement = response.json().await?;
    ServerCapabilities::from_capability_statement(capability_statement)
}
```

The filesystem automatically creates directories for each supported resource type, making the server's capabilities immediately visible and explorable.

### 2. Lazy Loading

Healthcare datasets can be massive. Loading all resources upfront would be prohibitively slow and memory-intensive. FHIR-FUSE uses **lazy loading** throughout:

- **Directory listings** are fetched only when you `ls` a directory
- **Resource content** is loaded only when you read a file
- **Search results** are cached for a few seconds to avoid redundant queries
- **History versions** are fetched on-demand when you access the hidden folders

This keeps the filesystem responsive even when working with servers containing millions of resources.

### 3. Intuitive Abstractions

The filesystem interface maps FHIR concepts to familiar file operations. 

**Creating a resource:**

```javascript

# Create a new patient with basic demographics
echo '{"resourceType":"Patient","name":[{"family":"Smith"}]}' > ./mnt/Patient/new-patient.json
```

**Reading a resource:**

```javascript

# View a patient record
cat ./mnt/Patient/patient-001.json | jq .
```

**Updating a resource:**

```javascript

# Edit with your favorite editor
vim ./mnt/Patient/patient-001.json

# Or use jq for programmatic updates
jq '.active = true' ./mnt/Patient/patient-001.json > temp.json
mv temp.json ./mnt/Patient/patient-001.json
```

**Deleting a resource:**

```javascript

# Remove a patient record
rm ./mnt/Patient/patient-001.json
```

No HTTP clients, no authentication tokens in your scripts — just standard Unix tools.

### 4. Search as Directory Creation

One of the most elegant design choices in FHIR-FUSE is how it handles FHIR search. Instead of a separate query language or command, **you create a directory with search parameters in its name:**

```javascript

# Search for female patients named Smith
mkdir -p "./mnt/Patient/_search/name=Smith&gender=female"

# View search results
ls "./mnt/Patient/_search/name=Smith&gender=female/Patient/"
cat "./mnt/Patient/_search/name=Smith&gender=female/Patient/patient-003.json"
```

The directory name **is the query**. When you create the directory, FHIR-FUSE executes the search and populates it with results. As a result:

- Makes searches **discoverable** (you can see past searches with `ls`)
- Enables **search result caching** (the directory persists until you remove it)
- Supports **complex queries** with multiple parameters
- Handles **_include** parameters naturally (results appear in subdirectories by resource type)

### 5. Operations as Special Directories

One of the most important parts of FHIR is operations. Some of them can be presented as directories in the filesystem. To check this hypothesis, we tried implementing the `$run` operation as a directory that executes [ViewDefinition](https://build.fhir.org/ig/FHIR/sql-on-fhir-v2/) and returns the results.

```javascript

# List available ViewDefinitions
ls ./mnt/ViewDefinition/

# Execute a ViewDefinition
touch "./mnt/ViewDefinition/\$run/patient_demographics.json"

# Read the results
cat "./mnt/ViewDefinition/\$run/patient_demographics.json" | jq .

# Get CSV output
touch "./mnt/ViewDefinition/\$run/patient_demographics.csv"
cat "./mnt/ViewDefinition/\$run/patient_demographics.csv"
```

The `touch` command triggers execution, and reading the file returns the results. Different file extensions request different output formats.

## Implementation Insights

So far, we’ve focused on how FHIR-FUSE behaves from the outside: how FHIR resources appear as files, how searches work as directories, and how standard Unix tools can be used to explore data.

Under the hood, making this abstraction work requires careful coordination between filesystem semantics and FHIR’s HTTP-based APIs. This section outlines the key implementation decisions that allow FHIR-FUSE to stay responsive, predictable, and compatible with different FHIR servers.

### Virtual Filesystem Architecture

FHIR-FUSE is built on **FUSE** (Filesystem in Userspace), which allows implementing a filesystem entirely in userspace without kernel modifications. The architecture consists of several key components:

**1. Inode Index**

Every file and directory in the filesystem has a unique inode number. We maintain an in-memory index that maps inodes to virtual filesystem entries:

```javascript
pub enum VFSEntry {
    Directory(Directory),             // /Patient
    TextFile(TextFile),               // /README.md
    FHIRResource(FHIRResource),       // /Patient/pt-1.json
    ResourceVersion(ResourceVersion), // /Patient/.pt-1/1.json
    SearchPath(SearchPath),           // /Patient/_search
    SearchQuery(SearchQuery),         // /Patient/_search/gender=female
    SearchResultGroup(SearchResultGroup),
    OperationPath(OperationPath),     // /ViewDefinition/$run
    OperationExecution(OperationExecution),
}
```

This enum captures all possible filesystem entry types, each with its own behavior and attributes.

**2. Dynamic Directory Listings**

When you list a directory, FHIR-FUSE dynamically generates the listing based on the directory type:

- **Root directory**: Shows resource type directories from the capability statement
- **Resource type directory**: Fetches resources from the FHIR server (with pagination)
- **Search directory**: Shows past search queries
- **Search query directory**: Shows resource type subdirectories with results
- **History directory**: Shows all versions of a specific resource

**3. Caching Strategy**

To balance responsiveness with data freshness, FHIR-FUSE implements time-based caching:

```javascript
const TTL: Duration = Duration::from_secs(30);
const CACHE_DURATION: Duration = Duration::from_secs(5);
```

In practice, this means:

- Directory listings are cached for 5 seconds
- File attributes (size, modification time) have a 30-second TTL
- Search results are cached until explicitly refreshed
- Resource content is always fetched fresh on read to ensure accuracy

**4. Parallel Resource Fetching**

When loading a resource type directory, FHIR-FUSE fetches multiple pages in parallel:

```javascript
pub async fn fetch_resources_parallel(
    client: &Client,
    fhir_base_url: &str,
    resource_type: &str,
) -> anyhow::Result<Vec<Value>> {
    // Discover pagination structure from first page
    let bundle = fetch_first_page(client, fhir_base_url, resource_type).await?;

    // Generate all page URLs
    let page_urls = generate_page_urls(&bundle, MAX_PAGES);

    // Fetch all pages concurrently
    let results = stream::iter(page_urls)
        .map(|url| fetch_page_by_url(&client, &url))
        .buffer_unordered(MAX_CONCURRENT_FETCHES)
        .collect()
        .await;

    // Combine results
    combine_resources(results)
}
```

This approach dramatically improves performance when working with large datasets, fetching up to 10 pages simultaneously.

## Real-World Use Cases

The filesystem interface unlocks workflows that are difficult or awkward to express with traditional API clients. Instead of writing custom scripts around HTTP requests, developers can reuse standard filesystem operations and Unix tools to move, inspect, version, and transform FHIR data.

The examples below illustrate how this approach changes everyday tasks, from one-off migrations to development and debugging.

### Data Migration

```javascript

# Migrate all patient records from one server to another
cp -r /mnt/source-server/Patient/* /mnt/destination-server/Patient/
```

### Backup and Version Control

```javascript

# Create timestamped backup of all observations
tar -czf observations-backup-$(date +%Y%m%d).tar.gz /mnt/fhir/Observation/

# Track patient data changes with git
cd /mnt
git init
git add fhir/Patient/*.json
git commit -m "Initial patient data snapshot"
```

### Data Analysis with Standard Tools

```javascript

# Count all FHIR resources
find /mnt/fhir -name "*.json" | wc -l

# Extract patient family names and count occurrences
cat /mnt/fhir/Patient/*.json | jq -r '.name[0].family' | sort | uniq -c

# Search for patients with diabetes diagnoses with grep
grep -r "diabetes" /mnt/fhir/Condition/

# Analyze patient demographics (ID, birthDate, gender) with awk
cat /mnt/fhir/Patient/*.json | jq -r '[.id, .birthDate, .gender] | @csv' | \
  awk -F, '{print $3}' | sort | uniq -c
```

### Scripting and Automation

```javascript

# Activate all patient records with a batch operation
for file in /mnt/fhir/Patient/*.json; do
  jq '.active = true' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
done

# Monitor patient directory for recent changes
watch -n 5 'ls -l /mnt/fhir/Patient/ | tail -10'

# Export patient demographics as CSV
cat /mnt/fhir/Patient/*.json | \
  jq -r '[.name[0].family, .name[0].given[0], .birthDate] | @csv' | \
  csvtool col 1,2,3 - | \
  head -20
```

### Development and Testing

```javascript

# Inspect test patient data during development
cat /mnt/fhir/Patient/test-patient-1.json | jq .

# Create reusable test fixtures from FHIR server
cp /mnt/fhir/Patient/example.json ./test/fixtures/

# Validate all patient JSON files for syntax errors
for file in /mnt/fhir/Patient/*.json; do
  jq empty "$file" 2>/dev/null || echo "Invalid JSON: $file"
done
```

### Working with Resource History

One of FHIR-FUSE's most powerful features is access to resource version history through hidden directories. Every time a resource is updated, FHIR servers maintain historical versions. FHIR-FUSE exposes these as files in hidden `.resource-id` folders:

```javascript

# View the current patient record
cat /mnt/fhir/Patient/patient-123.json

# List all historical versions of this patient
ls -la /mnt/fhir/Patient/.patient-123/

# Output:

# 1.json

# 2.json

# 3.json

# View how the patient record looked at version 1
cat /mnt/fhir/Patient/.patient-123/1.json
```

**Comparing versions with standard diff**

Once resource versions are available as files, you can immediately use familiar diff tools to see what changed between updates—without writing custom scripts or assembling API responses by hand.

```javascript

# See what changed between version 1 and version 2
diff /mnt/fhir/Patient/.patient-123/1.json \
     /mnt/fhir/Patient/.patient-123/2.json

# Compare an old version against the current record
diff /mnt/fhir/Patient/.patient-123/2.json \
     /mnt/fhir/Patient/patient-123.json
```

**Using difftastic for beautiful structural diffs**

[Difftastic](https://difftastic.wilfred.me.uk/) is a structural diff tool that understands JSON syntax and produces much more readable output than traditional line-based diff. Instead of comparing lines, it highlights semantic changes, making differences easier to reason about.

```javascript

# Install difftastic
brew install difftastic  # macOS

# or: cargo install difftastic

# Compare versions with syntax-aware diffing
difft /mnt/fhir/Patient/.patient-123/1.json \
      /mnt/fhir/Patient/.patient-123/2.json
```

**Example output from difftastic:**

```javascript
Patient/patient-123.json
  {
    "resourceType": "Patient",
    "id": "patient-123",
-   "active": false,
+   "active": true,
    "name": [{
      "family": "Smith",
-     "given": ["John"]
+     "given": ["John", "Michael"]
    }],
+   "telecom": [{
+     "system": "phone",
+     "value": "+1-555-0123"
+   }],
    "birthDate": "1980-01-15"
  }
```

**Audit trail analysis**

Because each version is a regular file, it’s easy to script across the entire history to answer audit-style questions: when a field changed, who updated it, or how a resource evolved over time.

```javascript

# View when each version was last updated
for version in /mnt/fhir/Patient/.patient-123/*.json; do
  echo "=== $version ==="
  jq '.meta.lastUpdated' "$version"
done

# Track when the active status changed for a patient
for version in /mnt/fhir/Patient/.patient-123/*.json; do
  active=$(jq -r '.active' "$version")
  updated=$(jq -r '.meta.lastUpdated' "$version")
  echo "$updated: active=$active"
done

# Create a visual timeline of structural changes with difftastic
v1=/mnt/fhir/Patient/.patient-123/1.json
v2=/mnt/fhir/Patient/.patient-123/2.json
v3=/mnt/fhir/Patient/.patient-123/3.json

echo "Changes from v1 to v2:"
difft "$v1" "$v2"
echo -e "\nChanges from v2 to v3:"
difft "$v2" "$v3"
```

This makes debugging data issues, understanding resource evolution, and compliance auditing dramatically simpler. Instead of making multiple API calls to fetch history and manually comparing JSON, you can use familiar filesystem tools and modern diff utilities.

## Challenges and Trade-offs

Building FHIR-FUSE taught us valuable lessons about the impedance mismatch between REST APIs and filesystems. While the filesystem abstraction is powerful, it comes with inherent constraints. Understanding these trade-offs helps you decide if FHIR-FUSE is right for your use case.

### 1. Asynchronous Operations

One of the first challenges appears at the boundary between filesystems and network APIs. Filesystem operations are traditionally synchronous, but FHIR API calls are asynchronous. We use Tokio's runtime to bridge this gap:

```javascript
struct FhirFuse {
    runtime: Arc<Runtime>,
    http_client: Client,
    // ...
}

// Block on async operations in FUSE callbacks
fn read(&mut self, ino: u64, ...) {
    let result = self.runtime.block_on(async {
        fetch_resource(&self.http_client, &self.fhir_base_url, resource_id).await
    });
    // ...
}
```

This is appropriate for development workflows where network latency is acceptable. Production systems handling high throughput benefit from direct API clients with connection pooling and batch operations.

### 2. Pagination and Large Datasets

Another practical limitation comes from the way filesystems handle large directories. FHIR servers often have thousands or millions of resources. We limit directory listings to 1,000 resources by default to keep the filesystem responsive. When working with larger datasets, search queries provide a more scalable way to narrow results.

### 3. Write Semantics

FHIR's conditional create and update operations don't map perfectly to filesystem writes. FHIR-FUSE therefore adopts pragmatic semantics:

- Writing to a new file creates a resource with the filename as the ID
- Writing to an existing file updates that resource
- The server may reject invalid resources, causing write operations to fail

### 4. Platform Differences

Finally, filesystem behavior itself varies by platform. FUSE works differently on Linux, macOS, and other platforms. macOS users need macFUSE, and Docker Desktop's VM architecture prevents mount propagation to the host. FHIR-FUSE documents these workarounds and provide both native and containerized deployment options.

## When NOT to Use FHIR-FUSE

While FHIR-FUSE is powerful for certain workflows, it's important to understand its limitations:

### Not for Production High-Load Systems

FHIR-FUSE is **not designed for high-load production environments**. Every filesystem operation translates to HTTP requests to the FHIR server, which introduces latency and overhead. For production systems handling thousands of concurrent requests, use direct FHIR API clients or SDKs that can implement connection pooling, request batching, and sophisticated retry logic.

### Filesystem Scalability Limits

This limitation isn't unique to FHIR-FUSE - it's inherent to **any filesystem-based approach**. Filesystems struggle with:

- **Large directory listings**: Listing a directory with 100,000+ files is slow on any filesystem
- **Concurrent writes**: Multiple processes writing simultaneously can cause conflicts
- **Memory constraints**: Maintaining inode indexes for millions of resources consumes significant memory

If your FHIR server contains millions of resources, the filesystem interface becomes impractical for browsing entire resource types. Search queries help, but they're not a complete solution.

### Where FHIR-FUSE Truly Shines: Learning and Development

Where FHIR-FUSE truly shines is in **development, learning, and exploration**, where ease of use and transparency matter more than throughput:

- **Learning FHIR**: Beginners can explore FHIR data structure without learning API clients
- **Development workflows**: Quickly inspect test data, create fixtures, debug integrations
- **Prototyping**: Rapidly experiment with FHIR resources using familiar tools
- **Data analysis**: Ad-hoc queries and analysis with standard Unix utilities
- **Migration scripts**: One-off data migrations between development/staging environments

For these use cases, the simplicity and intuitiveness of the filesystem interface far outweighs the performance limitations.

### Platform Requirements

FHIR-FUSE requires **FUSE (Filesystem in Userspace)** support, which varies by platform:

**Linux**: Native support. FUSE is built into the kernel and widely available. Simply install `fuse3` or `libfuse` packages and you're ready to go.

**macOS**: Requires macFUSE with security trade-offs. You need to install [macFUSE](https://osxfuse.github.io/), which requires:

- Allowing third-party kernel extensions in System Preferences
- On Apple Silicon Macs, potentially disabling some System Integrity Protection (SIP) features
- Granting additional security permissions

This is manageable for development machines but may conflict with corporate security policies.

**Windows**: FUSE is a Unix/Linux technology and isn't natively supported on Windows. However, **WSL2 (Windows Subsystem for Linux)** may work since it runs a real Linux kernel. Theoretically FHIR-FUSE should work inside WSL2 with FUSE installed. If you try it, let us know!

**FreeBSD**: Supported. FreeBSD has native FUSE support via `fusefs-libs`.

## What We Learned

The hackathon validated our core hypothesis: **treating FHIR data as files is intuitive and powerful.** Developers immediately understood how to interact with the filesystem without reading documentation. Standard Unix tools "just worked" for common tasks.

More importantly, we discovered that the filesystem metaphor **reveals the structure of FHIR data** in a way that API documentation doesn't. Browsing directories shows you what resource types exist, what resources are available, and how they relate - all without reading specs or making API calls.

The project also highlighted the value of **layering abstractions**. FUSE provides the filesystem interface, Rust provides memory safety and async capabilities, and FHIR provides the data model. Each layer does what it does best.

## Conclusion

FHIR-FUSE demonstrates that **healthcare interoperability doesn't have to be complicated.** By mapping FHIR concepts to filesystem primitives, we leverage decades of Unix tooling and developer knowledge.

The filesystem interface isn't meant to replace FHIR APIs—it's a complementary tool that makes certain workflows dramatically simpler. Whether you're migrating data, analyzing resources, debugging integrations, or just exploring a FHIR server, FHIR-FUSE lets you work the way you already know how.

Sometimes the best innovation is making complex things simple. What if your FHIR server was just a folder on your computer? Now it can be.

**Ready to try FHIR-FUSE?** The project is fully open source and ready to explore: [GitHub Repository](https://github.com/healthsamurai/fhir-fuse)

**Learn more about Aidbox:** [Aidbox FHIR Server](https://www.health-samurai.io/aidbox?utm_source=blog&utm_medium=article&utm_campaign=FHIR-FUSE)

**Join the discussion:** [Health Samurai Community](https://connect.health-samurai.io/)
