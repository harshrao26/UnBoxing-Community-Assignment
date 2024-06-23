import React from "react";
import SideBarBox from "./SideBarBox";
import { SideBarData } from "../utils/data";

const SideBar = () => {
  return (
    <div className="flex flex-col rounded-lg bg-[#141416] w-[25%] gap-2 border-r-[#6f6f6f]  border-[1px] shadow-lg shadow-black  ">
      {SideBarData.map((item) => {
        return (
          <SideBarBox
            key={item.id}
            name={item.name}
            isSelected={item.name === "Pre-Purchase" }
            subOptions={item.name === "Post-Purchase"}
          />

        );
      })}
    </div>
  );
};

export default SideBar;
