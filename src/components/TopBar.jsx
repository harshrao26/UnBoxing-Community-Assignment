import React from "react";
import TopBarBox from "./TopBarBox";
import { TopBarData } from "../utils/data";

function TopBar() {
  return (
    <div className=" border-[1px] h-24 border-[#6f6f6f] flex items-center justify-center   rounded-lg bg-[#141416]">
      {TopBarData.map((item, index) => (
        <React.Fragment key={index}>
          {index <= 6 ? (
            <TopBarBox name={item.name} data={item.data} />
          ) : index === 7 ? (
            <React.Fragment>
              <TopBarBox
                name={item.name}
                data={
                  <div className=" w-[10vw] mb-8  bg-gray-700 h-2 rounded-full mx-8">
                    <div className=""> 
                      <div
                        className="bg-orange-500  h-2 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-center h-8 w-full leading-none">
                      <span className="">80%</span>
                    </div>
                  </div>
                }
              />
            </React.Fragment>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}

export default TopBar;

// (
//     <div className="flex items-center justify-around bg-gray-900 p-4 text-white">
//       <div className="flex flex-col items-center">
//         <span className="text-gray-400">Catalog</span>
//         <span>Television</span>
//       </div>
//       <div className="flex flex-col items-center">
//         <span className="text-gray-400">Sub Catalog</span>
//         <span>Q LED</span>
//       </div>
//       <div className="flex flex-col items-center">
//         <span className="text-gray-400">Brand Name</span>
//         <span>Sony</span>
//       </div>
//       <div className="flex flex-col items-center">
//         <span className="text-gray-400">Model No</span>
//         <span>A80L Series</span>
//       </div>
//       <div className="flex flex-col items-center">
//         <span className="text-gray-400">Device Category</span>
//         <span>Android TV</span>
//       </div>
//       <div className="flex flex-col items-center">
//         <span className="text-gray-400">Manufacturer</span>
//         <span>Sony Corp.</span>
//       </div>
//       <div className="flex flex-col items-center">
//         <span className="text-gray-400">Manufactured in</span>
//         <span className="flex items-center">
//           <img src="https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png" alt="Japan" className="w-6 h-4 mr-2" />
//           Japan
//         </span>
//       </div>
//       <div className="flex flex-col items-center">
//
//       </div>
//     </div>
//   )
