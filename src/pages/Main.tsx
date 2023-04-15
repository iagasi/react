import React from 'react';
import { SearchBar } from '../components/SearchBar';
import '../styles/main.scss';
import { MainComponent } from '../components/Main';
import { Spinner } from '../components/Spinner/Spinner';
import { useGetCharactersQuery } from '../redux/rtk';
import { useSelector } from 'react-redux';
import { SearchState } from 'redux/store';

export function Main() {
  const { data, isLoading } = useGetCharactersQuery('allCharacters');
  const { searchError, searchResults } = useSelector((state: SearchState) => state.search);

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
        {searchError ? (
          <h1>Nothing Found</h1>
        ) : (
          <MainComponent users={searchResults.length ? searchResults : data ? data.results : []} />
        )}
      </div>
    </div>
  );
}
