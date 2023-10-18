import { fetchMovies } from 'services/api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Title, List, ListItem, Wrapper } from './TrendingStyled';
import { Loader } from 'components/Loader';

const Trending = () => {
  const location = useLocation();
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
    <Wrapper>
      <Title>Trending today</Title>
      <List>
        {movies &&
          movies.map(movie => {
            return (
              <ListItem key={movie.id}>
                <Link to={'movies/' + movie.id} state={{ from: location }}>
                  {movie.title}
                </Link>
              </ListItem>
            );
          })}
      </List>
    </Wrapper>
  );
};
export default Trending;
