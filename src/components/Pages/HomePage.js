import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import * as GetMovieApi from '../Services/GetMovieApi';
import '../Styles/CommonStyles.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    GetMovieApi.getTrandingMovies().then(setMovies);
  }, []);

  return (
    <ul>
      {movies &&
        movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          );
        })}
    </ul>
  );
}
