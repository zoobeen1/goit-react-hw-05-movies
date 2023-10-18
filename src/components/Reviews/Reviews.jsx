import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import { Author, List, ListItem, Paragraph } from './ReviewsStyled';
import { Loader } from 'components/Loader';

const Reviews = () => {
  const [status, setStatus] = useState('idle');
  //State machine:
  //idle - простой,
  //pending - добавляется,
  //resolved - успешно,
  //rejected - отклонено
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    const f = async () => {
      try {
        const resp = await fetchMovies('movie/' + movieId + '/reviews');
        // if (resp) console.log(resp);
        if (resp.total_results > 0) {
          setMovieReviews(resp.results);
          setStatus('resolved');
          return;
        }
        setMovieReviews(null);
        setStatus('rejected');
      } catch (error) {
        console.log(error);
      }
    };
    f();
  }, [movieId]);
  if (status === 'pending') return <Loader />;
  if (movieReviews) {
    // console.log(movieReviews);
    return (
      <List>
        {movieReviews.map(review => (
          <ListItem key={review.id}>
            <Author>Author: {review.author}</Author>
            <Paragraph>{review.content}</Paragraph>
          </ListItem>
        ))}
      </List>
    );
  }
  return <p>Sorry. But for this film we have no reviews.</p>;
};
export default Reviews;
