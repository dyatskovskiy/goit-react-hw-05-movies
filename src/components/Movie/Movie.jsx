import { CardInfo, MovieItem, MovieItemImage } from './Movie.styled';

export const Movie = ({ title, poster }) => {
  return (
    <MovieItem>
      <MovieItemImage
        src={
          poster
            ? `http://image.tmdb.org/t/p/w500/${poster}`
            : 'https://www.kevingage.com/assets/clapboard.png'
        }
        alt={title}
      />

      <CardInfo>
        <p>{title}</p>
      </CardInfo>
    </MovieItem>
  );
};
