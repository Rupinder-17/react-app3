// import React from "react";
import Swal from "sweetalert2";


export const DeletedTodoItems = ({
  onRestoreClick,
  addDeleteTodos = [],
  onDeletePermanent,
}) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Deleted Todos</h1>
      <div>
        <ul className="space-y-2">
          {addDeleteTodos?.map((item) => {
            return (
              <li
                key={item.id}
                className="flex justify-between items-center p-2 border border-gray-200 rounded-lg bg-gray-50"
              >
                <p className="text-gray-700">{item.title}</p>
                <button
                  onClick={() => {
                    onRestoreClick(item);
                  }}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  Restore
                </button>
                <button onClick={() =>{
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
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                      });
                    }
                  });
                  // alert("are you sure to delete")
                   onDeletePermanent(item)}}>
                  Permenent Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
