import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as GetMovieApi from '../Services/GetMovieApi';
import MovieDetail from '../MovieDetail';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState('');

  useEffect(() => {
    GetMovieApi.getMovieDetails(movieId).then(setMovieInfo);
  }, [movieId]);

  console.log(movieInfo);

  return <div>{movieInfo && <MovieDetail movie={movieInfo} />}</div>;
}
