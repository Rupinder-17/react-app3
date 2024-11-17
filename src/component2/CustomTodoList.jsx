import { useTodo } from "@/hooks/useTodo";
import React, { useState } from "react";

export const CustomTodoList = () => {
  const [state, handleAdd, deleteTodo, EditTodo, Toggle] = useTodo([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(null);
  console.log("iiii", input);
  

  const AddTodo = () => {
    if (edit) {
      EditTodo(edit, input )
      setEdit(null)
      setInput("")
    } else {
      handleAdd(input);
      setInput("");
      setEdit(false);
    }
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };
  const handleEdit = ( id, title) => {
    // EditTodo(id)
    setEdit(id);
    setInput(title);
  };
  const handlecheked = (id)=>{
    Toggle(id)
  }

  return (
    <div className="flex flex-col items-center p-6 max-w-md mx-auto mt-10 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Todo List</h1>

      <div className="flex w-full mb-4">
        <input
          type="text"
          placeholder="Enter a task"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="flex-grow border border-gray-300 px-3 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={AddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
        >
          {edit ? "update" : "Add"}
        </button>
      </div>

      <ul className="w-full space-y-2">
        {state?.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border border-gray-200"
          >
            <input
              type="checkbox"
              name=""
              id=""
              onChange={() => handlecheked(item)}
            />
            <p
              className={`text-gray-800 ${
                item.isCompleted ? "line-through " : ""
              }`}
            >
              {item.title}
            </p>
            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-500 hover:text-red-700 font-medium focus:outline-none"
            >
              Delete
            </button>
            <button onClick={() => handleEdit(item.id, item.title)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
