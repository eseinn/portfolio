import { PropsWithChildren } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const Wrapper = ({ children, ...props }: PropsWithChildren) => (
  <div className=" p-4 my-10" {...props}>
    {children}
  </div>
);

export default function Home() {
  return (
    <div>
      <Wrapper>
        <Hero />
      </Wrapper>
      <Wrapper>
        <About />
      </Wrapper>
      <Wrapper>
        <Projects />
      </Wrapper>
    </div>
  );
}
