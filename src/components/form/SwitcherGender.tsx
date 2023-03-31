import React from 'react';
import { FormError } from './FormError';
import { genderType, propsContainerType } from './types';

type propsType = { curr: genderType };

export function genderCheck(gender: genderType) {
  if (!gender.male.current?.checked && !gender.female.current?.checked) {
    gender.error.current?.classList.add('dis-block');
    return false;
  } else {
    gender.error.current?.classList.remove('dis-block');
    return true;
  }
}
export function SwitcherGender(props: propsContainerType<genderType>) {
  function handleChecbox(e: React.SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    if (target.value === 'Male') {
      props.container.female.current!.checked = false;
    }
    if (target.value === 'Female') {
      props.container.male.current!.checked = false;
    }
  }

  return (
    <div className="form__gender ">
      <small>Gender:</small>
      <div>
        <input
          type="checkbox"
          value="Male"
          name="gender"
          ref={props.container.male}
          onClick={handleChecbox}
          data-testid="checkboxMale"
        />
        <span style={{ marginRight: '10px' }}>Male</span>
        <input
          type="checkbox"
          value="Female"
          name="gender"
          ref={props.container.female}
          onClick={handleChecbox}
        />
        <span>Female</span>
      </div>

      <FormError refError={props.container.error}>
        <div>SelectGender</div>
      </FormError>
    </div>
  );
}
