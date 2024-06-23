import React from "react";
import Bell from "../assets/Bell.png";
import { FiUser } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
const TopNav = () => {
  const formatDate = () => {
    const date = new Date();
    const options = { weekday: "long", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <>
      <div className="flex shadow-2xl shadow-black bg-[#0D0D0D] justify-between items-center  px-4 py-4 left-20 border-b-[1px] border-zinc-800">
        <div>
          <div className="text-[#f37413]  font-bold text-xl  flex text-left gap-1 items-center justify-center font-sans">
            <IoIosArrowBack />
            <h1>Product Information</h1>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <h1 className="text-gray-500">{formatDate()}</h1>
          <img src={Bell} alt="" className="w-8 h" />
          <div className="flex gap-8 leading-none items-center">
            <div className="flex flex-col">
              <h3 className="text-white">Pia Yadav</h3>
              <h5 className="text-gray-500 text-sm">Expert</h5>
            </div>
            <div className="flex gap-4 items-center ">
              <FiUser className="w-10 h-10 bg-white rounded-full p-2" />
              <TiArrowSortedDown className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
