import { GlobalStyle } from 'GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { Trending } from './Trending/Trending';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Trending />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>

      <ToastContainer autoClose={1000} />
    </>
  );
}
