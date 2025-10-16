import type { PropsWithChildren } from 'react';

export const H1 = ({ children }: PropsWithChildren) => (
  <h1 className='sm:text-6xl text-center text-3xl mb-10 mt-4 font-semibold'>
    {children}
  </h1>
);

export const H2 = ({ children }: PropsWithChildren) => (
  <h2 className='sm:text-5xl text-2xl mt-4 mb-10 text-center font-semibold'>
    {children}
  </h2>
);
