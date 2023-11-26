import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../utils/movies-api';
import { Movie } from 'components/Movie/Movie';
import { PageContainer, PageTitle, MoviesContainer } from './Home.styled';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const result = await fetchTrendingMovies();
        setTrendingMovies(result);
      } catch (error) {
        alert(error.message);
      }
    }
    getMovies();
  }, []);

  return (
    <PageContainer>
      <PageTitle>Trending today</PageTitle>
      <MoviesContainer>
        {trendingMovies.map(({ id, title, backdrop_path }) => {
          return (
            <Link to={`/movies/${id}`} key={id}>
              <Movie id={id} title={title} poster={backdrop_path} />
            </Link>
          );
        })}
      </MoviesContainer>
    </PageContainer>
  );
}
