import React from 'react';
import { IPropsForm } from './types';

export function FormCountries(props: IPropsForm) {
  const {
    register,
    formState: { errors },
  } = props.form;
  return (
    <div className="form__countries ">
      <small>Countries:</small>
      <select
        {...register('countries', { required: true })}
        className="form__countries-select"
        name="countries"
        defaultValue="ds"
        data-testid="selectCountries"
      >
        <option value=""></option>
        <option value="england" data-testid="optionEng">
          England
        </option>
        <option value="germany">Germany</option>
        <option value="france">France</option>
      </select>
      {errors.countries && <span className="form__field-error ">{'Select Countries'}</span>}
    </div>
  );
}
