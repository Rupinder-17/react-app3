import React, { useEffect, useState } from "react";

export const useApi = (endPoint) => {
  const [apiData, setApiData] = useState();
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem(endPoint);
    if (storedData) {
      setApiData(JSON.parse(storedData));
    } else {
      apiGet();
    }
  }, [endPoint]);

  async function apiGet() {
    setLoading(true);
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/${endPoint}`
      );
      response = await response.json();
      setApiData(response);
      localStorage.setItem(endPoint, JSON.stringify(response));
    } catch (error) {
      setApiData(error);
    } finally {
      setLoading(false);
    }
  }
  return [isloading, apiData];
};
