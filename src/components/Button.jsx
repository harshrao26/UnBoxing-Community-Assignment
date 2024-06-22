import React from "react";
const Button = ({ name }) => {
  const handleClick = () => {
    console.log("Button clicked! Navigate to: None");
  };

  return (
    <button
      className="
        bg-[#f37413] text-white py-2 px-4 rounded transition ease-out duration-300 hover:bg-orange-600 gap-0 font-inter font-semibold leading-[21.78px]"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
