import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Pricing",
  description: "Aidbox pricing plans - choose the right plan for your healthcare application.",
  stylesheets: ["/devlink/pricing.css"],
};

// Cache the HTML in production, read fresh in dev for easier iteration
let pricingHtmlCache: string | null = null;

async function getPricingHtml(): Promise<string> {
  if (!pricingHtmlCache || process.env.NODE_ENV !== "production") {
    pricingHtmlCache = await Bun.file("public/devlink/pricing.html").text();
  }
  return pricingHtmlCache;
}

// Vanilla JS for Webflow tab switching (Yearly/Monthly toggles)
const tabSwitchScript = `
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Handle Webflow-style tab switching
  document.querySelectorAll('.w-tab-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var tabId = this.getAttribute('data-w-tab');
      // Find the parent .w-tabs container
      var tabsContainer = this.closest('.w-tabs');
      if (!tabsContainer) return;
      
      // Deactivate all tab links in this container
      tabsContainer.querySelectorAll('.w-tab-link').forEach(function(l) {
        l.classList.remove('w--current');
      });
      // Activate clicked link
      this.classList.add('w--current');
      
      // Hide all tab panes in this container
      tabsContainer.querySelectorAll('.w-tab-pane').forEach(function(pane) {
        pane.classList.remove('w--tab-active');
      });
      // Show the matching pane
      var targetPane = tabsContainer.querySelector('.w-tab-pane[data-w-tab="' + tabId + '"]');
      if (targetPane) {
        targetPane.classList.add('w--tab-active');
      }
    });
  });
});
</script>
`;

export default async function PricePage(): Promise<string> {
  const pricingHtml = await getPricingHtml();
  return (
    <Fragment>
      <div dangerouslySetInnerHTML={{ __html: pricingHtml + tabSwitchScript }} />
    </Fragment>
  );
}
