import { component$, Slot } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';
import { getSharedSession } from '~/server/auth/loaders';
import Header from '../components/header/header';
import { useSessionContextProvider } from './SessionContext';

export const useSessionLoader = loader$(async (event) => {
  return getSharedSession(event);
});

export default component$(() => {
  const session = useSessionLoader();
  useSessionContextProvider(session);

  return (
    <>
      <main class="bg-gradient-to-r from-pink-400 to-purple-200">
        <Header />
        <section class="min-h-[500px]">
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://qwik.builder.io/" target="_blank">
          Made with ♡ by Qwik
        </a>
      </footer>
    </>
  );
});
