import { component$ } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';

export const head = {
  title: 'Posts',
  meta: [
    {
      name: 'posts',
      content: 'List all posts',
    },
  ],
};

export const usePostLoader = loader$(async (ctx) => {
  const postId = ctx.params.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await response.json();
  return { postId, post };
});

export default component$(() => {
  const post = usePostLoader();

  return (
    <>
      <h1 class="text-center">
        Post ID is: <i>{post.value.postId}</i>
      </h1>

      <p>{post.value.post.body}</p>
    </>
  );
});
