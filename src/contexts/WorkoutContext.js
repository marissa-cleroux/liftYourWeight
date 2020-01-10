import React, { useReducer, createContext, useEffect } from "react";
import workoutReducer from "../reducers/workoutReducer";

export const WorkoutContext = createContext();

const WorkoutContextProvider = props => {
  const [workouts, dispatch] = useReducer(workoutReducer, [], () => {
    const localData = localStorage.getItem("workouts");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  return (
    <WorkoutContext.Provider value={{ workouts, dispatch }}>
      {props.children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;
