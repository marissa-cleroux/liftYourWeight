import React, { createContext, useReducer, useEffect } from "react";
import exerciseReducer from "../reducers/exerciseReducer";

export const ExerciseContext = createContext();

const ExerciseContextProvider = props => {
  const [exercises, dispatch] = useReducer(exerciseReducer, [], () => {
    const localData = localStorage.getItem("exercises");

    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("exercises", JSON.stringify(exercises));
  }, [exercises]);

  return (
    <ExerciseContext.Provider value={{ exercises, dispatch }}>
      {props.children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseContextProvider;
