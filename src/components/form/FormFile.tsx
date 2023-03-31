import React from 'react';
import { FormError } from './FormError';
import { fileType, propsContainerType } from './types';

export function fileCheck(f: fileType) {
  const file = f.curr.current!.files![0];

  if (file) {
    const url = URL.createObjectURL(file);
    f.error.current?.classList.remove('dis-block');
    return url;
  } else {
    f.error.current?.classList.add('dis-block');
  }
}

export function FormFile(props: propsContainerType<fileType>) {
  return (
    <div className="form__file-wrapper">
      <label className="form__file">
        Upload File
        <input
          ref={props.container.curr}
          className="file__input"
          type="file"
          placeholder="uploadImg"
        />
        <FormError refError={props.container.error}>
          <div>File not selected</div>
        </FormError>
      </label>
    </div>
  );
}
