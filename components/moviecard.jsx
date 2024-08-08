// components/moviecard.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from './ui/cardthreeD';

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.imdbID}`}>
      <CardContainer containerClassName="m-4 p-4" style={{ cursor: 'pointer' }}>
        <CardBody className="bg-blue-200 shadow-lg flex flex-col items-center justify-center space-y-4" translateZ={70}>
          <CardItem translateZ={70} translateX={5} className="flex items-center justify-center pt-5">
            <img src={movie.Poster} alt={movie.Title} className="h-3/4 w-3/4 object-cover" />
          </CardItem>
          <CardItem translateX={30} translateZ={30} className="flex items-center justify-center">
            <h2 className="text-xl font-bold text-center">{movie.Title}</h2>
          </CardItem>
          <CardItem translateX={10} translateZ={10} className="flex items-center justify-center">
            <p className="text-center">{movie.Year}</p>
          </CardItem>
        </CardBody>
      </CardContainer>
    </Link>
  );
};

export default MovieCard;
