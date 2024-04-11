import React from "react";

const PortImg = ({ img_source }) => {
  return (
    <>
      <div className="logo hover:opacity-80 opacity-100 transition hover:scale-105  cursor-pointer">
        <img className="lg:w-[200] w-[120px] " src={img_source} alt="logo_img" />
      </div>
    </>
  );
};

export default PortImg;

