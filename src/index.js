import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import workoutReducer from "./reducers/workoutReducer";
import exerciseReducer from "./reducers/exerciseReducer";

const rootReducer = combineReducers({
  exercises: exerciseReducer,
  workouts: workoutReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
