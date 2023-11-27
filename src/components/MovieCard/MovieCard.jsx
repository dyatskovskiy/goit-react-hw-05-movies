import { useLocation } from 'react-router-dom';
import {
  CardInfo,
  MovieItem,
  MovieItemImage,
  StyledLink,
} from './MovieCard.styled';

export const MovieCard = ({ id, title, poster }) => {
  const location = useLocation();

  return (
    <StyledLink to={`/movies/${id}`} state={{ from: location }}>
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
    </StyledLink>
  );
};
