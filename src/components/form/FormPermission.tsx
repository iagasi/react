import React from 'react';
import { IPropsForm } from './types';
import { useDispatch } from 'react-redux';
import { useTypedUseSelector } from '../../redux/store';
import { personalData } from '../../redux/formSlice';

export function FormPermission(props: IPropsForm) {
  const { form } = useTypedUseSelector((data) => data);
  const dispatch = useDispatch();
  const {
    watch,
    register,
    formState: { errors },
  } = props.form;

  const w = watch(['handled', 'publicly', 'hiden']);

  const validate = () => {
    const isSelected = w.filter((e) => typeof e === 'string');

    if (!isSelected.length) {
      return 'Select At least one conset';
    }
  };

  return (
    <div className="form__permission">
      I consent to my personal data
      <br /> Will be:
      <label>
        <input
          type="checkbox"
          value="Handled"
          data-testid="checkboxHandled"
          {...register('handled', { validate: validate })}
          onChange={() => {
            dispatch(personalData('Handled'));
          }}
          checked={form.personalData.includes('Handled')}
        />
        Handled
      </label>
      <label>
        <input
          type="checkbox"
          value="Publicly Aviable"
          {...register('publicly')}
          onChange={() => {
            dispatch(personalData('Publicly Aviable'));
          }}
          checked={form.personalData.includes('Publicly Aviable')}
        />
        Publicly Aviable
      </label>
      <label>
        <input
          type="checkbox"
          value="Hiden"
          {...register('hiden')}
          onChange={() => {
            dispatch(personalData('Hiden'));
          }}
          checked={form.personalData.includes('Hiden')}
        />
        Hidden
      </label>
      {errors.handled && <span className="form__field-error ">{errors.handled?.message}</span>}
    </div>
  );
}
