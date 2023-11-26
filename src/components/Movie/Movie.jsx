import { MovieItem, Poster } from './Movie.styled';

export const Movie = ({ id, title, poster }) => {
  return (
    <MovieItem>
      <Poster src={`http://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
      <span>{title}</span>
    </MovieItem>
  );
};
