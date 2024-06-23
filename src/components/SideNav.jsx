import React from "react";
import logo from "../../public/logo.svg";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";

const SideNav = () => {
  const topIcons = [img1, img2, img3, img4, img5, img6];
  const bottomIcons = [img7, img8];

  return (
    <div className="z-10 bg-[#0D0D0D] flex flex-col gap-16 justify-center items-center w-[5vw] border-r border-zinc-800">
      <div>
        <img src={logo} alt="Logo" className="mt-4 h-10" />
      </div>
      <div className="flex flex-col gap-8 justify-center p-4 items-center">
        {topIcons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt="icons"
            className="w-5 h-5 hover:scale-125 transition-all ease-in-out"
          />
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-8 justify-center items-center p-4">
        {bottomIcons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt="icons"
            className={`hover:scale-125 transition-all ease-in-out ${index === 0 ? 'w-3' : 'w-5'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SideNav;
