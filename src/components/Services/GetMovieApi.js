import axios from 'axios';

const KEY = '0779f9af004b4473589defa84db960cf';
const BASE_URL = 'https://api.themoviedb.org/3';

export function getTrandingMovies() {
  return axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${KEY}`)
    .then(response => response.data.results);
}

export function getMovieDetails(movieId) {
  return axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`)
    .then(response => response.data);
}
