// components/AdminUserSearch.tsx
import React, { useState, useEffect } from "react";
import { searchUsers } from "@/services/searchAdmin";
import { IuserSession } from "@/interfaces/Auth";


const AdminUserSearch: React.FC = () => {
    const [query, setQuery] = useState(""); // Solo un campo de entrada
    const [results, setResults] = useState<IuserSession[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            handleSearch();
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    const handleSearch = async () => {
        setResults([]);
        setIsLoading(true);

        // Detecta si el texto parece un email o un nombre
        const isEmail = query.includes("@");
        const users = await searchUsers(1, isEmail ? "" : query);
        
        setResults(users);
        setIsLoading(false);
    };

    return (
        <div className="p-4">
            <input
                name="search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />

            {isLoading && <p className="mt-2 text-gray-500">Loading...</p>}

            <div className="mt-4">
                {results.length > 0 ? (
                    <ul>
                        {results.map((userData) => (
                            <li key={userData.user.id}>
                                <p>{userData.user.name}</p>
                                <p>{userData.user.image}</p>
                            </li>
                            
                        ))}
                    </ul>
                ) : !isLoading ? (
                    <p className="text-gray-500">No results found</p>
                ) : null}
            </div>
        </div>
    );
};

export default AdminUserSearch;
