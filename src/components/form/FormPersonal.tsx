import React from 'react';
import { IPropsForm } from './types';
import { useTypedUseSelector } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { name, surname } from '../../redux/formSlice';
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
  const { form } = useTypedUseSelector((data) => data);
  const dispatch = useDispatch();
  console.log(form.name);

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
            value={form.name}
            onChange={(e) => dispatch(name(e.target.value))}
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
            value={form.surname}
            onChange={(e) => dispatch(surname(e.target.value))}
          />
          {errors.surname && <span className="form__field-error ">{errors.surname.message}</span>}
        </div>
      </div>
    </div>
  );
};
