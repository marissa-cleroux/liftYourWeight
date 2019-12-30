import {
  DELETE_EXERCISE,
  ADD_EXERCISE,
  UPDATE_EXERCISE
} from "../actions/exerciseActions";

const initExercises = {
  exercises: [
    { id: "1", title: "Squat", currentWeight: "45" },
    { id: "2", title: "Deadlift", currentWeight: "65" },
    { id: "3", title: "Bench Press", currentWeight: "45" },
    { id: "4", title: "Overhead Press", currentWeight: "45" },
    { id: "5", title: "Lunge", currentWeight: "45" }
  ]
};

const exerciseReducer = (state = initExercises, action) => {
  if (action.type === DELETE_EXERCISE) {
    let newExercises = state.exercises.filter(ex => {
      return ex.id !== action.exercise;
    });
    return {
      ...state,
      exercises: newExercises
    };
  }
  return state;
};

export default exerciseReducer;
