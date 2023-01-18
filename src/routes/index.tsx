import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to <i>immino-blog</i> 🍁🍁
      </h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to imminolog',
  meta: [
    {
      name: 'description',
      content: 'A blog built with Qwik by @immino',
    },
  ],
};
