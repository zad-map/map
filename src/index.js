import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import thunkMiddleware from 'redux-thunk';
import './i18n';

import rootReducer from './reducers';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(thunkMiddleware))}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
