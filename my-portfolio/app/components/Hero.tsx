import Image from "next/image";
const Hero = () => {
  return (
    <div className="flex justify-between flex-col sm:flex-row">
      <div className="my-auto">
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
      </div>{" "}
      <div className="relative w-[400px] h-[600px] overflow-hidden rounded-lg content-center">
        <Image src="/Einar_1.png" alt="hero image" width={400} height={600} />{" "}
      </div>
    </div>
  );
};

export default Hero;
