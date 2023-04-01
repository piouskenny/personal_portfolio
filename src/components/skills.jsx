import Skills_card from "./sub-components/skills_cards";

const skill_item = [
  {
    text: "text-red-500",
    name: "Laravel",
    skill_color: "bg-red-500",
    skill_width: "80%"
  },

  {
    text: "text-blue-600",
    name: "React",
    skill_color: "bg-blue-600",
    skill_width: "90%"
  },

  {
    text: "text-gray-400",
    name: "Wordpress",
    skill_color: "bg-gray-400",
    skill_width: "70%"
  },
  {
    text: "text-white",
    name: "Machine Learning",
    skill_color: "bg-white",
    skill_width: "45%"
  }
];

const Skills = () => {
  return (
    <div className="mt-20 md:mt-40 mb-8 ">
      <h1 className="md:text-5xl text-4xl underline underline-white text-green-500">
        My Skills
      </h1>

      <div className="grid md:grid-cols-2  md:mt-20 mt-10">
        {
            skill_item.map((skill) => (
                <Skills_card  text={skill.text} name={skill.name} color={skill.skill_color} width={skill.skill_width}/>
            ))
        }
      </div>
    </div>
  );
};

export default Skills;
