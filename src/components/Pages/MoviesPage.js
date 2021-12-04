import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import * as GetMovieApi from '../Services/GetMovieApi';
import MovieSearchForm from '../MoviesSearch/MovieSearchForm';
import Home from '../Home';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const [urlQuery] = useState(() => new URLSearchParams(location.search).get('query'));
  const MainQuery = searchQuery || urlQuery;

  useEffect(() => {
    const fetchMovies = () => {
      if (!MainQuery) return;
      GetMovieApi.getMovieSearch(MainQuery)
        .then(response => {
          setMovies(response);
        })
        .catch(error => console.log(error.message))
        .finally();
    };
    fetchMovies();
  }, [MainQuery]);

  const handlerSearcQuery = query => {
    navigate({ ...location, search: `query=${query}` });
    setSearchQuery(query);
  };

  return (
    <div>
      <MovieSearchForm handlerSearcQuery={handlerSearcQuery} />
      {movies && <Home movies={movies} />}
    </div>
  );
}
