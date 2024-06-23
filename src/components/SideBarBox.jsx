import React from "react";

const SideBarBox = ({ name, isSelected, subOptions }) => {
  return (
    <div
      className={`p-4 ${
        isSelected
          ? "bg-[#323233] text-orange-500 px-8 py-2 -mt-2"
          : "text-white"
      } ${subOptions ? "px-8 py-2 -mt-2" : ""}`}
    >
      {name}
    </div>
  );
};

export default SideBarBox;
