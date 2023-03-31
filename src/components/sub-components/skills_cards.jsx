import React from "react";

const Skills_card = ({img_path, name, Level}) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-white/10 md:shadow-2xl mx-5">
        <img
          className="w-full md:h-[200px] h-[100px]"
          src={img_path}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="mt-4 text-xl mb-2 text-center text-gray-300">{name}</div>
          <p className="text-gray-700 text-base">
                {Level}
          </p>
        </div>
      </div>
    </>
  );
};

export default Skills_card;
