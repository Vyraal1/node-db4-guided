# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

### Components

- entities
- properties
- relationshipos

### Workflow

- identiy entities
- identify the properties
- identify the relationship

### Mantras

- every table must have only one `primary key`
- work on ** two or three** entites at a time
- **one to many** relationships are modeled using a **Foreign Key**
- the **Foreign Key** always goes in the ** many ** side
- the **Foreign Key Column** must be the **same type** as the **Primary Key**
-
