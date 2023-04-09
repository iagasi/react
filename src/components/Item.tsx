import React, { useState } from 'react';
import '../styles/item.scss';
import { userType } from 'types/userType';
import OpenCardContainer from './OpenCardContainer';
import Modal from './Modal';
type propsType = {
  item: userType;
};
export function Item(props: propsType) {
  const [openCard, setOpenCard] = useState(false);
  function closeModal() {
    setOpenCard(false);
  }
  const item = props.item;
  return (
    <>
      <div className="item" onClick={() => setOpenCard(true)}>
        <img className="item__img" src={item.image} />
        <h2 className="item__price"> {item.name}</h2>
        <h2 className="item__model"> Planet : {item.origin.name}</h2>

        <div className="item__about"></div>
      </div>

      <Modal isOpen={openCard} close={closeModal}>
        <OpenCardContainer id={item.id.toString()} />
      </Modal>
    </>
  );
}
