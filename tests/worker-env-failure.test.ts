import { expect, test } from 'vitest';

test('browser DOM globals are available', () => {
  // This intentionally models a browser-only assumption. It would pass in a
  // DOM-like test environment such as happy-dom, but fails in the Cloudflare
  // Workers runtime because Workers do not expose document/window DOM globals.
  expect(globalThis.document).toBeDefined();
});
