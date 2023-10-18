import React, { useEffect, useState, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
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
  Wrapper,
  Back,
} from './MovieDetailesStyled';

const IMG_BASE_URL = 'http://image.tmdb.org/t/p/';
const IMG_SIZE = 'w300';

const MovieDetails = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
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
  if (movie) {
    return (
      <>
        <Back>
          <Link to={backLink}>Go Back</Link>
        </Back>
        <Container>
          <Wrapper>
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
          </Wrapper>
        </Container>

        <Container>
          <Heading>Additional information</Heading>
          <List>
            <ListItem>
              <Link to="cast" state={{ from: backLink }}>
                Cast
              </Link>
            </ListItem>
            <ListItem>
              <Link to="reviews" state={{ from: backLink }}>
                Reviews
              </Link>
            </ListItem>
          </List>
        </Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    );
  }
};
export default MovieDetails;
