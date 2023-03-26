import { render } from '@testing-library/react';
import { Main } from '../pages/Main';
import React from 'react';
import { vi } from 'vitest';

vi.mock('../data.json', () => {
  return { products: [{}] };
});

describe('Main', () => {
  it('Renders List Items', () => {
    render(<Main />);
  });
});
