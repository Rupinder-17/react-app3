import React, { useState } from "react";

export const TodoAdd = ({ onpress, onpressDelete, addTodo }) => {
  const [input, setInput] = useState("");

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Enter a todo"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
        />
        <button
          onClick={() => {
            onpress(input), setInput("");
          }} // Pass input to the parent handler
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {addTodo?.map((item) => (
          <li
            key={item.id} // Use a unique key
            className="flex justify-between items-center p-2 border border-gray-200 rounded-lg bg-gray-50"
          >
            <p className="text-gray-700">{item.title}</p>
            <button
              onClick={() => onpressDelete(item.id)} // Pass the item's ID to delete
              className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
