import React, { useEffect, useState } from "react";

export const UseEffectPractice = () => {
  const [count, setCount] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState({});
  const [isloading, setLoading] = useState(false);
  console.log("data", data);

  useEffect(() => {
    console.log("useEffect console");
  });

  // jina gtime page rerender hove ga ona time console hove ga

  useEffect(() => {
    document.title = "useEffect";
    console.log("useEffect without depend");
  }, []);
  // eh sirf one time he render hove ga kyo k dependency array dita hoya

  useEffect(() => {
    getData();
    // console.log("useEffect with dependency");
    document.title = "react: " + count;
  }, [ count]);
  // eh button de click te render kro ga kyo k count dependency diti hoi a

  async function getData() {
    setLoading(true);
    try {
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${count + 1}`
      );
      res = await res.json();
      console.log(res);
      setData(res);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        increment:=
      </button>
      {count}
      <div>
        <input
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          className="border"
        />
        <p>{inputValue}</p>
      </div>
      {isloading ? (
        <p>loading.....</p>
      ) : (
        <pre>{JSON.stringify(data, null, "\t")}</pre>
      )}
    </div>
  );
};
