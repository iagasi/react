import React from 'react';
import '../../styles/form.scss';
import { FormContainer } from './FormContainer';
interface Props {
  container: FormContainer;
  children: React.ReactNode;
}

export class Form extends React.Component<Props> {
  render() {
    return (
      <form className="form" role="form">
        <div className="form__container">
          {this.props.children}
          <button className="form__submit " onClick={this.props.container.handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}
