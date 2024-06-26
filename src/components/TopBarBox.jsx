import React from 'react';
import flag from "../assets/flag.png";
  
const TopBarBox = ({ name, data }) => {
  return (
    <div className='text-white w-full flex flex-col items-center border-r-2 bg-[#141416] border-zinc-800 h-[75%] justify-center p-2 '>
      <h3 className='text-sm text-[#6F6F6F]'>{name}</h3>
      {/* {index === 6 && <img src={flag} className="w-4" alt="Flag" />} */}
      <h1 className='text-xl font-semibold mt-2'>{data}</h1>
    </div>
  );
};

export default TopBarBox;
