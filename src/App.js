import { Routes, Route, Navigate } from 'react-router';
import HomePage from './components/Pages/HomePage.js';
import HeaderNav from './components/HeaderNav';
import MoviesPage from './components/Pages/MoviesPage.js';
import Cast from './components/Pages/Cast.js';
import Reviews from './components/Pages/Reviews.js';
import MovieDetails from './components/Pages/MovieDetails.js';

export default function App() {
  return (
    <div>
      <HeaderNav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
