# Health Samurai Website Clone - Page Tasks

Clone each page from [health-samurai.io](https://health-samurai.io) into this project. For each page:
1. Clone the design, content, and functionality from the original
2. Test visually and dynamically 3 times
3. Commit and push

---

## Existing Pages (Review & Polish)

These pages already exist but may need review against the original:

- [ ] **Home Page** (`/`) - `src/pages/index.tsx`
- [ ] **FHIR Server** (`/fhir-server`) - `src/pages/fhir-server.tsx`
- [ ] **Aidbox Forms** (`/medical-form`) - `src/pages/medical-form.tsx`
- [ ] **Pricing** (`/price`) - `src/pages/price.tsx`
- [ ] **Contact Us** (`/contacts`) - `src/pages/contacts.tsx`
- [ ] **Case Studies** (`/casestudies`) - `src/pages/casestudies.tsx`
- [ ] **Blog** (`/blog`) - `src/pages/blog.tsx`
- [ ] **About Us** (`/company`) - `src/pages/company.tsx`

---

## Products (To Create)

- [ ] **Fhirbase** (`/fhir-database`) - `src/pages/fhir-database.tsx`
  - Database for FHIR resources

- [ ] **Auditbox** (`/auditbox`) - `src/pages/auditbox.tsx`
  - Audit logging solution

- [ ] **Aidbox E-Prescription** (`/e-prescription-module`) - `src/pages/e-prescription-module.tsx`
  - E-prescription functionality module

- [ ] **C-CDA to FHIR Converter** (`/c-cda-to-fhir-converter`) - `src/pages/c-cda-to-fhir-converter.tsx`
  - Document conversion tool

---

## Solutions (To Create)

- [ ] **Aidbox for Startups** (`/startups`) - `src/pages/startups.tsx`
  - Startup-focused offering

- [ ] **Aidbox for Data Platforms** (`/healthcare-data-platform-toolkit-aidbox`) - `src/pages/healthcare-data-platform-toolkit-aidbox.tsx`
  - Data platform toolkit

- [ ] **Telemed Development Toolkit** (`/telemedicine`) - `src/pages/telemedicine.tsx`
  - Telemedicine solution toolkit

- [ ] **EHR Development Toolkit** (`/ehr-toolkit`) - `src/pages/ehr-toolkit.tsx`
  - EHR development resources

- [ ] **ONC-certified FHIR API for EHRs** (`/fhir-api`) - `src/pages/fhir-api.tsx`
  - ONC certification info

- [ ] **FHIR API for Payers (CMS)** (`/payers`) - `src/pages/payers.tsx`
  - CMS compliance for payers

- [ ] **Services / Hire Engineers** (`/services`) - `src/pages/services.tsx`
  - Professional services offering

---

## Resources (To Create)

- [ ] **Downloads** (`/downloads`) - `src/pages/downloads.tsx`
  - Downloadable resources

- [ ] **Events and Webinars** (`/events`) - `src/pages/events.tsx`
  - Events calendar and webinars

---

## Company (To Create)

- [ ] **Careers** (`/careers`) - `src/pages/careers.tsx`
  - Job listings and culture

- [ ] **News** (`/news`) - `src/pages/news.tsx`
  - Company news and updates

- [ ] **Aidbox Partner Network** (`/partners`) - `src/pages/partners.tsx`
  - Partner program information

- [ ] **Open Source** (`/opensource`) - `src/pages/opensource.tsx`
  - Open source projects

---

## Community (To Create)

- [ ] **FHIR Meetups** (`/fhir-meetups`) - `src/pages/fhir-meetups.tsx`
  - Community meetup information

---

## Legal (To Create)

- [ ] **Privacy Policy** (`/legal/privacy-policy`) - `src/pages/legal/privacy-policy.tsx`
  - Privacy policy document

- [ ] **Cookie Policy** (`/legal/cookie-policy`) - `src/pages/legal/cookie-policy.tsx`
  - Cookie policy document

---

## Workflow for Each Page

```bash
# 1. Open the original page for reference
open https://health-samurai.io/<page-path>

# 2. Create the page file
# src/pages/<page-name>.tsx

# 3. Create associated styles if needed
# src/styles/<page-name>.css

# 4. Test locally 3 times
bun dev
# Visual check 1: Layout and spacing
# Visual check 2: Responsive design (mobile/tablet/desktop)
# Visual check 3: Interactive elements work

# 5. Commit and push
git add src/pages/<page-name>.tsx src/styles/<page-name>.css
git commit -m "Add <page-name> page clone from health-samurai.io"
git push
```

---

## Summary

| Category | Count | Status |
|----------|-------|--------|
| Existing (Review) | 8 | Review needed |
| Products | 4 | To create |
| Solutions | 7 | To create |
| Resources | 2 | To create |
| Company | 4 | To create |
| Community | 1 | To create |
| Legal | 2 | To create |
| **Total** | **28** | |
