import { Admin } from "./Admin";
import { BreadcrumbDemo } from "./BreadCrumb";
import { TableDemo } from "./Table";
import { Input } from "./ui/input";
import { CiUser } from "react-icons/ci";
import { MdOutlineSettings } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdCheckmark } from "react-icons/io";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { useState } from "react";

export const TableDashboard = () => {
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

  const [checkedUsers, setCheckedUsers] = useState([]);
  const [userTable, setUserTable] = useState(TableData);
  console.log(userTable);

  console.log("checked", checkedUsers);

  const handlecheckeditem = () => {
    setUserTable((prev) =>
      prev.filter((user) => !checkedUsers.includes(user.id))
    );
    setCheckedUsers([]);
  };

  return (
    <div>
      <div className=" flex w-full">
        <div className="w-[15% ">
          <Admin />
        </div>
        <div className="w-[85%]">
          <div className="flex gap-5 justify-between  px-5   sticky top-0 z-50">
            <Input placeholder="Search..." className="w-96"/>
            <div className="flex gap-3">
              <span>John Doe</span>
              <div className="">
                <span className="">
                  <DropdownMenu className="w-40">
                    <DropdownMenuTrigger className="">
                      <CiUser className="text-xl" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="pr-9 pl-2 mt-3">
                      <div className="flex flex-col">
                        <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                        <span className="text-sm px-2">
                          john.doe@example.com
                        </span>
                      </div>
                      <DropdownMenuSeparator />
                      <div className="flex items-center gap-2 py-1">
                        <CiUser className="text-black text-lg" />
                        <DropdownMenuItem> Profile</DropdownMenuItem>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdOutlineSettings />
                        <DropdownMenuItem>Setting</DropdownMenuItem>
                      </div>
                      <div className="flex items-center gap-2">
                        <IoLogOutOutline />
                        <DropdownMenuItem>Log out</DropdownMenuItem>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-gray-100   mt-1">
            <div className=" font-medium ml-20 py-3">
              <BreadcrumbDemo />
            </div>
            <div className="">
              <h1 className="text-2xl font-semibold ml-20">Dashboard</h1>
              <div className="bg-white rounded-lg ml-20 mr-20 shadow-lg">
                <div className="flex justify-between  items-center mt-2 py-2 px-3">
                  <p className="font-medium">Users</p>
                  <Button className="" onClick={handlecheckeditem}>
                    Delete Items
                  </Button>
                  <div className="flex gap-5">
                    <Input
                      type="search"
                      className="w-80"
                      placeholder=" Search table..."
                    />
                    <DropdownMenu>
                      <DropdownMenuTrigger className="border px-3 rounded-md">
                        Columns
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="flex items-center">
                          <IoMdCheckmark />

                          <DropdownMenuItem>ID</DropdownMenuItem>
                        </div>
                        <div className="flex items-center">
                          <IoMdCheckmark />
                          <DropdownMenuItem>Name</DropdownMenuItem>
                        </div>
                        <div className="flex items-center">
                          <IoMdCheckmark />
                          <DropdownMenuItem>Email</DropdownMenuItem>
                        </div>
                        <div className="flex items-center">
                          <IoMdCheckmark />
                          <DropdownMenuItem>City</DropdownMenuItem>
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <TableDemo
                  selectCheckedUsers={setCheckedUsers}
                  dataTable={userTable}
                  setUserTable={setUserTable}
                />
              </div>
              <div className="flex justify-between text-sm  px-5 items-center">
                <p className="text-gray-500 ml-16 py-3">
                  Showind 1 to 5 of 12 entries
                </p>
                <div>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                        <PaginationLink href="#">2</PaginationLink>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
              <div className="bg-white text-center py-3">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
