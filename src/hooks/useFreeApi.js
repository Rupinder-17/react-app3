import React, { useEffect, useState } from "react";
import { useCallback } from "react";

export const useFreeApi = (value) => {
  const [dataFetch, setDataFetch] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [errorHandle, setErrorHandle] = useState(null);

 const freeApimemo = useCallback(()=>{
 freeApi()
  },[])

  useEffect(() => {
    if (value) {
      // freeApi();
      freeApimemo();
    }
  }, [value, freeApimemo]);

  async function freeApi() {
    setLoading(true);
    console.log("value", value);

    let url = `https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=${value}&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches`;

    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("data is not find");
      }
      let result = await response.json();
      console.log("res", result);

      setDataFetch(result?.data?.data);
    } catch (e) {
      //   console.log(e);
      setErrorHandle(e, "data is not find");
    } finally {
      setLoading(false);
    }
  }
  return [dataFetch, errorHandle, isloading];
};
