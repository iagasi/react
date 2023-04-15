import React, { useEffect } from 'react';
import '../styles/search.scss';
import { useSelector, useDispatch } from 'react-redux';
import { SearchState } from 'redux/store';
import { add, handleError, searchResultsHandler } from '../redux/searchSlice';
import { useGetCharacterByNameQuery } from '../redux/rtk';

export function SearchBar() {
  const { value: searchText } = useSelector((state: SearchState) => state.search);
  const { data, error } = useGetCharacterByNameQuery(searchText);
  const dispatch = useDispatch();

  if (error) {
    dispatch(handleError(true));
  }

  useEffect(() => {
    dispatch(searchResultsHandler(data?.results || []));
    dispatch(handleError(false));
    if (!searchText.length) {
      dispatch(handleError(false));
      dispatch(searchResultsHandler([]));
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
                dispatch(searchResultsHandler([]));
              }}
            >
              x
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
      {/* <button
        className="search__btn"
        onClick={() => {
          setSkip(!skip);
        }}
      >
        Search
      </button> */}
    </div>
  );
}
