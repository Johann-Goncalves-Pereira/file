import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import { Footer } from "~/components/base/Footer/Footer";
import { Header } from "~/components/base/Header";

export default component$(() => {
  const height = useSignal(0);
  const outputRef = useSignal<Element>();

  useVisibleTask$(() => {
    if (outputRef.value) {
      const rect = outputRef.value.getBoundingClientRect();
      height.value = Math.round(rect.height);
    }
  });

  return (
    <>
      <Header ref={outputRef} />
      <main class="mx-16 w-full">
        <Slot />
      </main>
      <Footer headerHeight={height.value} />
    </>
  );
});
