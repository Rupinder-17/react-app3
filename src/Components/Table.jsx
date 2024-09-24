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
  // SheetTrigger,
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
  const handleEditClick = (user) => {
    console.log(user);
    setSheetOpen(true)
    setSelectedUser(user)
    
  };
  const handleDelete = (user) => {
    console.log(user)
    setDilogBox(true)

  };
  // 
  const [isSheetOpen , setSheetOpen] = useState(false)
  const [selectedUser , setSelectedUser] = useState({})
  const [isDilogboxOpen , setDilogBox] = useState(false)

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
          {TableData.length > 0 ? (
            TableData.map((item, index) => (
              <TableRow key={index}>
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
      <Dialog  open={isDilogboxOpen} onOpenChange={setDilogBox} >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure to delete this user</DialogTitle>
            <div className="flex gap-5 py-4 justify-center">

            <Button className="w-14 bg-red-800">Yes</Button>
            <Button className="w-14 bg-red-800">No</Button>
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
            <Input type="text" name="name" value={selectedUser.name} />
            <Input type="email" name="email" value={selectedUser.email} />
            <Input type="text" name=" city" value={selectedUser.city} />
            <Button>Edit user</Button>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
