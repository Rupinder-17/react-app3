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
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";


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
  // {
  //    id: 7,
  //   name: "Raman",
  //   age: 25,
  //   email: "raman@example.com",
  //   city: "New York",
  // },
  // {
  //   id: 8,
  //   name: "Rupinder",
  //   age: 28,
  //   email: "rupinder@example.com",
  //   city: "Los Angeles",
  // }
];

export function TableDemo() {
  // const filteredData = TableData.filter(
  //   (item) =>
  //     item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.city.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  // const [sheet, setSheet] = useState(false)
  // console.log("sheet",sheet);
  const handleEditClick = (user) => {
    console.log(user);
    setSheetOpen(true)
    setSelectedUser(user)
  };
  const handleDelete = (user) => {
    console.log(user);
  };
  const [isSheetOpen , setSheetOpen] = useState(false)
  const [selectedUser , setSelectedUser] = useState({})

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
                        Delete User
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
      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen} >
        <SheetTrigger>Edit</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
            <input type="text" value={selectedUser.name} />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
