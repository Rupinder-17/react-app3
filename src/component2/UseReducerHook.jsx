import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
    console.log("action", action);
    
  if (action.type == "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type == "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type == "name") {
    return {
      ...state,
      name: action.data,
    };
  } else {
    return state;
  }
};

const initialState = {
  counter: 0,
  name: "Rupinder",
};

export const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);

  return (
    <div>
      <h2>Counter with useReducer hook</h2>
      <h3>{state.name}</h3>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      {state.counter}
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "name", data: e.currentTarget.value });
        }}
        value={state.name}
        className="bg-slate-400"
      />
    </div>
  );
};
