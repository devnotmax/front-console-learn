import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center h-10 justify-center border rounded-md p-1 shadow-sm w-2/4 bg-slate-100">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow p-1 text-lg border-none outline-none bg-slate-100"
      />
      <button className="p-1 px-2 text-white text-base rounded-lg ml-2 bg-[var(--accent-color)]">
        <i className="bx bx-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
