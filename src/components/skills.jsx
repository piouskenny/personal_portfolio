import Skills_card from "./sub-components/skills_cards";

const skill_item = [
  {
    text: "text-white",
    name: "PHP",
    skill_color: "bg-blue-300",
    skill_width: "90%",
  },
  {
    text: "text-red-500",
    name: "Laravel",
    skill_color: "bg-red-500",
    skill_width: "80%",
  },

  {
    text: "text-blue-600",
    name: "React",
    skill_color: "bg-blue-600",
    skill_width: "90%",
  },

  {
    text: "text-gray-400",
    name: "Wordpress",
    skill_color: "bg-gray-400",
    skill_width: "70%",
  },
  {
    text: "text-white",
    name: "Machine Learning",
    skill_color: "bg-white",
    skill_width: "45%",
  },
];

const Skills = () => {
  return (
    <div className="mt-20 md:mt-40 mb-8 ">
      <h1 className="md:text-5xl text-4xl underline underline-white text-green-500">
        My Skills
      </h1>

      <div className="grid md:grid-cols-3 mt-10 mb-4 items-center ">
        <div className="md:col-span-1 md:mr-10 flex content-center items-center text-center">
          <img
            src="images/me.JPG"
            className="w-fit md:w-full"
            alt="piouskenny"
          />
        </div>

        <div className="md:col-span-2">
          <h1 className="text-green-400 cursor-pointer mt-5 md:mt-0 text-2xl mb-5">
            Skills Set and Experience &rarr;
          </h1>
          <p className="text-white ">
            Welcome to my portfolio website! I'm Kehinde Adekunle Fisayo, but
            you can call me Piouskenny. I'm an experienced web developer with a
            passion for helping businesses grow through the power of technology.
            With a strong focus on PHP and expertise in Laravel and React, I
            bring innovative solutions to the table.
          </p>
          <p className="text-white my-2">
            Education and Professional Background: I have a solid educational
            background in web development, equipping me with the necessary
            skills to excel in this field. Throughout my career, I have honed my
            craft and gained valuable experience that has contributed to my
            success as a web developer.
          </p>

          <p className="text-white my-2">
            <span className="block">Skills and Expertise: </span>
            My technical expertise lies primarily in PHP and the Laravel
            framework, which I leverage to build robust and scalable web
            applications. Additionally, I'm proficient in React, allowing me to
            create dynamic and interactive user interfaces. I constantly stay
            updated with the latest industry trends and technologies, ensuring
            that I provide cutting-edge solutions to my clients.
          </p>

          <p className="text-white my-2">
            <span className="block">Passion for Business Growth:</span>
            Beyond the technicalities of web development, my true passion lies
            in helping businesses thrive. I have a keen eye for identifying
            business problems and leveraging technology to solve them
            effectively. By combining my technical skills with a deep
            understanding of business needs, I deliver solutions that drive
            growth, efficiency, and success.
          </p>

          <p className="text-white my-2">
            <span className="block"> Let's Connect:</span>
            If you're interested in collaborating on a project, discussing
            potential opportunities, or simply want to connect, feel free to
            reach out to me. You can find my contact information and social
            media handles below. I look forward to hearing from you and
            exploring how we can work together to bring your ideas to life.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2  md:mt-20 mt-10">
        {skill_item.map((skill) => (
          <Skills_card
            text={skill.text}
            name={skill.name}
            color={skill.skill_color}
            width={skill.skill_width}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
