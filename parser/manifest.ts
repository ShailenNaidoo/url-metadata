import { JSDOM } from 'jsdom';
import { createHTMLInstance } from '.';

const checkifElementExists = (htmlInstance: JSDOM): string|undefined => {
  try {
    return htmlInstance.window.document.querySelector('link[rel=manifest]').getAttribute('href');
  } catch (e) {
    return undefined;
  }
};

export const getManifestUrl = (url: string, html: string): [string, boolean] | [undefined, boolean] => {
  const htmlInstance = createHTMLInstance(html);
  const path = checkifElementExists(htmlInstance);

  if (!path) {
    return [undefined, true];
  }

  return [`${url}${path}`, false];
};
