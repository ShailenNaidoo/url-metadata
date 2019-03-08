const express = require("express");
const { json } = require("express");
const cors = require("cors");
const limiter = require("./limiter");
const { getHandlerURLQuery, postHandlerURLJSON, postHandlerURLSJSON } = require("./handlers");
const graphql = require("./graphql");

const app = express();

app.enable("trust proxy");

app.use("/api/",limiter);
app.use("/api/graphql",limiter);
app.use(cors());
app.use(json());
app.use("/",express.static("./docs/.vuepress/dist"));

graphql.applyMiddleware({ app, path: "/api/graphql" });

app.get("/",(req,res) => res.sendFile("./docs/.vuepress/dist/index.html"));

app.get("/api",getHandlerURLQuery);

app.post("/api",postHandlerURLJSON);

app.post("/api/multi",postHandlerURLSJSON);

app.listen(8080,() => console.log("Server running"));