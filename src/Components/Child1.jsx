import React, { memo, useEffect } from "react";

 const Child1 = ({ onpress, count }) => {
  useEffect(() => {
    console.log("child1", count);
  }, [count]);
  return (
    <div className="flex gap-5 m-auto w-52">
      <button onClick={()=>onpress(count)} className="bg-blue-500 px-4 py-2 text-white ">
        click me
      </button>
      <p className=" px-4 py-2">{count}</p>
    </div>
  );
};
export default  memo(Child1)
