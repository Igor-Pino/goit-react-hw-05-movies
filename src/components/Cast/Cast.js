import s from './Cast.module.css';

import malePhoto from '../images/malePhoto.jpg';
import femalePhoto from '../images/femalePhoto.jpg';

const imageUrl = 'https://image.tmdb.org/t/p/w342';
export default function Cast({ movieCast }) {
  function getAvatar(profile_path, gender) {
    let avatar = '';
    if (profile_path) {
      avatar = imageUrl.concat('', profile_path);
    } else if (gender === 2) {
      avatar = malePhoto;
    } else {
      avatar = femalePhoto;
    }
    return avatar;
  }
  return (
    <ul className={s.castList}>
      {movieCast.map(({ original_name, cast_id, profile_path, character, gender }) => {
        return (
          <li key={cast_id} className={s.listItem}>
            <img src={getAvatar(profile_path, gender)} alt={`${original_name}`} width="150" />

            <p className={s.actor_name}>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}
