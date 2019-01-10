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

  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });

  if(url) {
    try {
      const { data } = await axios.get(url);
      const meta = metadata(data);
      return res.json(meta);
    } catch(e) {
      
      const page = await browser.newPage();
      await page.setRequestInterception(true);

      page.on("request",req => req.resourceType() == "stylesheet" || req.resourceType() == "font" || req.resourceType() == "image" ? req.abort() : req.continue());

      await page.goto(url);
    
      const meta = metadata(await page.content())
      await browser.close();
      return res.json(meta);
    }
  } else {
    return res.json({
      error: true,
      message: "No url was passed to API"
    });
  }
})

module.exports.api = functions.runWith({ memory: "2GB", timeoutSeconds: 60 }).https.onRequest(app);


