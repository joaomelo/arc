import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '@/shared/redux';
import { AppNav } from './app-nav';
import { AppMain } from './app-main';

function App () {
  return (
    <Provider store={store}>
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
