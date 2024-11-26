import { useApiHook } from '@/hooks/useApiHook'
import React, { useEffect } from 'react'

export const ApiCallcustom = () => {
  const { data, loading, error, fetchData } = useApiHook();
  // console.log(state);
  const handleData = () => {
    fetchData("https://api.freeapi.app/api/v1/public/youtube/videos");
  };
  useEffect(()=>{
    fetchData( "https://api.freeapi.app/api/v1/public/youtube/videos")
  },[])
  return (
    <div>
      <div>
        <button onClick={() => handleData()}>Fetch Data</button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
}
