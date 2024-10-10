import React, { useState } from "react";

export const ColorSelect = () => {
  const arr1 = ["rupinder", "harsimran", "jaskaran"];

  const backGroundColors = [
    { label: "Red", value: "bg-red-500" },
    { label: "Green", value: "bg-green-500" },
    { label: "Yellow", value: "bg-yellow-500" },
    { label: "Pink", value: "bg-pink-500" },
    { label: "Blue", value: "bg-blue-500" },
    { label: "Orange", value: "bg-orange-500" },
  ];

  const [seletedColor, setSelectedColors] = useState([])
  console.log(seletedColor);
  

  const handleChangeInput = (e)=>{
    const {value , checked} = e.target
    if(checked){
      setSelectedColors((prev)=> [...prev ,value])
    }
    else{
      setSelectedColors((prev)=> prev.filter((color)=> color!== value))
    }
  }


  return (
    <div>
      {backGroundColors.map((item, index) => {
        return (
          <div key={index}>
            <input type="checkbox"  id={item.value} value={item.value} onChange={handleChangeInput} />
            <label htmlFor={item.value}>{item.value}</label>
          </div>
        );
      })}

      {arr1.map((item , index)=>(
        <ListItem key={index} items={item} seletedColor={seletedColor}/>
      ))}

    </div>
  );
};

function ListItem({items="" , seletedColor=[]}){
  const [listItems, setListItems] = useState("bg-red-100")
  console.log(listItems);
  

  const changeColor = ()=>{
    const bgRandomColor = Math.floor(Math.random() * seletedColor?.length);
    const colorChanged = seletedColor[bgRandomColor]
    setListItems(colorChanged)
  }
  return(

    <li onClick={changeColor} className={listItems}>{items}</li>
  )
}