import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { LocalStorage } from '../utils/localstorage';
import '../styles/search.scss';
import axios from 'axios';
import { CHARACTER_URL } from '../constants';
import { userType } from 'types/userType';

async function $loadDataByCondition(condition: string) {
  const res = await axios.get(CHARACTER_URL + condition);
  return res;
}

type Iprops = {
  searchStateHandler: (users: userType[] | userType) => void;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SearchBar(props: Iprops) {
  const [searchText, setSearchText] = useState('');

  useMemo(() => {
    const data = LocalStorage.get();
    setSearchText(data || '');
  }, []);
  useEffect(() => {
    async function load() {
      try {
        const res = await $loadDataByCondition(`?name=${searchText}`);
        props.searchStateHandler(res.data.results);
      } catch (e) {
        props.setError(true);
      }
    }
    load();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!searchText.length) {
      props.setError(false);
      props.searchStateHandler([]);
    }

    LocalStorage.set(searchText);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);
  function add(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }
  async function searchHandler() {
    try {
      props.setError(false);
      const res = await $loadDataByCondition(`?name=${searchText}`);
      props.searchStateHandler(res.data.results);
    } catch (e) {
      props.setError(true);
    }
  }
  return (
    <div className="search__wrapper">
      <div className="search" data-testid="test-search">
        <img className="search__icon" src="/search.png" alt="" />
        <input className="search__input" type="text" value={searchText} onChange={(e) => add(e)} />
        {searchText.length ? (
          <div className="search__handler">
            <button
              className="search__delete-btn"
              onClick={() => {
                setSearchText(''), props.searchStateHandler([]);
              }}
            >
              x
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
      <button className="search__btn" onClick={searchHandler} disabled={!searchText}>
        Search
      </button>
    </div>
  );
}
