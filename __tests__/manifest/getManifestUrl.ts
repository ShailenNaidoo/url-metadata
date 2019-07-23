import { getManifestUrl } from '../../parser/manifest';

describe('getManifestUrl', (): void => {
  test('returns array of [undefined, true]', (): void => {
    const html = '';

    expect(getManifestUrl('https://github.com', html)[0]).toBe(undefined);
    expect(getManifestUrl('https://github.com', html)[1]).toBe(true);
  });

  test('returns array of [undefined, true]', (): void => {
    const html = `
      <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">
    `;

    expect(getManifestUrl('https://github.com', html)[0]).toBe('https://github.com/manifest.json');
    expect(getManifestUrl('https://github.com', html)[1]).toBe(false);
  });
});
