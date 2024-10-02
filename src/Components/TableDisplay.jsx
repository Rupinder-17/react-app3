import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const TableDisplay = ({ userTable, deletedData  , handleUpdateData}) => {
  const [isSheetShown, setSheetShown] = useState(false);
  const [isusersEdit, setEditUser] = useState({});
  const [updataUser, setUpdateUser] = useState({
    name: "",
    city: "",
    email: "",
  });
  console.log("edit", isusersEdit);

  const handleInputChange = (e)=>{
    const {name, value} = e.target
    setUpdateUser((prev)=> ({...prev , [name]: value}))

  }
  // const handleUpdateData = () => {
  //   if (updataUser) {
  //     const userUpdatedData = userTable.map((item) =>
  //       item.id === updataUser.id ? updataUser : item
  //     );
  //     setTable(userUpdatedData)
  //     setSheetShown(false)
  //     // setUpdateUser(user)
  //   }
  // };

  const handleEdit = (user) => {
    console.log(user);
    setSheetShown(true);
    setEditUser(user);
    setUpdateUser(user)
  };

  return (
    <>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>name</TableHead>
            <TableHead>email</TableHead>
            <TableHead className="">city</TableHead>
            <TableHead className="">Age</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userTable.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell className="font-medium">{invoice.name}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell>{invoice.city}</TableCell>
              <TableCell className="">{invoice.age}</TableCell>
              <TableCell className="">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <BsThreeDotsVertical />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleEdit(invoice)}>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-red-700 font-semibold"
                      onClick={() => deletedData(invoice)}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Sheet open={isSheetShown} onOpenChange={setSheetShown}>
        <SheetTrigger></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
            <Input
              type="text"
              name="name"
              value={updataUser.name}
              onChange={handleInputChange}
            />
            <Input
              type="email"
              name="email"
              value={updataUser.city}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="city"
              value={updataUser.email}
              onChange={handleInputChange}
            />
          </SheetHeader>
          <Button onClick={()=>{
            setSheetShown(false)
            handleUpdateData(updataUser)}}>Submit</Button>
        </SheetContent>
      </Sheet>
    </>
  );
};
