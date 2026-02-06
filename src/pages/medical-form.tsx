import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "FHIR-Compliant Medical Forms for Healthcare Workflows",
  description:
    "Design, manage, and embed intelligent medical forms with ease. Fully customizable and compliant with healthcare standards. No-code form builder with FHIR SDC support.",
  stylesheets: ["/devlink/medical-form.css"],
};

// Cache the HTML in production, read fresh in dev for easier iteration
let htmlCache: string | null = null;

async function getPageHtml(): Promise<string> {
  if (!htmlCache || process.env.NODE_ENV !== "production") {
    htmlCache = await Bun.file("public/devlink/medical-form.html").text();
  }
  return htmlCache;
}

// Vanilla JS for Webflow tab switching (Appearance & Capabilities, Solution Architecture)
const tabSwitchScript = `
<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.w-tab-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var tabId = this.getAttribute('data-w-tab');
      var tabsContainer = this.closest('.w-tabs');
      if (!tabsContainer) return;
      
      tabsContainer.querySelectorAll('.w-tab-link').forEach(function(l) {
        l.classList.remove('w--current');
      });
      this.classList.add('w--current');
      
      tabsContainer.querySelectorAll('.w-tab-pane').forEach(function(pane) {
        pane.classList.remove('w--tab-active');
      });
      var targetPane = tabsContainer.querySelector('.w-tab-pane[data-w-tab="' + tabId + '"]');
      if (targetPane) {
        targetPane.classList.add('w--tab-active');
      }
    });
  });
});
</script>
`;

// Vanilla JS for Webflow "Read more / less" toggle (Solution Architecture)
const readMoreScript = `
<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.button-ico').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var hideContent = this.closest('.hide-content') || this.parentElement.querySelector('.hide-content');
      if (!hideContent) {
        // Try to find it as a sibling or nearby element
        var parent = this.closest('[class*="col"]') || this.parentElement;
        hideContent = parent.querySelector('.hide-content');
      }
      var readBtn = this.querySelector('.read');
      var lessBtn = this.querySelector('.less');
      
      if (hideContent) {
        var isOpen = hideContent.style.height !== '0px' && hideContent.style.height !== '';
        if (isOpen) {
          hideContent.style.height = '0px';
          hideContent.style.overflow = 'hidden';
        } else {
          hideContent.style.height = 'auto';
          hideContent.style.overflow = 'visible';
        }
      }
      if (readBtn && lessBtn) {
        var readVisible = readBtn.style.display !== 'none';
        readBtn.style.display = readVisible ? 'none' : 'block';
        lessBtn.style.display = readVisible ? 'block' : 'none';
      }
    });
  });
});
</script>
`;

export default async function MedicalFormPage(): Promise<string> {
  const pageHtml = await getPageHtml();
  return (
    <Fragment>
      <div
        dangerouslySetInnerHTML={{
          __html: pageHtml + tabSwitchScript + readMoreScript,
        }}
      />
    </Fragment>
  );
}
