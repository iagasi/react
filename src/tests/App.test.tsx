import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App, RoutedApp } from '../App';
import { server } from './mocks/server';
beforeAll(() => server.listen());
afterAll(() => server.close());
describe('App', () => {
  it('renders App all components', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const header = screen.getByTestId('test-header');
    const searchbar = await screen.findByTestId('test-search');
    expect(header).toBeInTheDocument();
    expect(searchbar).toBeInTheDocument();
  });
  it('App routing Working', async () => {
    render(<RoutedApp />);
    const about = screen.getByText('About');
    fireEvent.click(about);
    const about2 = screen.getAllByText('About')[0];
    const rendersAboutPage = screen.getByTestId('test-about');
    expect(about2).toHaveClass('link-active');
    expect(rendersAboutPage).toBeInTheDocument();
  });
});
