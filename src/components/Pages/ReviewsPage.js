import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as GetMovieApi from '../Services/GetMovieApi';
import Reviews from '../Reviews';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    GetMovieApi.getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      {reviews && <Reviews movieReviews={reviews} />}
      {!reviews && <p>WHY???</p>}
    </div>
  );
}
