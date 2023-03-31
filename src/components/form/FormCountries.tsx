import React from 'react';
import { FormError } from './FormError';
import { countriesType, propsContainerType } from './types';
export function countriesCheck(countries: countriesType) {
  if (countries.curentElemet.current?.value == '0') {
    countries.error.current?.classList.add('dis-block');
  } else {
    countries.error.current?.classList.remove('dis-block');
    return true;
  }
}

export function FormCountries(props: propsContainerType<countriesType>) {
  return (
    <div className="form__countries ">
      <small>Countries:</small>
      <select
        className="form__countries-select"
        name="countries"
        defaultValue="ds"
        ref={props.container.curentElemet}
        data-testid="selectCountries"
      >
        <option value="0"></option>
        <option value="england" data-testid="optionEng">
          England
        </option>
        <option value="germany">Germany</option>
        <option value="france">France</option>
      </select>
      <FormError refError={props.container.error}>
        <div>SelectCountries</div>
      </FormError>
    </div>
  );
}
