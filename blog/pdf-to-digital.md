---
{
  "url": "https://www.health-samurai.io/articles/pdf-to-digital",
  "title": "🔥 Digitize paper medical forms in seconds: Helping doctors focus on patients, not paperwork",
  "description": "The digital transformation of healthcare is all about using technology to improve patient outcomes. This includes integrating digital tools and platforms into healthcare, from electronic health records and e-prescriptions to wearable devices and AI-based applications.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/671798562b87804da03fe710_tg_image_1818869044.jpeg",
  "author": "",
  "slug": "pdf-to-digital"
}
---

## Digitize forms

**Digitize Paper Medical Forms in Seconds: Helping Doctors Focus on Patients, Not Paperwork**

The digital transformation of healthcare is all about using technology to improve patient outcomes. This includes integrating digital tools and platforms into healthcare, from electronic health records and e-prescriptions to wearable devices and AI-based applications.

Despite the progress in digitizing healthcare, many medical facilities still rely on paper forms to collect patient information. This creates delays between collecting data from the patient and entering it into the system and at the same time it can lead to errors during data entering. Electronic forms help avoid these issues.

Medical electronic forms are often based on standardized paper forms that have been refined through years of practice.

On average, a small specialized clinic may use around **100-150 different medical forms**. Converting these paper forms into electronic formats could take anywhere from **30 to 150 days**, depending on the complexity and the tools used for digitization.

To make this conversion process faster, we’ve developed a feature that uses artificial intelligence (AI) and OCR (optical character recognition) to convert paper forms into electronic versions. This feature extracts text from PDF files and creates a corresponding JSON structure representing the form.****

## How to digitize forms

**How It Works**

1. You upload a PDF file, and all images from the file will be shown in a preview mode.

2. The text content from the PDF is extracted using OCR and AI tools. This extracted content is converted into JSON format and displayed for review.

3. You’ll be asked to provide an OpenAI API key* to help generate the form from the extracted content.

4. After processing, the AI-generated JSON will be available for you to review, edit, and check for any errors. The system will flag any issues that need attention.

5. We’ve added a calculator that automatically estimates the cost of generating this form for you.

6. Once you’ve reviewed the content, you can click “Generate” to import the form and open it in the Aidbox Form Builder.

7. You’ll get a basic version of the electronic form. From there, you can refine the layout, swap out widgets for more appropriate ones, and add any missing content.

* Your OpenAI API key is used securely and remains private. It is neither transferred nor stored on any [backend servers](https://www.health-samurai.io/fhir-server) or third-party services. All interactions with OpenAI happen locally in your browser, ensuring your API key is protected throughout the process.

**Which Forms Work Best with This Feature**
- Consent forms
- [Medical questionnaires](https://www.health-samurai.io/forms-product)
- Single-column forms
- Forms with simple layouts
- "Non-dense" forms that don’t contain large volumes of information

**Challenges We Faced and How We Solved Them**

When converting multi-page or “dense” forms, the JSON would sometimes get cut off due to the context size limitation in ChatGPT-4o. Sending multiple pages as JPEG files consumed a significant portion of the available context, leaving less room for the JSON output, which made handling larger forms difficult.

**Solution**: We initially tried sending the pages at lower resolutions and compressing the images to reduce file size. However, this led to a noticeable loss of quality and accuracy in text recognition. To address this, we added an additional OCR step that processes the original high-quality images first. This combination allowed us to achieve an optimal size without losing context.

Another challenge was writing the prompt for OpenAI to handle form conversion effectively. This was difficult because medical forms often have complex structures, including closely grouped items, conditional logic, and intricate layouts. A generic prompt could easily misinterpret these relationships, leading to incorrect grouping or missing dependencies.

**Solution**: By processing different forms, we took into account various scenarios, like grouping items that are placed closely together or capturing dependencies (e.g., conditional logic) in the [form structure](https://www.health-samurai.io/forms-product).

We’ve already built a strong foundation with our current version, and we’re excited to further enhance its capabilities to handle more complex paper forms, such as:
- Multi-column forms
- Forms with complex layouts, such as tables or with dividers
- Multi-page forms or “dense” forms with lots of details on one page
- Poorly scanned documents

Creating a form from scratch is always a more time-consuming process, so this feature helps save time and effort.

Advancements in technology are bringing tremendous value to both doctors and patients, improving all aspects of healthcare!

If you have a backlog of paper forms, try out our new PDF conversion feature along with the No-code Form Builder to speed up your digitization process.

> To experiment with transforming paper forms yourself, try for free with [the Public Builder](https://form-builder.aidbox.app/?utm_source=blog&utm_medium=pdf&utm_campaign=cta)

## Digitize paper forms



*Author*: 
[**Maria Ryzhikova**](https://www.linkedin.com/in/maria-ryzhikova-55983079/), 
Product Manager at Health Samurai

Co-author:
[**Olim Saidov**](https://www.linkedin.com/in/olim-saidov-264898125/),
Full-Stack Software Engineer at Health Samurai
