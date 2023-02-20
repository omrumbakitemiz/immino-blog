import type { AuthConfig } from '@auth/core';
import Credentials from '@auth/core/providers/credentials';
import Github from '@auth/core/providers/github';
import { env } from '../env';

export const authOptions: AuthConfig = {
  secret: env.NEXTAUTH_SECRET,
  providers: [
    Github({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials?.username === 'admin' && credentials?.password === 'admin123') {
          return { id: '1', name: credentials?.username };
        }
        return null;
      },
    }) as any,
  ],
};
