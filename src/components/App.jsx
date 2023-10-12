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

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<div> HomePage</div>} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
          <Route path="movies/:movieId/cast" element={<Cast />} />
          <Route path="movies/:movieId/reviews" element={<Review />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={1000} />
    </>
  );
}
