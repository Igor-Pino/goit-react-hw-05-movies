import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <nav className={s.navigation}>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home page
      </NavLink>
      <NavLink to="/cast" className={s.link} activeClassName={s.activeLink}>
        Cast
      </NavLink>
      <NavLink to="/reviews" className={s.link} activeClassName={s.activeLink}>
        Reviews
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
        Movies page
      </NavLink>
      <NavLink to="/:movieId" className={s.link} activeClassName={s.activeLink}>
        Movie Details page
      </NavLink>
    </nav>
  );
}
