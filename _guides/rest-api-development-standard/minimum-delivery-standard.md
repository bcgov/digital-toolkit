---
title: Minimum Delivery Standard
guide: REST API Development Standard
---

This section describes mandatory elements in input, output and maintenance that should be found in a BCGov REST API.

<!-- TOC -->

* [HTTP Methods](#http-methods)
  * [References](#references)
* [RESTful URLs](#restful-urls)
  * [Examples of Good URLs:](#examples-of-good-urls)
  * [Examples of Bad URLs:](#examples-of-bad-urls)
* [Output](#output)
  * [Minimum Formats](#minimum-formats)
  * [Metadata](#metadata)
* [Error Handling](#error-handling)
* [Versioning](#versioning)
* [Documentation](#documentation)
  * [Ensure APIs are discoverable and documented](#ensure-apis-are-discoverable-and-documented)
* [Dataset Segmenting](#dataset-segmenting)
  * [Limits](#limits)
  * [Offsets](#offsets)
  * [Pages](#pages)
  * [Cursor](#cursor)
  * [Dataset Segmenting Metadata](#dataset-segmenting-metadata)
* [Cross-Origin Resource Sharing](#cross-origin-resource-sharing)

<!-- /TOC -->

### HTTP Methods

This standard provides guidance on HTTP methods, often described in APIs as verbs. Verbs refer to standard actions taken on data; those standard verbs are:

* POST
* GET
* PUT
* DELETE

The action taken on the representation will be contextual to the media type being worked on and its current state.

Here's an example of how HTTP verbs map to create, read, update, and delete operations in a particular context.

Assuming:

* Dogs is a list of all dogs
* Dog ID 1234 is an instance of dog named "Bogart"
* Dog ID 4321 is an instance of dog named "Rover"

| HTTP Method  | POST            | GET         | PUT              | DELETE          |
| ------------ | --------------- | ----------- | ---------------- | --------------- |
| CRUD OP      | CREATE          | READ        | UPDATE           | DELETE          |
| `/dogs`      | Create new dogs | List dogs   | Bulk update dogs | Delete all dogs |
| `/dogs/1234` | Error           | Show Bogart | Update Bogart    | Delete Bogart   |
| `/dogs/4321` | Error           | Show Rover  | Update Rover     | Delete Rover    |

#### References

HTTP Methods are described by W3C RFC2616 Sections 9.3, 9.4, 9.6 and 9.7 (<http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html>).

### RESTful URLs

To meet minimum delivery of BCGov RESTful URLs, the URL MUST:

* Identify a resource
* Include nouns, not verbs (when possible)
* Use plural nouns (no singular nouns)
* Use HTTP verbs (GET, POST, PUT, DELETE) to operate on the collections and elements
* Include the version number at the base of the URL (for example, `http://example.com/_v1_/path/to/resource`).
* Use a comma-separated list to specify optional fields
* Convey parameters as follows:
  * If the parameter impacts the logic you write to handle the response, put the parameter in the URL
  * If the parmeter does not impact the logic you write (for example, OAuth info), put the parameter in the request header

#### Examples of Good URLs:

* List of magazines: `GET http://www.example.bcgov/api/v1/magazines.json`
* Filtering is a query:
  * `GET http://www.example.bcgov/api/v1/magazines.json?year=2011&sort=desc`
  * `GET http://www.example.bcgov/api/v1/magazines.json?topic=economy&year=2011`
* A single magazine in JSON format: `GET http://www.example.bcgov/api/v1/magazines/1234.json`
* All articles in (or belonging to) this magazine: `GET http://www.example.bcgov/api/v1/magazines/1234/articles.json`
* All articles in this magazine in XML format: `GET http://example.bcgov/api/v1/magazines/1234/articles.xml`
* Specify optional fields in a comma separated list: `GET http://www.example.bcgov/api/v1/magazines/1234.json?fields=title,subtitle,date`
* Add a new article to a particular magazine: `POST http://example.bcgov/api/v1/magazines/1234/articles`

#### Examples of Bad URLs:

* Non-plural noun:
  * `http://www.example.bcgov/magazine`
  * `http://www.example.bcgov/magazine/1234`
  * `http://www.example.bcgov/publisher/magazine/1234`
* Verb in URL: `http://www.example.bcgov/magazine/1234/create`
* Filter outside of query string: `http://www.example.bcgov/magazines/2011/desc`

### Output

#### Minimum Formats

Leading API frameworks and present day implementation of APIs deliver two output formats:

* JSON
* XML

Trends are leading to JSON only APIs but development tools and applications may still support only one of the two options. To maximize the client base, a BCGov API _must_ output both JSON and XML at a minimum.

#### Metadata

Representing data about the returned dataset is required for proper operation of certain features. To avoid collision with the data and general interoperability, metadata _must_ be described in a variable in the response.

Two fields are required in the metadata variable:

* The creation date-time of the response in ISO 8601 date-time format with timezone
* The licenses relevant to the dataset presented

```json
{
  "metadata": {
    "request": {
      "dateCreated": "2014-01-01T00:00:00+00:00"
    },
    "licenses": [
      "http://example.bcgov/license-eng.php",
      "http://data.bcgov/eng/open-government-licence-bc"
    ]
  }
}
```

Where possible describe the dataset validity, additional licenses and publishers with Schema.org as the namespace.

```json
{
  "metadata": {
    "request": {
      "dateCreated": "2014-01-01T00:00:00+00:00"
    },
    "name": "Earthquakes >4 for 1992",
    "description": "Earthquakes magnitude 4 or greater, 1992 calendar year",
    "keywords": "earthquake data",
    "publisher": "Government of Canada",
    "dateCreated": "1867-07-01T00:00:01+00:00",
    "dateModified": "1982-03-29T00:00:01+00:00"
  }
}
```

In the previous example we show how `dateCreated` for the request doesn't collide with the `dateCreated` describing the data.

##### References

* <http://schema.org/name>
* <http://schema.org/description>
* <http://schema.org/keywords>
* <http://schema.org/dateModified>
* <http://schema.org/publisher>
* <http://schema.org/dateCreated> - Use of timezones in ISO 8601
* [The world is using json](https://www.google.com/trends/explore?q=xml+api#q=xml%20api%2C%20json%20api&cmpt=q)

### Error Handling

Although errors can be represented by HTTP status code alone structured error handling improves the ability to resolve issues for both consumer and maintainer.

BCGov REST APIs should provide useful error messaging such as that included in the example below:

```json
{
  "metadata": {
    "request": {
      "status": 400,
      "errorMessage":
        "Verbose, plain language description of the problem. Provide developers suggestions about how to solve their problems here",
      "errorCode": "444444",
      "moreInfo": "http://example.bcgov.ca/developer/path/to/help/for/444444"
    }
  }
}
```

The three base states BCGov REST APIs _must_ recognize are:

* success
* improper request (client error)
* internal server error (API error)

These are better defined by the following HTTP status codes:

* 200 - OK
* 400 - Bad Request
* 500 - Internal Server Error

Where possible, BCGov REST APIs should use the appropriate HTTP status codes such as the following:

* `304 Not Modified` when the resource has not changed since the last reload or will not change
* `404 Not found` when a requested entity does not exist

### Versioning

Versioning, from a RESTful approach, is an anti-pattern (commonly done but not a good thing to do); however, for development purposes, versioning is a necessity.

Versioning should be done as in the following examples:

* `http://example.gov/api/v1/magazines.json`
* `http://example.gov/api/v1/magazines.xml`

Other considerations:

* REST APIs should be released with a version number
* Numerical major version numbers are required if a change produces changes in logic
* Versions should be integers, not decimal numbers, prefixed with 'v'. For example
  * Good: `v1, v2, v3`
  * Bad: `v-1.1, v1.2, 1.3`
* Depreciated APIs should maintain at least one version back

### Documentation

#### Ensure APIs are discoverable and documented

For APIs to be used, they must be discoverable and documented. Developers often cite the requirement for good documentation as the single most important quality of APIs. Publish API documentation and provide a link to the documentation from the API endpoint. Provide feedback and support channels for API users.

Consider using some sort of _literate system_ that generates the API documentation from API code (or visa versa), to ensure that there is always a precise alignment between the API and its documentation. The BC Developers' Exchange has an API listing and discovery service that leverages [SWAGGER.io](http://SWAGGER.io). Consider using this service and an open source API specification tool to simplify and standardize the means by which APIs are documented.

All APIs that are published should be adequately documented and supported by the agency that produces them.

### Dataset Segmenting

Applying limits to returned data is nearly always mandatory. If querying an API with a small dataset, however, it is likely safe to implement without a default or hard maximum limit. Also important when considering applying limits is the consideration for client requirements on limited platforms such as mobile devices.

#### Limits

* If no limit is specified, return results with a default limit
  * Sanity check to a reasonable return size
  * Sanity check to a reasonable execution time
  * For small datasets limits may exceed row count
* Limits are row / object limits
  * The organization decides what is to be in a row or object
  * Limits apply to the topmost logical row or object

Limits are to be defined as the singular `limit=` followed by an integer.

#### Offsets

Offsets apply to the structured data returned from the API distinct from internal indexing in the data. For the purpose of explanation we'll assume rows/objects return are numbered 1, 2, 3, 4, 5 to the limit.

The general logic is to shift to what would be the subsequent entry by the offset amount. For a query that returns 1,2,3 an offset of 1 should return 2,3,4.

Offsets are to be defined as the singular `offset=` followed by an integer.

##### Example

```html
http://example.bcgov/api/dogs?limit=25&offset=75
```

For row is base 1, rows 76 through 100 should be returned

#### Pages

Much like offsets, `page=` is an offset incremented by the `limit=` argument. If `limit=` is set to 25 and `page=` is set to 2, the total offset is 50; if the `page=` is set to 3, the total offset is 150.

##### Example

```html
http://example.bcgov/api/dogs?limit=25&page=3
```

For row is base 1, rows 76 through 100 should be returned

#### Cursor

`cursor=` is a value based on the database index used for results returned. This is also called "index-based pagination" because a service may use a database index to generate the results requested with fewer resources than with a page or offset.

Use `cursor=` to reliably iterate over results without risk of skipping or receiving duplicate rows/objects due to insertions/deletions. Also use `cursor=` instead of large values to `page=` or `offset=` to avoid potential service performance issues.

The string value used with `cursor=` is returned in the metadata of each response when any rows/objects are returned. Typically, it is a single value copied from the last row/object, and could be a date, name, internal ID or any other sortable type.

##### Example

`http://example.gc.ca/api/dogs?limit=25&cursor=20130101.010101`

For 25 rows following the row containing the sort order value "20130101.010101"

#### Dataset Segmenting Metadata

Information relevant to record limits, offsets and cursors should also be included as described in the example response as a nested element. Only relevant elements ("count", "limit", "offset", "page" and "cursor") are required.

```json
{
  "metadata": {
    "request": {
      "count": 25,
      "limit": 25,
      "page": 3
    }
  }
}

...

{
  "metadata": {
    "request": {
      "count": 25,
      "limit": 25,
      "offset": 75
    }
  }
}

...

{
  "metadata": {
    "request": {
      "count": 18,
      "limit": 25,
      "cursor": "20130101.010101"
    }
  }
}
```

### Cross-Origin Resource Sharing

Many mobile and web-based applications use client-side JavaScript. Inherently, browser engines have a built-in mechanism to prevent cross-site scripting (XSS). However, it may be appropriate for some REST APIs to allow client-side JavaScript to query data directly from the REST API.

In this scenario, the API response needs to include an HTTP header allowing a remote user access to the data. Such a header is defined as follows:

```apache
Access-Control-Allow-Origin\*
```

This header should be set as an HTTP response header for API responses, not site-wide.
