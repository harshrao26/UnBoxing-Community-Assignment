import React from "react";
// import logo from '../assets/logo.png'
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
  return (
    <>
      <div className="z-10 bg-[#0D0D0D] flex flex-col gap-16 justify-center items-center w-[5vw] border-r-[1px] border-zinc-800">
        <div>
          <img src={logo} alt="" className="mt-4 h-10" />
        </div>
        <div className="flex flex-col gap-8 justify-center p-4 items-center">
          <img src={img1} alt="" className="w-5 h-5 hover:scale-125 transition-all ease-in-out"/>
          <img src={img2} alt="" className="w-5 h-5 hover:scale-125 transition-all ease-in-out"/>
          <img src={img3} alt="" className="w-5 h-5 hover:scale-125 transition-all ease-in-out"/>
          <img src={img4} alt="" className="w-5 h-5 hover:scale-125 transition-all ease-in-out"/>
          <img src={img5} alt="" className="w-5 h-5 hover:scale-125 transition-all ease-in-out"/>
          <img src={img6} alt="" className="w-5 h-5 hover:scale-125 transition-all ease-in-out"/>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center p-4">
        <img src={img7} alt="" className=" w-3  hover:scale-125 transition-all ease-in-out"/>
        <img src={img8} alt="" className="w-5   hover:scale-125 transition-all ease-in-out"/>

        </div>
      </div>
    </>
  );
};

export default SideNav;
