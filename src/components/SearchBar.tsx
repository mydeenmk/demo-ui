import { SearchIcon } from 'lucide-react';
import { useState } from 'react';


export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex items-center justify-center p-6 ">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 pl-10 pr-4  border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
