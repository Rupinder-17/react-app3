import React from "react";
import { useReducer } from "react";
const reducer = (state, action) => {
    console.log("stateAction", state);
    console.log("action", action);
    
    
  if (action.type == "Add") {
    return [
      ...state,
      { id: crypto.randomUUID(), title: action.Data, isCompleted: false },
    ];
  }
};

export const useTodo = (intialState = []) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  console.log("stateC", state);
  

  const handleAdd = (title) => {
    dispatch({ type: "Add", Data: title });
  };

  return [state, handleAdd];
};
