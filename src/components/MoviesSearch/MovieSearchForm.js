import { useState } from 'react';

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
    <form onSubmit={handlerSubmit}>
      <input
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handelerChange}
      />
    </form>
  );
}
