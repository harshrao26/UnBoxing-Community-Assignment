import React from "react";
import TopBarBox from "./TopBarBox";
import { TopBarData } from "../utils/data";
import flag from "../assets/flag.png";

const TopBar = () => (
  <div className="border border-[#242425] h-24 flex items-center justify-center rounded-lg bg-[#141416]">
    {TopBarData.map((item, index) => (
      <React.Fragment key={index}>
        {index <= 5 ? (
          <TopBarBox name={item.name} data={item.data} />
        ) : index === 6 ? (
          <TopBarBox
            name={item.name}
            data={
              <div className="flex items-center">
                <img src={flag} className="w-4 mr-2" alt="Flag" />
                <span>Japan</span>
              </div>
            }
          />
        ) : index === 7 ? (
          <TopBarBox
            name={item.name}
            data={
              <div className="w-[10vw] mb-8 bg-gray-700 h-2 rounded-full mx-8">
                <div>
                  <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-center h-8 w-full leading-none">
                  <span>80%</span>
                </div>
              </div>
            }
          />
        ) : null}
      </React.Fragment>
    ))}
  </div>
);

export default TopBar;
