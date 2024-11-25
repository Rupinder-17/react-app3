import React, { useState } from "react";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const DeletedTodoItems = ({
  onRestoreClick,
  addDeleteTodos = [],
  onDeletePermanent,
  onpressDeleteChecked,
}) => {
  const [checked, setChecked] = useState([]);
  console.log("checked", checked);
  

  const handleCheckboxChange = (id) => {
    console.log("check items");
    
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleDeleteAllChecked = () => {
    if (checked.length === 0) {
      toast.error("No items selected to delete!");
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      text: "All selected items will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete them!",
    }).then((result) => {
      if (result.isConfirmed) {
        onpressDeleteChecked(checked);
        // setChecked([]); // Clear checked state after deletion
        toast.success("Selected items deleted successfully!");
      }
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="text-2xl font-bold text-center mb-4">Deleted Todos</h1>
      <button
        onClick={handleDeleteAllChecked}
        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition mb-4"
      >
        Delete All Checked
      </button>
      <div>
        <ul className="space-y-2">
          {addDeleteTodos?.map((item,index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border border-gray-200 rounded-lg bg-gray-50"
            >
              <input
                type="checkbox"
                checked={checked.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
                className="mr-2"
              />
              <p className="text-gray-700">{item.title}</p>
              <button
                onClick={() => {
                  toast.success("Todo restored successfully");
                  onRestoreClick(item);
                }}
                className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Restore
              </button>
              <button
                onClick={() => {
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      onDeletePermanent(item);
                      toast.success("Your todo is deleted permanently");
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                      });
                    }
                  });
                }}
                className="bg-red-800 text-white px-3 py-1 rounded-md"
              >
                Permanent Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default React.memo(DeletedTodoItems);
