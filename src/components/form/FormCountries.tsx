import React, { Component } from 'react';
import { FormError } from './FormError';
import { countriesType } from './types';

export class FormCountries extends Component<{ container: countriesType }> {
  static check(countries: countriesType) {
    if (countries.curentElemet.current?.value == '0') {
      countries.error.current?.classList.add('dis-block');
    } else {
      countries.error.current?.classList.remove('dis-block');
      return true;
    }
  }
  render() {
    return (
      <div className="form__countries ">
        <small>Countries:</small>
        <select
          className="form__countries-select"
          name="countries"
          defaultValue="ds"
          ref={this.props.container.curentElemet}
          data-testid="selectCountries"
        >
          <option value="0"></option>
          <option value="england" data-testid="optionEng">
            England
          </option>
          <option value="germany">Germany</option>
          <option value="france">France</option>
        </select>
        <FormError refError={this.props.container.error}>
          <div>SelectCountries</div>
        </FormError>
      </div>
    );
  }
}
