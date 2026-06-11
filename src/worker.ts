/// <reference types="@cloudflare/workers-types" />

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === '/api/message') {
      return Response.json({ message: 'Rsbuild with React' });
    }

    return new Response('Not Found', { status: 404 });
  },
} satisfies ExportedHandler;
