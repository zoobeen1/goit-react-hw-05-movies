import { GlobalStyle } from 'GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'pages/Cast';
import { Review } from 'pages/Review';
import { Trending } from './Trending/Trending';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Trending />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movie/:movieId" element={<MovieDetails />} />
          <Route path="movie/:movieId/cast" element={<Cast />} />
          <Route path="movie/:movieId/reviews" element={<Review />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={1000} />
    </>
  );
}
