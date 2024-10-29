import React, { useState } from "react";
// import Input from "./Input";
import Input from "./DemoChild";

function ParentComponent() {
  const [parentValue, setParentValue] = useState("");

//   console.log(prarentValue);
  

  // Define the onpress function to handle input changes
  const handleInputChange = (e) => {
    setParentValue(e.target.value); // Update parent component's state with the input value
  };

  return (
    <div>
      <h1>Current Input Value: {parentValue}</h1>
      {/* Pass handleInputChange as the onpress prop to the Input component */}
      <Input onpress={handleInputChange} value={parentValue} className="bg-red-900" />
    </div>
  );
}

export default ParentComponent;
