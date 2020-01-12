import { LOG_HISTORY } from "../actions/workoutHistoryActions";
import uuid from "uuid/v1";

const workoutHistoryReducer = (state, action) => {
  switch (action.type) {
    case LOG_HISTORY:
      const exercises = action.exercises.map(ex => {
        let exercise = {
          id: uuid(),
          weight: ex.currentWeight,
          exerciseId: ex.id,
          dateCompleted: getCurrentDateString()
        };
        return exercise;
      });

      return [...state, ...exercises];

    default:
      return state;
  }
};

const getCurrentDateString = () => {
  let currentDate = new Date();
  return (
    currentDate.getFullYear() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getDate()
  );
};

export default workoutHistoryReducer;
