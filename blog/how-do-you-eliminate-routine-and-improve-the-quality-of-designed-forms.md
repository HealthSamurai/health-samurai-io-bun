---
{
  "url": "https://www.health-samurai.io/articles/how-do-you-eliminate-routine-and-improve-the-quality-of-designed-forms",
  "title": "🔥 How do you eliminate routine and improve the quality of designed forms?",
  "description": "Working with IT engineers, I&#x27;ve noticed a common trait: when faced with routine tasks, they seek ways to avoid them by creating libraries for reusing written code. Routine work consumes time and is prone to errors.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/665da1034576e85273103e53_Aidbox%20Forms.png",
  "date": "2024-05-17",
  "author": "Maria Ryzhikova",
  "slug": "how-do-you-eliminate-routine-and-improve-the-quality-of-designed-forms"
}
---

In the form design process, we encounter the same routine. As you explore different forms, you notice that some fields or entire sections are duplicated across them. You spend time reproducing what you&#x27;ve already done, ensuring consistency and repeating logic, such as prefilling these fields or making changes in multiple places later.

Now, in the Aidbox UI Builder, you can create a library of components tailored to your needs, give them names, and use them in any form. It allows you to:
- Speed up the form development process with a library of components
- Make forms consistent by extracting repeating parts into components
- Reduce the number of errors in form development

Users create custom components representing questions or a group of questions they want to reuse in other forms. These custom components include any form elements supported by the Aidbox UI Builder, such as text fields, checkboxes, dropdown lists, etc., and their attributes and rules.

There are two ways to use components in other forms:
- Add the component by reference. This allows you to make edits in one place (edit the component), and these changes will automatically be reflected in all forms that reference this component. For example, if a spelling error is made, you only need to correct it in the specific component, and there is no need to fix it in all forms.    
- Use the component as a template or snippet - copy and customize.

Our implementation is based on the [FHIR SDC](https://www.health-samurai.io/forms-product) specification and Modular Questionnaires. Each form is represented as an [FHIR Questionnaire](https://www.health-samurai.io/forms-product) resource and is stored in the database. In contrast, the component, as a Sub-Questionnaire, is also stored in the database as an FHIR Questionnaire resource with specific extensions. You can read more about this here.

Both forms and components are represented as Questionnaire resources as described in [Modular Questionnaires spec](https://build.fhir.org/ig/HL7/sdc/modular.html#modular-questionnaires). Component’s Questionnaires are labeled with specific extensions.

Using components provides greater flexibility in development and speeds up the form development process, making it more quality and consistent.

Dive into the details with our comprehensive [documentation](https://hubs.li/Q02wX58H0).

To implement these strategies and see the impact on your forms, consider using the [free version of Aidbox](https://www.health-samurai.io/aidbox#run). It offers a robust platform to experiment with form design and automation, providing all the necessary tools without any feature limitations.

    
    
    Follow US
