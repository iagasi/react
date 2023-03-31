import { Header } from '../components/Header';
import React from 'react';
import { FormContainer } from '../components/form/FormContainer';

export function FormPage() {
  return (
    <div className="form-page">
      <Header />
      <FormContainer />
    </div>
  );
}
