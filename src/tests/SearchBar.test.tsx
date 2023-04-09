import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { server } from './mocks/server';

import { vi } from 'vitest';
beforeAll(() => server.listen());
afterAll(() => server.close());

describe('Searchbar', () => {
  it('input Working', () => {
    const searchHandler = vi.fn();
    const setError = vi.fn();
    render(<SearchBar searchStateHandler={searchHandler} setError={setError} />);
    expect(setError).toHaveBeenCalled();
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });
});
