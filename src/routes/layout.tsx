import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
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
