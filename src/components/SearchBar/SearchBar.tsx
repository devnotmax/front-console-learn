import React, { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [noResults, setNoResults] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    e.preventDefault();
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onSearch(searchTerm);
      setNoResults(false);

      if (searchTerm === "") {
        setNoResults(true);
      }
    }, 500); // Retraso de 500ms antes de ejecutar la búsqueda

    return () => clearTimeout(delayDebounce); // Limpia el temporizador al desmontar o cambiar el término de búsqueda
  }, [searchTerm, onSearch]);

  return (
    <div className="flex items-center h-10 justify-center border rounded-md p-1 shadow-sm w-2/4 bg-slate-100">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}  // Detectar cambios en el input
        className="flex-grow p-1 text-lg border-none outline-none bg-slate-100"
      />
      
      <button
        onClick={() => onSearch(searchTerm)}  // También buscar cuando se haga click
        className="p-1 px-2 text-[var(--principal-text)] text-base rounded-lg ml-2 bg-[var(--accent-color)]"
      >
        <i className="bx bx-search"></i>
      </button>      
    </div>
  );
};

export default SearchBar;