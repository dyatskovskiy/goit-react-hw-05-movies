import { useParams } from 'react-router-dom';
import { fetchMovieDetailsById } from '../utils/movies-api';
import { useEffect, useState } from 'react';

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

  // const {
  //   backdrop_path: poster,
  //   title,
  //   vote_average: score,
  //   overview,
  //   genres,
  // } = movie;
  return (
    <>
      {movie && (
        <div>
          <img
            src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <div>
            <h2>{movie.title}</h2>
            <p>User score: {Math.ceil(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
