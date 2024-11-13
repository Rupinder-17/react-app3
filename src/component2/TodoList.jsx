import { data } from "autoprefixer";
import React from "react";
import { useState } from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  console.log("action", action);
  console.log("state1", state);

  if (action.type == "Add") {
    return [...state, { id: crypto.randomUUID(), title: action.data }];
  }
  if (action.type == "Delete") {
    return state?.filter((item) => item.id !== action.data);
  }
  if(action.type == "Edit"){
    return state?.map((item)=>(
        item.id === action.data ? {...item, title : action.data.title }: item
      ))
    
  }
  
  return state;
};
const initialState = [];

export const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputState, setInputState] = useState("");
  console.log("input", inputState);
  console.log("state first", state);
  
  

  const handleAdd = () => {
    console.log("dispatch");

    dispatch({ type: "Add", data: inputState });
    setInputState("");
  };
  const handleDelete = (id) => {
    console.log("delete");
    dispatch({ type: "Delete", data: id });
  };
  const handleEdit = (id)=>{
    console.log("hello edit");
    dispatch({type: "Edit" , data:{id, title:state.title} })
    setInputState(data.title)
    
  }

  return (
    <div className="m-auto w-96">
      <input
        type="text"
        onChange={(e) => {
          setInputState(e.target.value);
        }}
        value={inputState}
        className="border px-5 py-2 w-72"
      />
      <button onClick={handleAdd} className="bg-slate-800 px-7 py-2 text-white">
        Add
      </button>
      <ul className="bg-slate-400 px-2 py-2 w-96">
        {state?.map((item, index) => (
          <li key={index} className="flex  justify-between">
            <p>{item.title}</p>
            <div className="flex gap-3">
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <button onClick={()=>handleEdit(item.id)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
