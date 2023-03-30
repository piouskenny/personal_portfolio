import Skills_card from "./sub-components/skills_cards";

const skill_item = [
  {
    img_path: "https://i.pinimg.com/564x/ab/8b/5e/ab8b5ea6637ebd8e5755c838d952b8c1.jpg",
    name: "Laravel",
    Level: "",
  },

  {
    img_path: "https://c4.wallpaperflare.com/wallpaper/294/834/442/reactjs-facebook-javascript-minimalism-wallpaper-preview.jpg",
    name: "React",
    Level: "",
  },

  {
    img_path: "images/skills/wordpress.png",
    name: "Wordpress",
    Level: "",
  },
  {
    img_path: "https://static.vecteezy.com/system/resources/previews/003/504/819/non_2x/brain-and-artificial-intelligence-line-icon-brain-innovation-logo-illustration-free-vector.jpg",
    name: "Machine Learning",
    Level: "",
  }
];

const Skills = () => {
  return (
    <div className="mt-20 md:mt-40 mb-8 ">
      <h1 className="md:text-5xl text-4xl underline underline-white text-green-500">
        My Skills
      </h1>

      <div className="grid md:grid-cols-4 grid-cols-2 md:mt-20 mt-10">
        {
            skill_item.map((skill) => (
                <Skills_card  img_path={skill.img_path} name={skill.name} content={skill.content}/>
            ))
        }
      </div>
    </div>
  );
};

export default Skills;
