
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="m-4 p-4">
    <img src={movie.Poster} alt={movie.Title} />
    <h2>{movie.Title}</h2>
    <p>{movie.Year}</p>
  </div>
  );
};

export default MovieCard;
