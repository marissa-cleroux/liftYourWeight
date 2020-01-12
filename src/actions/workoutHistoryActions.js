export const LOG_HISTORY = "LOG_HISTORY";

export function logHistory(exercises) {
  return {
    type: LOG_HISTORY,
    exercises
  };
}
