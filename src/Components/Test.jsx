import React, { useState, useEffect } from "react";

const ExpensiveComponent = ({ onFetch }) => {
  console.log("ExpensiveComponent rendered");
  return <button onClick={onFetch}>Fetch Data</button>;
};

function Test() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // This function is recreated on every render
  const fetchData = () => {
    console.log("Fetching data...");
    // Simulating an API call
    setTimeout(() => {
      setData(`Data fetched at count: ${count}`);
    }, 1000);
  };

  useEffect(() => {
    console.log("Effect ran");
    // This effect runs on every render
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{data}</p>
      <ExpensiveComponent onFetch={fetchData} />
    </div>
  );
}

export default Test;
