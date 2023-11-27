import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'utils/movies-api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [params] = useSearchParams();

  const query = params.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getMoviesByQuery() {
      try {
        const fetchedMovies = await fetchMoviesByQuery(query);
        setMovies(fetchedMovies);
      } catch (error) {
        alert(error.message);
      }
    }

    getMoviesByQuery();
  }, [query]);

  return (
    <section>
      <SearchBar query={query} />
      {movies && <MoviesGallery movies={movies} />}
    </section>
  );
}
