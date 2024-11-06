import React, { useState, useCallback, useEffect } from 'react';

const ExpensiveComponent = React.memo(({ onFetch }) => {
  console.log('ExpensiveComponent rendered');
  return <button onClick={onFetch}>Fetch Data</button>;
});

function CallBackHook() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // useCallback memoizes the fetchData function
  const fetchData = useCallback(() => {
    console.log('Fetching data...');
    // Simulating an API call
    setTimeout(() => {
      setData(`Data fetched at count: ${count}`);
    }, 1000);
  }, [count]); // Only recreate if count changes

  useEffect(() => {
    console.log('Effect ran');
    // This effect depends on fetchData
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

export default CallBackHook;