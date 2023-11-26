import { useParams } from 'react-router-dom';
import { fetchMovieDetailsById } from '../../utils/movies-api';
import { useEffect, useState } from 'react';
import {
  MovieLayout,
  MovieTitle,
  OverviewTitle,
  Overview,
  GenresTitle,
  Genres,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

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
      )}
    </>
  );
}
