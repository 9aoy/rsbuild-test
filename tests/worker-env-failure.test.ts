import { expect, test } from 'vitest';

test('Node child_process APIs are available', async () => {
  // This intentionally models a Node-only assumption. It passes in a regular
  // Node.js Vitest environment, but fails in the Cloudflare Workers runtime
  // because Workers cannot spawn local OS processes.
  const childProcess = await import('node:child_process');

  expect(childProcess.execFile).toBeTypeOf('function');
});
