import type { PropsWithChildren } from 'react';
import { Element } from 'react-scroll';

export const H1 = ({ children }: PropsWithChildren) => (
  <h1 className='sm:text-6xl text-center text-5xl mb-10 mt-4 font-bold'>
    {children}
  </h1>
);

export const H2 = ({ children }: PropsWithChildren) => (
  <h2 className='sm:text-5xl text-4xl mt-4 mb-10 text-center font-bold'>
    {children}
  </h2>
);

export const Section = ({
  children,
  id,
}: PropsWithChildren<{ id: string }>) => (
  <Element
    className='min-h-screen p-4 sm:pt-[57px] pt-10 content-center conte3nt-start'
    name={id}
  >
    {children}
  </Element>
);

export const Paragraph = ({
  children,
  large,
}: PropsWithChildren<{ large?: boolean }>) => (
  <p
    className={`sm:text-justify text-left ${
      large ? `sm:text-xl text-lg` : `sm:text-lg text-md`
    }`}
  >
    {children}
  </p>
);
