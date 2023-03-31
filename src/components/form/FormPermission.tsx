import React from 'react';
import { FormError } from './FormError';

import { personalPermissionsType, propsContainerType } from './types';
export function permissionsCheck(perm: personalPermissionsType) {
  const perms = [
    perm.HandledField.current?.checked,
    perm.PybliclyField.current?.checked,
    perm.HidenField.current?.checked,
  ];

  if (!perms.includes(true)) {
    perm.error.current?.classList.add('dis-block');
    return false;
  } else {
    perm.error.current?.classList.remove('dis-block');
    return true;
  }
}

export function FormPermission(props: propsContainerType<personalPermissionsType>) {
  return (
    <div className="form__permission">
      I consent to my personal data
      <br /> Will be:
      <label>
        <input
          type="checkbox"
          ref={props.container.HandledField}
          value="Handled"
          data-testid="checkboxHandled"
        />
        Handled
      </label>
      <label>
        <input type="checkbox" ref={props.container.PybliclyField} value="Publicly Aviable" />
        Publicly Aviable
      </label>
      <label>
        <input type="checkbox" ref={props.container.HidenField} value="Hiden" />
        Hidden
      </label>
      <FormError refError={props.container.error}>
        <div>Select at least one</div>
      </FormError>
    </div>
  );
}
