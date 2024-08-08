
"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchBar from '../components/searchbar';
import MovieList from '../components/movielist';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

  return (
    <div className="h-[130vh]">
      <header className="bg-blue-800 text-primary-foreground py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white ml-1">Film Hunter</h1>
          <div>
            <SearchBar className="w-full" onSearch={handleSearch} />
          </div>
        </div>
      </header>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
