import { H2 } from '@/app/Components';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import type { ReactNode } from 'react';

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
    <div className='flex my-40 rounded-xl'>
      <div className='space-y-5'>
        <div className='text-4xl'>{name}</div>
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
          <>
            <p>
              Teller is an application that was built for cashiers/tellers to
              handle most of their daily tasks such as tranferring money between
              accounts, paying invoices for customers and even handling foreign
              currency transfers.
            </p>
            <br />
            <p>
              I developed the Front-End as well as the initial Back-End API
              web-service. The Front-End is written in React and utilizes
              React-Redux for internal state management. The Backend is written
              in C#/.NET with an SQL Server database.
            </p>
            <br />
            <p>
              The project was quite complex, both from a business-level
              perspective as well as developing it as the application handles
              sensitive financial data and utilizes various banking transactions
              where there is no room for errors.
            </p>
            <br />

            <p>
              This was the first full-scale project I completed using ReactJs
              and I am very proud of it as it helped me take me career on the
              next level.
            </p>
            <br />
          </>
        }
      />
      <Project
        name='Auður - Online Deposit Bank'
        technologies={[
          'HTML5',
          'CSS3',
          'React',
          'React Redux',
          'Styled Components',
        ]}
        description={<></>}
        link='https://audur.is'
      />
      <Project
        name='Össur web'
        technologies={[]}
        description=''
        link='https://ossur.com'
      />{' '}
      <Project
        name='Össur web'
        technologies={[]}
        description=''
        link='https://ossur.com'
      />{' '}
    </>
  );
};
export default Projects;
