import { useState, useEffect } from 'react';
import * as GetMovieApi from '../Services/GetMovieApi';
import MovieSearchForm from '../MoviesSearch/MovieSearchForm';
// import { getMoviesByQuery } from '../Services/Api';
import Home from '../Home';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState('');

  useEffect(() => {
    GetMovieApi.getMovieSearch(searchQuery).then(setMovies);
  }, [searchQuery]);

  // useEffect(() => {
  //   async function getMovies() {

  //       const { results } = await getMoviesByQuery(searchQuery);

  //       setMovies(results);

  //   }

  //   if (searchQuery) getMovies();
  // }, [searchQuery]);

  //   useEffect(()=> {
  //     if (!searchQuery) {
  //     return;
  //     }

  // const fetchMovies = () => {

  //   GetMovieApi.getMovieSearch(searchQuery)
  //   .then(setMovies)
  //   .catch(error => console.log(error.message ))
  //   .finally();

  // };
  //  fetchMovies()

  // }, [searchQuery])

  const handlerSearcQuery = query => {
    setSearchQuery(query);
  };

  console.log(movies);
  return (
    <div>
      <MovieSearchForm handlerSearcQuery={handlerSearcQuery} />
      <Home movies={movies} />
    </div>
  );
}
