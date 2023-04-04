import React from 'react';
import { IPropsForm } from './types';

export function SwitcherGender(props: IPropsForm) {
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
          defaultChecked={false}
          {...register('gender', {
            required: true,
            onChange: () => null,
          })}
        />
        <span style={{ marginRight: '10px' }}>Male</span>
        <input
          type="radio"
          value="Female"
          defaultChecked={false}
          {...register('gender', { required: true, onChange: () => null })}
        />
        <span>Female</span>
      </div>
      {errors.gender && <span className="form__field-error ">{'Select gender'}</span>}
    </div>
  );
}
