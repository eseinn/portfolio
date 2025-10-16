import Image from "next/image";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  description: string;
  image?: string;
}) => {
  return (
    <div className="flex my-40 rounded-xl">
      <div className="space-y-5">
        <div className="text-4xl">{name}</div>
        <div className="flex flex-wrap space-x-4">
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
    <div>
      <h2 className="text-4xl mb-10 text-center">Projects</h2>
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
        description="Teller description"
      />
      <Project
        name="Auður - Online Deposit Bank"
        technologies={[
          "HTML5",
          "CSS3",
          "React",
          "React Redux",
          "Styled Components",
        ]}
        description="Auður description"
        link="https://audur.is"
      />
      <Project
        name="Össur web"
        technologies={[]}
        description=""
        link="https://ossur.com"
      />
    </div>
  );
};
export default Projects;
