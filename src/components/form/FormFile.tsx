import React from 'react';
import { IPropsForm } from './types';
// import { useDispatch } from 'react-redux';
// import { useTypedUseSelector } from '../../redux/store';
// import { file as saveFile } from '../../redux/formSlice';

export function FormFile(props: IPropsForm) {
  const {
    register,
    formState: { errors },
  } = props.form;

  return (
    <div className="form__file-wrapper">
      <label className="form__file">
        Upload File
        <input
          className="file__input"
          type="file"
          placeholder="uploadImg"
          {...register('file', {
            required: true,
          })}
        />
      </label>
      {errors.file && <span className="form__field-error ">{'Select file'}</span>}
    </div>
  );
}
