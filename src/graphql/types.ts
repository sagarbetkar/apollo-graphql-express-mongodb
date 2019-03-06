import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    users: [User!]!
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!): User
    deleteUser(id: String!): User
    updateUser(id: String!, firstName: String, lastName: String): User
  }

  type User {
    _id: String!
    firstName: String!
    lastName: String!
  }
`;

export default typeDefs;
