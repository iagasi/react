import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import '../styles/main.scss';
import { MainComponent } from '../components/Main';
import { userType } from 'types/userType';
import { useLoader } from '../hooks';
import { CHARACTER_URL } from '../constants';
import { Spinner } from '../components/Spinner/Spinner';

type responseUsersType = {
  results: userType[];
};
export function Main() {
  const [data, loading] = useLoader<responseUsersType>(CHARACTER_URL);

  const [searchedUsers, setSearchedUsers] = useState<userType[]>([]);
  const [error, setError] = useState(false);

  function searchStateHandler(users: userType[] | userType) {
    if (Array.isArray(users)) {
      setSearchedUsers(users);
    } else {
      setSearchedUsers([users]);
    }
  }

  if (loading) {
    return (
      <div className="main">
        <Spinner />;
      </div>
    );
  }
  return (
    <div className="main__wrapper">
      <SearchBar searchStateHandler={searchStateHandler} setError={setError} />
      <div className="main">
        {error ? (
          <h1>Nothing Found</h1>
        ) : (
          <MainComponent users={searchedUsers.length ? searchedUsers : data ? data.results : []} />
        )}
      </div>
    </div>
  );
}
