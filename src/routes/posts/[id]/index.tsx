import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$, z } from '@builder.io/qwik-city';

const PostSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  body: z.string(),
});

export const usePostLoader = routeLoader$(async (ctx) => {
  const postId = ctx.params.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await response.json();
  return PostSchema.parse(post);
});

export default component$(() => {
  const post = usePostLoader();

  return (
    <>
      <h1 class="text-center">
        Post ID is: <i>{post.value.id}</i>
      </h1>

      <p>{post.value.body}</p>
    </>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const postData = resolveValue(usePostLoader);

  return {
    title: `Post "${postData.id}"`,
    meta: [
      {
        name: 'description',
        content: postData.title.slice(0, 25),
      },
      {
        name: 'id',
        content: postData.id.toString(),
      },
    ],
  };
};
