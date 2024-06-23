import React from "react";
import SideBarBox from "./SideBarBox";
import { SideBarData } from "../utils/data";

const SideBar = () => {
  return (
    <div className="flex flex-col rounded-lg bg-[#141416] w-[25%] border-[1px] gap-2 border-[#6f6f6f] p-2">
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
