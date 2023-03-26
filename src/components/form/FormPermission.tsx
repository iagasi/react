import React, { Component } from 'react';
import { FormError } from './FormError';

import { personalPermissions } from './types';

export class FormPermission extends Component<{ container: personalPermissions }> {
  static check(perm: personalPermissions) {
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

  render() {
    return (
      <div className="form__permission">
        I consent to my personal data
        <br /> Will be:
        <label>
          <input
            type="checkbox"
            ref={this.props.container.HandledField}
            value="Handled"
            data-testid="checkboxHandled"
          />
          Handled
        </label>
        <label>
          <input
            type="checkbox"
            ref={this.props.container.PybliclyField}
            value="Publicly Aviable"
          />
          Publicly Aviable
        </label>
        <label>
          <input type="checkbox" ref={this.props.container.HidenField} value="Hiden" />
          Hidden
        </label>
        <FormError refError={this.props.container.error}>
          <div>Select at least one</div>
        </FormError>
      </div>
    );
  }
}
