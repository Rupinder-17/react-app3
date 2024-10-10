import React, { useEffect, useState } from "react";

export const UseEffectPractice = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // console.log("useEffect console");
  });

  // jina gtime page rerender hove ga ona time console hove ga

  useEffect(() => {
    document.title = "useEffect";
    console.log("useEffect without depend");
  }, []);
  // eh sirf one time he render hove ga kyo k dependency array dita hoya


  useEffect(() => {
    // console.log("useEffect with dependency");
    document.title = "react" + count;
  }, [count]);
  // eh button de click te render kro ga kyo k count dependency diti hoi a

  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        increment
      </button>
      {count}

      <div>
        <input
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
        <p>{inputValue}</p>
      </div>
    </div>
  );
};
