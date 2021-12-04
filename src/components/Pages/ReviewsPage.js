import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as GetMovieApi from '../Services/GetMovieApi';
import Reviews from '../Reviews';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = () => {
      GetMovieApi.getMovieReviews(movieId)
        .then(response => {
          setReviews(response);
          window.scrollTo({
            top: 450,
            behavior: 'smooth',
          });
        })
        .catch(error => console.log(error.message))
        .finally();
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>{reviews.length ? <Reviews movieReviews={reviews} /> : <p>We have no review yet</p>}</div>
  );
}
