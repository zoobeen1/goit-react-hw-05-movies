import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';

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
  return (
    <div>
      <p>MovieDetails - ID{' ' + movieId}</p>
      {movie && <p>{movie.title}</p>}
    </div>
  );
};
