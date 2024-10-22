// import { useApi } from "@/hooks/useApi";
import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import { useApiPost } from "@/hooks/useApiPost";

export const PostapiData = () => {
  const [isloading, postError, data] = useApiPost("/posts", 300000);
  const [isloading1, commentError, commentdata] = useApiPost("/comments", 300000);
  console.log("mmm", commentdata);

  console.log("nnn", data);

  return (
    <div>
      {isloading ? (
        <p>loading...</p>
      ) : postError ? (
        <p>{postError.message}</p>
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

      <div className="bg-gray-500">
        {isloading1 ? (
          <p>.....loading</p>
        ) : commentError ? (
          <p>error:{commentError.message} </p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow >
                <TableHead className="text-red-900">Id</TableHead>
                <TableHead className="text-red-900">Body</TableHead>
                <TableHead className="text-red-900">Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {commentdata?.map((items, index) => (
                <TableRow key={index}>
                  <TableCell>{items.id}</TableCell>
                  <TableCell>{items.body}</TableCell>
                  <TableCell>{items.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          // <table>
          //   <thead>
          //     <tr>
          //       <th>Id</th>
          //       <th>Name</th>
          //       <th>Body</th>
          //     </tr>
          //   </thead>
          //   <tbody>
          //     {commentdata?.map((comment) => (
          //       <tr key={comment.id}>
          //         <td>{comment.id}</td>
          //         <td>{comment.name}</td>
          //         <td>{comment.body}</td>
          //         <td>{comment.email}</td>
          //       </tr>
          //     ))}
          //   </tbody>
          // </table>
        )}
      </div>
    </div>
  );
};
