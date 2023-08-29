import { Signal, component$ } from "@builder.io/qwik";

type HeaderProps = {
  ref?: Signal<Element | undefined>;
};
export const Header = component$(({ ref }: HeaderProps) => {
  return (
    <header ref={ref} style={{ height: `5rem` }}>
      <h1>Header</h1>
    </header>
  );
});
