import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as GetMovieApi from '../Services/GetMovieApi';
import Cast from '../Cast';

export default function CastPage() {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');

  useEffect(() => {
    GetMovieApi.getMovieCast(movieId).then(setCast);
  }, [movieId]);

  console.log(cast);
  return <div>{cast && <Cast movieCast={cast} />}</div>;
}
