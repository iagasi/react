import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { server } from './mocks/server';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

beforeAll(() => server.listen());
afterAll(() => server.close());

describe('Searchbar', () => {
  it('input Working', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });
});
