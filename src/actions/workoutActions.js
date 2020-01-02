export const UPDATE_WORKOUT = "UPDATE_WORKOUT";

export function updateWorkout(workout) {
  return {
    type: UPDATE_WORKOUT,
    workout
  };
}

export const ADD_WORKOUT = "ADD_WORKOUT";

export function addWorkout(workout) {
  return {
    type: ADD_WORKOUT,
    workout
  };
}

export const DELETE_WORKOUT = "DELETE_WORKOUT";

export function deleteWorkout(workout) {
  return {
    type: DELETE_WORKOUT,
    workout
  };
}
