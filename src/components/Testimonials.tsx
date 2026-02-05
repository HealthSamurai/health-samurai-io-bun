/**
 * Customer Testimonials section
 */

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps): string {
  const defaultTestimonial = testimonials[0] || null;
  
  if (!defaultTestimonial) return '';
  
  return `
    <section class="py-24 sm:py-32 bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">
          What our customers say about us
        </div>
        
        <div data-testimonials-carousel class="relative">
          <!-- Testimonials carousel with gray background -->
          <div class="mx-auto max-w-5xl bg-gray-200 rounded-3xl p-12 sm:p-16 overflow-hidden">
            <div data-testimonials-track class="flex transition-transform duration-500 ease-in-out" style="transform: translateX(0%)">
              ${testimonials.map((testimonial, index) => `
                <div data-testimonial-slide class="min-w-full flex-shrink-0 text-center">
                  <!-- Logo -->
                  <div class="flex justify-center mb-8">
                    <img 
                      src="${testimonial.logo}" 
                      alt="${testimonial.company}" 
                      class="h-12 object-contain"
                      loading="lazy"
                    />
                  </div>
                  
                  <!-- Quote -->
                  <blockquote class="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto px-4">
                    ${testimonial.quote}
                  </blockquote>
                  
                  <!-- Author -->
                  <div>
                    <div class="text-lg font-bold text-gray-900">${testimonial.author}</div>
                    <div class="text-gray-600">${testimonial.role}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          
          ${testimonials.length > 1 ? `
            <!-- Navigation arrows -->
            <button
              type="button"
              data-testimonials-prev
              class="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors shadow-lg z-10"
              aria-label="Previous testimonial"
            >
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            
            <button
              type="button"
              data-testimonials-next
              class="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors shadow-lg z-10"
              aria-label="Next testimonial"
            >
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          ` : ''}
        </div>
      </div>
      
      <!-- Load carousel script -->
      <script src="/assets/js/testimonials.js"></script>
    </section>
  `;
}

// Pre-configured testimonials
export const aidboxTestimonials: Testimonial[] = [
  {
    quote: "4medica is committed to delivering the most advanced solutions to our clients. Aidbox's performance, scalability, and powerful analytics, combined with Health Samurai's outstanding support, are enabling us to do just that. This partnership is essential to our FHIR strategy and our ability to drive better client outcomes.",
    author: "Gregg Church",
    role: "President, 4medica",
    company: "4medica",
    logo: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67c7225871fabab5d9c6070c_4medica-logo.png"
  },
  {
    quote: "By integrating Aidbox, Health Samurai's FHIR-based solution, Patients Know Best makes it easier for developers to build apps on the PKB platform. More patients will have more data more quickly, and clinicians will deliver better care more safely.",
    author: "Mate Varga",
    role: "CTO at Patients Know Best",
    company: "Patients Know Best",
    logo: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb4a2c54d0ea864cb16_Logo_PatientsCo%20HiRes%20(1)%202.webp"
  },
  {
    quote: "After two decades in healthcare technology and nearly a decade of working with FHIR, I've used and evaluated numerous FHIR servers. Aidbox stands out as a best-of-breed solution, offering a combination of cost-effectiveness, robust features, and exceptional support. Beda software has been an excellent partner to Prenosis in building our Immunix MVP, demonstrating the platform's real-world effectiveness. For healthcare technology leaders seeking a flexible and powerful FHIR solution, Aidbox delivers on both technical performance and strategic value.",
    author: "Brian Bray",
    role: "VP Technology at Prenosis",
    company: "Prenosis",
    logo: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65426115ed1b936bef809059_prenosis-logo-color%202.webp"
  }
];
