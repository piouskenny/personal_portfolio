import Hero_img from "../assets/hero.png";


const Hero = () => {
  return (
    <div className="my-auto mx-auto md:grid grid-cols-2 text-white pt-[6%] gap-12 text-center md:mt-20 mt-20">
      <div className="col-span-1  md:text-start">
        <p className="text-gray-600 my-1 text-md font-semibold">
          Boosting Sales &rarr; Parthnership
        </p>
        <h1 className="lg:text-7xl md:text-6xl text-6xl ">
          <span className="text-[#00b853] font-bold">Hi,</span>
          <span className="block my-3">
            I'm{" "}
            <span className="text-[#00b853] font-semibold animate-pulse">
              Piouskenny
            </span>
          </span>
          <span className="block text-4xl">Web Developer</span>
        </h1>
        <p className="text-gray-600 md:my-10 my-4 text-md font-semibold">
          Providing Solutions for Online businesses
        </p>

        <a href="https://wa.me/+2347068186976">
          <button className="rounded-full backdrop-blur-sm bg-white/10  px-10 py-2 mt-6 shadow-md shadow-white/10  transition md:hover:scale-150">
            Contact Me &rarr;
          </button>
        </a>
      </div>
      <div
        className="col-span-1 
        hidden md:block
       items-center
      backdrop-blur-2xl bg-none  px-10 py-10 md:shadow-2xl shadow-white/10 rounded-full hover:shadow-none mt-10 md:mt-0 opacity-60 hover:opacity-100"
      >
        <img src={Hero_img} alt="" className="" />
      </div>
    </div>
  );
};

export default Hero;
