import { useReducer } from "react";

// Reducer for managing todos
const todoReducer = (state, action) => {
  if (action.type === "Add") {
    return [
      ...state,
      { id: crypto.randomUUID(), title: action.payload, isCompleted: false },
    ];
  } else if (action.type === "Delete") {
    return state.filter((item) => item.id !== action.payload.id);
  } else if (action.type === "Edit") {
    return state.map((item) =>
      item.id === action.payload.id
        ? { ...item, title: action.payload.title }
        : item
    );
  } else if (action.type === "Toggle") {
    return state.map((item) =>
      item.id === action.payload.id
        ? { ...item, isCompleted: !item.isCompleted }
        : item
    );
  }
  return state;
};

// Reducer for managing deleted items
const deletedReducer = (state, action) => {
  if (action.type === "AddDeleted") {
    return [...state, action.payload];
  } else if (action.type === "Restore") {
    return state.filter((item) => item.id !== action.payload.id);
  }
  return state;
};

// Custom hook for managing todos
const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (title) => {
    dispatch({ type: "Add", payload: title });
  };

  const deleteTodo = (todo) => {
    dispatch({ type: "Delete", payload: todo });
  };

  const editTodo = (id, title) => {
    dispatch({ type: "Edit", payload: { id, title } });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "Toggle", payload: { id } });
  };

  return { todos, addTodo, deleteTodo, editTodo, toggleTodo };
};
export default useTodos;


export const useDeletedItems = () => {
  const [deletedItems, dispatch] = useReducer(deletedReducer, []);
  const addDeletedItem = (item) => {
    dispatch({ type: "AddDeleted", payload: item });
  };

  const restoreItem = (item) => {
    dispatch({ type: "Restore", payload: item });
  };

  return { deletedItems, addDeletedItem, restoreItem };
};

// export default useDeletedItems
