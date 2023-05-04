import Skills_card from "./sub-components/skills_cards";

const skill_item = [
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

      <div className="grid md:grid-cols-3 mt-10 mb-4 items-center">
        <div className="md:col-span-1 md:mr-10 flex content-center items-center text-center">
          <img src="images/me.JPG" className="w-fit md:w-full" alt="piouskenny"/>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-green-400 cursor-pointer mt-5 md:mt-0 text-2xl mb-5">Skills Set and Experience &rarr;</h1>
          <p className="text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            distinctio pariatur, aliquid vitae dolorem magnam temporibus
            repellendus provident delectus nam? Dolorem culpa at excepturi
            quidem laboriosam ea, reprehenderit molestias assumenda laborum
            adipisci, consectetur fugiat! Quia culpa esse nam repudiandae ipsa
            ratione ipsam voluptates numquam, expedita hic, quidem perferendis
            iure explicabo? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veritatis labore vero facilis, quod dolore, laboriosam unde
            minima a odit, magnam fugit nihil reprehenderit necessitatibus.
            Maiores, illum! Doloribus, voluptas sint harum reiciendis mollitia
            cupiditate quia, asperiores natus fugit, facilis dolor. Quidem.
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
