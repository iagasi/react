import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { Form } from '../components/form/Form';
import React from 'react';
import { vi } from 'vitest';
const TestComponent = () => {
  return <div>TestComponent</div>;
};
describe('Form', () => {
  const handler = vi.fn((e) => {
    e.preventDefault();
  });

  it('Renders Children', () => {
    render(
      <Form handler={handler}>
        <TestComponent />
      </Form>
    );
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByText('TestComponent')).toBeInTheDocument();
    const button: HTMLButtonElement = screen.getByRole('button');
    fireEvent.click(button);
    expect(handler).toBeCalledTimes(1);
  });
});
