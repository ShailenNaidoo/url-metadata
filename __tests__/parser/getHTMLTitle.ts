import { createHTMLInstance, getHTMLTitle } from '../../parser/index';

const html = createHTMLInstance(`
  <!DOCTYPE HTML>
  <html>
    <head>
      <title>Hello World</title>
    </head>
  </html>
`);

describe('getHTMLTitle', (): void => {
  test('should return a string of "Hello World"', (): void => {
    const title = getHTMLTitle(html);

    expect(typeof title === 'string').toBe(true);
    expect(title === 'Hello World').toBe(true);
  });
});
