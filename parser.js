const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const createHTMLInstance = html => new JSDOM(html);

const getHTMLTitle = htmlInstance => htmlInstance.window.document.title;

const getHTMLOpenGraphTags = (htmlInstance) => {
  const openGraphTags = [...htmlInstance.window.document.querySelectorAll('meta[property]')]
    .filter(meta => meta.getAttribute('property').search(/og:/) > -1)
    .map(meta => ({ [meta.getAttribute('property').replace(/og:/, '')]: meta.getAttribute('content') }))
    .reduce((result, value) => ({ ...result, ...value }), {});

  return openGraphTags;
};

const createHTMLMetadataObject = htmlInstance => ({
  title: getHTMLTitle(htmlInstance),
  og: getHTMLOpenGraphTags(htmlInstance),
});

const parser = htmlFromSource => createHTMLMetadataObject(createHTMLInstance(htmlFromSource));

module.exports = { parser };
