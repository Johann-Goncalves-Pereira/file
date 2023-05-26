import { component$, Slot } from "@builder.io/qwik";
import { Footer } from "~/components/base/Footer";
import { Header } from "~/components/base/Header";

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
