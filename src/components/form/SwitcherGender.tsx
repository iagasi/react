import React, { Component } from 'react';
import { FormError } from './FormError';
import { genderType } from './types';

export class SwitcherGender extends Component<{ curr: genderType }> {
  constructor(props: { curr: genderType }) {
    super(props);
    this.handleChecbox = this.handleChecbox.bind(this);
  }
  static check(gender: genderType) {
    if (!gender.male.current?.checked && !gender.female.current?.checked) {
      gender.error.current?.classList.add('dis-block');
      return false;
    } else {
      gender.error.current?.classList.remove('dis-block');
      return true;
    }
  }

  handleChecbox(e: React.SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    if (target.value === 'Male') {
      this.props.curr.female.current!.checked = false;
    }
    if (target.value === 'Female') {
      this.props.curr.male.current!.checked = false;
    }
  }
  render() {
    return (
      <div className="form__gender ">
        <small>Gender:</small>
        <div>
          <input
            type="checkbox"
            value="Male"
            name="gender"
            ref={this.props.curr.male}
            onClick={this.handleChecbox}
            data-testid="checkboxMale"
          />
          <span style={{ marginRight: '10px' }}>Male</span>
          <input
            type="checkbox"
            value="Female"
            name="gender"
            ref={this.props.curr.female}
            onClick={this.handleChecbox}
          />
          <span>Female</span>
        </div>

        <FormError refError={this.props.curr.error}>
          <div>SelectGender</div>
        </FormError>
      </div>
    );
  }
}
