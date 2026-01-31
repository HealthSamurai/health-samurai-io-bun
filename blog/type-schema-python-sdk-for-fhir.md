---
{
  "url": "https://www.health-samurai.io/articles/type-schema-python-sdk-for-fhir",
  "title": "🔥 Type Schema: Python SDK for FHIR",
  "description": "We recently announced Type Schema—a new, language‑agnostic way to build SDKs from FHIR packages. Today, let&#x27;s take a look at our Python SDK MVP and show how it streamlines FHIR development from first install to excellent developer experience.",
  "image": "https://cdn.prod.website-files.com/58ecfb695710f07cd0a35e9c/684ad677eaad118cb93c9d28_BgColor6.png",
  "date": "2025-06-12",
  "author": "Aleksandr Penskoi",
  "slug": "type-schema-python-sdk-for-fhir"
}
---

# **Type Schema: Python SDK for FHIR**



We recently announced [Type Schema](https://www.health-samurai.io/articles/type-schema-a-pragmatic-approach-to-build-fhir-sdk)—a new, language‑agnostic way to build SDKs from FHIR packages. Today, let&#x27;s take a look at our Python SDK MVP and show how it streamlines FHIR development from first install to excellent developer experience. Because it automatically generates strongly typed models and convenient client helpers, the SDK strips away hours of boilerplate coding and manual schema wrangling. The bottom line: teams can go from concept to a FHIR‑compliant prototype in a single afternoon, without diving deeply in FHIR specification.

In this post you&#x27;ll:
- Learn how to generate a Python SDK for any FHIR packages
- See the SDK in action, with type checking and error handling
- Discover options to customize the SDK for your own projects



## **Python SDK Overview**



Our Python SDK has two main parts:
- Operations—methods for create, read, update, delete, and search functions
- Resources and data types—classes such as Patient, Encounter, and Marital Status Code.

For this MVP, we focused mostly on resource definitions, keeping basic support for operations.

Built on [Pydantic](https://docs.pydantic.dev/latest/), the SDK delivers good validation and JSON-to-Python conversion, and works well with Python.



## **Generate SDK for Your FHIR Package**


- Install our generator:

```javascript
$ npm install -g @fhirschema/codegen
```
- Run the Python SDK generator:

```javascript
$ npx fscg generate -g python -p hl7.fhir.r4.core@4.0.1 -o my-python-project --py-sdk-package aidbox
```

where:
- `-p hl7.fhir.r4.core@4.0.1`—the FHIR package to use
- `-o my-python-project`—where to put your Python project
- `--py-sdk-package aidbox`—the name for your SDK package (all generated code will go in my-python-project/aidbox).

That&#x27;s it—you now have a ready-to-use Python SDK for FHIR R4.



## **No FHIR Server? Spin one up in 2 minutes**



Follow these steps:

1. Start Aidbox FHIR Server:

```javascript
$ curl -JO https://aidbox.app/runme/sdk && docker compose up --wait
```

2. Get Aidbox license (first time only): 

- Open [http://localhost:8080](http://localhost:8080/)
- Follow the setup instructions in your browser
- Get client secret from `BOX_ROOT_CLIENT_SECRET` environment variable from `docker-compose.yml` and use it in client initialization.



## **Connect to the FHIR Server**



Before you start working with the SDK, install the required Python dependencies. You can do this by running:

```javascript
$ cd my-python-project
$ pip install -r my-python-project/aidbox/requirements.txt
```

To work with a FHIR server using our SDK, you need to set up a client:

```javascript
from aidbox.client import Client, Auth, AuthCredentials

client = Client(
    base_url="http://localhost:8080/fhir",
    auth=Auth(
        method="basic",
        credentials=AuthCredentials(
            username="root",
            password="secret", # don&#x27;t forget to update
        ),
    ),
)
```

After that you can use client methods for CRUD operations: `client.create`, `client.read`, `client.update`, `client.delete`, and `client.search`.



## **Create & Process FHIR Resources**



Let&#x27;s create a Patient resource:
- Import the classes you need and create a Patient:

```javascript
from aidbox.hl7_fhir_r4_core import Patient, HumanName, Identifier
patient = Patient(
    identifier=[Identifier(system="http://org.io/id", value="0000-0000")],
    name=[HumanName(given=["John"], family="Doe")],
    gender="male",
)
```
- Save it to the server and see results:

```javascript
result = client.create(patient)
print(result.to_json(indent=2))
from pprint import pprint
pprint(result.model_dump(exclude_unset=True, exclude_none=True))
```

```javascript
{
  "resourceType": "Patient",
  "id": "859316db-8428-40ae-9a63-c2cbe088f540",
  "meta": {
    "extension": [
      {
        "url": "https://aidbox.app/ex/createdAt",
        "valueInstant": "2025-06-06T11:07:47.062435Z"
      }
    ],
    "lastUpdated": "2025-06-06T11:07:47.062435Z",
    "versionId": "195"
  },
  "gender": "male",
  "identifier": [
    {
      "system": "http://org.io/id",
      "value": "0000-0000"
    }
  ],
  "name": [
    {
      "family": "Doe",
      "given": [
        "John"
      ]
    }
  ]
}
```

```javascript
{&#x27;gender&#x27;: &#x27;male&#x27;,
 &#x27;id&#x27;: &#x27;859316db-8428-40ae-9a63-c2cbe088f540&#x27;,
 &#x27;identifier&#x27;: [{&#x27;system&#x27;: &#x27;http://org.io/id&#x27;, &#x27;value&#x27;: &#x27;0000-0000&#x27;}],
 &#x27;meta&#x27;: {&#x27;extension&#x27;: [{&#x27;url&#x27;: &#x27;https://aidbox.app/ex/createdAt&#x27;,
                         &#x27;valueInstant&#x27;: &#x27;2025-06-06T11:07:47.062435Z&#x27;}],
          &#x27;lastUpdated&#x27;: &#x27;2025-06-06T11:07:47.062435Z&#x27;,
          &#x27;versionId&#x27;: &#x27;195&#x27;},
 &#x27;name&#x27;: [{&#x27;family&#x27;: &#x27;Doe&#x27;, &#x27;given&#x27;: [&#x27;John&#x27;]}],
 &#x27;resourceType&#x27;: &#x27;Patient&#x27;}
```

The full example is available here: [example/python/main.py](https://github.com/fhir-schema/fhir-schema-codegen/blob/main/example/python/main.py).



## **Handling Errors with Type Checking & Run-time Validation**



What if we make a mistake? Let&#x27;s try adding a wrong field and value:

```javascript
Patient(
    name=[HumanName(family="Doe")],
    gender="FOO",            # wrong value
    some_data="1990-01-01",  # wrong field
)
```



First, let&#x27;s type check it. We can use mypy for it, but we need to enable pydantic.mypy plugin in mypy.ini:

```javascript
[mypy]
plugins = pydantic.mypy
```

Now we can run `mypy` to check our code:

```javascript
$ mypy . --strict
main.py:59: error: Unexpected keyword argument "some_data" for "Patient"  [call-arg]
Found 1 error in 1 file (checked 155 source files)
```

We get one static type error—not bad for Python!

Now let&#x27;s see what happens when we run it:

```javascript
$ python main.py
Traceback (most recent call last):
  File "/fhir-schema-codegen/example/python/main.py", line 59, in <module>
    Patient(
    ~~~~~~~^
        name=[HumanName(family="Doe")],
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        gender="FOO",  # wrong value
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        some_data="1990-01-01",  # wrong field
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/fhir-schema-codegen/example/python/venv/lib/python3.13/site-packages/pydantic/main.py", line 253, in __init__
    validated_self = self.__pydantic_validator__.validate_python(data, self_instance=self)
pydantic_core._pydantic_core.ValidationError: 2 validation errors for Patient
gender
  Input should be &#x27;male&#x27;, &#x27;female&#x27;, &#x27;other&#x27; or &#x27;unknown&#x27; [type=literal_error, input_value=&#x27;FOO&#x27;, input_type=str]
    For further information visit https://errors.pydantic.dev/2.11/v/literal_error
some_data
  Extra inputs are not permitted [type=extra_forbidden, input_value=&#x27;1990-01-01&#x27;, input_type=str]
    For further information visit https://errors.pydantic.dev/2.11/v/extra_forbidden
```

Now we see both errors with helpful messages:
- The exact code which raised the error
- The `gender` field error: what we provided (&#x27;FOO&#x27;) and what it should be
- The `some_data` field error: extra fields not permitted

Pretty nice!



## **Customizing Your SDK**



Here are some ways to customize the Python SDK:



### **Working with Non-Standard Resources**



Suppose your data includes extra attributes, like a Patient with a lotteryNumber:

```javascript
>>> patient_json = """
... {
...   "resourceType": "Patient",
...   "name": [ { "family": "Doe", "given": [ "John" ] } ],
...   "lotteryNumber": 123456
... }
... """
... patient = Patient.from_json(patient_json)
...
pydantic_core._pydantic_core.ValidationError: 1 validation error for Patient
lotteryNumber
  Extra inputs are not permitted [type=extra_forbidden, input_value=123456, input_type=int]
    For further information visit https://errors.pydantic.dev/2.11/v/extra_forbidden
```



By default, the SDK rejects this. To fix it, add the `--py-allow-extra-fields` flag when generating:

```javascript
$ npx fscg generate -g python -p hl7.fhir.r4.core@4.0.1 -o my-python-project --py-sdk-package aidbox --py-allow-extra-fields
```

Now you can:
- Parse JSON containing extra fields
- Send it to the FHIR server without the extra fields
- Access the extra fields in your code

```javascript
>>> p = Patient.from_json(patient_json)
>>> p.to_json()
{&#x27;resourceType&#x27;: &#x27;Patient&#x27;, &#x27;name&#x27;: [{&#x27;family&#x27;: &#x27;Doe&#x27;, &#x27;given&#x27;: [&#x27;John&#x27;]}]}
>>> p.model_extra
{&#x27;lotteryNumber&#x27;: 123456}
```

Note: This shows why code generation is better than a universal SDK. With generation, we can create simple, purpose-built code that&#x27;s easy to read. A universal SDK would need much more complicated code.



### **Add Support for Custom Resources**



Creating custom FHIR resources should be just as straightforward as using the standard ones. Just add your custom resource to the generation process.

Let&#x27;s look at a Health Samurai custom resource example: [Aidbox Notify via Custom Resources](https://github.com/Aidbox/examples/tree/main/aidbox-features/aidbox-notify-via-custom-resources).

In this demo project, we define custom resources by [FHIR Schema](https://github.com/fhir-schema/fhir-schema): `TutorNotificationTemplate` and `TutorNotification`. We can save them as JSON files and pass them to the SDK generator:

```javascript
npx fscg generate -g python -p hl7.fhir.r4.core@4.0.1 \
    --fhir-schema example/custom_resources/TutorNotification.fs.json \
    --fhir-schema example/custom_resources/TutorNotificationTemplate.fs.json \
    --py-sdk-package aidbox -o $(PYTHON_SDK_EXAMPLE)
```



And in the output we will find the generated code for these resources like:

```javascript
class TutorNotificationTemplate(DomainResource):
    model_config = ConfigDict(validate_by_name=True, serialize_by_alias=True, extra="forbid")

    resource_type: str = Field(
        default=&#x27;TutorNotificationTemplate&#x27;,
        alias=&#x27;resourceType&#x27;,
        serialization_alias=&#x27;resourceType&#x27;,
        frozen=True,
        pattern=&#x27;TutorNotificationTemplate&#x27;
    )

    template: str | None = Field(None, alias="template", serialization_alias="template")

    def to_json(self, indent: int | None = None) -> str:
        return self.model_dump_json(exclude_unset=True, exclude_none=True, indent=indent)

    @classmethod
    def from_json(cls, json: str) -> TutorNotificationTemplate:
        return cls.model_validate_json(json)
```

This lets you fit the SDK to your specific needs.

Note: Another benefit of code generation is easier upgrades. If you need to move to a new FHIR version, you can just regenerate the SDK. Your IDE will then highlight all the places where you need to update your code. This is much easier than trying to adapt a universal SDK.



## **Customizing SDK**



Need to change how the SDK works? Our generators are open source, so you can customize them. For example, if you only need to process FHIR data and don&#x27;t require a server connection, you can remove the client code.

There are three ways to do this:
- **Manual**: Just delete the files you don&#x27;t need after generation
- **Modify the generator**: 
Fork [fhir-schema-codegen](https://github.com/fhir-schema/fhir-schema-codegen/tree/main)
- Open src/generators/python/index.ts
- Find the generate method
- Remove the line with this.copyStaticFiles()
- Now you have a generator that only creates type definitions

- **Contribute**. Add a CLI flag like `--py-only-type` to the generator and submit a PR.



## **Ready to build?**



We&#x27;ve shown you how to generate and use our Python SDK for FHIR. The code works with static type checking and gives you great IDE support.

Explore the[ Python SDK Example](https://github.com/fhir-schema/fhir-schema-codegen/tree/main/example/python) and check [test_sdk.py](https://github.com/fhir-schema/fhir-schema-codegen/blob/main/example/python/test_sdk.py) for additional client methods.

*Generator source:*[ GitHub – fhir‑schema‑codegen
](https://github.com/fhir-schema/fhir-schema-codegen)*Type Schema spec:*[ GitHub – type‑schema](https://github.com//fhir-clj/type-schema)

Connect with me—[Aleksandr Penskoi](https://www.linkedin.com/in/aleksandr-penskoi/)—on LinkedIn to discuss your specific needs or join us in the [Type Schema Zulip Channel](https://chat.fhir.org/#narrow/channel/498057-Type-Schema).


