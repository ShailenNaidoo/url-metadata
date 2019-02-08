const { parse } = require("himalaya");
const _ = require("lodash");
const url = require("url-assembler");
const urlParse = require("url-parse");
const axios = require("axios");

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

function getOpenGraphMetaTags(head) {
  const openGraphTags = _.chain(head)
    .filter(tag("meta"))
    .map("attributes")
    .map((att) => _.map(att,({ key, value }) => ({ [key]: value })))
    .map((att) => _.assign(...att))
    .flatten()
    .filter("property")
    .map(({ property, content }) => ({ [property.replace(/og:/,"")]: content }))
    .value();

  return _.assign(...openGraphTags);
}

async function getManifestJSON({ head, url: base }) {
  const [{ href }] =_.chain(head)
    .filter(tag("link"))
    .map("attributes")
    .map((att) => _.map(att,({ key, value }) => ({ [key]: value })))
    .map((att) => _.assign(...att))
    .filter({ rel: "manifest" })
    .value();

  try {
    const { data: manifest } = await axios(url(urlParse(base).origin).segment(href).toString());
    return manifest;
  } catch(e) {
    return null;
  }
}

async function getMetadata({ html, url }) {
  const htmlToJSON = parse(html);
  const head = getHeadTag(htmlToJSON);
  const title = getTitleTag(head);
  const og = getOpenGraphMetaTags(head);
  const manifest = await getManifestJSON({ head, url });
  const pwa = manifest ? true : false;

  return {
    title,
    og,
    manifest,
    pwa
  }
}

module.exports = getMetadata;