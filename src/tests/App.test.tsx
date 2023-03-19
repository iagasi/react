import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App, RoutedApp } from '../App';

describe('App', () => {
  it('renders App all components', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const header = screen.getByTestId('test-header');
    const searchbar = screen.getByTestId('test-search');
    expect(header).toBeInTheDocument();
    expect(searchbar).toBeInTheDocument();
  });
  it('App routing Working', () => {
    render(<RoutedApp />);
    const about = screen.getByText('About');
    fireEvent.click(about);
    const about2 = screen.getAllByText('About')[0];
    const rendersAboutPage = screen.getByTestId('test-about');
    expect(about2).toHaveClass('link-active');
    expect(rendersAboutPage).toBeInTheDocument();
  });
});
