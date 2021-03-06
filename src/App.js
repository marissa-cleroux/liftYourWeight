import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Exercises from "./components/Exercises";
import ExerciseForm from "./components/ExerciseForm";
import Workouts from "./components/Workouts";
import WorkoutForm from "./components/WorkoutForm";
import DoWorkout from "./components/DoWorkout";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import ExerciseContextProvider from "./contexts/ExerciseContext";
import WorkoutContextProvider from "./contexts/WorkoutContext";
import WorkoutHistoryContextProvider from "./contexts/WorkoutHistoryContext";

//TODO: Make sure everything is sorted alphabetically

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ExerciseContextProvider>
          <WorkoutContextProvider>
            <WorkoutHistoryContextProvider>
              <Navbar />
              <Switch>
                <Route exact path="/exercises" component={Exercises} />
                <Route path="/exercises/add" component={ExerciseForm} />
                <Route
                  path="/exercises/update/:exercise_id"
                  component={ExerciseForm}
                />

                <Route
                  exact
                  path="/doworkout/:workout_id"
                  component={DoWorkout}
                />

                <Route exact path="/workouts" component={Workouts} />
                <Route path="/workouts/add" component={WorkoutForm} />
                <Route
                  path="/workouts/update/:workout_id"
                  component={WorkoutForm}
                />
              </Switch>
            </WorkoutHistoryContextProvider>
          </WorkoutContextProvider>
        </ExerciseContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
