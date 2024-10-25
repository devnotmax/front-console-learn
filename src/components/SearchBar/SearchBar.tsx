import React, { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    // Ejecutar búsqueda en tiempo real
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);  // Realizar búsqueda cuando se presiona "Enter"
      console.log("Enter pressed");
      e.preventDefault();
      console.log("Search term:", searchTerm);
    }
  };

  return (
    <div className="flex items-center h-10 justify-center border rounded-md p-1 shadow-sm w-2/4 bg-slate-100">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}  // Detectar cambios en el input
        onKeyDown={handleKeyDown}    // Detectar cuando se presiona "Enter"
        className="flex-grow p-1 text-lg border-none outline-none bg-slate-100"
      />
      <button
        onClick={() => onSearch(searchTerm)}  // También buscar cuando se haga click
        className="p-1 px-2 text-white text-base rounded-lg ml-2 bg-[var(--accent-color)]"
      >
        <i className="bx bx-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;