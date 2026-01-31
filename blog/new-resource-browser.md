---
{
  "url": "https://www.health-samurai.io/articles/new-resource-browser",
  "title": "🔥 New Resource Browser",
  "description": "Resource Browser is the core of Aidbox. It’s useful to review the loaded resources and make decisions based on that.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/680632603591b3a77e146585_image.png",
  "author": "",
  "slug": "new-resource-browser"
}
---

## FHIR Resource Browser is the core of Aidbox

It’s useful to review the loaded FHIR resources and make decisions based on that. But the problem with our old Resource Browser was that it was displaying data in JSON—relatively unreadable data format. It was still useful, but one had to process it themselves to get some value out of it.

Today, most of the Resource Browser data with type information has a custom display based on its type. I.e. human names display as “Ms. Jane Doe”, addresses display with a line, street, city, and state. **FHIR-**[**first resources**](http://www.health-samurai.io/articles/extending-fhir-resources) are especially good for that—they provide all the necessary information for turning data into text.

Aidbox tries to process resource contents to an understandable format, but that is not always possible, especially for custom data extending FHIR. In case there’s no information on what format fits the given resource property, we fall back to the old JSON display, but that’s a rare case and most of the data displays readably.

There’s more to it than just text, though! Some references (as per FHIR requirements) link two FHIR resources against each other, and you can follow these links without processing the data yourself. For example, US Core Procedure resources have links to Encounters, Locations, and Patients, and you can click on these links to jump to respective resources and work with them—without leaving the Resource Browser.

Try [free development FHIR server](https://www.health-samurai.io/aidbox)


