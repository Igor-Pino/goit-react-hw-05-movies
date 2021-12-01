import { NavLink } from 'react-router-dom';

export default function MoviesPage() {
  return (
    <div>
      <NavLink to="/movie1">MovieDetails</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
      <NavLink to="/cast">Cast</NavLink>
    </div>
  );
}
