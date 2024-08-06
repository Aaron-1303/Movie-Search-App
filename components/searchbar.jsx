// got assistance of gpt for assigning the props to the searchbar constant
"use client"
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if(!query.trim()){
alert("Pls input the movie")
      return ;
    }
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-center mt-4">
  <input
    className="w-full bg-gray-200 text-gray-800 placeholder-gray-500 rounded-l-md py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search for movies..."
  />
  <button
    onClick={handleSearch}
    className="bg-blue-500 text-white rounded-r-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    Search
  </button>
</div>

  );
};

export default SearchBar;
