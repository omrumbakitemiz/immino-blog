import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="flex items-center">
        <a href="/" title="qwik">
          <QwikLogo />
        </a>
        <span class="font-semibold">imminolog</span>
      </div>
      <ul>
        <li>
          <a href="/posts">Posts</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/admin">Admin</a>
        </li>
      </ul>
    </header>
  );
});
