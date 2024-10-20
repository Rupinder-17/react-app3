import { useApi } from "@/hooks/useApi";
import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";

export const PostapiData = () => {
  const [isloading, data] = useApi("/posts");
  console.log(data);

  return (
    <div>
      {isloading ? (
        <p>loading...</p>
      ) : (
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Body</TableHead>
              <TableHead>Title</TableHead>
              {/* <TableHead className="text-right">Amount</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.body}</TableCell>
                <TableCell>{invoice.title}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};
