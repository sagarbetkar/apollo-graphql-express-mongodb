import express from "express";
import mongoose from "mongoose";
import server from "./graphql/schema";

const app = express();

const MONGO_PORT = 27017;
const MONGO_URL = "localhost";
const dbName = "contact";

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${MONGO_URL}:${MONGO_PORT}/${dbName}`);

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
