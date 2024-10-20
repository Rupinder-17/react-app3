import React, { useState } from "react";

export const useCounter = (value) => {
  const [counter, setCounter] = useState(value);

  function increment() {
    setCounter((prev) => {
      if (prev < 20) {
        return prev + 1;
      }
      else{
        return  0
      }
    });
  }

  function decrement() {
    setCounter((prev)=> (prev > 0 ? prev -1 : 0) );
  }
  return [counter, increment, decrement];
};
