import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrendingMovies } from '../../utils/movies-api';
import { MoviesContainer } from './Home.styled';
import { Movie } from 'components/Movie/Movie';

export default function Home() {
  const [TrendingMovies, setTrendingMovies] = useState([]);

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
    <>
      <h1>Trending today</h1>
      <MoviesContainer>
        {TrendingMovies.map(({ id, title, backdrop_path }) => {
          return (
            <Link to={`/movies/${id}`} key={id}>
              <Movie id={id} title={title} poster={backdrop_path} />
            </Link>
          );
        })}
      </MoviesContainer>
    </>
  );
}
