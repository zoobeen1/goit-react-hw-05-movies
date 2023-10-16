import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';

const IMG_BASE_URL = 'http://image.tmdb.org/t/p/';
const IMG_SIZE = 'w300';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const f = async () => {
      try {
        const resp = await fetchMovies('movie/' + movieId);
        // if (resp) console.log(resp);
        setMovie(resp);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    f();
  }, [movieId]);
  console.log(movie);
  if (movie)
    return (
      <img
        src={IMG_BASE_URL + IMG_SIZE + movie.poster_path}
        alt={movie.title}
      />
    );
  return (
    <div>
      <p>MovieDetails - ID{' ' + movieId}</p>
      {}
    </div>
  );
};
