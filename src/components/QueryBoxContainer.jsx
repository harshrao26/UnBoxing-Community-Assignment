import React from "react";
import { QuestionsData } from "../utils/data";
import QueryBox from "./QueryBox";
const QueryBoxContainer = () => {
  return (
    <div className="flex flex-col gap-2 mt-2">
      {QuestionsData.map((item) => (
        <div key={item.id} className="flex text-white">
          <div className=" my-2">
            {item.name}
            <div className="my-2">Answer:</div>
            <div className="">
              <QueryBox />
            </div>
          </div>
        </div>
      ))}
     
    </div>
  );
};

export default QueryBoxContainer;
