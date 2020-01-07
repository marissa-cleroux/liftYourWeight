export const UPDATE_EXERCISE = "UPDATE_EXERCISE";

export function updateExercise(exercise) {
  return {
    type: UPDATE_EXERCISE,
    exercise
  };
}

export const ADD_EXERCISE = "ADD_EXERCISE";

export function addExercise(exercise) {
  return {
    type: ADD_EXERCISE,
    exercise
  };
}

export const DELETE_EXERCISE = "DELETE_EXERCISE";

export function deleteExercise(exercise) {
  return {
    type: DELETE_EXERCISE,
    exercise
  };
}

export const INCREMENT_WEIGHT = "INCREMENT_WEIGHT";

export function incrementWeight(exercises) {
  return {
    type: INCREMENT_WEIGHT,
    exercises
  };
}
