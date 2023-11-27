import { Movie } from 'components/Movie/Movie';
import { MoviesContainer } from './MoviesGallery.styled';

export const MoviesGallery = ({ movies }) => {
  return (
    <MoviesContainer>
      {movies.map(({ id, title, poster_path }) => {
        return <Movie key={id} id={id} title={title} poster={poster_path} />;
      })}
    </MoviesContainer>
  );
};
