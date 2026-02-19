const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const graphqlSchema = require("./graphql/schemas");
const graphqlResolvers = require("./graphql/resolvers");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@cluster0.0pddjre.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => {
    const PORT = process.env.PORT;
    const URL = process.env.URL;
    app.listen(PORT, () => console.log(`Server is running on ${URL}:${PORT}/graphql`));
  })
  .catch((error) => {
    console.log(error);
  });
