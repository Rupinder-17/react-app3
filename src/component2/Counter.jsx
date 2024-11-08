import { Button } from "@/Components/ui/button";
import React from "react";
import { useMemo } from "react";
import { useState } from "react";

export const UseMemoHook = () => {
  const [Counter1, setCounter1] = useState(1);
  const [Counter2, setCounter2] = useState(2);
  console.log("one",Counter1);
  console.log("two",Counter2);
  
  

  const checkevenNumber =useMemo( () => {
    let i =0
    while(i<400000000){
        i++
    }
    if(Counter1%2===0){
        return "even"
    }else{
        return "odd"
    }
  },[Counter1])
  return (
    <div className="text-center space-y-8">
      <div className="">
        <h1 className="text-3xl"> counter1: {Counter1}</h1>
        <p className="text-3xl   mt-6 mb-3"> {checkevenNumber}</p>
        <button
          onClick={() => {
            setCounter1(Counter1 + 1);
          }}
          className="bg-red-900 rounded-lg px-4 text-xl text-white"
        >
          Counter1
        </button>
      </div>
      <div>
        <p className="text-3xl"> counter2: {Counter2}</p>
        <button
          onClick={() => {
            setCounter2(Counter2 + 2);
          }}
          className="bg-red-900 rounded-lg px-4 text-xl text-white"
        >
          Counter2
        </button>
      </div>
    </div>
  );
};
