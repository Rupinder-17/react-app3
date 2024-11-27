import React, { useReducer, useCallback } from "react";

const apiReducer = (state, action) => {
  if (action.type == "start") {
    return { ...state, loading: true, error: null };
  }
  if (action.type == "success") {
    console.log("action success", action.type);
    
    return { ...state, loading: false, data: action.result.data, error: null };
  }
  if (action.type == "error") {
    return { ...state, loading: false, data: null, error: action.result };
  }
  return state;
};

const initialstate = { data: null, loading: false, error: null };
export const useApiHook = () => {
  const [state, dispatch] = useReducer(apiReducer, initialstate);
  console.log("state", state);

  const fetchData = useCallback(async (apiData) => {
    dispatch({ type: "start" });
    try {
      const response = await fetch(apiData);
      const result = await response.json();
      console.log("API RESULT",result);
      dispatch({ type: "success", result });
    } catch (e) {
      console.log(e);
      dispatch({ type: "error", result: e.message });
    }
  }, []);
  return {...state, fetchData};
};
