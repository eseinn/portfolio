'use client';
import { PropsWithChildren } from 'react';
import { Element } from 'react-scroll';
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Projects from './Projects';

const Section = ({ children, id }: PropsWithChildren<{ id: string }>) => (
  <Element
    className='min-h-screen p-4 sm:pt-[57px] pt-10 sm:content-center content-start'
    name={id}
  >
    {children}
  </Element>
);

const Sections = () => {
  return (
    <div>
      <Section id='home'>
        <Hero />
      </Section>
      <Section id='about'>
        <About />
      </Section>
      <Section id='projects'>
        <Projects />
      </Section>
      <Section id='contact'>
        <Contact />
      </Section>
    </div>
  );
};

export default Sections;
