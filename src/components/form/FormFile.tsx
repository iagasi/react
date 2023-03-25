import React, { Component } from 'react';
import { FormContainer } from './FormContainer';
import { FormError } from './FormError';
export class FormFile extends Component<{ container: FormContainer }> {
  static check(f: FormContainer) {
    const file = f.file.current!.files![0];

    if (file) {
      const url = URL.createObjectURL(file);
      f.fileError.current?.classList.remove('dis-block');
      return url;
    } else {
      f.fileError.current?.classList.add('dis-block');
    }
  }
  render() {
    return (
      <div className="form__file-wrapper">
        <label className="form__file">
          Upload File
          <input
            ref={this.props.container.file}
            className="file__input"
            type="file"
            placeholder="upload Img"
          />
          <FormError refError={this.props.container.fileError}>
            <div>File not selected</div>
          </FormError>
        </label>
      </div>
    );
  }
}
