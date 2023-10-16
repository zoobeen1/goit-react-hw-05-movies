import { fetchMovies } from 'services/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Title, List, ListItem } from './TrendingStyled';
import { Loader } from 'components/Loader';

export const Trending = () => {
  const [status, setStatus] = useState('idle');
  //State machine:
  //idle - простой,
  //pending - добавляется,
  //resolved - успешно,
  //rejected - отклонено
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    setStatus('pending');
    const f = async () => {
      try {
        const resp = await fetchMovies('trending/movie/day', {});
        if (resp) {
          setMovies(resp.results);
          setStatus('resolved');
          return;
        }
        setStatus('rejected');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    };
    f();
  }, []);
  if (status === 'pending') return <Loader />;
  return (
    <>
      <Title>Trending today</Title>
      <List>
        {movies &&
          movies.map(movie => {
            return (
              <ListItem key={movie.id}>
                <Link to={'movie/' + movie.id}>{movie.title}</Link>
              </ListItem>
            );
          })}
      </List>
    </>
  );
};
