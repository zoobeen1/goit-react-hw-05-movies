import { GlobalStyle } from 'GlobalStyle';
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from 'pages/HomePage';
// import { Movies } from 'pages/Movies';
// import { MovieDetails } from 'components/MovieDetails/MovieDetails';
// import { Cast } from 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';
// import { Trending } from './Trending/Trending';
// import { Searchbar } from './Searchbar';

// const HomePage = lazy(() => import('pages/HomePage'));
const Trending = lazy(() => import('./Trending'));
const Movies = lazy(() => import('pages/Movies'));
const Searchbar = lazy(() => import('./Searchbar'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Trending />} />
          <Route path="movies" element={<Movies />}>
            <Route index element={<Searchbar />} />
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>

      <ToastContainer autoClose={1000} />
    </>
  );
}
