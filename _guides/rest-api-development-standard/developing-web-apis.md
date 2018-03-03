---
title: Developing Web APIs
guide: REST API Development Standard
---

Web APIs in the BC Government (BCGov) must be designed and developed according to RESTful architecture principles as described by Roy Thomas Fielding's dissertation "[Architectural Styles and the Design of Network-based Software Architectures](https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf)" (2000) adapted to mandated minimums for the BCGov and design choices in support of web interoperability. The intent is not to limit development to the prescribed minimums but to ensure that BCGov web APIs behave consistently and to balance a truly RESTful API interface with a positive developer experience (DX).

The [OCIO REST API Development Standard](http://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/information-technology-services/standards-files/rest_api_development_standard.pdf) document contains the mandated minimum attributes.

### Pragmatic REST

The guidelines outlined in this document aim to support a truly RESTful API, with some exceptions such as:

* Put the version number of the API in the URL (see examples below).
* Don’t accept any requests that do not specify a version number
* Allow users to request formats such as JSON or XML like this:

```html
http://example.bcgov/api/v1/magazines.json
http://example.bcgov/api/v1/magazines.xml
```

Any and all other requirements or options _not_ described in this guide may be implemented at the discretion of the REST API owner as long as the minimum delivery and delivery standard of optional features are met.
