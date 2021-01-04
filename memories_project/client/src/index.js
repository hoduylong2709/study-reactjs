import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
