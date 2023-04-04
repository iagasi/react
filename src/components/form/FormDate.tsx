import React from 'react';
import { IPropsForm } from './types';

function validate(selectedDate: string) {
  const splitedDate = selectedDate?.split('-');
  if (Number(splitedDate![0]) < 1990) {
    return 'Select date above 1990';
  }
  return true;
}
export default function FormDate(props: IPropsForm) {
  const {
    register,
    formState: { errors },
  } = props.form;
  return (
    <div className="form__date">
      <input
        {...register('date', { validate: validate })}
        className="form__input"
        type="date"
        min="2000-00-00"
        max="9999-12-31"
        data-testid="formdate"
      />
      {errors.date && <span className="form__field-error ">{errors.date.message}</span>}
    </div>
  );
}
