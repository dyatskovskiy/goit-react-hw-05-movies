import { Routes, Route } from 'react-router-dom';

import { Header } from './Header/Header';
import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        {/* <Route path="/" element={<div>Home</div>} />
        <Route path="/" element={<div>Home</div>} /> */}
      </Routes>
    </>
  );
};
