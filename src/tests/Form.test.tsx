import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from '../components/form/Form';
import React from 'react';

describe('Form', () => {
  it('Renders Children', () => {
    render(<Form></Form>);
    expect(screen.getByRole('form')).toBeInTheDocument();
    const button: HTMLButtonElement = screen.getByRole('button');
    fireEvent.click(button);
  });
});
