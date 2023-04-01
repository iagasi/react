import React, { Component } from 'react';
interface IFormError {
  // props: object;
  refError: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}
export class FormError extends Component<IFormError> {
  constructor(props: IFormError) {
    super(props);
  }
  render() {
    return (
      <div ref={this.props.refError} className="form__field-error">
        {this.props.children}
      </div>
    );
  }
}
