import React, { Component } from 'react';
import { FormError } from './FormError';
import { genderType } from './types';

export class FormGender extends Component<{ container: genderType }> {
  static check(gen: genderType) {
    if (gen.curentElemet.current?.value == '0') {
      gen.error.current?.classList.add('dis-block');
    } else {
      gen.error.current?.classList.remove('dis-block');
      return true;
    }
  }
  render() {
    return (
      <div className="form__gender ">
        <small>Gender:</small>
        <select
          className="form__gender-select"
          name="gender"
          defaultValue="ds"
          ref={this.props.container.curentElemet}
          data-testid="selectgender"
        >
          <option value="0"></option>
          <option value="male" data-testid="optionMan">
            Man
          </option>
          <option value="female">Female</option>
        </select>
        <FormError refError={this.props.container.error}>
          <div>SelectGender</div>
        </FormError>
      </div>
    );
  }
}
