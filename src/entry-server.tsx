import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { AppRouting } from './App';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={'/' + url}>
          <AppRouting />
        </StaticRouter>
      </Provider>
    </React.StrictMode>
  );
  return { html };
}
