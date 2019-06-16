import { JSDOM } from 'jsdom';

const createHTMLInstance = (html: string) => new JSDOM(html);

const getHTMLTitle = (htmlInstance: JSDOM) => htmlInstance.window.document.title;

const getHTMLOpenGraphTags = (htmlInstance: JSDOM) => [...htmlInstance.window.document.querySelectorAll('meta[property]')]
  .filter(meta => meta.getAttribute('property').search(/og:/) > -1)
  .map(meta => ({ [meta.getAttribute('property').replace(/og:/, '')]: meta.getAttribute('content') }))
  .reduce((result, value) => ({ ...result, ...value }), {});

const createHTMLMetadataObject = (htmlInstance: JSDOM) => ({
  title: getHTMLTitle(htmlInstance),
  og: getHTMLOpenGraphTags(htmlInstance),
});

export const parser = (htmlFromSource: string) => createHTMLMetadataObject(createHTMLInstance(htmlFromSource));