import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Exercises from "./components/Exercises";
import ExerciseForm from "./components/ExerciseForm";
import Workouts from "./components/Workouts";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/exercises" component={Exercises} />
          <Route exact path="/workouts" component={Workouts} />
          <Route path="/exercises/add" component={ExerciseForm} />
          <Route
            path="/exercises/update/:exercise_id"
            component={ExerciseForm}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
