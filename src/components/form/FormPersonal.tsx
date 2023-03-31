import React from 'react';
import { FormError } from './FormError';
import { personalType, propsContainerType } from './types';

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function checkName(
  name: React.RefObject<HTMLInputElement>,
  error: React.RefObject<HTMLDivElement>
) {
  if (!name.current?.value || name.current.value.length < 2) {
    error.current!.innerText = 'Name min 2 characters long';
    error.current?.classList.add('dis-block');
  } else if (name.current?.value !== capitalizeFirstLetter(name.current?.value)) {
    error.current!.innerText = 'The first letter must be Uppercase';
    error.current?.classList.add('dis-block');
  } else {
    error.current?.classList.remove('dis-block');
    return true;
  }
}
export function checkSurname(
  name: React.RefObject<HTMLInputElement>,
  error: React.RefObject<HTMLDivElement>
) {
  if (!name.current?.value || name.current.value.length < 3) {
    error.current!.innerText = 'Surname min 3 characters long';
    error.current?.classList.add('dis-block');
  } else if (name.current?.value !== capitalizeFirstLetter(name.current?.value)) {
    error.current!.innerText = 'The first letter must be Uppercase';
    error.current?.classList.add('dis-block');
  } else {
    error.current?.classList.remove('dis-block');
    return true;
  }
}

export function FormPersonal(props: propsContainerType<personalType>) {
  return (
    <div className="form__personal">
      <div>
        <div className="form__name">
          <input
            className="form__input"
            type="text"
            placeholder="Name"
            ref={props.container.name}
          />
          <FormError refError={props.container.nameError}>
            <div>Name min 2 characters long</div>
          </FormError>
        </div>
        <div className="form__surname">
          <input
            className="form__input"
            type="text"
            placeholder="Surname"
            ref={props.container.surname}
          />
          <FormError refError={props.container.surnameError}>
            <div>Surname min 3 characters long</div>
          </FormError>
        </div>
      </div>
    </div>
  );
}
