import { MovieItem } from './Movie.styled';

export const Movie = ({ id, title, poster }) => {
  return (
    <MovieItem>
      <img src={`http://image.tmdb.org/t/p/w185/${poster}`} alt={title} />
      <span>{title}</span>
    </MovieItem>
  );
};
