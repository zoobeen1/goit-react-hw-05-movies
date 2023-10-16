import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import { Loader } from 'components/Loader';
import {
  ImgStyled,
  Container,
  Details,
  Title,
  Paragraph,
  Heading,
  List,
  ListItem,
  Additional,
} from './MovieDetailesStyled';

const IMG_BASE_URL = 'http://image.tmdb.org/t/p/';
const IMG_SIZE = 'w300';

export const MovieDetails = () => {
  const [status, setStatus] = useState('idle');
  //State machine:
  //idle - простой,
  //pending - добавляется,
  //resolved - успешно,
  //rejected - отклонено
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    const f = async () => {
      try {
        const resp = await fetchMovies('movie/' + movieId);
        if (resp) {
          setMovie(resp);
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
  }, [movieId]);

  if (status === 'pending') return <Loader />;
  if (movie)
    return (
      <>
        <Container>
          <ImgStyled
            src={IMG_BASE_URL + IMG_SIZE + movie.poster_path}
            alt={movie.title}
          />
          <Details>
            <Title>{movie.title}</Title>

            <Paragraph>User score: {movie.vote_average}</Paragraph>
            <Heading>Overview</Heading>
            <Paragraph>{movie.overview}</Paragraph>
            <Heading>Genres</Heading>
            <List>
              {movie.genres.map(genre => (
                <ListItem key={genre.id}>{genre.name}</ListItem>
              ))}
            </List>
          </Details>
        </Container>
        <Additional>
          <Heading>Additional information</Heading>
          <List>
            <ListItem>
              <Link to="cast">Cast</Link>
            </ListItem>
            <ListItem>
              <Link to="reviews">Reviews</Link>
            </ListItem>
          </List>
        </Additional>
        <Outlet />
      </>
    );

  return (
    <div>
      <p>MovieDetails</p>
    </div>
  );
};
