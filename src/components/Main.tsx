import React from 'react';
import { userType } from '../types/userType';
import { Item } from './Item';
interface IProps {
  users: userType[];
}
export const MainComponent = (props: IProps) => {
  return (
    <>
      {props.users.map((product) => {
        return <Item item={product} key={product.id} />;
      })}
    </>
  );
};
