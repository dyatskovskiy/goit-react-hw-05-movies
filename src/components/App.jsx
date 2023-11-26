import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { NavLink, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        {/* <Route path="/" element={<div>Home</div>} />
        <Route path="/" element={<div>Home</div>} /> */}
      </Routes>
    </>
  );
};
