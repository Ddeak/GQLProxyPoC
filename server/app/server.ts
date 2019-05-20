import express from "express";
import cors from "cors";
import graphqlHTTP from "express-graphql";

import { schema } from "./gql";
import { USERS, TRANSACTIONS } from "./TEMP_DATA";
import todos from "./todos";

const mapElement = (element, id) => element && { id, ...element };

const root = {
  users: () => USERS.map(mapElement),
  user: ({ id }) => mapElement(USERS[id], id),

  transactions: () => TRANSACTIONS.map(mapElement),
  transaction: ({ id }) => mapElement(TRANSACTIONS[id], id),
  ...todos
};

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

const port = 3001;
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);
