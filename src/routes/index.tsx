import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <section>hey</section>;
});

export const head: DocumentHead = {
  title: "Welcome page",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
