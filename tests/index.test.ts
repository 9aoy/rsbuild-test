import { SELF } from 'cloudflare:test';
import { expect, test } from 'vitest';

test('responds with health information from the Worker', async () => {
  const response = await SELF.fetch('https://example.com/health');

  expect(response.status).toBe(200);
  await expect(response.json()).resolves.toEqual({
    ok: true,
    message: 'Hello from Cloudflare Workers',
    pathname: '/health',
  });
});

test('responds with the default Worker message', async () => {
  const response = await SELF.fetch('https://example.com/');

  expect(response.status).toBe(200);
  await expect(response.text()).resolves.toBe('Rsbuild Workers example');
});
