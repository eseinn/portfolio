import { H2 } from "@/app/Components";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import type { PropsWithChildren, ReactNode } from "react";

const Description = ({ children }: PropsWithChildren) => (
  <div className="gap-4 flex flex-col">{children}</div>
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
    <div className="flex my-40 rounded-xl">
      <div className="space-y-5">
        <div className="text-4xl">{name}</div>
        <div className="flex flex-wrap gap-4">
          {technologies.map((tech, key) => (
            <div className="bg-[#112D4E] px-4 py-2 rounded-full" key={key}>
              {tech}
            </div>
          ))}
        </div>
        <div>{description}</div>
        {link && (
          <div>
            <a className="underline" target="_blank" href={link}>
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
        name="Teller - Cashier System"
        technologies={[
          "HTML5",
          "CSS3",
          "React",
          "React Redux",
          "C#/.NET",
          "SQL Server",
        ]}
        description={
          <Description>
            <p>
              Teller is an application that was built for cashiers/tellers to
              handle most of their daily tasks such as tranferring money between
              accounts, paying invoices for customers and even handling foreign
              currency transfers.
            </p>
            <p>
              I developed the front end as well as the initial Back-End API
              web-service. The front end is written in React and utilizes
              React-Redux for internal state management. The Backend is written
              in C#/.NET with an SQL Server database.
            </p>
            <p>
              The project was quite complex, both from a business-level
              perspective as well as developing it as the application handles
              sensitive financial data and utilizes various banking transactions
              where there is no room for errors.
            </p>

            <p>
              This was the first full-scale project I completed using ReactJs
              and I am very proud of it as it laid the foundations for me to
              take my career to the next level a few years later.
            </p>
          </Description>
        }
      />
      <Project
        name="Auður - Online Deposit Bank"
        technologies={[
          "HTML5",
          "CSS3",
          "React",
          "React Redux",
          "Formik",
          "Styled Components",
        ]}
        description={
          <Description>
            <p>
              Auður is an online deposit bank and is owned by Kvika Banki hf. It
              offered high interest rates for deposit accounts in Iceland and
              its emergence eventually lead to more competetive rates in other
              banks as well.
            </p>
            <p>
              My role in this project was to develop parts of the front end in
              the internal part of the system such as the signup-process, an
              interest calculator, overview of transactions and forms for
              transferring funds from the account. The front end was written in
              React and utilized React Redux for state management as well as
              Formik for handling forms. The CSS was written with Styled
              Components.
            </p>
            <p>
              This is probably one of the more publicly known projects that I
              have worked at and it was both fun and rewarding to be part of it,
              especially since I use it myself today.
            </p>
            <p>
              <b>
                Note: The initial version that I worked on is not part of the
                current live version of the web but the functionality and UI is
                very similar.
              </b>
            </p>
          </Description>
        }
        link="https://audur.is"
      />
      <Project
        name="Össur web"
        technologies={[
          "React",
          "Next.js",
          "TypeScript",
          "Styled Components",
          "Node.js",
          "Bitbucket",
        ]}
        description={
          <Description>
            <p></p>
            <p></p>
            <p></p>
          </Description>
        }
        link="https://ossur.com"
      />
      <Project
        name="Alfreð web"
        technologies={[
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "GCP",
          "Vercel",
          "Sequel Ace",
        ]}
        description={
          <Description>
            <p></p>
            <p></p>
            <p></p>
          </Description>
        }
        link="https://alfred.is"
      />
      <Project
        name="Veiðitorg web"
        technologies={[
          "React",
          "SCSS",
          "Node.js",
          "Heroku",
          "MongoDB",
          "Cloudflare",
        ]}
        description={
          <Description>
            <p></p>
            <p></p>
            <p></p>
          </Description>
        }
        link="https://veiditorg.is"
      />
    </>
  );
};
export default Projects;
