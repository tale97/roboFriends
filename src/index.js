import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import App from "./containers/App";
import { searchRobots, receiveRobots } from "./reducers.js";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";

const logger1 = (store) => (next) => (action) => {
  console.log("dispatching action", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const rootReducer = combineReducers({ searchRobots, receiveRobots });

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
