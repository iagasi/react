import React from 'react';
import '../../styles/form.scss';
import { FormContainer } from './FormContainer';
interface Props {
  handler: (e: React.SyntheticEvent) => void;
  children: React.ReactNode;
}

export function Form(props: Props) {
  return (
    <form className="form" role="form">
      <div className="form__container">
        {props.children}
        <button className="form__submit " onClick={props.handler}>
          Submit
        </button>
      </div>
    </form>
  );
}
