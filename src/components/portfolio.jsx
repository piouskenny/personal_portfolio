import PortImg from "./sub-components/portImg";

const portfolio_content = () => {
  
}


const Portfolio = () => {
  return (
    <div className="mt-10 md:mt-40 mb-8 ">
      <h1 className="md:text-5xl text-4xl underline underline-white text-green-500">
        Portfoilio
      </h1>
      <div className="grid md:grid-cols-4 items-center">
        <div className="col-span-3">
          <p className="text-gray-200 text-sm md:text-lg my-10">
            A gallery of some of my recent projects. I did most of them with
            wonderful people from different companies. visit my github account
            to see more
          </p>
        </div>

        <div className="col-span-1 md:mt-20 ">
          <a
            href="https://github.com/piouskenny/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-full backdrop-blur-sm bg-white/10 text-white px-10 py-2 shadow-md shadow-white/10  transition md:hover:scale-150">
              My GitHub &rarr;
            </button>
          </a>
        </div>
      </div>

      <PortImg />
    </div>
  );
};

export default Portfolio;
