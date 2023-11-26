import { Routes, Route } from 'react-router-dom';

import { Header } from './Header/Header';
import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { AppWrapper } from './App.styled';

export const App = () => {
  return (
    <>
      <Header />
      <AppWrapper>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </AppWrapper>
    </>
  );
};
