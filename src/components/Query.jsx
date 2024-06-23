import React, { useState } from "react";
import { QueryData } from "../utils/data";
import {
  RepairServicesQuestionsData,
  ReplacementQuestionsData,
  SafetyQuestionsData,
} from "../utils/data";
import QueryBox from "./QueryBox";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Query = () => {
  const [selectedCategory, setSelectedCategory] = useState(QueryData[0]);

  const handleItemClick = (itemName) => {
    const selected = QueryData.find((item) => item.name === itemName);
    if (selected) {
      setSelectedCategory(selected);
    }
  };

  const getQuestionsData = () => {
    switch (selectedCategory?.name) {
      case "Repair Servies":
        return RepairServicesQuestionsData;
      case "Replacement Policy":
        return ReplacementQuestionsData;
      case "Safety & Energy Efficiency":
        return SafetyQuestionsData;
      default:
        return [];
    }
  };

  return (
    <>
      <div className="flex gap-8 items-center relative border-[#242425] ">
        <IoIosArrowBack className="text-white text-2xl" />
        {QueryData.map((item) => (
          <div
            key={item.id}
            className={`mt-2  flex cursor-pointer justify-center items-center mb-2 ${
              selectedCategory.name === item.name
                ? "text-orange-500 border-b-[1px] border-orange-500 "
                : "text-white"
            }`}
            onClick={() => handleItemClick(item.name)}
          >
            <h1>{item.name}</h1>
          </div>
        ))}
        <IoIosArrowForward className="text-gray-700 text-2xl absolute right-0" />
      </div>

      {selectedCategory && (
        <div className="mt-4 text-white">
          {getQuestionsData().map((question) => (
            <div key={question.id} className="my-4">
              <h3>{question.name}</h3>
              <h1 className="flex gap-2 my-2">
                Answer
                {question.id === 1 && <p> [Maximum 75 characters*] </p>}
              </h1>
              <QueryBox />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Query;
