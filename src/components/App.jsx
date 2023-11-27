import { Routes, Route } from 'react-router-dom';

// import { Header } from './Header/Header';
// import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
// import { AppWrapper } from './App.styled';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
