import gql from "graphql-tag";
import { buildASTSchema } from "graphql";

export const schema = buildASTSchema(gql`
  type Query {
    users: [User]
    user(id: ID!): User

    transaction(id: ID!): Transaction
    transactions: [Transaction]

    todo(id: ID!): ToDo
    todos: [ToDo]
  }

  type ToDo {
    userId: Int
    id: ID
    title: String
    complete: Boolean
  }

  type User {
    id: ID
    name: String
  }

  type Transaction {
    id: ID
    created: String
    products: [Product]
    user: User
  }

  type Product {
    id: ID
    name: String
    cost: String
  }
`);
