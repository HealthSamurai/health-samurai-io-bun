export function ContactForm(): string {
  return (
    <section className="mx-auto max-w-[1100px] py-[100px] pb-[90px] max-sm:px-4 max-sm:pt-[60px]" id="contact">
      <div>
        <div className="text-center mb-12">
          <h2 className="text-[48px] leading-[52px] font-black text-[#333333] mb-4 max-sm:text-[36px] max-sm:leading-[44px]">contact us</h2>
          <p className="text-[16px] leading-[28px] text-[#333333]">Get in touch with us today!</p>
        </div>
        <form className="mx-auto max-w-[800px] rounded-lg bg-white p-8" hx-post="/api/contact" hx-swap="outerHTML">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[14px] font-semibold text-[#1a1a1a]">Full Name</label>
              <input type="text" id="name" name="name" className="w-full rounded border border-[#e0e0e0] bg-white px-4 py-3 text-[16px] focus:border-primary focus:outline-none" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-[14px] font-semibold text-[#1a1a1a]">Company</label>
              <input type="text" id="company" name="company" className="w-full rounded border border-[#e0e0e0] bg-white px-4 py-3 text-[16px] focus:border-primary focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[14px] font-semibold text-[#1a1a1a]">Business email</label>
              <input type="email" id="email" name="email" className="w-full rounded border border-[#e0e0e0] bg-white px-4 py-3 text-[16px] focus:border-primary focus:outline-none" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-[14px] font-semibold text-[#1a1a1a]">Phone</label>
              <input type="tel" id="phone" name="phone" className="w-full rounded border border-[#e0e0e0] bg-white px-4 py-3 text-[16px] focus:border-primary focus:outline-none" />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="message" className="text-[14px] font-semibold text-[#1a1a1a]">Describe your topic</label>
            <textarea id="message" name="message" className="min-h-[120px] w-full resize-y rounded border border-[#e0e0e0] bg-white px-4 py-3 text-[16px] focus:border-primary focus:outline-none" rows={4} placeholder="Tell us about your project or challenges you're facing so we could figure out how to help" />
          </div>
          <button type="submit" className="btn btn-primary btn-lg mt-6 w-full">Send request</button>
          <p className="mt-4 text-center text-[14px] text-[#666666]">
            By submitting the form you agree to{" "}
            <a href="/legal/privacy-policy">Privacy Policy</a> and{" "}
            <a href="/legal/cookie-policy">Cookie Policy</a>.
          </p>
        </form>
      </div>
    </section>
  );
}
