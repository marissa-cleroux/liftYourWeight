import React, { useContext, useState } from "react";
import { logHistory } from "../actions/workoutHistoryActions";
import { incrementWeight } from "../actions/exerciseActions";
import { WorkoutContext } from "../contexts/WorkoutContext";
import { ExerciseContext } from "../contexts/ExerciseContext";
import { WorkoutHistoryContext } from "../contexts/WorkoutHistoryContext";

const DoWorkout = props => {
  const { workouts } = useContext(WorkoutContext);
  const { dispatch: exerciseDispatch, exercises } = useContext(ExerciseContext);
  const { dispatch: workoutHistoryDispatch } = useContext(
    WorkoutHistoryContext
  );

  const workoutToComplete = workouts.find(
    w => w.id === props.match.params.workout_id
  );

  const workoutExerciseIds = workoutToComplete.exercises.map(ex => ex.id);

  const [workoutExercises, setWorkoutExercises] = useState(
    exercises
      .filter(ex => workoutExerciseIds.includes(ex.id))
      .map(ex => {
        let exercise = {
          ...ex,
          completed: false
        };
        return exercise;
      })
  );

  const handleCheck = e => {
    let tmpExercises = [...workoutExercises];

    for (let i in tmpExercises) {
      if (tmpExercises[i].id === e.target.id) {
        tmpExercises[i].completed = e.target.checked;
      }
    }

    setWorkoutExercises(tmpExercises);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const completedExercises = workoutExercises.map(ex => {
      return {
        id: ex.id,
        currentWeight: ex.currentWeight,
        title: ex.title,
        completed: ex.completed
      };
    });

    workoutHistoryDispatch(logHistory(completedExercises));
    exerciseDispatch(incrementWeight(completedExercises));

    props.history.push("/workouts");
  };

  return (
    <div className="container do-workout">
      <form onSubmit={handleSubmit}>
        <h4>Complete {workoutToComplete.title} Workout</h4>
        <p>
          Check the set when you complete the exercises at the intended weight,
          do not check if you have not completed the exercise at the intended
          weight.
        </p>
        <div className="checkboxes row">
          <div className="grid col s10 push-s1 push-l2 l8">
            {workoutExercises.map(ex => {
              return (
                <div key={ex.id}>
                  <label>
                    <input
                      type="checkbox"
                      value={ex.id}
                      name="exercise"
                      onChange={handleCheck}
                      checked={ex.completed}
                      id={ex.id}
                    />
                    <span>
                      {ex.title} at {ex.currentWeight} lbs
                    </span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <button className="btn">Finish</button>
        </div>
      </form>
    </div>
  );
};

export default DoWorkout;
