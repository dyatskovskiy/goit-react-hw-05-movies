import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../utils/movies-api';

import { Movie } from 'components/Movie/Movie';
import { MoviesContainer, StyledLink } from './MoviesGallery.styled';

export const MoviesGallery = () => {
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
    <MoviesContainer>
      {trendingMovies.map(({ id, title, backdrop_path }) => {
        return (
          <StyledLink to={`/movies/${id}`} key={id}>
            <Movie id={id} title={title} poster={backdrop_path} />
          </StyledLink>
        );
      })}
    </MoviesContainer>
  );
};
