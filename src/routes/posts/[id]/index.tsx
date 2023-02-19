import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { loader$ } from '@builder.io/qwik-city';

export const usePostLoader = loader$(async (ctx) => {
  const postId = ctx.params.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await response.json();
  return { post };
});

export default component$(() => {
  const post = usePostLoader();

  return (
    <>
      <h1 class="text-center">
        Post ID is: <i>{post.value.post.id}</i>
      </h1>

      <p>{post.value.post.body}</p>
    </>
  );
});

export const head: DocumentHead = ({ params, resolveValue }) => {
  const postData = resolveValue(usePostLoader);

  return {
    title: `Post "${params.postId}"`,
    meta: [
      {
        name: 'description',
        content: postData.post.title.slice(0, 25),
      },
      {
        name: 'id',
        content: params.productId,
      },
    ],
  };
};
