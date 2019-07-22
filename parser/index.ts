import { JSDOM } from 'jsdom';

interface OpenGraphTags {
  title?: string;
  url?: string;
  siteName?: string;
  description?: string;
  image?: string;
  [x: string]: string;
}

interface MetaData {
  title: string;
  og: OpenGraphTags;
}

export const createHTMLInstance = (html: string): JSDOM => new JSDOM(html);

export const getHTMLTitle = (htmlInstance: JSDOM): string => htmlInstance.window.document.title;

const filterOpenGraphTags = (meta: Element): boolean => meta.getAttribute('property').search(/og:/) > -1;

const mapOpenGraphTags = (meta: Element): OpenGraphTags => ({
  [meta.getAttribute('property').replace(/og:/, '')]: meta.getAttribute('content'),
});

const reduceOpenGraphTags = (result: OpenGraphTags, value: OpenGraphTags): OpenGraphTags => ({
  ...result,
  ...value,
});

const getHTMLOpenGraphTags = (htmlInstance: JSDOM): OpenGraphTags => [...htmlInstance.window.document.querySelectorAll('meta[property]')]
  .filter(filterOpenGraphTags)
  .map(mapOpenGraphTags)
  .reduce(reduceOpenGraphTags, {});

const createHTMLMetadataObject = (htmlInstance: JSDOM): MetaData => ({
  title: getHTMLTitle(htmlInstance),
  og: getHTMLOpenGraphTags(htmlInstance),
});

export const parser = (htmlFromSource: string): MetaData => createHTMLMetadataObject(createHTMLInstance(htmlFromSource));
