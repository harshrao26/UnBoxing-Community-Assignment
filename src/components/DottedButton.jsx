import React from "react";
import { FaPlus } from "react-icons/fa6";

const DottedButton = () => {
  return (
    <>
      <div className="text-white font-md flex justify-center items-center border-dashed border-[2px] border-[#f37413] rounded-lg mx-10 px-4 py-3 mt-2">
      <FaPlus className="bg-[#f37413] rounded-md p-[2px]  mr-2 text-black" />
      <h1 className="text-md">Add More Questions</h1>
      </div>
    </>
  );
};

export default DottedButton;
