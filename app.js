const express = require("express");
const { json } = require("express");
const cors = require("cors");
const { getHandlerURLQuery, postHandlerURLJSON, postHandlerURLSJSON } = require("./handlers");
const graphql = require("./graphql");

const app = express();

graphql.applyMiddleware({ app, path: "/api/graphql" });

app.use(cors());
app.use(json());
app.use("/",express.static("./docs/.vuepress/dist"));

app.get("/api",getHandlerURLQuery);
app.get("/",(req,res) => res.sendFile("./docs/.vuepress/dist/index.html"));

app.post("/api/rest",postHandlerURLJSON);

app.post("/api/rest/multi",postHandlerURLSJSON);

app.listen(8080,() => console.log("Server running"));