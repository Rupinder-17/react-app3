import React from "react";
import { useState } from "react";

export const ColorsSelect = () => {
  const arr1 = ["rupinder", "harsimran", "jaskaran"];
//   const bgColors = [
//     "bg-red-800",
//     "bg-blue-600",
//     "bg-green",
//     "bg-yellow",
//     "bg-purple",
//     "bg-pink",
//     "bg-gray",
//     "bg-teal",
//     "bg-indigo",
//     "bg-orange",
//     "bg-lime",
//     "bg-emerald",
//     "bg-cyan",
//     "bg-sky",
//     "bg-violet",
//     "bg-rose",
//   ];
  const [bgColor, setBgColor] = useState("");
  console.log("color", bgColor);

  const changeColor = () => {
    const bgRandomColor = Math.floor(Math.random() * bgColors.length);
    const randomColor = bgColors[bgRandomColor];
    setBgColor(randomColor);
  };

  return (
    <div className="bg-slate-400 w-96 px-8">
      <div>
        <input type="checkbox" name="color" id="" />
        <span>{"bg-red-500"}</span>
      </div>
      <div>
        <input type="checkbox" name="color" id="" />
        <span>{"bg-green-500"}</span>
      </div>
      <div>
        <input type="checkbox" name="color" id="" />
        <span>{"bg-yellow-500"}</span>
      </div>
      <div>
        <input type="checkbox" name="color" id="" />
        <span>{"bg-pink-500"}</span>
      </div>
      <div>
        <input type="checkbox" name="color" id="" />
        <span>{"bg-blue-500"}</span>
      </div>
      <div>
        <input type="checkbox" name="" id="" />
        <span>{"bg-orange-500"}</span>
      </div>
      <div>
        <input type="checkbox" name="" id="" />
        <span>{"bg-red-500"}</span>
      </div>
      {arr1.map((item, index) => (
        <p key={index} onClick={changeColor}>
          {item}
        </p>
      ))}
    </div>
  );
};
