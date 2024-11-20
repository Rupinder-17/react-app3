// import { useDeleteTodo } from "@/hooks/useDeleteTodo";
import React from "react";

export const DeletedTodoItems = ({ onRestoreClick, addDeleteTodos }) => {
  // const [addDeleteTodos, AdddeletedItems, RestoreTodos] = useDeleteTodo();
  console.log("addd", addDeleteTodos);

  // const handleRestore = (item) => {
  //   RestoreTodos(item);
  //   AdddeletedItems(item.title);
  // };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Deleted Todos</h1>
      <div>
        <ul className="space-y-2">
          {addDeleteTodos?.map((item, index) => {
            console.log("item,", item);

            return (
              <li
                key={index}
                className="flex justify-between items-center p-2 border border-gray-200 rounded-lg bg-gray-50"
              >
                <p className="text-gray-700">{item.title}</p>
                <button
                  onClick={() => onRestoreClick(item.id)}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  Restore
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
