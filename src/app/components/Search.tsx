import React from "react";

const Search = ({ type }: { type: string }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Search {type}</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded-md w-full"
        />
        <select className="border p-2 rounded-md">
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>
        <button className="bg-blue-500 text-white p-2 rounded-md">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;