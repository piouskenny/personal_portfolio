const Nav = () => {
  return (
    <div className="md:flex items-center justify-between md:pt-8 pt-2  ">
      <div className="nav_brand">
        <h1 className="text-gray-200 hover:text-gray-400 cursor-pointer">
          Piouskenny
        </h1>
      </div>
      <div className="links md:flex space-x-6 text-white hidden">
        <a href="#home" className="hover:text-gray-500 hover:font-bold">
          Home
        </a>
        <a href="#portfolio" className="hover:text-gray-500 hover:font-bold">
          Portfolio
        </a>
        <a href="" className="hover:text-gray-500 hover:font-bold">
          My Skills
        </a>
        <a href="" className="hover:text-gray-500 hover:font-bold">
            About Me
        </a>
      </div>
      <div className="contact text-white hidden md:block">
        <a href="" className="hover:text-gray-500 hover:font-bold">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Nav;
