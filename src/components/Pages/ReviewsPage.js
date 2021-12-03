import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as GetMovieApi from '../Services/GetMovieApi';
import Reviews from '../Reviews';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    GetMovieApi.getMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  console.log(reviews.length);
  return (
    <div>{reviews.length ? <Reviews movieReviews={reviews} /> : <p>We have no review yet</p>}</div>
  );
}
