import { CHARACTER_URL } from '../constants';
import { useLoader } from '../hooks';
import React from 'react';
import { Spinner } from '../components/Spinner/Spinner';
import OpenedCard from './OpenedCard';
import { userType } from 'types/userType';
import { useGetCharacterByIdQuery } from '../redux/rtk';

type props = {
  id: string;
};
function OpenCardContainer({ id }: props) {
  const { data, isLoading } = useGetCharacterByIdQuery(id);
  if (isLoading) {
    return <Spinner />;
  }
  return <div>{data && !Array.isArray(data) && <OpenedCard item={data} />}</div>;
}

export default OpenCardContainer;
