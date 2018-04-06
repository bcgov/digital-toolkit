---
title: REST API Development Standard
guide: REST API Development Standard
logo: restapi.jpg
---

This is a supporting guide to the standards for the development of REST APIs. This guide supports the standards of the Government of British Columbia, approved by the Chief Information Officer (CIO) and available as the [REST API Development Standard Guide](http://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/information-technology-services/standards-files/rest_api_development_standard.pdf).

The contents of this guide rely heavily on the REST API standards work of the:

* BC Ministry of Jobs, Trade, and Technology DataBC Branch
* Government of Canada Web Standards Office (WSO) Web Interoperability Working Group (WIWG)
* BC Ministry of Transportation and Infrastructure, Information Management Branch
* BC Corporate Services for Natural Resources (CSNR)
* Government of Australia Digital Transformation Office
* 18F

The goal of this document is to ensure that the delivery of REST API across the Government of British Columbia (BCGov) is consistent and up to the highest standards by defining a base level of delivery and only describing expansion when further comment is required.

The intent is to maintain a living document that is collaboratively written and adapts to changes in the landscape of REST API delivery but at the same time being mindful of established and mandated standards presently adopted inside and outside the BCGov.

_Note: It's expected that anything not described in this document is to be implemented from best practices with an eye to interoperability, maintainability and future direction. Gaps, errors or new best practices should be brought to the Office of the Chief Information Officer (OCIO) Architecture Standards and Planning Branch (ASPB)._

BCGov REST APIs aim to balance a truly RESTful API interface with a positive developer experience (DX).

### Using This Guide

This guide is organized into three main sections, which describe REST API requirements in order of priority:

* Minimum delivery
* Optional features
* Best practices

#### Topics Not Included

There are some subject areas that for various reasons could not be accommodated in the time available. At some future point more topics will be addressed.

Topics not covered in this guide today, but certainly planned, are:

* API documentation 
* API consoles
* an API Registry
* Hosting REST APIs
* Identity management
* Security

#### Style Guide

Document code, arguments and other undefined technical statements will be code fenced as to be easily distinguishable from standard text.

Arguments text will be presented as follows:

* Arguments stated as a header will be followed by a colon ':' as `argument:`
* Arguments stated as a URI argument will be followed by an the equals sign '=' as `argument=`
* Arguments stated as a URI path element will be bracketed with forward slashes '/' as `/argument/`
* Arguments stated as a file format extension will be prefaced with a period '.' as `.arg`
