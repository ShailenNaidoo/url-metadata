import { JSDOM } from 'jsdom';
import { createHTMLInstance } from '../../parser/index';

describe('createHTMLInstance', (): void => {
  test('returns true if instance of JSDOM', (): void => {
    expect(createHTMLInstance('<p>Hello World</p>') instanceof JSDOM).toBe(true);
  });
});
