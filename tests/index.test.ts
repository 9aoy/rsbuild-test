import { SELF } from 'cloudflare:test';
import { describe, expect, test } from 'vitest';
import worker from '../src/index';

const env = {
  MESSAGE: 'Hello from direct source test',
};

describe('src/index.ts Worker source', () => {
  test('returns health information from the source fetch handler', async () => {
    const response = await worker.fetch(
      new Request('https://example.com/health'),
      env,
      {} as ExecutionContext,
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      ok: true,
      message: 'Hello from direct source test',
      pathname: '/health',
    });
  });

  test('returns the default source response', async () => {
    const response = await worker.fetch(
      new Request('https://example.com/anything-else'),
      env,
      {} as ExecutionContext,
    );

    expect(response.status).toBe(200);
    await expect(response.text()).resolves.toBe('Rsbuild Workers example');
  });
});

describe('Cloudflare Workers runtime wiring', () => {
  test('serves the same health route through SELF', async () => {
    const response = await SELF.fetch('https://example.com/health');

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      ok: true,
      message: 'Hello from Cloudflare Workers',
      pathname: '/health',
    });
  });
});
