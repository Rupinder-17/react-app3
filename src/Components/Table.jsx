import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";



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

export function TableDemo() {

  const [userTable , setUserTable] = useState(TableData)
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [ setSelectedUser] = useState({});
  const [isDilogboxOpen, setDilogBox] = useState(false);
  const [userToDelete , setUserToDelete] = useState(null)
  const [updateUser , setUpdateUser] = useState({name: "", email: "", city: ""})

  const handleEditClick = (user) => {
    console.log(user);
    setSheetOpen(true);
    setSelectedUser(user);
    console.log("123",setSelectedUser);
    setUpdateUser(user)
    
  };
  const handleDelete = (user) => {
    console.log(user);
    
    setUserToDelete(user)
    setDilogBox(true);
    console.log(user);
  };
  const handleDeleteUsr = ()=>{
    if (userToDelete) {
      const delItem = userTable.filter((item) => item.id !== userToDelete.id);
      setUserTable(delItem)
      setDilogBox(false)
    }

  }

  const handleChange = (e)=>{
    const {name , value} = e.target
    setUpdateUser((prev)=> ({...prev, [name]: value}))

  }
  const handleUpdateUser = ()=>{
    if(updateUser){
      const updateitem = userTable.map((item)=>
        item.id === updateUser.id ? updateUser : item
      )
      setUserTable(updateitem)
      setSheetOpen(false)

    }

  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userTable.length > 0 ? (
            userTable.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <BsThreeDotsVertical />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => {
                          handleEditClick(item);
                        }}
                      >
                        Edit user
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={() => {
                          handleDelete(item);
                        }}
                      >
                        Delete user
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4}>No results found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Dialog open={isDilogboxOpen} onOpenChange={setDilogBox}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Are you absolutely sure to delete this user
            </DialogTitle>
            <div className="flex gap-5 py-4 justify-center">
              <Button className="w-14 bg-red-800" onClick={handleDeleteUsr}>
                Yes
              </Button>
              <Button
                className="w-14 bg-red-800"
                onClick={() => {
                  setDilogBox(false);
                }}
              >
                No
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
            <input type="text" />
            <Input
              type="text"
              name="name"
              value={updateUser.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              value={updateUser.email}
              onChange={handleChange}
            />
            <Input
              type="text"
              name=" city"
              value={updateUser.city}
              onChange={handleChange}
            />
            <Button onClick={handleUpdateUser}>Edit user</Button>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
