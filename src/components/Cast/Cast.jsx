import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import { ImgStyled, ListItem, List, Actor, Paragraph } from './CastStyled';
import Avatar from 'imgs/avatar.jpg';
import { Loader } from 'components/Loader';

const IMG_BASE_URL = 'http://image.tmdb.org/t/p/';
const IMG_SIZE = 'w200';

export const Cast = () => {
  const [status, setStatus] = useState('idle');
  //State machine:
  //idle - простой,
  //pending - добавляется,
  //resolved - успешно,
  //rejected - отклонено
  const [movieCredits, setMovieCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    const f = async () => {
      try {
        const resp = await fetchMovies('movie/' + movieId + '/credits');
        // if (resp) console.log(resp);
        setMovieCredits(resp.cast);
        setStatus('resolved');
        return;
      } catch (error) {
        console.log(error);
      }
    };
    f();
  }, [movieId]);
  if (status === 'pending') return <Loader />;
  if (movieCredits) {
    // console.log(movieCredits);
    return (
      <List>
        {movieCredits.map(actor => (
          <ListItem key={actor.id}>
            <ImgStyled
              src={
                actor.profile_path
                  ? IMG_BASE_URL + IMG_SIZE + actor.profile_path
                  : Avatar
              }
              alt={actor.name}
            />
            <Actor>{actor.name}</Actor>
            <Paragraph>Character: {actor.character}</Paragraph>
          </ListItem>
        ))}
      </List>
    );
  }
  return <div>Cast</div>;
};
