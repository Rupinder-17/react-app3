import React, { useState } from "react";

export const useGetData = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0)

  async function getData() {
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${count+1}`
      );
      response = await response.json();
      setData(response);
      
    } catch (e) {
      console.log(e);
    }
  }
  function increment(){
     setCount((prev) => prev + 1);
  }
 
  return [data, count, increment,  getData];
};
