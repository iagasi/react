import React from 'react';
import { IPropsForm } from './types';
const validateFirstLetterUppercase = (value: string) => {
  if (value.length < 2) {
    return 'MinLength 2 characters';
  }
  if (!value || value[0] !== value[0].toUpperCase()) {
    return 'First letter must be uppercase';
  }
  return true;
};
export const FormPersonal = (props: IPropsForm) => {
  const {
    register,
    formState: { errors },
  } = props.form;
  return (
    <div className="form__personal">
      <div>
        <div className="form__name">
          <input
            className="form__input"
            type="text"
            placeholder="Name"
            {...register('name', {
              validate: validateFirstLetterUppercase,
            })}
          />
          {errors.name && <span className="form__field-error ">{errors.name.message}</span>}
        </div>
        <div className="form__surname">
          <input
            className="form__input"
            type="text"
            placeholder="Surname"
            {...register('surname', {
              validate: validateFirstLetterUppercase,
            })}
          />
          {errors.surname && <span className="form__field-error ">{errors.surname.message}</span>}
        </div>
      </div>
    </div>
  );
};
