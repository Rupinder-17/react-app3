import React, { useState } from "react";

const ColorBox = () => {
  const bgColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-gray-500",
    "bg-teal-500",
  ];

  const [bgColor, setBgColor] = useState(bgColors[0]);

  const changeColor = () => {
    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    setBgColor(randomColor);
  };

  return (
    <div className={`h-64 w-64 ${bgColor} flex justify-center items-center`}>
      <button onClick={changeColor} className="text-white font-bold">
        Change Color
      </button>
    </div>
  );
};

export default ColorBox;
