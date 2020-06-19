import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware,compose } from 'redux';
import rootReducer from './store/reducer/root.reducer';
import Counter from './Container/Counter';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import logger from './store/Middleware/logger';

// for enabling the redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating the Store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store = {store}>
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// npm install react react-redux bootstrap --save