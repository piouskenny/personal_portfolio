import React from "react";

const PortImg = ({ img_source }) => {
  return (
    <>
      <div className="logo hover:opacity-100 opacity-70 transition hover:scale-105  cursor-pointer">
      <img className="w-[200px] " src={img_source} alt="logo_img" />
      </div>
    </>
  );
};

export default PortImg;
