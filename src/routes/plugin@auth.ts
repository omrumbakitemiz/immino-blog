import type { Provider } from '@auth/core/providers';
import GitHub from '@auth/core/providers/github';
import { serverAuth$ } from '@builder.io/qwik-auth';

export const { useAuthSession, useAuthLogout,  useAuthSignup, onRequest } = serverAuth$(
  ({ env }) =>
      ({
          secret: env.get('AUTH_SECRET'),
          trustHost: true,
          providers: [
              GitHub({
                  clientId: env.get('GITHUB_CLIENT_ID')!,
                  clientSecret: env.get('GITHUB_CLIENT_SECRET')!,
              }),
          ] as Provider[],
      })
);