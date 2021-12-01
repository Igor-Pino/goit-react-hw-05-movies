import { NavLink } from 'react-router-dom';
import s from '../Styles/HomePage.module.css';
import '../Styles/CommonStyles.css';

export default function HeaderNav() {
  return (
    <nav className={s.navigation}>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active link' : 'link')}>
        Home page
      </NavLink>

      <NavLink to="/movies" className={({ isActive }) => (isActive ? 'active link' : 'link')}>
        Movies page
      </NavLink>
    </nav>
  );
}
