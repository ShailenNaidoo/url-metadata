import { checkifElementExists } from '../../parser/manifest';
import { createHTMLInstance } from '../../parser';

describe('checkifElementExists', (): void => {
  test('returns a string if manifest link exists', (): void => {
    const html = createHTMLInstance(`
      <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">
    `);

    expect(checkifElementExists(html)).toBe('/manifest.json');
  });

  test('returns undefined if manifest link does not exist', (): void => {
    const html = createHTMLInstance('');

    expect(checkifElementExists(html)).toBe(undefined);
  });
});
