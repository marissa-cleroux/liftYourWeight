import { LOG_HISTORY } from "../actions/workoutHistoryActions";

let nextId = 4;

const initHistory = {
  workoutHistory: [
    {
      id: "1",
      weight: "35",
      exerciseId: "1",
      dateCompleted: "2020/1/2"
    },
    {
      id: "2",
      weight: "35",
      exerciseId: "2",
      dateCompleted: "2020/1/2"
    },
    {
      id: "3",
      weight: "35",
      exerciseId: "5",
      dateCompleted: "2020/1/2"
    }
  ]
};

const workoutHistoryReducer = (state = initHistory, action) => {
  switch (action.type) {
    case LOG_HISTORY:
      const exercises = action.workout.exercises.map(ex => {
        let exercise = {
          id: (nextId++).toString(),
          weight: ex.weight,
          exerciseId: ex.id,
          dateCompleted: getCurrentDateString()
        };
        return exercise;
      });

      const workoutHistory = [...state.workoutHistory, ...exercises];

      return {
        workoutHistory
      };

    default:
  }
  return state;
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
