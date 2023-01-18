import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="flex flex-col justify-between text-center min-h-[450px]">
      <h1 class="font-bold">🍁 About 🍁</h1>

      <div>
        <a href="https://twitter.com/omrumbakitemiz" target="blank">
          @immino
        </a>
      </div>
    </div>
  );
});
