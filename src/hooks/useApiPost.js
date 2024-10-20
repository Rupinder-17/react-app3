import React, { useEffect, useState } from "react";

export const useApiPost = (endpoint) => {
  const [data, setpostData] = useState();
  const [isloading, setLoading]= useState(false)

  useEffect(()=>{
    const storedData1 =  localStorage.getItem(endpoint)
    if(storedData1){
      setpostData(JSON.parse(storedData1))
    }
    else{
      postsData()

    }
  },[endpoint])

  async function postsData() {
    setLoading(true)
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
      res = await res.json();
      setpostData(res);
      localStorage.setItem(endpoint, JSON.stringify(endpoint))
    } catch (e) {
      setpostData(e);
    }
    finally{
        setLoading(false)
    }
  }
  return [ isloading, data]
};
