---
title: Best Practices
guide: REST API Development Standard
---

### Responses

Response design is heavily dictated by data structure but there are better practices and more pitfalls to avoid.

#### Advice

##### No Values in Keys:

* Good: `{ "name" : "Bogart", "breed": "Bulldog" }`
* Bad: `{ "Bogart": "bulldog" }`

##### No Internal Specific Keys:

Avoid "node" and "taxonomy term" in your data.

* Good: `{ "dog_id": 12345 }`
* Bad: `{ "did": 12345 }`

##### Metadata is Dataset Properties:

Metadata should only contain direct properties of the response set, not properties of the members of the response set.

* Good: `"metadata": { "count": 3, "nextDog": 1237 }`
* Bad: `"metadata": { "count": 3, "dogs": "1234,1235,1236", "breeds": "bulldog,mixed,poodle" }`

#### Client Registration

To ease future tracking for metrics or to identify issues requiring/requesting, an API key may be of use. The request for a key should not request private information (name, email, phone number, and so on).
