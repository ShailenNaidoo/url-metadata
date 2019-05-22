const axios = require('axios');
const parser = require('./parser');

async function getHTMLWithAJAX(url) {
  const { data: html } = await axios.get(url);
  return { html, url };
}

async function main(url) {
  return parser(await getHTMLWithAJAX(url));
}

module.exports = main;