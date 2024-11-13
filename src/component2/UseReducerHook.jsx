import React from "react";
import { useReducer } from "react";


const reducer = (state, action)=>{
    console.log("action", action);
    console.log("state", state);
    
    switch(action.type){
        case "increment":
            return{
                ...state,
                counter: state.counter+1
            }
            case "decrement":{
                return{
                    ...state,
                    counter: state.counter -1
                }
            }
            case "name":{
                return{
                    ...state,
                    name: action.data
                }
            }
    }
}



// const reducer = (state, action) => {
//     console.log("action", action);
    
//   if (action.type == "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   } else if (action.type == "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   } else if (action.type == "name") {
//     return {
//       ...state,
//       name: action.data,
//     };
//   } else {
//     return state;
//   }
// };

const initialState = {
  counter: 0,
  name: "Rupinder",
};

export const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state1", state);

  return (
    <div className="m-auto text-center mt-10">
      <h2 className="text-3xl  text-red-900 font-medium">
        Counter with useReducer hook
      </h2>
      <h3 className="text-2xl font-semibold mb-5 mt-3">{state.name}</h3>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
        className="bg-slate-400 text-2xl px-3"
      >
        +
      </button>
      <span className="px-7 shadow-lg">{state.counter}</span>

      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
        className="bg-slate-400 text-2xl px-3"
      >
        {" "}
        -
      </button><br />
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "name", data: e.currentTarget.value });
        }}
        value={state.name}
        className="bg-slate-400 mt-6 px-2"
      />
    </div>
  );
};
