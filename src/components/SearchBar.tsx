import React, { useEffect, useRef, useState } from 'react';
import { LocalStorage } from '../utils/localstorage';
import '../styles/search.scss';

export function SearchBar() {
  const input = useRef(null);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const data = LocalStorage.get();
    setSearchText(data || '');
  }, []);
  useEffect(() => {
    return () => {
      LocalStorage.set(searchText);
    };
  }, [searchText]);
  function add(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  return (
    <div className="search" data-testid="test-search">
      <img className="search__icon" src="/search.png" alt="" />
      <input
        ref={input}
        className="search__input"
        type="text"
        value={searchText}
        onChange={(e) => add(e)}
      />
    </div>
  );
}
