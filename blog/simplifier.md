---
{
  "url": "https://www.health-samurai.io/articles/simplifier",
  "title": "🔥 How to upload IG from simplifier",
  "description": "Simplifier is a FHIR package registry that stores basic and custom FHIR packages.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/68063718b42b5f24c47145ec_image.png",
  "author": "",
  "slug": "simplifier"
}
---

## IG from simplifier

Aidbox allows users to upload any package from simplifier.net in just a couple of clicks.
In this post, we will describe a tutorial on how to upload an arbitrary FHIR package to Aidbox.
First, you need to start Aidbox. You can start Aidbox locally using Docker, or register on our user portal and create your own Aidbox instance in our Sandbox.

**Run Aidbox in Sandbox**
- Sign up or log in at[ aidbox.app](https://aidbox.app)
- Go to your project
- Click "New Aidbox" to create a new instance
- Enter a name in the "License name" field
- Set hosting type to "Sandbox"
- Enter Instance URL.
- Set FHIR Version

**Run Aidbox locally**

1. Create a working directory:

```javascript
mkdir aidbox && cd aidbox
```

2. Download the Aidbox setup script:

```javascript
curl -JO https://aidbox.app/runme && docker compose up
```



## Import FHIR Package from Simplifier

After starting Aidbox and completing the authorization, you need to open the FHIR package import page. To do this, select the “**FHIR Packages**” section in the left navigation menu, then click the “**Import FHIR Package**” button.

On the opened page, three options for uploading a package are offered:
	•	Select a package from the built-in registry;
	•	Specify a link to the package;
	•	Upload the package as a file.

In our case, we will choose the second option — specify a link to the package from the **Simplifier** website in the format:

```javascript
 https://packages.simplifier.net/{package-name}/{package-version}
```

For example, to upload US Core version 5.0.1, we use the link:

```javascript
https://packages.simplifier.net/hl7.fhir.us.core/5.0.1
```

After that, click the “**Import**” button.
Aidbox will automatically upload the specified package and all its dependencies.


Useful links:

[	•	Run FHIR Server locally](https://docs.aidbox.app/getting-started/run-aidbox-locally)

[	•	Upload FHIR Implementation Guide](https://docs.aidbox.app/readme-1/validation-tutorials/upload-fhir-implementation-guide)

[	•	Public URL to IG Package](https://docs.aidbox.app/readme-1/validation-tutorials/upload-fhir-implementation-guide/aidbox-ui/public-url-to-ig-package)

[	•	Bootstrap FHIR package list](https://docs.aidbox.app/reference/settings/general#bootstrap-fhir-packages)
