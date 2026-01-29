export function ContactForm(): string {
  return (
    <section className="contact section" id="contact">
      <div className="contact-inner">
        <div className="section-title">
          <h2>Contact us</h2>
          <p>Have a specific request? Get in touch and we'll set up a call</p>
        </div>
        <form className="contact-form" hx-post="/api/contact" hx-swap="outerHTML">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" id="name" name="name" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="company" className="form-label">Company</label>
              <input type="text" id="company" name="company" className="form-input" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Business email</label>
              <input type="email" id="email" name="email" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" id="phone" name="phone" className="form-input" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Describe your topic</label>
            <textarea id="message" name="message" className="form-input form-textarea" rows={4} placeholder="Tell us about your project or challenges you're facing so we could figure out how to help" />
          </div>
          <button type="submit" className="btn btn-primary btn-lg" style="width: 100%;">Send request</button>
          <p className="text-sm text-muted mt-4 text-center">
            By submitting the form you agree to{" "}
            <a href="/legal/privacy-policy">Privacy Policy</a> and{" "}
            <a href="/legal/cookie-policy">Cookie Policy</a>.
          </p>
        </form>
      </div>
    </section>
  );
}
