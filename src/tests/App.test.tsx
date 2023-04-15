import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App, RoutedApp } from '../App';
import { server } from './mocks/server';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
beforeAll(() => server.listen());
afterAll(() => server.close());
describe('App', () => {
  it('renders App all components', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const header = screen.getByTestId('test-header');
    const searchbar = await screen.findByTestId('test-search');
    expect(header).toBeInTheDocument();
    expect(searchbar).toBeInTheDocument();
  });
  it('App routing Working', async () => {
    render(
      <Provider store={store}>
        <RoutedApp />
      </Provider>
    );
    const about = screen.getByText('About');
    fireEvent.click(about);
    const about2 = screen.getAllByText('About')[0];
    const rendersAboutPage = screen.getByTestId('test-about');
    expect(about2).toHaveClass('link-active');
    expect(rendersAboutPage).toBeInTheDocument();
  });
});
