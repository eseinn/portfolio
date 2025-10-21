import { H2, Paragraph } from '@/app/Components';

const About = () => {
  return (
    <div className='sm:text-xl text-md font-semibold leading-8'>
      <H2>About me</H2>
      <Paragraph>
        I graduated from the University of Iceland in 2014 with Bsc in Computer
        Science (Fun fact: I also finished a Bsc degree in Engineering at the
        same time!).
      </Paragraph>
      <br />
      <Paragraph>
        Since then I have been working as a programmer, mostly focusing on web
        development. I have worked with a variety of technologies, but my main
        focus has been on Front-End Development with ReactJs, NextJs and
        Typescript as well as Back-End Development with NodeJs.
      </Paragraph>
      <br />
      <Paragraph>
        The Projects below should give a better insight into my skills and
        experience. Some of them are public webs that can be viewed live, while
        others are not accessible (admin or internal systems for example).
      </Paragraph>
    </div>
  );
};
export default About;
