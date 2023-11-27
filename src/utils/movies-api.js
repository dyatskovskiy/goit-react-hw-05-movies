import axios from 'axios';

const API_KEY = 'e0f61313dcf9f8698c9430989ed8bb6d';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export const fetchTrendingMovies = async () => {
  return await axios
    .get(`/3/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data.results);
};

export const fetchMovieDetailsById = async movieId => {
  return await axios
    .get(`/3/movie/${movieId}?api_key=${API_KEY}`)
    .then(r => r.data);
};

export const fetchActors = async movieId => {
  return await axios
    .get(`/3/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(r => r.data.cast);
};

export const fetchReviews = async movieId => {
  return await axios
    .get(`/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(r => r.data.results);
};

export const fetchMoviesByQuery = async query => {
  return await axios
    .get(`/3/search/movie?query=${query}&api_key=${API_KEY}`)
    .then(r => r.data.results);
};
