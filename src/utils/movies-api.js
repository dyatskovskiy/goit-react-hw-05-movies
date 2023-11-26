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
