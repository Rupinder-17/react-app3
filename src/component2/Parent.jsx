import React from "react";
import Title from "./Title";
// import  Button  from "./Button";
import { useState } from "react";
import Count from "./Count";
import { useCallback } from "react";
import Button from "./Button";

const ParentData = () => {
  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState(10000);

  const handleAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const handleSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <div className="flex gap-20 items-center justify-center">
        <div className="mt-5">
          <Count value={age} type="Age:" />
          <Button onHandle={handleAge}>age</Button>
        </div>
        <div className="mt-5 ">
          <Count value={salary} type="Salary:" />
          <Button onHandle={handleSalary}>increment salary</Button>
        </div>
      </div>
    </div>
  );
};
export default ParentData; //ParentData
