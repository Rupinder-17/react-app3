import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [count]);

  async function getData() {
    setLoading(true);
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${count + 1}`
      );
      response = await response.json();
      setData(response);
      console.log(response);
    } catch (e) {
      console.log(e);
    }finally{
        setLoading(false)
    }
  }
  return (
    <div>
      {isloading ? (
        <p>loading...</p>
      ) : (
        <pre>{JSON.stringify(data, null, "\t")}</pre>
      )}

      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment={count}
      </button>
    </div>
  );
};
