import { logHistory } from "../actions/workoutHistoryActions";
import { incrementWeight } from "../actions/exerciseActions";

const completeWorkout = (workout, exercises) => dispatch => {
  dispatch(incrementWeight(exercises));
  dispatch(logHistory(workout));
};

export default completeWorkout;
