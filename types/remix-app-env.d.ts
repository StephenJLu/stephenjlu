import type { AppLoadContext as RemixAppLoadContext } from '@remix-run/server-runtime';

export interface EnvVars {
  SL_API_KEY: string;
  // Add other environment variables here if needed
}

export interface AppLoadContext extends RemixAppLoadContext {
  env: EnvVars;
}