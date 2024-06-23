import React, { useState } from "react";
import { QueryData } from "../utils/data";
import {
  RepairServicesQuestionsData,
  ReplacementQuestionsData,
  SafetyQuestionsData,
} from "../utils/data";
import QueryBox from "./QueryBox"; // Assuming this component exists
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Query = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleItemClick = (itemName) => {
    // Find the selected category object from QueryData
    const selected = QueryData.find((item) => item.name === itemName);
    if (selected) {
      setSelectedCategory(selected);
    }
  };

  // Assuming each category has a corresponding questions data
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
      <div className="flex gap-8 items-center relative">
        <IoIosArrowBack className="text-white text-2xl" />
        {QueryData.map((item) => (
          <div
            key={item.id}
            className="mt-2 flex text-white cursor-pointer justify-center items-center mb-2"
            onClick={() => handleItemClick(item.name)}
          >
            <h1>{item.name}</h1>
          </div>
        ))}
        <IoIosArrowForward className="text-white text-2xl absolute right-0" />
      </div>

      {/* Render the selected category's questions */}
      {selectedCategory && (
        <div className="mt-4 text-white">
          {getQuestionsData().map((question) => (
            <div key={question.id}>
              <h3>{question.name}</h3>
              <QueryBox />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Query;
