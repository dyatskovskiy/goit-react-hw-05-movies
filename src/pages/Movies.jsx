import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'utils/movies-api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Loader } from 'components/Loader/Loader';

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [params] = useSearchParams();

  const query = params.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getMoviesByQuery() {
      setIsLoading(true);
      try {
        const fetchedMovies = await fetchMoviesByQuery(query);
        setMovies(fetchedMovies);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMoviesByQuery();
  }, [query]);

  return (
    <section>
      <SearchBar query={query} />
      {movies && <MoviesGallery movies={movies} />}
      {isLoading && <Loader />}
    </section>
  );
}
