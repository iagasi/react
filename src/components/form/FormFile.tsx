import React from 'react';
import { IPropsForm } from './types';

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
          {...register('file', { required: true })}
          className="file__input"
          type="file"
          placeholder="uploadImg"
        />
      </label>
      {errors.file && <span className="form__field-error ">{'Select file'}</span>}
    </div>
  );
}
