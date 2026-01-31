---
{
  "url": "https://www.health-samurai.io/articles/how-we-handle-settings",
  "title": "🔥 How we handle settings",
  "description": "Any program has stages of its life. Startup, initialization, regular working, cleanup, error, shutdown. At all of these stages, the program (say, Aidbox) needs to know its settings to behave in ways the user expects.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/68063686776e649122310c1c_image.png",
  "author": "",
  "slug": "how-we-handle-settings"
}
---

Any program has stages of its life. Startup, initialization, regular working, cleanup, error, shutdown. At all of these stages, the program (say, Aidbox) needs to know its settings to behave in ways the user expects. 

But settings might come from different places, like database or config files, and the program doesn’t have access to all of these from the start. For example, a database connection cannot be established if the program doesn’t know where to connect to. This is an engineering problem of deciding how to bootstrap Aidbox from no settings to proper user-configured system.

We solve it with multi-stage initialization. First, we take essential settings from environment variables. With these, we start the database and take more settings from there. And after we have all the vital settings, we can load the rest of the setting sources (like additional configuration files) and apply them to Aidbox.

With this multi-stage approach, Aidbox [FHIR server starts](https://www.health-samurai.io/aidbox) with no knowledge of settings and builds up the understanding of these reliably and predictably.
