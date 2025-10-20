import { H2 } from "../Components";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <H2>Contact</H2>
      <div className="flex flex-col items-center gap-4">
        <div className="font-bold"> Einar Smári Einarsson</div>
        <div className="flex gap-4">
          <a href="mailto:einarsmari@gmail.com" className="font-bold">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
          <a
            href="https://www.linkedin.com/in/einar-sm%C3%A1ri-einarsson-5098b46a/"
            className="font-bold rounded"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </div>
      </div>
    </>
  );
};
export default Contact;
