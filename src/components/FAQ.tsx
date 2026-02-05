/**
 * FAQ / Accordion section
 */

type FAQItem = {
  id: string;
  title: string;
  content: string;
};

type FAQProps = {
  title: string;
  items: FAQItem[];
};

export function FAQ({ title, items }: FAQProps): string {
  return `
    <section class="py-24 sm:py-32 bg-white">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <div class="border-2 border-gray-200 rounded-2xl p-8 sm:p-12">
          <h3 class="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">
            ${title}
          </h3>
          
          <div data-signals="{openFaq: ''}" class="space-y-4">
            ${items.map(item => `
              <div class="border-b border-gray-200 pb-4">
                <button
                  type="button"
                  data-on:click="$openFaq = $openFaq === '${item.id}' ? '' : '${item.id}'"
                  class="w-full flex items-center justify-between text-left py-4 group"
                >
                  <span class="text-xl font-semibold text-gray-900 pr-8">
                    ${item.title}
                  </span>
                  <svg
                    data-class="{'rotate-45': $openFaq === '${item.id}'}"
                    class="w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                  </svg>
                </button>
                
                <div
                  data-show="$openFaq === '${item.id}'"
                  style="display: none"
                  class="prose prose-gray max-w-none pb-4"
                >
                  ${item.content}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

// Pre-configured FAQ data for Aidbox
export const aidboxFAQ: FAQItem[] = [
  {
    id: "intro",
    title: "Introduction to Aidbox",
    content: `
      <p>Aidbox is a <strong>FHIR-first platform</strong> combining a FHIR server and a purpose-built FHIR database under one system. Built on PostgreSQL with custom extensions, Aidbox delivers:</p>
      <ul>
        <li><strong>High-throughput ingestion</strong> (up to 20,000+ resources/second)</li>
        <li><strong>Low-latency search</strong> across millions of FHIR records</li>
        <li><strong>Fast data export</strong> for analytics, migrations, or external system integrations</li>
        <li><strong>Full control over indexing and data structure</strong>, letting you tailor performance optimizations and workflows to your exact needs</li>
      </ul>
      <p>Unlike many solutions that abstract away the backend, Aidbox lets you <strong>access and manipulate your data directly</strong> — you can build custom business logic, implement advanced workflows, or tie into existing systems on your terms.</p>
      <p><strong>Health Samurai</strong> has implemented and supported <strong>dozens of high-load systems</strong> in production — spanning hospitals, labs, startups, healthcare software solution providers, and major payers — confirming the platform's performance and reliability.</p>
    `
  },
  {
    id: "different",
    title: "What makes Aidbox different",
    content: `
      <p><strong>1. FHIR-Native Database</strong></p>
      <p>Aidbox doesn't just provide a FHIR API; it includes a <strong>FHIR-optimized database</strong> built on PostgreSQL with custom extensions. By combining the API and database in one platform, Aidbox ensures <strong>low latency</strong>, <strong>fewer moving parts</strong>, and <strong>less overhead</strong> than solutions that rely on multiple external services.</p>
      
      <p><strong>2. High-Performance Data Processing</strong></p>
      <p>Aidbox easily handles <strong>thousands of operations per second</strong>, even when working with millions of resources. This includes fast reads and writes, so you can load patient data, run analytics, or power clinical apps without delay.</p>
      
      <p><strong>3. Flexible Infrastructure</strong></p>
      <p>Because Aidbox FHIR server is distributed as a <strong>lightweight Docker container</strong> that only needs PostgreSQL, you avoid the hassle of complex multi-service setups. It's deployable on-premises, in the cloud, or in hybrid environments, all while reducing maintenance and potential points of failure.</p>
      
      <p><strong>4. Customizable Indexing & Data Model</strong></p>
      <p>Aidbox's PostgreSQL foundation means you can define your own indexing strategies, modify search behavior, and shape the data model to match your specific project needs, rather than working around a one-size-fits-all approach.</p>
    `
  },
  {
    id: "performance",
    title: "Performance Highlights",
    content: `
      <p><strong>1. High-volume data ingestion</strong></p>
      <p>We tested Aidbox with <strong>23 million</strong> and then <strong>100 million</strong> resources via the /fhir/$import endpoint.</p>
      <ul>
        <li><strong>Single Import (23M Resources)</strong>: ~6,000 resources/second</li>
        <li><strong>Concurrent Import (100M Resources)</strong>: <strong>~20,000+ resources/second</strong> peak throughput</li>
      </ul>
      
      <p><strong>2. Fast bulk export</strong></p>
      <p>When exporting <strong>100 million</strong> resources: <strong>15,500 resources/second</strong> (32.3 MB/s)</p>
      
      <p><strong>3. High-concurrency CRUD operations</strong></p>
      <p>Even under <strong>300 parallel threads</strong>:</p>
      <ul>
        <li><strong>Create</strong>: Up to 2,800 RPS</li>
        <li><strong>Read</strong>: Up to 3,500 RPS</li>
        <li><strong>Update</strong>: ~1,900 RPS</li>
        <li><strong>Delete</strong>: Over 3,900 RPS</li>
      </ul>
      
      <p><strong>4. Optimized search with indexing at scale</strong></p>
      <p>Search performance validated across millions of records with 2,000+ requests per second.</p>
    `
  },
  {
    id: "conclusion",
    title: "Conclusion",
    content: `
      <p><strong>Aidbox FHIR server</strong> offers <strong>speed, control, and reliability</strong> in one streamlined package. The result is a solution that can scale from tens of millions to <strong>billions of FHIR resources</strong>, delivering:</p>
      
      <p><strong>Outstanding performance on minimal hardware</strong></p>
      <p>Even an 8 vCPU, 8 GB RAM setup can yield results <strong>10x faster</strong> than popular open-source FHIR servers.</p>
      
      <p><strong>1. Streamlined operations</strong></p>
      <p>Aidbox's containerized distribution requires only PostgreSQL, minimizing deployment and maintenance.</p>
      
      <p><strong>2. Reliability under heavy load</strong></p>
      <p>High concurrency and large transaction bundles don't hamper Aidbox's responsiveness or stability.</p>
      
      <p><strong>3. Scalable Bulk Import & Export</strong></p>
      <p>Process large FHIR datasets—from millions to billions—end-to-end, quickly and without added complexity.</p>
      
      <p>If you're looking for a powerful, FHIR-compliant platform that simplifies infrastructure, accelerates performance, and keeps data fully accessible, Aidbox is ready to meet your needs.</p>
    `
  }
];
