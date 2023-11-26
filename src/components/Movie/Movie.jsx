import { CardInfo, MovieItem } from './Movie.styled';

export const Movie = ({ title, poster }) => {
  return (
    <MovieItem>
      <img src={`http://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
      <CardInfo>
        <p>{title}</p>
      </CardInfo>
    </MovieItem>
  );
};
