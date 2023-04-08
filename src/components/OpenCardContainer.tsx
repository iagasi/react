import { CHARACTER_URL } from '../constants';
import { useLoader } from '../hooks';
import React from 'react';
import { Spinner } from '../components/Spinner/Spinner';
import OpenedCard from './OpenedCard';
import { userType } from 'types/userType';
type props = {
  id: string;
};
function OpenCardContainer({ id }: props) {
  const [data, loading] = useLoader<userType[]>(CHARACTER_URL + id);

  if (loading) {
    return <Spinner />;
  }
  return <div>{data && !Array.isArray(data) && <OpenedCard item={data} />}</div>;
}

export default OpenCardContainer;
