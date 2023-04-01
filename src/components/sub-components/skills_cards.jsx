import React from "react";


const Skills_card = ({ text, name, color, width}) => {

  const styles = {
    width: `${width}`
  }

  return (
    <>
      <div className="max-w-lg rounded overflow-hidden shadow-white/10 md:shadow-2xl mx-5">
        <div className="px-6 py-4">
          <div className={`mt-4 text-xl mb-4 ${text}`}>{name}</div>

        <div className="w-full bg-gray-200 rounded-full h-[15px] dark:bg-gray-700">
          <div className={ `${color}  h-[15px] text-xs font-medium text-center p-0.5 rounded-full  width leading-none text-black`  } style={styles} >
            {width}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Skills_card;
