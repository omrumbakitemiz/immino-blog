import { z } from 'zod';

const envScheme = z.object({
  NEXTAUTH_URL: z.string(),
  NEXTAUTH_SECRET: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
});

if (typeof window !== 'undefined') {
  throw new Error('server env is on client!!');
}

const nodeEnv = process.env;
console.log('here nodeEnv:', nodeEnv);
const viteEnv = import.meta.env;

export const env = envScheme.parse({
  NEXTAUTH_URL: nodeEnv.NEXTAUTH_URL || viteEnv.VITE_NEXTAUTH_URL,
  NEXTAUTH_SECRET: nodeEnv.NEXTAUTH_SECRET || viteEnv.VITE_NEXTAUTH_SECRET,
  GITHUB_CLIENT_ID: nodeEnv.GITHUB_CLIENT_ID || viteEnv.VITE_GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: nodeEnv.GITHUB_CLIENT_SECRET || viteEnv.VITE_GITHUB_CLIENT_SECRET,
});
