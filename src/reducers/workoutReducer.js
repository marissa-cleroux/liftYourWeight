import {
  DELETE_WORKOUT,
  ADD_WORKOUT,
  UPDATE_WORKOUT
} from "../actions/workoutActions";

let nextId = 3;

const initWorkouts = {
  workouts: [
    {
      id: "1",
      title: "Lower Body",
      exercises: [{ id: "1" }, { id: "2" }, { id: "5" }]
    },
    {
      id: "2",
      title: "Upper Body",
      exercises: [{ id: "3" }, { id: "4" }, { id: "6" }]
    }
  ]
};

const workoutReducer = (state = initWorkouts, action) => {
  let workouts;
  switch (action.type) {
    case DELETE_WORKOUT:
      workouts = state.workouts.filter(w => {
        return w.id !== action.workout;
      });
      return {
        ...state,
        workouts
      };

    case ADD_WORKOUT:
      action.workout.id = nextId;
      nextId++;
      workouts = [...state.workouts, action.workout];
      return {
        ...state,
        workouts
      };

    case UPDATE_WORKOUT:
      workouts = state.workouts.map(w =>
        w.id === action.workout.id ? action.workout : w
      );
      return {
        ...state,
        workouts
      };
    default:
  }
  return state;
};

export default workoutReducer;