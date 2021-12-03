import { useState, useEffect } from 'react';
// import * as GetMovieApi from '../Services/GetMovieApi';
import MovieSearchForm from '../MoviesSearch/MovieSearchForm';
import { getMoviesByQuery } from '../Services/Api';
import Home from '../Home';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movie, setMovie] = useState('');

  // useEffect(() => {
  //   GetMovieApi.getMovieCast(searchQuery).then(setMovie);
  // }, [searchQuery]);

  useEffect(() => {
    async function fetchInfo() {
      try {
        const { results } = await getMoviesByQuery(searchQuery);

        setMovie(results);
      } catch (e) {
        console.log(e);
      }
    }

    if (searchQuery) fetchInfo();
  }, [searchQuery]);

  const handlerSearcQuery = query => {
    setSearchQuery(query);
  };

  console.log(movie);
  return (
    <div>
      <MovieSearchForm handlerSearcQuery={handlerSearcQuery} />
      <Home movies={movie} />
    </div>
  );
}
