import React, { useState } from 'react';
import { IPropsForm, genderType } from './types';

export function SwitcherGender(props: IPropsForm) {
  // const [selectedCheckbox, setSelectedCheckbox] = useState('');
  const {
    register,
    formState: { errors },
  } = props.form;

  // function validate(e: string) {
  //   setSelectedCheckbox(e);
  //   if (!selectedCheckbox.length) {
  //     return 'Select gender';
  //   }
  //   return true;
  // }

  return (
    <div className="form__gender ">
      <small>Gender:</small>
      <div>
        <input
          type="radio"
          value="Male"
          data-testid="checkboxMale"
          defaultChecked={false}
          // name="gender"
          {...register('gender', {
            required: true,
            onChange: () => null
          })}
        />
        <span style={{ marginRight: '10px' }}>Male</span>
        <input
          type="radio"
          value="Female"
          defaultChecked={false}
          // name="gender"
          {...register('gender', { required: true, onChange: () => null })}
        />
        <span>Female</span>
      </div>
      {errors.gender && <span className="form__field-error ">{'Select gender'}</span>}
    </div>
  );
}
