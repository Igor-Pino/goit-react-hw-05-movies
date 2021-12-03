import { useState, useEffect } from 'react';
import * as GetMovieApi from '../Services/GetMovieApi';
import '../Styles/CommonStyles.css';
import Home from '../Home';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    GetMovieApi.getTrandingMovies().then(setMovies);
  }, []);

  return <Home movies={movies} />;
}
