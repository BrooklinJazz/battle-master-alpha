import "./reactotron-config";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import Reactotron from "reactotron-react-js";
// import {persistStore, autoRehydrate} from 'redux-persist'

import App from "./components/App";
import rootReducer from "./reducers";
// import 'bootstrap/dist/css/bootstrap.css';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
const middleware = applyMiddleware();

const store =
  process.env.NODE_ENV === "production"
    ? createStore(rootReducer, undefined, compose(
      middleware,
      // autoRehydrate()
    ))
    : console.tron.createStore(rootReducer, undefined, compose(
      middleware,
      // autoRehydrate()
    ))

// NOTE now that we have save files, redux persist is no longer needed and
// tends to cause problems. ignore for now.
// persistStore(store)
// Reactotron.createStore(reducers, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(".container"),
);
