import React, { useReducer, createContext, useEffect } from "react";
import workoutHistoryReducer from "../reducers/workoutHistoryReducer";

export const WorkoutHistoryContext = createContext();

const WorkoutHistoryContextProvider = props => {
  const [history, dispatch] = useReducer(workoutHistoryReducer, [], () => {
    const localData = localStorage.getItem("history");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <WorkoutHistoryContext.Provider value={{ history, dispatch }}>
      {props.children}
    </WorkoutHistoryContext.Provider>
  );
};

export default WorkoutHistoryContextProvider;
