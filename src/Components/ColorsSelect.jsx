import React from "react";
import { useState } from "react";

export const ColorsSelect = () => {
  const arr1 = ["rupinder", "harsimran", "jaskaran"];

  const backGroundColors = [
    { label: "Red", value: "bg-red-500" },
    { label: "Green", value: "bg-green-500" },
    { label: "Yellow", value: "bg-yellow-500" },
    { label: "Pink", value: "bg-pink-500" },
    { label: "Blue", value: "bg-blue-500" },
    { label: "Orange", value: "bg-orange-500" },
  ];

  const [seletedColor, setSelectedColors] = useState([]);

  const handleCheckboxChange = (e) => {

    const { value, checked } = e.target;
    if (checked) {
      setSelectedColors((prev) => [...prev, value]);
    } else {
      setSelectedColors((prev) => prev.filter((color) => color !== value));
    }
  };

  return (
    <div className="bg-slate-400 w-96 px-8">
      <div>
        <input type="checkbox" name="color" id="" />
        <span>{"bg-red-500"}</span>
      </div>
      {backGroundColors.map((items, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={items.value}
            onChange={handleCheckboxChange}
            value={items.value}
          />
          <label htmlFor={items.value}>{items.value}</label>
        </div>
      ))}
    
      {arr1.map((item, index) => (
        <ListItem key={index} item={item} seletedColor={seletedColor} />
      ))}
    </div>
  );
};

function ListItem({ item = "", seletedColor = [] }) {
  const [listBgColor, setListBgColor] = useState("bg-white");

  const changeColor = () => {
    // Only change color if there are selected colors
    if (seletedColor?.length > 0) {
      const bgRandomColor = Math.floor(Math.random() * seletedColor?.length);
      const randomColor = seletedColor[bgRandomColor];
      setListBgColor(randomColor); // Update background color
    }
  };
  return (
    <p onClick={changeColor} className={listBgColor}>
      {item}
    </p>
  );
}
