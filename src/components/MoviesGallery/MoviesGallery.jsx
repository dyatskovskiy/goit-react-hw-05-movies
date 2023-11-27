import { MovieCard } from 'components/MovieCard/MovieCard';
import { MoviesContainer } from './MoviesGallery.styled';

export const MoviesGallery = ({ movies }) => {
  return (
    <MoviesContainer>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <MovieCard key={id} id={id} title={title} poster={poster_path} />
        );
      })}
    </MoviesContainer>
  );
};
