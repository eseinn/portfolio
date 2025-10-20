import { H1 } from "@/app/Components";
import Image from "next/image";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <H1>Welcome to my portfolio</H1>
      <div className="flex justify-between flex-col sm:flex-row m-auto gap-8">
        <div className="m-auto space-y-2 sm:space-y-4">
          <div className="sm:text-4xl text-xl">Hi!</div>
          <div>
            I´m
            <span className="font-bold text-xl"> Einar</span>
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
                className="w-full sm:w-auto cursor-pointer bg-[#112D4E] transition-all border border-[#DBE2EF] focus:outline-none hover:bg-[#2567B0] focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-2.5 me-2  "
              >
                View Projects
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <Image
            src="/Einar_2.png"
            alt="hero image"
            className="rounded-xl"
            height={250}
            width={250}
          />
          <div className="border-2 p-4 space-y-2 rounded-xl mt-4 text-center">
            <div className=" text-xl font-bold text-nowrap">8+ years</div>{" "}
            <div className="text-sm">Experience in Web Development</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
