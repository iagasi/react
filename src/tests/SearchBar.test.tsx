import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { SearchBar } from '../components/SearchBar';

describe('Searchbar', () => {
  it('input Working', () => {
    render(<SearchBar />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });
});
