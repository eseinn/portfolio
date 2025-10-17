import type { PropsWithChildren } from "react";
import { Element } from "react-scroll";

export const H1 = ({ children }: PropsWithChildren) => (
  <h1 className="sm:text-6xl text-center text-3xl mb-10 mt-4 font-semibold">
    {children}
  </h1>
);

export const H2 = ({ children }: PropsWithChildren) => (
  <h2 className="sm:text-5xl text-2xl mt-4 mb-10 text-center font-semibold">
    {children}
  </h2>
);

export const Section = ({
  children,
  id,
}: PropsWithChildren<{ id: string }>) => (
  <Element
    className="min-h-screen p-4 sm:pt-[57px] pt-10 sm:content-center content-start"
    name={id}
  >
    {children}
  </Element>
);
