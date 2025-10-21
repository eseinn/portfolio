import { H2, Paragraph } from '@/app/Components';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import type { PropsWithChildren, ReactNode } from 'react';

const Description = ({ children }: PropsWithChildren) => (
  <div className='gap-4 flex flex-col'>{children}</div>
);

const Project = ({
  name,
  link,
  technologies,
  description,
  image,
}: {
  name: string;
  link?: string;
  technologies: string[];
  description: ReactNode;
  image?: string;
}) => {
  return (
    <div className='flex mb-20 rounded-xl'>
      <div className='space-y-5'>
        <div className='sm:text-3xl text-2xl font-bold text-center'>{name}</div>
        <div className='flex flex-wrap gap-4'>
          {technologies.map((tech, key) => (
            <div className='bg-[#112D4E] px-4 py-2 rounded-full' key={key}>
              {tech}
            </div>
          ))}
        </div>
        <div>{description}</div>
        {link && (
          <div>
            <a className='underline' target='_blank' href={link}>
              View Project <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </div>
        )}
      </div>
      {image && (
        <div>
          <Image alt={name} src={image} width={200} height={200} />
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <H2>Projects</H2>
      <Project
        name='Teller - Cashier System'
        technologies={[
          'HTML5',
          'CSS3',
          'React',
          'React Redux',
          'C#/.NET',
          'SQL Server',
        ]}
        description={
          <Description>
            <Paragraph>
              Teller is an application that was built for cashiers/tellers to
              handle most of their daily tasks such as tranferring money between
              accounts, paying invoices for customers and even handling foreign
              currency transfers.
            </Paragraph>
            <Paragraph>
              I developed the front end as well as the initial Back-End API
              web-service. The front end is written in React and utilizes
              React-Redux for internal state management. The back end is written
              in C#/.NET with an SQL Server database.
            </Paragraph>
            <Paragraph>
              The project was quite complex, both from a business-level
              perspective as well as developing it as the application handles
              sensitive financial data and utilizes various banking transactions
              where there is no room for errors.
            </Paragraph>

            <Paragraph>
              This was the first full-scale project I completed using ReactJs
              and I am very proud of it as it laid the foundations for me to
              take my career to the next level a few years later.
            </Paragraph>
          </Description>
        }
      />
      <Project
        name='Auður - Online Deposit Bank'
        technologies={[
          'HTML5',
          'CSS3',
          'React',
          'React Redux',
          'Formik',
          'Styled Components',
        ]}
        description={
          <Description>
            <Paragraph>
              Auður is an online deposit bank and is owned by Kvika Banki hf. It
              offered high interest rates for deposit accounts in Iceland and
              its emergence eventually lead to more competetive rates in other
              banks as well.
            </Paragraph>
            <Paragraph>
              My role in this project was to develop parts of the front end in
              the internal part of the system such as the signup-process, an
              interest calculator, overview of transactions and forms for
              transferring funds from the account. The front end was written in
              React and utilized React Redux for state management as well as
              Formik for handling forms. The CSS was written with Styled
              Components.
            </Paragraph>
            <Paragraph>
              This is probably one of the more publicly known projects that I
              have worked at and it was both fun and rewarding to be part of it,
              especially since I use it myself today.
            </Paragraph>
            <Paragraph>
              <b>
                Note: The initial version that I worked on is not part of the
                current live version of the web but the functionality and UI is
                very similar.
              </b>
            </Paragraph>
          </Description>
        }
        link='https://audur.is'
      />
      <Project
        name='Össur web'
        technologies={[
          'React',
          'Next.js',
          'TypeScript',
          'Styled Components',
          'Node.js',
        ]}
        description={
          <Description>
            <Paragraph>
              Össur is a global company founded in Iceland that is a leading
              company in the area of orthotics and prosthetics. Its website is
              available in multiple locales and regions and offers various
              online services to customers such as showcasing a broad range of
              prosthetic devices.
            </Paragraph>
            <Paragraph>
              I worked on developing and maintaining the web which is writen in
              React on top of Next.js, using TypeScript as coding language and
              Styled Components for CSS. Among the many webservices the web
              interacts with there is one service written in Node.js that I also
              worked on.
            </Paragraph>
            <Paragraph>
              One of the bigger tasks I worked on in Össur was a redesign of the
              product pages where I worked closely with a UI and UX designer and
              other developers to implement a new layout from Figma designs. It
              proved challenging to develop the new design at first because it
              demanded complex styling animations that slowed down the already
              cumbersome product page, which was loading data from multiple
              sources. Eventually it was decided to cut down on the complex
              styling in favour of speed and simplicity. I learned how to
              balance an elegant design with a real world website and today I
              always choose simplicity over complexity.
            </Paragraph>
            <Paragraph>
              The link below demonstrates the detailed product page that I
              worked on.
            </Paragraph>
          </Description>
        }
        link='https://www.ossur.com/is-is/spelkur-og-studningur/hne/unloader-one-x'
      />
      <Project
        name='Alfreð web'
        technologies={[
          'React',
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'Node.js',
          'GCP',
          'Vercel',
          'MySQL',
        ]}
        description={
          <Description>
            <Paragraph>
              Alfreð is a platform that connects employers and employees which
              has become the biggest (online) job market in Iceland. It also
              operates in a few other European countries.
            </Paragraph>
            <Paragraph>
              {' '}
              At Alfreð I worked on developing and maintaining the web by adding
              new features and fixing bugs that came up. There is a public web
              (alfred.is) and an admin web that are both written in React with
              Typescript and Tailwind CSS. On top of that the public web runs on
              Next.js - the public web itself is probably the single biggest
              task I did at Alfreð where I took a large part in migrating it
              from an older technology (written in Ember.js) to its current
              version. Other notable tasks I worked on independently or as a
              part of a team:
            </Paragraph>
            <ul className='list-disc ml-4 mb-2'>
              <li>A complete redesign of the Admin web</li>
              <li>
                An integration of a third party web service to the Courses part
                of the web
              </li>
              <li>Various additions to the profile section</li>
              <li>Improvements to the job application form</li>
            </ul>
            <Paragraph>
              Apart from front end work I managed a small backend for the
              courses section of the web, written in NestJS (Node.js) with a
              MySQL database. I also stepped beyond my role as a developer when
              I learned how to use GCP (Google Cloud Platform) and Vercel for
              managing builds and deployment pipelines for the public web and
              some services such as the web service for the Courses.
            </Paragraph>
          </Description>
        }
        link='https://alfred.is'
      />
      <Project
        name='Veiðitorg'
        technologies={[
          'React',
          'Antd',
          'Node.js',
          'Heroku',
          'MongoDB',
          'Cloudflare',
        ]}
        description={
          <Description>
            <Paragraph>
              Veiðitorg is an online platform that connects buyers and sellers
              of fishing permits. It is founded by my brother, Erlendur Steinar
              - and is one of the oldest, if not the oldest platform of its kind
              in Iceland.
            </Paragraph>
            <Paragraph>
              I have been responsible for the technical part of the entire
              project since late 2022. It is an ongoing task where I have made
              multiple improvements to the code and development process as well
              as implementing various features. One of my bigger tasks was
              perhaps integrating a new payment solution via Straumur.
            </Paragraph>
            <Paragraph>
              Veiðitorg consists of a public web, an admin web and a back end
              layer with a web service. The webs are written in React and use
              Antd with SCSS for CSS styling. They and the back end are deployed
              with Github Actions where the webs are hosted via Cloudflare. The
              back end is made with Express (Node.js) and runs on a Heroku
              server that utilizes MongoDB as a database.
            </Paragraph>
            <Paragraph>
              Being able to work on this project independently has been a
              testment to my skills as a full stack developer and has inspired
              me to create my own projects such as this website.
            </Paragraph>
          </Description>
        }
        link='https://veiditorg.is'
      />
    </>
  );
};
export default Projects;
