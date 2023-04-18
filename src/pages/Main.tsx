import React, { useEffect } from 'react';
import { SearchBar } from '../components/SearchBar';
import '../styles/main.scss';
import { MainComponent } from '../components/Main';
import { Spinner } from '../components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { SearchState } from 'redux/store';
import { useGetCharacterByNameQuery } from '../redux/rtk';
import { handleError, searchResultsHandler } from '../redux/searchSlice';

export function Main() {
  const { findThis } = useSelector((state: SearchState) => state.search);

  const { data, error, isLoading } = useGetCharacterByNameQuery(findThis);
  const dispatch = useDispatch();

  const { searchResults } = useSelector((state: SearchState) => state.search);
  useEffect(() => {
    dispatch(searchResultsHandler(data?.results || []));
    dispatch(handleError(false));
  }, [data?.results, dispatch]);

  if (error) {
    return (
      <div className="main__wrapper">
        <SearchBar />
        <div className="main">
          <h1>Nothing Found</h1>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="main">
        <Spinner />;
      </div>
    );
  }
  return (
    <div className="main__wrapper">
      <SearchBar />
      <div className="main">
        <MainComponent users={searchResults.length ? searchResults : []} />
      </div>
    </div>
  );
}
