import { data } from "autoprefixer";
import React from "react";
import { useEffect } from "react";
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
  if (action.type == "Delete") {
    // let  deleteTodoitem = state?.find((item) => item.id === action.Data);
    // if(deleteTodoitem){
      return state.filter((item)=> item.id !== action.Data)
      
    // }
  }
  if (action.type == "edit") {
    return state?.map((item) =>
      item.id === action.Data.id ? { ...item, title: action.Data.title } : item
    );
  }
  if (action.type == "toggle") {
    return state?.map((item) =>
      item.id === action.Data
        ? { ...item, isCompleted: !item.isCompleted }
        : item
    );
  }
  return state;
};
const deleteReducer = (state, action)=>{
  console.log("37", state);
  
  if(action.type == "addtodos"){
    return [...state,{id:action.Data.id, title:action.Data.title}]
  }
  if(action.type== "restore"){
    return state.filter((item)=>item.id !== action.Data)
  }
return state
}

const initialTodosState = [];
const initialDeletedState = [];

export const useTodo = () => {
  const [state, dispatch] = useReducer(reducer, initialTodosState);
  console.log("rrrr", state);
  

  console.log("stateC", state);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state));
  }, [state]);

  const handleAdd = (title) => {
    dispatch({ type: "Add", Data: title });
  };
  const deleteTodo = (id) => {
    dispatch({ type: "Delete", Data: id });
  };
  const EditTodo = (id, title) => {
    dispatch({ type: "edit", Data: { id, title } });
  };
  const Toggle = (id) => {
    dispatch({ type: "toggle", Data: id });
  };

  return [state, handleAdd, deleteTodo, EditTodo, Toggle];
};



 export const DeleteTodo = ()=>{
  const [state, dispatch] = useReducer(deleteReducer, initialDeletedState);
  console.log("ddddd", state);
  

  const deleteTodoitem = (id, title)=>{
    dispatch({type: "addtodos", Data: {id, title}})
  }
  const restoreData = (id)=>{
    dispatch({type: "restore", Data:id })
  }
return[state, deleteTodoitem, restoreData]
}