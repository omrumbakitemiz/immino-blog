import { z } from 'zod';

const envScheme = z.object({
  NEXTAUTH_URL: z.string(),
  NEXTAUTH_SECRET: z.string(),
});

if (typeof window !== 'undefined') {
  throw new Error('server env is on client!!');
}
console.log('process.env.NEXTAUTH_URL', process.env.NEXTAUTH_URL);
console.log('process.env.NEXTAUTH_SECRET', process.env.NEXTAUTH_SECRET);

export const env = envScheme.parse({
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
});
