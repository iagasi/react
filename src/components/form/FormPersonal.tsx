import React, { Component } from 'react';
import { FormContainer } from './FormContainer';
import { FormError } from './FormError';
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export class FormPersonal extends Component<{ container: FormContainer }> {
  static checkName(
    name: React.RefObject<HTMLInputElement>,
    error: React.RefObject<HTMLDivElement>
  ) {
    if (!name.current?.value || name.current.value.length < 2) {
      error.current!.innerText = 'Name min 2 characters long';
      error.current?.classList.add('dis-block');
    } else if (name.current?.value !== capitalizeFirstLetter(name.current?.value)) {
      error.current!.innerText = 'The first letter must be Uppercase';
      error.current?.classList.add('dis-block');
    } else {
      error.current?.classList.remove('dis-block');
      return true;
    }
  }
  static checkSurname(
    name: React.RefObject<HTMLInputElement>,
    error: React.RefObject<HTMLDivElement>
  ) {
    if (!name.current?.value || name.current.value.length < 3) {
      error.current!.innerText = 'Surname min 3 characters long';
      error.current?.classList.add('dis-block');
    } else if (name.current?.value !== capitalizeFirstLetter(name.current?.value)) {
      error.current!.innerText = 'The first letter must be Uppercase';
      error.current?.classList.add('dis-block');
    } else {
      error.current?.classList.remove('dis-block');
      return true;
    }
  }

  render() {
    return (
      <div className="form__personal">
        <div>
          <div className="form__name">
            <input
              className="form__input"
              type="text"
              placeholder="Name"
              ref={this.props.container.name}
            />
            <FormError refError={this.props.container.nameError}>
              <div>Name min 2 characters long</div>
            </FormError>
          </div>
          <div className="form__surname">
            <input
              className="form__input"
              type="text"
              placeholder="Surname"
              ref={this.props.container.surname}
            />
            <FormError refError={this.props.container.surnameError}>
              <div>Surname min 3 characters long</div>
            </FormError>
          </div>
        </div>
      </div>
    );
  }
}
