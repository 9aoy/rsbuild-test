import { SELF } from 'cloudflare:test';
import { expect, test } from 'vitest';

test('responds from the Cloudflare Worker runtime', async () => {
  const response = await SELF.fetch('https://example.com/api/message');

  expect(response.status).toBe(200);
  await expect(response.json()).resolves.toEqual({
    message: 'Rsbuild with React',
  });
});

test('has Cloudflare Worker runtime APIs', () => {
  expect(caches.default).toBeDefined();
  expect(crypto.randomUUID()).toMatch(
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
  );
});
