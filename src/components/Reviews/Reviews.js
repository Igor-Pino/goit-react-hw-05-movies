import s from './Reviews.module.css';

export default function Reviews({ movieReviews }) {
  return (
    <ul className={s.reviewsList}>
      {movieReviews.map(({ author_details, id, content, author }) => {
        return (
          <li key={id}>
            <h3>Author: {author_details.name ? author_details.name : author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
}
