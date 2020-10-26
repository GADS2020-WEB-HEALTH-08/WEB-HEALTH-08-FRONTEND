import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { rootStore, persistor } from './app/redux/rootStore';
import './app/layout/App.css';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={rootStore}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
