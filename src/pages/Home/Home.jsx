import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../utils/movies-api';

import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { PageTitle } from './Home.styled';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const result = await fetchTrendingMovies();
        setTrendingMovies(result);
      } catch (error) {
        alert(error.message);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <PageTitle>Trending today</PageTitle>
      <MoviesGallery movies={trendingMovies} />
    </div>
  );
}
