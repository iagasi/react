import React from 'react';
import '../styles/search.scss';
import { useSelector, useDispatch } from 'react-redux';
import { SearchState } from 'redux/store';
import { add, searchButton } from '../redux/searchSlice';

export function SearchBar() {
  const { value: searchText } = useSelector((state: SearchState) => state.search);

  const dispatch = useDispatch();

  function searchTextHandler(e: React.ChangeEvent<HTMLInputElement> | string) {
    if (typeof e === 'string') {
      dispatch(add(e));
    } else {
      dispatch(add(e.target.value));
    }
  }
  function searchHandler() {
    dispatch(searchButton(searchText));
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
                dispatch(add(''));
              }}
            >
              x
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
      <button
        className="search__btn"
        onClick={() => {
          searchHandler();
        }}
      >
        Search
      </button>
    </div>
  );
}
