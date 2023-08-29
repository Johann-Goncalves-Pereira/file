import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./Footer.scss?inline";

type FooterProps = {
  headerHeight: number;
};

export const Footer = component$(({ headerHeight }: FooterProps) => {
  useStylesScoped$(styles);

  return (
    <footer
      style={{
        "--header-height": `${headerHeight ? headerHeight / 16 : "5"}rem`,
      }}
    >
      <address property="socialMedia" class="flex flex-col justify-end w-16">
        <a href="">Twitter</a>
        <a href="">GitHub</a>
        <a href="">Linkedin</a>
        <a href="">Instagram</a>
      </address>
      <address property="email">
        <a href="johann.gon.pereira@pm.me">johann.gon.pereira@pm.me</a>
      </address>
    </footer>
  );
});
