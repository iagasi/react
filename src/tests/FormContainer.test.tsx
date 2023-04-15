import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import { vi } from 'vitest';
import { Form } from '../components/form/Form';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('Form', () => {
  it('renders new created form', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
  it('rensders cards in form-page', () => {
    const file = new File(['hello'], 'test.png', { type: 'image/png' });

    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const n: HTMLInputElement = screen.getByPlaceholderText('Name');
    fireEvent.change(n, { target: { value: 'Test' } });
    expect(n.value).toBe('Test');
    const s = screen.getByPlaceholderText('Surname') as HTMLInputElement;
    fireEvent.change(s, { target: { value: 'SurnameTest' } });
    expect(s.value).toBe('SurnameTest');
    const checkbox = screen.getByTestId('checkboxHandled');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    ////Countries
    const select: HTMLSelectElement = screen.getByTestId('selectCountries');
    expect(select.value).to.equal('');
    fireEvent.change(select, { target: { value: 'england' } });
    expect(select.value).to.equal('england');
    //Countries
    ////Date
    const Idate: HTMLInputElement = screen.getByTestId('formdate');
    fireEvent.change(Idate, { target: { value: '2020-05-24' } });
    expect(Idate.value).toEqual('2020-05-24');
    //Date
    //Gender
    const maleCheckbox = screen.getByTestId('checkboxMale');
    expect(maleCheckbox).not.toBeChecked();
    fireEvent.click(maleCheckbox);
    expect(maleCheckbox).toBeChecked();

    ////Gender
    ////File
    const inputFile = screen.getByPlaceholderText('uploadImg') as HTMLInputElement;
    URL.createObjectURL = vi.fn(() => 'AAA');
    fireEvent.change(inputFile, { target: { files: [file] } });
    expect(inputFile.files![0]).toStrictEqual(file);
    //File

    const sublitButton: HTMLButtonElement = screen.getByRole('button');
    fireEvent.click(sublitButton);
    expect(screen.queryByText('SurnameTest')).not.toBeInTheDocument();
  });
});
