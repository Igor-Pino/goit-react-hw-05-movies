import { Link } from 'react-router-dom';
import s from './Home.module.css';
export default function Home({ movies }) {
  return (
    <ul className={s.list}>
      {movies &&
        movies.map(({ id, title }) => {
          return (
            <li key={id} className={s.item}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                }}
                className={s.link}
              >
                {title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
