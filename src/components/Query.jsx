import React from "react";
import { QueryData } from "../utils/data";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const Query = () => {
  return (
    <div className="flex gap-8 justify-start items-center px-10 ">
      <div className="flex ">
        <MdArrowBackIos className="text-white text-2xl " />
      </div>

      {QueryData.map((item) => (
        <div key={item.id} className="flex">
          <div className="flex items-center">
            {item.name === "Repair Servies" ? (
              <div className="text-orange-500 underline p-2">{item.name}</div>
            ) : (
              <div className="text-white">{item.name}</div>
            )}
          </div>
        </div>
      ))}
      <div className="flex items-center justify-center absolute right-16 ">
        <MdArrowForwardIos className="text-white text-2xl" />
      </div>
     
     
    </div>
  );
};

export default Query;
