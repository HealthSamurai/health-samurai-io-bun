---
{
  "url": "https://www.health-samurai.io/articles/enhancing-sdc-workflows-with-ai-video-maria-ryzhikova-at-fhir-devdays-2025",
  "title": "🔥 [Video] Enhancing SDC Workflows with AI – Maria Ryzhikova at FHIR DevDays 2025",
  "description": "Designing FHIR SDC Questionnaires from paper forms is repetitive and error‑prone. This DevDays session by Maria Ryzhikova shows how Aidbox Forms uses AI to generate Questionnaire templates from PDFs, add scoring logic, and create multilingual forms using FHIR translation extensions.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/68aef2efb14ccebe22668ab6_Group%203.png",
  "date": "2025-12-15",
  "author": "Maria Ryzhikova",
  "slug": "enhancing-sdc-workflows-with-ai-video-maria-ryzhikova-at-fhir-devdays-2025"
}
---

This post is part of a series on Health Samurai sessions from HL7 FHIR DevDays 2025. In this article, “Enhancing SDC workflows with AI: Automation and beyond,” Aidbox Forms Product Manager Maria Ryzhikova shows how AI can reduce manual work in FHIR SDC Questionnaire design, multilingual support, and other data-capture workflows.

**What you&#x27;ll learn:**
- How FHIR SDC extends Questionnaire/QuestionnaireResponse with logic, rendering, and extraction features.
- How AI can turn a clinical PDF into a starter FHIR Questionnaire.
- How multilingual SDC forms can be generated and maintained using FHIR’s translation extensions.
- Which SDC areas are next candidates for AI assistance (expressions, prefill, extraction, conversational filling).



## SDC basics and why AI helps

FHIR SDC builds on Questionnaire and QuestionnaireResponse, adding conditional logic, UI rendering rules, pre-filling, and structured extraction so complex forms can be implemented in a consistent way. Designing these forms is labor-intensive: implementers must define complex nested branched structure, author FHIRPath expressions, configure prefill logic, and map responses into other FHIR resources. . AI changes this by generating the basic FHIR Questionnaire from scratch, eliminating manual effort, reducing development time, and minimizing typing errors.


![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/693ff5dcd72926964b930010_Frame%203399.png)


## From PDF to Questionnaire

The session demonstrates converting the GAD‑7 anxiety screening PDF into a FHIR Questionnaire. A PDF is uploaded to the Aidbox [**Public Form Builder**](https://form-builder.aidbox.app/), OCR extracts text and layout, and an AI model proposes a Questionnaire structure that mirrors questions and answer options. The generated JSON is then validated, issues are corrected, and the Questionnaire is stored on a FHIR server and opened in the Form Builder, where layout, widgets, and scoring (for example, total score via FHIRPath) are refined. AI supplies a structured starting point instead of requiring a fully manual build.



## Multilingual questionnaires with AI

Maria also shows how the same form can be maintained in multiple languages without duplicating Questionnaires. A default language is set on the Questionnaire, a target language is chosen, and an AI-based interface generates translations for item text and answer labels. These translations are stored in a Questionnaire using standard FHIR translation extensions and can be reviewed and edited. Switching the active language re-renders the form (for example, English vs French) from the same underlying Questionnaire definition.



## Future AI directions in SDC

Planned and experimental uses of AI in SDC aim to streamline form design and broaden accessibility. Key applications include:
- Generating calculated expressions, prefill rules, and extraction mappings from simple textual prompts.
- Building complete forms from narrative descriptions.
- Analyzing existing forms to identify common parts and create reusable components.
- Guiding users through forms via conversational or voice interfaces.
- Converting PDFs into QuestionnaireResponses to digitize entire medical workflows.

These features open SDC to non-technical users and cut design time dramatically.
![](https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/693ff66807a97a291803dcca_Frame%203400.png)


## Resources

Watch Maria&#x27;s full presentation from FHIR DevDays 2025 and the complete Health Samurai playlist:[**
Watch the full video
Full playlist on YouTube**](https://youtu.be/3dCJQylKzPI)

Connect with Maria on [**LinkedIn**](https://www.linkedin.com/in/maria-ryzhikova-55983079/).

Try Aidbox Forms and its [**Public Builder**](https://form-builder.aidbox.app/) to experiment with PDF-to-Questionnaire conversion, validation, and multilingual SDC forms.


