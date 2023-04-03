import React, { useState } from 'react';
import { IPropsForm, genderType } from './types';

export function genderCheck(gender: genderType) {
  if (!gender.male.current?.checked && !gender.female.current?.checked) {
    gender.error.current?.classList.add('dis-block');
    return false;
  } else {
    gender.error.current?.classList.remove('dis-block');
    return true;
  }
}
export function SwitcherGender(props: IPropsForm) {
  const [selectedCheckbox, setSelectedCheckbox] = useState('');
  const {
    register,
    formState: { errors },
  } = props.form;

  function validate(e: string) {
    setSelectedCheckbox(e);
    if (!selectedCheckbox.length) {
      return 'Select gender';
    }
    return true;
  }

  return (
    <div className="form__gender ">
      <small>Gender:</small>
      <div>
        <input
          type="checkbox"
          value="Male"
          data-testid="checkboxMale"
          checked={selectedCheckbox === 'Male'}
          onClick={() => setSelectedCheckbox('Male')}
          {...register('genderMale', { validate: validate })}
        />
        <span style={{ marginRight: '10px' }}>Male</span>
        <input
          type="checkbox"
          value="Female"
          checked={selectedCheckbox === 'Female'}
          onClick={() => setSelectedCheckbox('Female')}
          {...(register('genderFemale'), { validate: validate })}
        />
        <span>Female</span>
      </div>
      {errors.genderMale && <span className="form__field-error ">{errors.genderMale.message}</span>}
    </div>
  );
}
