import {
  DELETE_WORKOUT,
  ADD_WORKOUT,
  UPDATE_WORKOUT
} from "../actions/workoutActions";

import uuid from "uuid/v1";

const workoutReducer = (state, action) => {
  switch (action.type) {
    case DELETE_WORKOUT:
      return state.filter(workout => {
        return workout.id !== action.workout;
      });

    case ADD_WORKOUT:
      action.workout.id = uuid();
      return [...state, action.workout];

    case UPDATE_WORKOUT:
      return state.map(workout =>
        workout.id === action.workout.id ? action.workout : workout
      );

    default:
      return state;
  }
};

export default workoutReducer;
