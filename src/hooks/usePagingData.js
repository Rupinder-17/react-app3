import React, { useEffect } from 'react'
import { useState } from 'react'

export const usePagingData = () => {
    const [apiData, SetApiData] = useState([]);
    const [isloading, setLoading] = useState(false);
    const [errorHandle, setErrorHandle] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    console.log("apiData", apiData);
    const pageSize = 2;
    

useEffect(()=>{
    ApiData();
},[])

   async function ApiData (){
        setLoading(true);
        try{
            let res = await fetch("https://api.freeapi.app/api/v1/public/randomusers")
             if (!res.ok) throw new Error("Failed to fetch data");
            let result = await res.json();
            console.log("res", result);
            if(result.data.data){
                SetApiData(result?.data?.data);
            }else{
                SetApiData([]);
            }
        }catch(e){
            setErrorHandle(e.message || "An unexpected error occurred");
        } finally{
            setLoading(false);
        }
    }
    const totalpages = Math.ceil(apiData.length/ pageSize);
    const paginationData = apiData.slice((currentPage-1)*pageSize, (currentPage-1)*pageSize+pageSize);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    return [isloading, errorHandle, paginationData, currentPage, totalpages, handlePageChange];
  
}
