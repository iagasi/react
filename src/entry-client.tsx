import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RoutedApp } from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <RoutedApp />
    </Provider>
  </React.StrictMode>
);
