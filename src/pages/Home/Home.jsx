import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../utils/movies-api';

import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { PageTitle } from './Home.styled';
import { Loader } from 'components/Loader/Loader';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);

      try {
        const result = await fetchTrendingMovies();
        setTrendingMovies(result);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <PageTitle>Trending today</PageTitle>
      <MoviesGallery movies={trendingMovies} />
      {isLoading && <Loader />}
    </div>
  );
}
