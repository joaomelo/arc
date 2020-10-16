import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingOverlay } from '__cli/core/components';
import { store } from '__cli/core/redux';
import { AppNav } from './app-nav';
import { AppMain } from './app-main';

function App () {
  return (
    <Provider store={store}>
      <LoadingOverlay />
      <Router>
        <div
          id="app"
          css={{
            height: '100%',
            display: 'grid',
            gridTemplateRows: 'max-content 1fr'
          }}
        >
          <AppNav />
          <AppMain />
        </div>
      </Router>
    </Provider>
  );
}

export { App };
