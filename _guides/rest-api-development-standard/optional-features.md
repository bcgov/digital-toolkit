---
title: Optional Features
guide: REST API Development Standard
---

### URI path filtering

URI based filtering, or clean URIs, can be used to specify arguments to the API in the resource path. Generally an aesthetic feature, clean URIs aid in caching and general adoption of an API.

Caching is best served when arguments, or URIs in general, are consistently represented. When encoding arguments in the URI, be consistent in the ordering and value representation, preferably using data logical order.

### Mock Responses WORK WELL

Implementing this feature early in development ensures that the API will exhibit consistent behaviour, supporting a test-driven development methodology.

Each resource should accept a 'mock' parameter on the testing server, and passing this parameter should return a mock data response (bypassing the backend).

_Note: If the mock parameter is included in a request to the production environment, an error should be raised._
