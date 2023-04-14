import React, { useEffect, useMemo, useState } from 'react';
import { LocalStorage } from '../utils/localstorage';
import '../styles/search.scss';
import axios from 'axios';
import { CHARACTER_URL } from '../constants';
import { userType } from 'types/userType';
import { useSelector, useDispatch } from 'react-redux';
import { SearchState } from 'redux/store';
import { add } from '../redux/searchSlice';
async function $loadDataByCondition(condition: string) {
  const res = await axios.get(CHARACTER_URL + condition);
  return res;
}

type Iprops = {
  searchStateHandler: (users: userType[] | userType) => void;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SearchBar(props: Iprops) {
  // const [searchText, setSearchText] = useState('');
  const { value: searchText } = useSelector((state: SearchState) => state.search);
  const dispatch = useDispatch();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);
  function searchTextHandler(e: React.ChangeEvent<HTMLInputElement> | string) {
    if (typeof e === 'string') {
      dispatch(add(e));
    } else {
      dispatch(add(e.target.value));
    }
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
        <input
          className="search__input"
          type="text"
          value={searchText}
          onChange={(e) => searchTextHandler(e)}
        />
        {searchText.length ? (
          <div className="search__handler">
            <button
              className="search__delete-btn"
              onClick={() => {
                searchTextHandler(''), props.searchStateHandler([]);
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
