import { Movie } from 'components/Movie/Movie';
import { MoviesContainer, StyledLink } from './MoviesGallery.styled';

export const MoviesGallery = ({ movies }) => {
  return (
    <MoviesContainer>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <StyledLink to={`/movies/${id}`} key={id}>
            <Movie id={id} title={title} poster={poster_path} />
          </StyledLink>
        );
      })}
    </MoviesContainer>
  );
};
