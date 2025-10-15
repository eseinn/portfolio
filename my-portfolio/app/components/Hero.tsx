import Image from "next/image";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <h1 className="sm:text-6xl text-center text-3xl mb-10 font-semibold">
        Welcome to my portfolio
      </h1>
      <div className="flex justify-between flex-col sm:flex-row m-auto">
        <div className="m-auto space-y-4">
          <div className="sm:text-4xl text-2xl">Hi!</div>
          <div>
            I´m
            <span className="font-bold text-2xl"> Einar Smári Einarsson</span>
          </div>
          <div>
            An experienced <span className="">Full Stack Web Developer</span>{" "}
            based in Reykjavík, Iceland.
          </div>{" "}
          <br />
          <div className="">
            <Link smooth duration={400} to="projects">
              <button
                type="button"
                tabIndex={0}
                className="cursor-pointer bg-[#112D4E] transition-all border border-[#DBE2EF] focus:outline-none hover:bg-[#2567B0] focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-2.5 me-2  "
              >
                View Projects
              </button>
            </Link>
          </div>
        </div>
        <div className="m-auto">
          <Image
            src="/Einar_1.png"
            alt="hero image"
            className="rounded-xl"
            width={200}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
