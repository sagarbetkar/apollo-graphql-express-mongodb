# Apollo-GraphQL-Express-MongoDB-TypeScript

This repo is just basic of GraphQL types and mutation example using apollo-server-express. Also simple CRUD operation.

- Built With
- Getting Started

## Built With

- Typescript
- Apollo (version: ^2.0.0)
- Graphql
- Express
- MongoDB

## Getting Started

```
npm install
npm run dev
Go to localhost:4000/graphql
```

#### Query and Mutations

```Graphql
# Write your query or mutation here
#Query
{
  users{
  _id
    firstName
    lastName
  }
}

mutation
{
	addUser(firstName: "Martin", lastName: "Mystery") {
		firstName
		lastName
 }
}

mutation
{
  updateUser(id: "5c7ff5c1896ab539545dae1d", firstName: "Alex", lastName: "Mystery"){
    firstName
    lastName
  }
}

mutation{
  deleteUser(id: "5c7ff70b896ab539545dae1f"){
    firstName
    lastName
  }
}
```
