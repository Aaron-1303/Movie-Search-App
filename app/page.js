// App.js
"use client"
import React, { useState } from 'react';
import SearchBar from '../components/searchbar';
import MovieList from '../components/movielist';

const Home = () => {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="h-screen">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;