import React, { useState } from "react";
import { TableDisplay } from "./TableDisplay";

export const MultiDeleteitem = () => {
  const TableData = [
    {
      id: 1,
      name: "Raman",
      age: 25,
      email: "raman@example.com",
      city: "New York",
    },
    {
      id: 2,
      name: "Rupinder",
      age: 28,
      email: "rupinder@example.com",
      city: "Los Angeles",
    },
    {
      id: 3,
      name: "Aman",
      age: 28,
      email: "aman@example.com",
      city: "San Francisco",
    },
    {
      id: 4,
      name: "Sonia",
      age: 24,
      email: "sonia@example.com",
      city: "Chicago",
    },
    {
      id: 5,
      name: "Raman",
      age: 25,
      email: "raman@example.com",
      city: "New York",
    },
    {
      id: 6,
      name: "Rupinder",
      age: 28,
      email: "rupinder@example.com",
      city: "Los Angeles",
    },
  ];
  const [table, setTable] = useState(TableData);

  const handleDelete = (isuserDelete) => {
    const DeleteItem = table.filter((item) => item.id !== isuserDelete.id);
    setTable(DeleteItem);
  };
  
   const handleUpdateData = (updataUser) => {
     if (updataUser) {
       const userUpdatedData = table.map((item) =>
         item.id === updataUser.id ? updataUser : item
       );
       setTable(userUpdatedData);
     }
   };


  return (
    <div>
      <TableDisplay
        userTable={table}
        setTable={setTable}
        deletedData={handleDelete}
        handleUpdateData= {handleUpdateData}
      />
    </div>
  );
};
