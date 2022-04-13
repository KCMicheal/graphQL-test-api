const { graphqlHTTP } = require("express-graphql");
const { schema, root } = require("./schema/schema");
const express = require("express");
const app = express();

app.use(
    "/graphql", graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(3000, () => console.log("App is listening...."))

