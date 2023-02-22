import { component$, Slot } from '@builder.io/qwik';
import { useAuthSession } from '../plugin@auth';

export default component$(() => {
  const authSession = useAuthSession();

  return (
    <div>
      <h1 class="text-center text-xl">🍁🍁 Admin Panel 🍁🍁</h1>
      <div class="float-right">{authSession.value ? <a href="/api/auth/signout">Sign Out</a> : <a href="/api/auth/signin">Sign In</a>}</div>

      <pre>{authSession.value && JSON.stringify(authSession.value, null, 2)}</pre>

      <Slot />
    </div>
  );
});
