import { RemixServer } from '@remix-run/react';
import { renderToString } from 'react-dom/server';
import type { EntryContext } from '@remix-run/server-runtime';
import type { AppLoadContext } from './types/remix-app-env';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const context = {
    ...remixContext,
    env: {
      SL_API_KEY: process.env.SL_API_KEY || '',
      // Initialize other environment variables here
    },
  } as EntryContext & { env: { SL_API_KEY: string } };

  const markup = renderToString(
    <RemixServer context={context} url={request.url} />
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}