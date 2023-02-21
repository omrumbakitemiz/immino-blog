import type { AuthConfig } from '@auth/core';
import Credentials from '@auth/core/providers/credentials';
import { env } from '../env';

export const authOptions: AuthConfig = {
  secret: env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'immino' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials?.username === 'imminosan' && credentials?.password === 'immino2608') {
          return { id: '1', name: credentials?.username };
        }
        return null;
      },
    }) as any,
  ],
};
