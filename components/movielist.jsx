// components/MovieList.js
import React from 'react';
import MovieCard from './moviecard';

const MovieList = ({ movies }) => {
  return (
    <div className="flex align-items justify-items p-10">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
