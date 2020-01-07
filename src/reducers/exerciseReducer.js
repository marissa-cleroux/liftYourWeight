import {
  DELETE_EXERCISE,
  ADD_EXERCISE,
  UPDATE_EXERCISE,
  INCREMENT_WEIGHT
} from "../actions/exerciseActions";

let nextId = 7;

const initExercises = {
  exercises: [
    { id: "1", title: "Squat", currentWeight: "45" },
    { id: "2", title: "Deadlift", currentWeight: "65" },
    { id: "3", title: "Bench Press", currentWeight: "45" },
    { id: "4", title: "Overhead Press", currentWeight: "45" },
    { id: "5", title: "Lunge", currentWeight: "45" },
    { id: "6", title: "Bentover Row", currentWeight: "45" }
  ]
};

const exerciseReducer = (state = initExercises, action) => {
  let exercises;
  switch (action.type) {
    case DELETE_EXERCISE:
      exercises = state.exercises.filter(ex => {
        return ex.id !== action.exercise;
      });
      return {
        ...state,
        exercises
      };

    case ADD_EXERCISE:
      action.exercise.id = nextId.toString();
      nextId++;
      exercises = [...state.exercises, action.exercise];
      return {
        ...state,
        exercises
      };

    case UPDATE_EXERCISE:
      exercises = state.exercises.map(ex =>
        ex.id === action.exercise.id ? action.exercise : ex
      );
      return {
        ...state,
        exercises
      };

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

      exercises = state.exercises.map(ex => {
        if (completedExerciseIds.includes(ex.id)) {
          return completedExercises.find(_ex => ex.id === _ex.id);
        } else {
          return ex;
        }
      });

      return {
        ...state,
        exercises
      };

    default:
  }
  return state;
};

export default exerciseReducer;
