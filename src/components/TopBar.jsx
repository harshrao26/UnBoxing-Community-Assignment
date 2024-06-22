import React from "react";
import Bell from "../assets/Bell.png";
import { FiUser } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";

const TopBar = () => {
  const formatDate = () => {
    const date = new Date();
    const options = { weekday: "long", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <>
      <div className="text-white flex justify-between px-8 py-1 h- items-center border-b-[1px] border-zinc-800">
        <div>
          <div className="text-[#f37413] font-bold text-xl flex gap-1 items-center justify-center font-sans">
            <IoIosArrowBack />
            <h1>Product Information</h1>
          </div>
        </div>
        <div className="flex gap-4  items-center">
          <h1 className="text-gray-500">{formatDate()}</h1>
          <img src={Bell} alt="" className="w-8 h-8"/>
          <div className="flex gap-8 leading-none items-center  p-2">
            <div className="flex flex-col">
              <h3>Pia Yadav</h3>
              <h5 className="text-gray-500 text-sm">Expert</h5>
            </div>
            <div className="flex gap-4 items-center ">
              <FiUser className="w-10 h-10 bg-white rounded-full"/>
              <TiArrowSortedDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
// import React from 'react';

// const formatDate = () => {
//   const date = new Date();
//   const options = { weekday: 'long', month: 'long', day: 'numeric' };
//   return date.toLocaleDateString(undefined, options);
// };

// const Header = () => {
//   return (
//     <div className="flex items-center justify-between bg-gray-900 text-white p-4">
//       <div className="flex items-center">
//         <button className="text-orange-600 font-bold mr-4">
//           &larr; Product Information
//         </button>
//       </div>
//       <div className="flex items-center">
//         <span className="mr-6">{formatDate()}</span>
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center">
//             <span className="mr-2">Pia Yadav</span>
//             <span className="text-gray-500 text-sm">Expert</span>
//           </div>
//           <div className="bg-gray-800 rounded-full p-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-6 h-6 text-gray-400"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9M12 12v9m-3-3h6m2.25-15H20.5m-16 0H3.75m1.5 6h.008v.008H5.25V9m0 6h.008v.008H5.25V15m0 6h.008v.008H5.25V21"
//               />
//             </svg>
//           </div>
//           <div className="relative">
//             <div className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
//               <span className="text-sm text-gray-400">P</span>
//             </div>
//             <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
