"use client";
import React from "react";
import { IconButton } from "@material-ui/core";
import { Delete, Edit, Visibility } from "@material-ui/icons";

const TableRow = ({ product }: any) => {
  return (
    <tr>
      <td className="py-2 px-4 border-b">{product.id}</td>
      <td className="py-2 px-4 border-b">{product.name}</td>
      <td className="py-2 px-4 border-b">
        <IconButton color="primary" title="View">
          <Visibility />
        </IconButton>
        <IconButton color="default" title="Edit">
          <Edit />
        </IconButton>
        <IconButton color="secondary" title="Delete">
          <Delete />
        </IconButton>
      </td>
    </tr>
  );
};

export default TableRow;
