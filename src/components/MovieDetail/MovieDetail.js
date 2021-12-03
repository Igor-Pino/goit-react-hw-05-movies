import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router';

import s from './MovieDetail.module.css';
const imageUrl = 'https://image.tmdb.org/t/p/w342';

export default function MovieDetail({
  movie: { release_date, poster_path, title, vote_average, overview, genres },
}) {
  const newRelease = release_date.slice(0, 4);

  return (
    <div className={s.container}>
      <div className={s.movie_details}>
        <div className={s.imageThumb}>
          <img src={`${imageUrl}${poster_path}`} alt={`${title}`} width="242" />
        </div>
        <div className={s.movieInfo}>
          <h2 className={s.movieTitle}>
            {title} ({newRelease})
          </h2>
          <p className={s.vote}>
            <span className={s.label_score}>User score:</span> {vote_average}
          </p>
          <p className={s.overview}>
            <span className={s.label_overview}>Overview</span>
            {overview}
          </p>
          <p className={s.genres}>
            <span className={s.label_genres}>Genres:</span>{' '}
            {genres.map(({ name }) => name).join(', ')}
          </p>
        </div>
      </div>
      <div className={s.navLink_container}>
        <h3 className={s.partTitle}>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast" className={s.navLink}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={s.navLink}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
