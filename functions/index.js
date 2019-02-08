const functions = require("firebase-functions");
const cors = require("cors");
const { getURL } = require("./helpers/utils");
const getHTML = require("./helpers/get-html");

module.exports.api = functions.runWith({ memory: "2GB", timeoutSeconds: 60 }).https.onRequest(function(req,res) {
  return cors()(req,res,async function() {
    const url = getURL(req);
    const html = await getHTML(url);

    return res.send(html);
  });
});