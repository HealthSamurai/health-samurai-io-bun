// Download all images from health-samurai.io and rename to semantic names

const imageMap: Record<string, string> = {
  // Logos
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff50e669ec50001a59b5d_health-samurai.webp": "logos/health-samurai.webp",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a3041c4d877230001fc7454_hslogo-footer.svg": "logos/health-samurai-footer.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/602a2c95b4409e38b2d23295_aidbox-logo.svg": "logos/aidbox.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/633ac72418675342e0eb95ee_aidbox_logo_mini.svg": "logos/aidbox-mini.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/602b2c21cb15ddc44931d527_aidbox-logo.svg": "logos/aidbox-alt.svg",

  // Client logos
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/64ba99d2e3fe0c7e42265e5d_innovaccer-logo-black.svg": "logos/clients/innovaccer.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/677c08fe2fbefa57cee94009_Prenosis_logo_328_49.png": "logos/clients/prenosis.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d15cbbc892a21c9ded6efa_naruslucent-removebg-preview%201.png": "logos/clients/narus-health.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb477c566d9cea62f52_BestNotes_Logo-to-use_1-768x168%201.webp": "logos/clients/bestnotes.webp",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb4d9547ec7a6917d3c_Healthie-logo%201.webp": "logos/clients/healthie.webp",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb4a2c54d0ea864cb16_Logo_PatientsCo%20HiRes%20(1)%202.webp": "logos/clients/patients-know-best.webp",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6811ffa3bd8873ca1d79e495_firenote-logo-reverse%202.png": "logos/clients/firenote.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6811f756ed6ce3acce94256a_Duodecim_idFuVC2K5H_1.png": "logos/clients/duodecim.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb49aaba578b2bb7cf9_naruslucent-removebg-preview%201.webp": "logos/clients/lucent-health.webp",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68e3da6d6bb804a0e39fba1d_novellia.png": "logos/clients/novellia.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67c7225871fabab5d9c6070c_4medica-logo.png": "logos/clients/4medica.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d1516b8c4a7141698cd721_f32fb6af-d4cf-440c-bf46-b0b3c48e9532-1559840009994%201.png": "logos/clients/deep6-ai.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6602b888409299ed4eef694b_Frame%20427319224%20(1).webp": "logos/clients/solutio.webp",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6542824da3496e9497e73349_Frame%20427319190(2).webp": "logos/clients/lucet.webp",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65426115ed1b936bef809059_prenosis-logo-color%202.webp": "logos/clients/prenosis-color.webp",

  // Icons
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/634d407529d4e111967296f9_rightArrow.svg": "icons/arrow-right.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e9a442bb239cfcd007e5c_Database%20%2B%20FHIR.svg": "icons/database.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e9a444fc720f2ad877e7d_API.svg": "icons/api.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e9a44bf8f6440a9a0bcc2_FHIR%20Artefact%20Registry.svg": "icons/artifact-registry.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e9a441cfd9ebadf77b357_AUTH.svg": "icons/auth.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e9a4419fe3f4c5c0e24b5_Translation%20Book.svg": "icons/terminology.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e9a4478a178659dd16f36_SDK.svg": "icons/sdk.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e9a44f6b12fad351dc0d6_UI.svg": "icons/ui.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/686e8235a3a841ff0ca34dca_tabler_cloud-lock.svg": "icons/cloud-lock.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/686e823631fe2d402be7fbca_hugeicons_laptop-cloud.svg": "icons/cloud-platform.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/686e82368145af9cd456809c_arcticons_serverbox.svg": "icons/server-box.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb64ecc3d84de30d0dcd21_Icon.svg": "icons/check-1.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb64ec4e626f8c3a5edb7c_Icon-1.svg": "icons/check-2.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb64ec61851e31b2b83524_Icon-2.svg": "icons/check-3.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb64eeac8ea42647f50f5c_Icon-4.svg": "icons/check-4.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb64ec52e20b3dc69cbd25_Icon-3.svg": "icons/check-5.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685ed29f75f82f051d8eb61d_Frame%2036648.svg": "icons/cdr-diagram.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685ed29d6b715ebceaf7d1ea_Frame%2036666.svg": "icons/cds-diagram.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685ed29e581ba3a750692c47_Frame%2036667.svg": "icons/phr-diagram.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685ed29e2f0e72e007f3f72e_Frame%2036646.svg": "icons/ehr-diagram.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6863d90045a0c35e2d919c14_%E2%86%92.svg": "icons/arrow.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/686fa1dfe8df7e0afe2876ce_Frame%2036675.svg": "icons/frame-diagram.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/686d0dc68af4c55a4a243a19_copy-btn.svg": "icons/copy.svg",

  // Hero images
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/602a28ac98d1176b464bf411_Group%2041%202.webp": "hero/aidbox-ui-demo.webp",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/686fa07bf31b7be70f15a633_Group%2035626.svg": "hero/deploy-diagram.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6870ffff419ece22b51500c1_Overlay%2BShadow.png": "hero/community-users.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68c9908ab15ccf71a60064f9_Frame%2036783.png": "hero/pricing-diagram.png",

  // Case study images
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68c98ef5488c4721457ef846_CDR.png": "case-studies/cdr-screenshot.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68c98f58d55d81e7ca21d529_CDS%20(1).png": "case-studies/cds-screenshot.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68c98efa20efecbd01fa64be_PHR.png": "case-studies/phr-screenshot.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68c98f1f395224ad225567ae_EHR.png": "case-studies/ehr-screenshot.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65f969814779cab0f386a569_Frame%20427319206.webp": "case-studies/innovaccer-case.webp",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/64b7faf920655fa9cbc616be_Prenosis_rgb_Primary%20logo-01.webp": "case-studies/prenosis-logo.webp",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6864137b9305ffbb48222765_Sonic_Healthcare_logo.svg": "case-studies/sonic-healthcare.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68603319e2f6fd7b2474d29d_image%2058.png": "case-studies/prenosis-screenshot.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68603480d2dfbb82152e9099_image%2060.png": "case-studies/phr-detail.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6860348007d49a56b4367b7c_image%2061.png": "case-studies/ehr-detail-1.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68603480c76979b990b95c63_image%2062.png": "case-studies/ehr-detail-2.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6863d9e6415e9381219aafec_image%2044.png": "case-studies/testimonial-avatar.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65f969ce86d54142331367e5_Frame%20427319209.webp": "case-studies/testimonial-bg.webp",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68c996507b5e7099546ed3ba_Frame%2036431%20(1).png": "case-studies/community-bg.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6863feeae06a3e78981dea5e_Frame%2036431.png": "case-studies/community-bg-alt.png",

  // Certifications
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d0332ca0d91f84e893638b_hippa-logo.png": "certifications/hipaa.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d03378e6aff704b281d613_ISOMark_27001-2022%202.svg": "certifications/iso-27001.svg",

  // Misc / FHIR contributions
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5c40627dd6b53e06e1b039c3_fbase-logo.svg": "misc/fhirbase-logo.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5c40629230dc10619b49ac4f_fhirjs-logo.svg": "misc/fhirjs-logo.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5c4062a39300276e08ea1253_fhirschema-logo.svg": "misc/fhir-schema-logo.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5c406461d6b53e4a20b03cba_fhirstarter.svg": "misc/fhir-camp.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5c406889d6b53e0560b040a1_meetupsf.svg": "misc/meetup-sf.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5c406899c55710355ff080ee_meetupeu.svg": "misc/meetup-eu.svg",

  // Pricing icons
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/686553f7c13d1b5210a990d9_Batch%203-11.svg": "icons/pricing-dev.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/686553f79f65dca0c3c60a73_Batch%203-08.svg": "icons/pricing-core.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/686553f77488c429eb6d6c20_Batch%203-09.svg": "icons/pricing-enterprise.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6865686c91e164b7564dcb58_Batch%203-12.svg": "icons/addon-1.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6865686b369ec68aecb9cc17_Batch%203-10.svg": "icons/addon-2.svg",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/69715049e7d99c871e9ec34b_smart-city.svg": "icons/smart-city.svg",

  // Blog subscription
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/632207aa3b981e44e5fead6a_subs.webp": "misc/subscribe-bg.webp",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/63220b0b1eab44742483eaf3_aidbox-blog.png": "misc/blog-header-1.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/63220b1d3c575e013c6f4a81_aidbox-blog-2.png": "misc/blog-header-2.png",

  // Additional client logos from fhir-server page
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e9183cbed907cb67cce03_logo12.png": "logos/clients/client-12.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/682360deced486a15d259a50_Client%20Logo6.png": "logos/clients/client-6.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/681220a90ec4a5ece4e13a9c_Bupa2.png": "logos/clients/bupa.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e918358ed3a1dac26c220_logo11.png": "logos/clients/client-11.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e918293ce421f3e03919e_logo09.png": "logos/clients/client-9.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e9182cadceb89ec18dfc3_logo10.png": "logos/clients/client-10.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917fb3e170118d96aafa_logo07.png": "logos/clients/client-7.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917fe610f1918530f585_logo08.png": "logos/clients/client-8.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917f6d7afde310aee2b9_logo05.png": "logos/clients/client-5.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917fd7a91fd1635f1deb_logo04.png": "logos/clients/client-4.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917feae91773d2d5d45f_logo06.png": "logos/clients/client-6-alt.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917f6b877edc34c44c86_logo02.png": "logos/clients/client-2.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917f64f5e7b49595df11_logo01.png": "logos/clients/client-1.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917f4eeff79f8be38e8e_logo03.png": "logos/clients/client-3.png",

  // Testimonial logos
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff4cc01961f08b45273_innovacer.avif": "logos/clients/innovaccer-testimonial.avif",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb63a235b8a68070ffea83_narus.png": "logos/clients/narus-testimonial.png",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff470a0544a70d06346_bestnotes.avif": "logos/clients/bestnotes-testimonial.avif",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff4a15ba5b8e3779e40_solutio.avif": "logos/clients/solutio-testimonial.avif",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff4483522792dac4de1_prenosis.avif": "logos/clients/prenosis-testimonial.avif",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff45a8c3e14c9a7e24d_medflow.avif": "logos/clients/medflow-testimonial.avif",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff42f1c2befa722cb52_willow.avif": "logos/clients/willow-testimonial.avif",
  "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff37ab675d943eba3d8_patients.avif": "logos/clients/patients-testimonial.avif",
};

const BASE_DIR = "./src/assets/images";

async function downloadImage(url: string, targetPath: string): Promise<boolean> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed to fetch ${url}: ${res.status}`);
      return false;
    }
    const fullPath = `${BASE_DIR}/${targetPath}`;
    await Bun.write(fullPath, res);
    console.log(`Downloaded: ${targetPath}`);
    return true;
  } catch (err) {
    console.error(`Error downloading ${url}:`, err);
    return false;
  }
}

async function main() {
  console.log(`Downloading ${Object.keys(imageMap).length} images...`);

  let success = 0;
  let failed = 0;

  for (const [url, path] of Object.entries(imageMap)) {
    const ok = await downloadImage(url, path);
    if (ok) success++;
    else failed++;
  }

  console.log(`\nDone! Success: ${success}, Failed: ${failed}`);
}

main();
