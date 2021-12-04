import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as GetMovieApi from '../Services/GetMovieApi';
import Cast from '../Cast';

export default function CastPage() {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');

  useEffect(() => {
    const fetchMovieCast = () => {
      GetMovieApi.getMovieCast(movieId)
        .then(response => {
          setCast(response);
          window.scrollTo({
            top: 450,
            behavior: 'smooth',
          });
        })
        .catch(error => console.log(error.message))
        .finally();
    };
    fetchMovieCast();
  }, [movieId]);

  console.log(cast);
  return <div>{cast && <Cast movieCast={cast} />}</div>;
}
