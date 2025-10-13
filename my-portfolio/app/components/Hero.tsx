import Image from "next/image";
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row m-auto">
      <div className="m-auto">
        <div className="text-4xl">Hi!</div>
        <br />
        <div>
          I´m
          <span className="font-bold text-blue-700">
            {" "}
            Einar Smári Einarsson
          </span>
        </div>{" "}
        <br />
        <div>
          An experienced <span className="">Full-Stack Web Developer</span>{" "}
          based in Reykjavík, Iceland.
        </div>
      </div>
      <div className="m-auto">
        <Image src="/Einar_1.png" alt="hero image" width={300} height={450} />
      </div>
    </div>
  );
};

export default Hero;
