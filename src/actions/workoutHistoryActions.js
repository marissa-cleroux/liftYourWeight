export const LOG_HISTORY = "LOG_HISTORY";

export function logHistory(workout) {
  return {
    type: LOG_HISTORY,
    workout
  };
}
