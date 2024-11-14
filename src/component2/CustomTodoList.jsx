import { useTodo } from "@/hooks/useTodo";
import React from "react";
import { useState } from "react";

export const CustomTodoList = () => {
  const [state, handleAdd] = useTodo([]);
  const [input, setInput] = useState("");
  console.log("input", input);
  console.log("stateMain", state);

  const AddTodo = () => {
    console.log("hello");
    if (input) {
      handleAdd(input);
    }
  };

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        className="border"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button onClick={AddTodo}>Add</button>
      {state?.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
    </div>
  );
};
