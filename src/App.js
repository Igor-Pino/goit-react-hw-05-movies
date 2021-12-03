import { Routes, Route, Navigate } from 'react-router';
import { lazy, Suspense } from 'react';
import HeaderNav from './components/HeaderNav';
import CastPage from './components/Pages/CastPage';
import ReviewsPage from './components/Pages/ReviewsPage.js';
import './components/Styles/CommonStyles.css';

const HomePage = lazy(() => import('./components/Pages/HomePage.js'));
const MoviesPage = lazy(() => import('./components/Pages/MoviesPage.js'));
const MovieDetailsPage = lazy(() => import('./components/Pages/MovieDetailsPage.js'));

export default function App() {
  return (
    <div>
      <HeaderNav />
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />

          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

// webPack
