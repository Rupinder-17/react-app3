import React, { useEffect, useState } from "react";
import { memo } from "react";

const Input = ({ onpress, value }) => {
  const [inputValue, setInputValue] = useState("");
  console.log("input", inputValue);

  const handleInput = (e) => {
    setInputValue(e.target.value); // Update local input value state
    onpress(e); // Call the onpress function passed from the parent
  };

  useEffect(() => {
    console.log("Initial input value:", value);
  }, []);

  return (
    <div>
      <input
        type="text"
        className="bg-slate-400"
        onChange={handleInput} // Use handleInput to call onpress and update local state
        value={value}
      />
    </div>
  );
};

export default memo(Input);
