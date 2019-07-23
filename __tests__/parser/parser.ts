import { parser } from '../../parser';

const html = `
  <!DOCTYPE HTML>
  <html>
    <head>
      <title>Hello World</title>
      <meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" />
      <meta name="viewport" content="width=device-width">
      <meta property="og:image" content="https://avatars3.githubusercontent.com/u/46425312?s=400&amp;v=4" />
      <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
      <meta property="og:title" content="webdataorg/webdata-api" />
      <meta property="og:description" content="A free online REST API for getting any websites metadata relating to the Open Graph Protocol and more - webdataorg/webdata-api" />
      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
      <meta property="og:url" content="https://github.com/webdataorg/webdata-api" />
      <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    </head>
  </html>
`;

describe('parser', (): void => {
  test('should return object with properties [title] and [og]', (): void => {
    const metadataObject = parser(html);

    expect(metadataObject).toHaveProperty('title');
    expect(metadataObject).toHaveProperty('og');
  });

  test('should return object that contains specific keys', (): void => {
    const { og } = parser(html);

    expect(og).toHaveProperty('site_name');
    expect(og).toHaveProperty('type');
    expect(og).toHaveProperty('image');
    expect(og).toHaveProperty('title');
    expect(og).toHaveProperty('description');
    expect(og).toHaveProperty('url');
  });
});
