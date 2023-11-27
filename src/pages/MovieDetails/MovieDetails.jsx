import { useEffect, useRef, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetailsById } from '../../utils/movies-api';
import {
  MovieLayout,
  MovieTitle,
  OverviewTitle,
  Overview,
  GenresTitle,
  Genres,
  StyledBackLink,
} from './MovieDetails.styled';
import { Information } from 'components/Information/Information';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const prevPage = useRef(location);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const movieDetails = await fetchMovieDetailsById(movieId);
        setMovie(movieDetails);
      } catch (error) {
        alert(error.message);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <StyledBackLink to={prevPage.current.state?.from ?? '/'}>
            <span>Go back</span>
          </StyledBackLink>
          <MovieLayout>
            <img
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width="300"
            />

            <div>
              <MovieTitle>{movie.title}</MovieTitle>
              <span>
                <b>User score: </b> {Math.ceil(movie.vote_average * 10)} %
              </span>
              <OverviewTitle>Overview</OverviewTitle>
              <Overview>{movie.overview}</Overview>
              <GenresTitle>Genres</GenresTitle>
              <Genres>
                {movie.genres.map(genre => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </Genres>
            </div>
          </MovieLayout>
          <Information />
          <Outlet />
        </>
      )}
    </>
  );
}
