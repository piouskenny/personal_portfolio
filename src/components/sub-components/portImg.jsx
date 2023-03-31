import React from "react";

const PortImg = ({img_source}) => {
  return (

      <div className="logo ">
        <img className="w-[200px]" src={img_source} alt="logo_img" />
      </div>
  );
};

export default PortImg;
