import {
  DELETE_EXERCISE,
  ADD_EXERCISE,
  UPDATE_EXERCISE,
  INCREMENT_WEIGHT
} from "../actions/exerciseActions";

import uuid from "uuid/v1";

export const exerciseReducer = (state, action) => {
  console.log("EXERCISE STATE: ", state);
  console.log("EXERCISE ACTION: ", action);
  switch (action.type) {
    case DELETE_EXERCISE:
      return state.filter(ex => {
        return ex.id !== action.exercise;
      });

    case ADD_EXERCISE:
      return [
        ...state,
        {
          id: uuid(),
          title: action.exercise.title,
          currentWeight: action.exercise.currentWeight
        }
      ];

    case UPDATE_EXERCISE:
      return state.map(ex =>
        ex.id === action.exercise.id ? action.exercise : ex
      );

    case INCREMENT_WEIGHT:
      const completedExercises = action.exercises.map(ex => {
        if (ex.completed) {
          let exercise = {
            id: ex.id,
            title: ex.title,
            currentWeight: (parseFloat(ex.currentWeight) + 5).toString()
          };
          return exercise;
        } else {
          let exercise = {
            id: ex.id,
            title: ex.title,
            currentWeight: ex.currentWeight
          };
          return exercise;
        }
      });

      const completedExerciseIds = completedExercises.map(ex => ex.id);

      const exercises = state.map(ex => {
        if (completedExerciseIds.includes(ex.id)) {
          return completedExercises.find(_ex => ex.id === _ex.id);
        } else {
          return ex;
        }
      });

      return [...exercises];

    default:
  }
  return state;
};

export default exerciseReducer;
