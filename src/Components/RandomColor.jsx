import React, { useState } from "react";

export const RandomColor = ({ listBgColor, changeColor }) => {
  // const arr1 = ["rupinder", "harsimran", "jaskaran"];
  // const [colors, setColors] = useState();

  // const changeColor = (index) => {
  //   const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Generate random hex color
  //   const newColors = [...colors];
  //   newColors[index] = randomColor;
  //   setColors(newColors);
  // };

  return (
    <div>
      {arr1.map((item, index) => (
        <li
          key={index}
          onClick={() => changeColor(item)}
          className={listBgColor}
          // style={{
          //   backgroundColor: listBgColor,
          //   padding: "10px",
          //   cursor: "pointer",
          // }}
        >
          {item}
        </li>
      ))}
    </div>
  );
};
