import { useFreeApi } from "@/hooks/useFreeApi";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";

export const FreeApiData = () => {
  const [select, setSelect] = useState("4")
  const [dataFetch, errorHandle, isLoading] = useFreeApi(select);
  console.log("ddbm", dataFetch);
  console.log(select);
  

  return (
    <div>
      <select
            className="w-96 bg-slate-200 px-4 py-2"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="3">3</option>
            <option value="9">9</option>
            <option value="6">6</option>
          </select>
      {isLoading ? (
        <p>....loading</p>
      ) : errorHandle ? (
        <p>{errorHandle}</p>
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow className="text-xl">
                <TableHead>Id</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Dec</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Image</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataFetch?.map((product, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{product?.id}</TableCell>
                  <TableCell>{product?.title}</TableCell>
                  <TableCell>{product?.description}</TableCell>
                  <TableCell className="text-2xl text-blue-600">
                    {product?.price}
                  </TableCell>
                  <TableCell>
                    <img src={product?.images[0]} alt="" className="w-28" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </div>
  );
};
