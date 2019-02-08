const axios = require("axios");
const puppeteer = require("puppeteer");
const metadataParser = require("./metadata-parser");

async function getHTMLWithAJAX(url) {
  const { data: html } = await axios.get(url);
  return html;
}

async function getHTMLWithHeadlessChrome(url) {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();

  await page.setRequestInterception(true);

  page.on("request",req => {
    const stylesheet = req.resourceType() === "stylesheet";
    const image = req.resourceType() === "image";
    const font = req.resourceType() === "font";

    if(image || stylesheet || font) {
      req.abort()
    } else {
      req.continue();
    }
  });

  await page.goto(url);

  const content = await page.content();

  await browser.close();

  return content;
}

module.exports = async function(url) {  
  try {
    const html = await getHTMLWithAJAX(url);
    return await metadataParser({ html, url });
  } catch (e) {
    const html = await getHTMLWithHeadlessChrome(url);
    return await metadataParser({ html, url });
  }
}