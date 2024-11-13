import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "Add") {
    return [...state, { id: crypto.randomUUID(), title: action.data }];
  }
  if (action.type === "Delete") {
    return state.filter((item) => item.id !== action.data);
  }
  if (action.type === "Edit") {
    return state.map((item) =>
      item.id === action.data.id ? { ...item, title: action.data.title } : item
    );
  }
  return state;
};

const initialState = [];

export const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputState, setInputState] = useState("");
  const [edit, setEdit] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  const handleAdd = () => {
    if (edit) {
      dispatch({ type: "Edit", data: { id: updateId, title: inputState } });
      setEdit(false);
      setUpdateId(null);
    } else {
      dispatch({ type: "Add", data: inputState });
    }
    setInputState("");
  };

  const handleDelete = (id) => {
    dispatch({ type: "Delete", data: id });
  };

  const handleEdit = (item) => {
    setInputState(item.title);
    setEdit(true);
    setUpdateId(item.id);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Todo List</h1>

      <div className="flex items-center mb-4">
        <input
          type="text"
          onChange={(e) => setInputState(e.target.value)}
          value={inputState}
          placeholder="Enter a task"
          className="flex-grow border border-gray-300 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
        >
          {edit ? "Update" : "Add"}
        </button>
      </div>

      <ul className="space-y-2">
        {state.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white py-2 px-3 rounded-lg shadow-sm border border-gray-200"
          >
            <p className="text-gray-800">{item.title}</p>
            <div className="flex space-x-3">
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 hover:text-red-700 font-medium focus:outline-none"
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(item)}
                className="text-blue-500 hover:text-blue-700 font-medium focus:outline-none"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
