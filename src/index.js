import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import workoutReducer from "./reducers/workoutReducer";
import workoutHistoryReducer from "./reducers/workoutHistoryReducer";

const rootReducer = combineReducers({
  workouts: workoutReducer,
  workoutHistory: workoutHistoryReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
