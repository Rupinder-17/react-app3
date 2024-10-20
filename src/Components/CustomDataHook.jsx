import { useGetData } from "@/hooks/useGetData";
import React, { useEffect } from "react";

export const CustomDataHook = () => {
  const [data, count, increment, getData] = useGetData();
  console.log(data);
  useEffect(() => {
    getData();
  }, [count]);

  return (
    <div className="">
      <div>
        
        <pre>{data ? JSON.stringify(data, null, "\t") : "loading"}</pre>

        <p className="bg-red-800 w-10 px-6" onClick={increment}>
          {count}
        </p>
      </div>
    </div>
  );
};
