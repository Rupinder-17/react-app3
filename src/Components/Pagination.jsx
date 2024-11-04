import React from "react";
import { usePagingData } from "../hooks/usePagingData";
// import { Table, TableBody, TableRow } from "./ui/table";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";

export const Pagination = () => {
  const [isloading, errorHandle, paginationData, currentPage , totalPages, handlePageChange] = usePagingData();
//   console.log("apiData", apiData);

  return (
    <div>
      {isloading ? (
        <p>...loading</p>
      ) : errorHandle ? (
        <p>{errorHandle}</p>
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow className="text-xl">
                <TableHead>Id</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Image</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginationData?.map((item, index) => (
                //  console.log("item",item),;

                <TableRow key={index}>
                  <TableCell>{item?.id}</TableCell>
                  <TableCell>{item.gender}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.name.first}</TableCell>
                  <TableCell>
                    {<img src={item.picture.medium} alt="" />}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* <div className="pagination-controls">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-black text-white px-6 ml-4"
            >
               prev
            </button>

            {[...Array(totalPages).keys()].map((pageNum) => (
              <button
                key={pageNum + 1}
                onClick={() => handlePageChange(pageNum + 1)}
                disabled={currentPage === pageNum + 1}
              className="bg-gray-400 text-white px-6" >
                {pageNum + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-black text-white px-6 ml-4"
            >
              next
            </button>
          </div> */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-6 py-2 text-sm font-medium text-white transition-colors duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-400 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Prev
            </button>

            <div className="flex items-center gap-2">
              {[...Array(totalPages).keys()].map((pageNum) => (
                <button
                  key={pageNum + 1}
                  onClick={() => handlePageChange(pageNum + 1)}
                  disabled={currentPage === pageNum + 1}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg focus:ring-2 focus:ring-gray-400
          ${
            currentPage === pageNum + 1
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
                >
                  {pageNum + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-6 py-2 text-sm font-medium text-white transition-colors duration-200 bg-gray-800 rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};
