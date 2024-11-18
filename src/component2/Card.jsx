// import { useTodos } from "@/hooks/useTodos";
import useTodos, { useDeletedItems } from "@/hooks/useCard";
import { useState } from "react";

export const CustomTodoList = () => {
  const { todos, addTodo, deleteTodo, editTodo, toggleTodo } = useTodos()
  const { deletedItems, addDeletedItem, restoreItem } = useDeletedItems()
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  // Add or update a todo
  const handleAddOrUpdate = () => {
    if (editId) {
      editTodo(editId, input);
      setEditId(null);
    } else {
      addTodo(input);
    }
    setInput("");
  };

  // Delete a todo
  const handleDelete = (todo) => {
    deleteTodo(todo);
    addDeletedItem(todo);
  };

  // Restore a deleted item
  const handleRestore = (item) => {
    restoreItem(item);
    addTodo(item.title);
  };

  // Handle edit
  const handleEdit = (id, title) => {
    setEditId(id);
    setInput(title);
  };

  // Toggle completion status
  const handleToggle = (id) => {
    toggleTodo(id);
  };

  return (
    <div className="flex px-7">
      {/* Todo List Section */}
      <div className="flex flex-col items-center p-6 max-w-md mx-auto mt-10 bg-gray-50 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Todo List</h1>

        <div className="flex w-full mb-4">
          <input
            type="text"
            placeholder="Enter a task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow border border-gray-300 px-3 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddOrUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>

        <ul className="w-full space-y-2">
          {todos.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border border-gray-200"
            >
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => handleToggle(item.id)}
              />
              <p
                className={`text-gray-800 ${
                  item.isCompleted ? "line-through" : ""
                }`}
              >
                {item.title}
              </p>
              <button
                onClick={() => handleDelete(item)}
                className="text-red-500 hover:text-red-700 font-medium focus:outline-none"
              >
                Delete
              </button>
              <button onClick={() => handleEdit(item.id, item.title)}>
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Deleted Items Section */}
      <div className="flex flex-col items-center p-6 max-w-md mx-auto mt-10 bg-gray-50 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Deleted Items</h1>

        <ul className="w-full space-y-2">
          {deletedItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border border-gray-200"
            >
              <p className="text-gray-800">{item.title}</p>
              <button
                onClick={() => handleRestore(item)}
                className="text-green-500 hover:text-green-700 font-medium focus:outline-none"
              >
                Restore
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
