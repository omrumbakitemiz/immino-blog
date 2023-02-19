import { component$ } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';

export const usePostLoader = loader$(async (ctx) => ({ postId: ctx.params.id }));

export default component$(() => {
  const post = usePostLoader();

  return (
    <h1 class="text-center">
      Post ID is: <i>{post.value.postId}</i>
    </h1>
  );
});
