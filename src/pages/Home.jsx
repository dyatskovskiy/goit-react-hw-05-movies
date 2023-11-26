import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrendingMovies } from './utils/movies-api';

export default function Home() {
  const [TrendingMovies, setTrendingMovies] = useState([]);

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
    <>
      <h1>Trending today</h1>
      <ul>
        {TrendingMovies.map(({ id, title, backdrop_path }) => {
          return (
            <li key={id}>
              <Link to={`${id}`}>
                {title}
                <img
                  src={`http://image.tmdb.org/t/p/w185/${backdrop_path}`}
                  alt=""
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
