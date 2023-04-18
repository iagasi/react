import React from 'react';
import { IPropsForm } from './types';
import { useDispatch } from 'react-redux';
import { useTypedUseSelector } from '../../redux/store';
import { gender } from '../../redux/formSlice';
export function SwitcherGender(props: IPropsForm) {
  const { form } = useTypedUseSelector((data) => data);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
  } = props.form;

  return (
    <div className="form__gender ">
      <small>Gender:</small>
      <div>
        <input
          type="radio"
          value="Male"
          data-testid="checkboxMale"
          {...register('gender', {
            required: true,
          })}
          onChange={() => dispatch(gender('male'))}
          checked={form.gender === 'male'}
        />
        <span style={{ marginRight: '10px' }}>Male</span>
        <input
          type="radio"
          value="Female"
          {...register('gender', { required: true })}
          onChange={() => dispatch(gender('female'))}
          checked={form.gender === 'female'}
        />
        <span>Female</span>
      </div>
      {errors.gender && <span className="form__field-error ">{'Select gender'}</span>}
    </div>
  );
}
