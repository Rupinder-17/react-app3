import React, { useEffect, useState } from "react";


const setwithExpiry =(key,value, title) =>{
  const now = new Date();
  const item = {
    value : value,
    expiry : now.getDate() + title
  }
  localStorage.setItem(key, JSON.stringify(item))
}
const getWithExpiry = (key)=>{
  const itemStr = localStorage.getItem(key)
  if(!itemStr){
    return null
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if(now.getTime()> item.expiry){
    localStorage.removeItem(key)
    return null;
  }
  return item.value;
}

export const useApiPost = (endpoint , title = 60000) => {
  const [data, setpostData] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [errorHandle, setErrorHandle] = useState(null)


  useEffect(() => {

    const storedData1 = localStorage.getItem(endpoint);

    if (storedData1) {
      setpostData(JSON.parse(storedData1).value);
    } else {
      postsData();
    }
  }, [endpoint]);

  async function postsData() {
    setLoading(true);
    setErrorHandle(null)
    try {
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/${endpoint}?page=1&limit=10`
      );
      res = await res.json();
      setpostData(res);
      setwithExpiry(endpoint, res, title)
      // localStorage.setItem(endpoint, JSON.stringify(endpoint));
    } catch (e) {
      setErrorHandle(e.message || "An unexpected error occurred");
      // setpostData(e);
    } finally {
      setLoading(false);
    }
  }
  return [isloading, errorHandle, data];
};
