import { useState, useEffect } from "react";
import { searchUsers } from "@/services/searchService";
import BanButton from "../Baneo/BanButton";


interface User {
    id: string;
    name: string;
    email: string;
    image: string;
    isBanned: boolean;
}

const AdminSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [showResults, setShowResults] = useState(false);

    const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length > 0) {
            try {
                const results = await searchUsers(query);
                setFilteredUsers(Array.isArray(results) ? results : []); 
                setShowResults(true);
            } catch (error) {
                console.error("Error searching users:", error);
                setFilteredUsers([]); 
            }
        } else {
            setFilteredUsers([]);
            setShowResults(false);
        }
    };
    const handleBanStatusChange = (userId: string, newStatus: boolean) => {
        setFilteredUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === userId ? { ...user, isBanned: newStatus } : user
          )
        );
      };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!document.getElementById("search-results")?.contains(event.target as Node)) {
                setShowResults(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside );
    }, []);

    return (
        <div className="py-6 max-w-lg relative">
            <div className="flex justify-center items-center gap-2 w-full p-2 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition">
                <i className="bx bx-search text-[var(--primary)] text-xl font-medium"></i>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search by name or email"
                    className="w-full p-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                />
            </div>

            {showResults && filteredUsers && filteredUsers.length > 0 && (
                <ul
                    id="search-results"
                    className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-2 z-10"
                >
                    {filteredUsers.map((user) => (
                        <li
                            key={user.id}
                            className="p-4 hover:bg-gray-100 transition cursor-pointer flex gap-2 items-center"
                        >
                            <img
                                src={user.image}
                                alt={user.name}
                                className="w-10 h-10 rounded-full object-cover border border-gray-200"
                            />
                            <p className="font-medium text-gray-900">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                            <div>
                                <BanButton userId={user.id} currentStatus={user.isBanned} role="ADMIN" onBanStatusChange={handleBanStatusChange}/>
                            </div>
                        </li>                        
                    ))}
                </ul>
            )}

            {showResults && filteredUsers && filteredUsers.length === 0 && (
                <p className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-2 p-4 text-gray-500 text-center z-10">
                    No users found
                </p>
            )}
        </div>
    );
};

export default AdminSearch;
