import React from "react";
import { IconButton } from "@material-ui/core";
import { Delete, Edit, Visibility } from "@material-ui/icons";
import { Company } from "@prisma/client";
import TableRow from "@/app/components/TableRow";

const List = ({ type, data }: { type: string; data: Company[] }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{type} List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 align-middle">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              {type === "product" ? (
                <>
                  <th className="py-2 px-4 border-b">Category</th>
                  <th className="py-2 px-4 border-b">Price</th>
                </>
              ) : (
                ""
              )}
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <TableRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
