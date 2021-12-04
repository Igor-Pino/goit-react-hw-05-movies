import { useParams, useLocation, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import * as GetMovieApi from '../Services/GetMovieApi';
import MovieDetail from '../MovieDetail';
import '../Styles/CommonStyles.css';

export default function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState('');
  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    if (location.pathname === `/movies/${movieId}`) {
      navigate(-1);
    }
    if (location.pathname === `/movies/${movieId}/cast`) {
      navigate(-2);
    }
    if (location.pathname === `/movies/${movieId}/reviews`) {
      navigate(-2);
    }
  };

  useEffect(() => {
    const fetchMovieDetails = () => {
      GetMovieApi.getMovieDetails(movieId)
        .then(setMovieInfo)
        .catch(error => console.log(error.message))
        .finally();
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {' '}
      <button type="button" className="goBack_button" onClick={goBack}>
        Go back
      </button>
      {movieInfo && <MovieDetail movie={movieInfo} />}
    </div>
  );
}
