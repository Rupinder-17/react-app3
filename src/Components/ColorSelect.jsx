import React, { useState } from "react";
import { useTheme } from "@/hooks/useTheme";

export const ColorSelect = () => {
  const arr1 = ["rupinder", "harsimran", "jaskaran"];
  const {colors} = useTheme()


  const backGroundColors = [
    { label: "Red", value: "bg-red" },
    { label: "Green", value: "bg-green" },
    { label: "Yellow", value: "bg-yellow" },
    { label: "Pink", value: "bg-pink" },
    { label: "Blue", value: "bg-blue" },
    { label: "Orange", value: "bg-orange" },
    { label: "Purple", value: "bg-purple" },
    { label: "Teal", value: "bg-teal" },
    { label: "Indigo", value: "bg-indigo" },
    { label: "Cyan", value: "bg-cyan" },
    { label: "Lime", value: "bg-lime" },
    { label: "Amber", value: "bg-amber" },
    { label: "Violet", value: "bg-violet" },
    { label: "Fuchsia", value: "bg-fuchsia" },
    { label: "Rose", value: "bg-rose" },
    { label: "Slate", value: "bg-slate" },
  ];

  const [seletedColor, setSelectedColors] = useState([]);
  console.log(seletedColor);

  const [inputValue, setInputValue] = useState(100);
  console.log("mm", inputValue);

  const handleChangeInput = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedColors((prev) => [...prev, value]);
    } else {
      setSelectedColors((prev) => prev.filter((color) => color !== value));
    }
  };

  return (
    <div style={{backgroundColor: colors.background, color: colors.text}} className=" w-96 px-5">
      <select
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
        className="w-80 px-4"
      >
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
        <option value="500">500</option>
      </select>
      {backGroundColors.map((item, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              id={item.value}
              value={item.value}
              onChange={handleChangeInput}
            />
            <label htmlFor={item.value}>{item.value}</label>
          </div>
        );
      })}
      {arr1.map((item, index) => (
        <ListItem
          key={index}
          item={item}
          seletedColor={seletedColor}
          inputValue={inputValue}
        />
      ))}
    </div>
  );
};

function ListItem({ item = "", seletedColor, inputValue }) {
  const [listItems, setListItems] = useState("bg-red-100");
  

  const changeColor = () => {
    const bgRandomColor = Math.floor(Math.random() * seletedColor?.length);

    const colorChanged = `${seletedColor[bgRandomColor]}-${inputValue}`; // default in case array is empty
    console.log("vvvv", colorChanged);

    setListItems(colorChanged);
  };
console.log(listItems);

  return (
    <li
      onClick={changeColor}
      // style={{ backgroundColor: listItems }}

      className={`${listItems}`} // combines color and intensity correctly
    >
      {item}
    </li>
  );
}
