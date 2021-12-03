import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '0779f9af004b4473589defa84db960cf',
    language: 'en-US',
  },
});

async function getReviews(movieId) {
  try {
    const { data } = await api.get(`movie/${movieId}/reviews`);
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function getMoviesByQuery(query) {
  try {
    const { data } = await api.get(`search/movie?query=${query}`);

    return data;
  } catch (e) {
    console.log(e);
  }
}

export { getReviews, getMoviesByQuery };
