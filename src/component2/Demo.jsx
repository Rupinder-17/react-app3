import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "Add") {
    return [...state, { id: crypto.randomUUID(), title: action.data }];
  }
  if(action.type == "Delete"){
    return state?.filter((item)=> item.id !== action.data)
  }
  return state;
};

const initialState = [];

export const Todolist1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputId, setInput] = useState("");

  const handleAdd = () => {
    if (inputId.trim()) {
      dispatch({ type: "Add", data: inputId });
      setInput(""); // Clear the input after adding
    }
  };
  const handleDelete = (id)=>{
    dispatch({type: "Delete", data: id})
  }
  const handleEdit = ()=>{
    dispatch({type: "Edit", data:inputId})
  }

  return (
    <div className="flex flex-col items-center p-4 max-w-md mx-auto mt-10 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Todo List</h1>

      <div className="flex mb-4 w-full">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={inputId}
          placeholder="Enter a task"
          className="flex-grow border border-gray-300 px-3 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
      </div>

      <ul className="w-full">
        {state.map((item, index) => (
          <li
            key={index}
            className="flex  items-center bg-white py-2 px-3 mb-2 rounded-lg shadow-sm border border-gray-200"
          >
            <p className="text-gray-800 w-full">{item.title}</p>
            <button
              className="text-red-500 hover:text-red-700 font-medium focus:outline-none"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
            <button
              className="text-red-500 hover:text-red-700 font-medium ml-5 focus:outline-none"
              onClick={() => handleEdit(item.id)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
