import { render } from '@testing-library/react';
import { Main } from '../pages/Main';
import React from 'react';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

vi.mock('../data.json', () => {
  return { products: [{}] };
});

describe('Main', () => {
  it('Renders List Items', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
  });
});
