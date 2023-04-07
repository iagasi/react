import React, { ReactNode, SyntheticEvent, useState } from 'react';
import '../styles/modal.scss';
interface Props {
  children: ReactNode;
  isOpen?: boolean;
  close: () => void;
}

function Modal({ children, isOpen, close }: Props) {
  function closeModal(e: SyntheticEvent) {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains('modal') || target.classList.contains('opened-card__closeBtn')) {
      close();
    }
  }
  if (isOpen) {
    return (
      <div
        className="modal"
        onClick={(e) => {
          closeModal(e);
        }}
      >
        {children}
      </div>
    );
  } else {
    return <></>;
  }
}

export default Modal;
