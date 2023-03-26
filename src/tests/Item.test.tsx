import { render } from '@testing-library/react';
import { Item } from '../components/Item';
import React from 'react';
import { mockItem } from './mockData';

describe('Iitem', () => {
  it('correctly renders', () => {
    const { container } = render(<Item item={mockItem[0]} />);
    expect(container).toHaveTextContent('MockTitle');
  });
});
