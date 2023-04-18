import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from '../components/form/Form';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
describe('Form', () => {
  it('Renders Children', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(screen.getByRole('form')).toBeInTheDocument();
    const button: HTMLButtonElement = screen.getByRole('button');
    fireEvent.click(button);
  });
});
