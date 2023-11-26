import { useParams } from 'react-router-dom';
// import { fetchMovieDetailsById } from '../utils/movies-api';

export default function MovieDetails() {
  const { movieId } = useParams();

  return <div>MovieDetails - {movieId} </div>;
}
