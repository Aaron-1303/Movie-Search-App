
"use client";

import React from 'react';
import MovieCard from './moviecard';

const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-wrap justify-center m-3">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
