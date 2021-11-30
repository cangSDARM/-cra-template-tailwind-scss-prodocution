import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { Layout } from './components/Layout';
import reportWebVitals from './reportWebVitals';
import Routes from './routers';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { store } from './store';
import ThemeProvider from './theme';

reportWebVitals((metric) => window.console.table(metric));
serviceWorkerRegistration.register();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary.Normal>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider>
            <Layout>
              <Routes />
            </Layout>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary.Normal>
  </React.StrictMode>,
  document.getElementById('app')
);
