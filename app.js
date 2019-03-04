const express = require("express");
const { json } = require("express");
const cors = require("cors");
const { getHandlerURLQuery, postHandlerURLJSON, postHandlerURLSJSON } = require("./handlers");
const graphql = require("./graphql");

const app = express();

graphql.applyMiddleware({ app, path: "/api/graphql" });

app.use(cors());
app.use(json());

app.get("/",getHandlerURLQuery);

app.post("/",postHandlerURLJSON);

app.post("/multi",postHandlerURLSJSON);

app.listen(8080,() => console.log("Server running"));