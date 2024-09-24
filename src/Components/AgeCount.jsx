import React, { useState } from "react";
import { Button } from "./ui/button";

export const AgeCount = () => {
    const [count , setCount] = useState(0)
  const [age, setAge] = useState({
    name: "Raman",
    age: 0,
  });
  console.log(age);

  return (
    <div>

      <div className="flex">
        <p className="text-4xl">{age.name}:</p>
        <Button
          onClick={() => {
            setAge((prev) => ({
              ...prev,
              age: prev.age + 1,
            }));
          }}
        >
          {age.age}
        </Button>
      </div>
      <div className="py-4 ml-5">
        <span className="bg-gray-700 text-gray-200 px-5 py-2" onClick={()=>{
            setCount(count+1)
        }}>{count}</span>

      </div>
    </div>
  );
};
