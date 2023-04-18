import React from 'react';
import { IPropsForm } from './types';
import { useDispatch } from 'react-redux';
import { useTypedUseSelector } from '../../redux/store';
import { countries } from '../../redux/formSlice';

export function FormCountries(props: IPropsForm) {
  const { form } = useTypedUseSelector((data) => data);
  const dispatch = useDispatch();

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
        data-testid="selectCountries"
        onChange={(e) => dispatch(countries(e.target.value))}
        value={form.countries}
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
