import { useState, useEffect } from 'react';
import * as GetMovieApi from '../Services/GetMovieApi';
import '../Styles/CommonStyles.css';
import Home from '../Home';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrandingMovies = () => {
      GetMovieApi.getTrandingMovies()
        .then(setMovies)
        .catch(error => console.log(error.message))
        .finally();
    };
    fetchTrandingMovies();
  }, []);

  return <Home movies={movies} />;
}
