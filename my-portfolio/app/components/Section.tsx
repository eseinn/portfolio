"use client";
import { PropsWithChildren } from "react";
import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";
import { Element } from "react-scroll";

const Section = ({ children, id }: PropsWithChildren<{ id: string }>) => (
  <Element className="h-screen p-4 content-center" name={id}>
    {children}
  </Element>
);

const Sections = () => {
  return (
    <div>
      <Section id="home">
        <Hero />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </div>
  );
};

export default Sections;
