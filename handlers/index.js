const main = require("../lib");

async function getHandlerURLQuery(req,res) {
  if(req.query.url) {
    res.status(200).json(await main(req.query.url));
  } else {
    res.status(400).json({ statusCode: 400, message: "You need to pass a query ?url" });
  }
}

async function postHandlerURLJSON(req,res) {
  if(req.body.url) {
    res.status(200).json(await main(req.body.url));
  } else {
    res.status(400).json({ statusCode: 400, message: "You need to pass a JSON object with the field url" });
  }
}

async function postHandlerURLSJSON(req,res) {
  if(req.body.urls) {
    const getURLMetadata = req.body.urls.map(url => main(url));
    Promise.all(getURLMetadata).then(data => res.status(200).json(data));
  } else {
    res.status(400).json({ statusCode: 400, message: "You need to pass a JSON object with the field urls" });
  }
}

module.exports = {
  getHandlerURLQuery,
  postHandlerURLJSON,
  postHandlerURLSJSON
}