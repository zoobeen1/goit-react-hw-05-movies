import { fetchMovies } from 'services/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Trending = () => {
  const [movies, setMovies] = useState(null);
  async function onLoad() {
    try {
      const resp = await fetchMovies('trending/all/day');
      // if (resp) console.log(resp);
      setMovies(resp.results);
      return;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={'movie/' + movie.id}>
                  {movie.title ? movie.title : movie.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};
