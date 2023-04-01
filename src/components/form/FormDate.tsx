import React, { Component } from 'react';
import { FormContainer } from './FormContainer';
import { FormError } from './FormError';

export default class FormDate extends Component<{ container: FormContainer }> {
  static check(date: FormContainer) {
    const selectedDate = date.date.current?.value;
    const splitedDate = selectedDate?.split('-');

    if (!selectedDate) {
      date.dateError.current?.classList.add('dis-block');
    } else if (Number(splitedDate![0]) < 1990) {
      date.dateError.current?.classList.add('dis-block');
      date.dateError.current!.innerText = 'Select date above 1990';
    } else {
      date.dateError.current?.classList.remove('dis-block');
      return true;
    }
  }
  render() {
    return (
      <div className="form__date">
        <input
          className="form__input"
          type="date"
          min="2000-00-00"
          max="9999-12-31"
          ref={this.props.container.date}
          data-testid="formdate"
        />
        <FormError refError={this.props.container.dateError}>Please Select date</FormError>
      </div>
    );
  }
}
