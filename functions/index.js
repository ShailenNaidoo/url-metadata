const { parse } = require("himalaya");
const _ = require("lodash");

function tag(tag) {
  return { tagName: tag }
}

function getHeadTag(parsed) {
  const [{ children: html }] = _.filter(parsed,tag("html"));
  const [{ children: head }] = _.filter(html,tag("head"));
  return head;
}

function getTitleTag(head) {
  const [{ children: [{ content: title }]}] = _.filter(head,tag("title"));
  return title;
}

function getOpenGraphTags(head) {
  return _.chain(head)
    .filter(tag("meta"))
    .map("attributes")
    .map((att) => _.map(att,({ key, value }) => ({ [key]: value })))
    .map((att) => _.assign(...att))
    .flatten()
    .filter("property")
    .map(({ property, content }) => ({ [property.replace(/og:/,"")]: content }))
    .value();
}

function metadata(h) {
  const parsed = parse(h);
  const head = getHeadTag(parsed);
  const title = getTitleTag(head);
  const openGraphTags = getOpenGraphTags(head);

  return {
    title,
    og: _.assign(...openGraphTags)
  }
}

const axios = require("axios");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");

const app = express();

app.use(cors());

app.get("/",async (req,res) => {
  const { query: { url } } = req;

  if(url) {
    const { data } = await axios.get(url);
  
    const meta = await (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url);
      const h = metadata(await page.content());
      browser.close();
    
      return h;
    
    })()
  
    res.json(meta);
  
    return meta;
  } else {
    res.json({
      error: true,
      message: "No url was passed to API"
    })
  }
})

module.exports.api = functions.https.onRequest(app);


