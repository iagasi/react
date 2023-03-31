import React from 'react';
import { FormError } from './FormError';
import { dateType, propsContainerType } from './types';

export function dateCheck(date: dateType) {
  const selectedDate = date.curr.current?.value;
  const splitedDate = selectedDate?.split('-');

  if (!selectedDate) {
    date.error.current?.classList.add('dis-block');
  } else if (Number(splitedDate![0]) < 1990) {
    date.error.current?.classList.add('dis-block');
    date.error.current!.innerText = 'Select date above 1990';
  } else {
    date.error.current?.classList.remove('dis-block');
    return true;
  }
}
export default function FormDate(props: propsContainerType<dateType>) {
  return (
    <div className="form__date">
      <input
        className="form__input"
        type="date"
        min="2000-00-00"
        max="9999-12-31"
        ref={props.container.curr}
        data-testid="formdate"
      />
      <FormError refError={props.container.error}>Please Select date</FormError>
    </div>
  );
}
