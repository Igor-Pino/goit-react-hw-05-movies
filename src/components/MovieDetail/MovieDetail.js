const imageUrl = 'https://image.tmdb.org/t/p/w342';

export default function MovieDetail({
  movie: { poster_path, title, vote_average, overview, genres },
}) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={`${imageUrl}${poster_path}`} alt={`${title}`} />

      <p>{vote_average}</p>
      <p>{overview}</p>

      <p>{genres.map(({ name }) => name).join(', ')}</p>
    </div>
  );
}
