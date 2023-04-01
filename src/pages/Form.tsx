import { Header } from '../components/Header';
import React from 'react';
import { FormContainer } from '../components/form/FormContainer';

export class FormPage extends React.Component {
  render() {
    return (
      <div className="form-page">
        <Header />
        <FormContainer />
      </div>
    );
  }
}
