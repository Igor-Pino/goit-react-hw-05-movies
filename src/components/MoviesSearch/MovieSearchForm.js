import { useState } from 'react';
import { ReactComponent as Icon } from '../images/icon-check.svg';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

export default function MovieSearchForm({ handlerSearcQuery }) {
  const [query, setQuery] = useState('');

  const handelerChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    handlerSearcQuery(query);
    setQuery('');
  };

  return (
    <form onSubmit={handlerSubmit} className={s.form}>
      <input
        className={s.input}
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handelerChange}
      />
      <button type="submit" className={s.formButton}>
        <Icon width="22" height="14" classname={s.icon} />
      </button>
    </form>
  );
}

MovieSearchForm.propTypes = {
  handlerSearcQuery: PropTypes.func.isRequired,
};
