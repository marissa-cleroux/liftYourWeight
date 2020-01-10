import React, { useState, useContext } from "react";
import { addWorkout, updateWorkout } from "../actions/workoutActions";
import { ExerciseContext } from "../contexts/ExerciseContext";
import { WorkoutContext } from "../contexts/WorkoutContext";

const WorkoutForm = props => {
  const { exercises } = useContext(ExerciseContext);
  const { workouts, dispatch } = useContext(WorkoutContext);

  const id = props.match.params.workout_id;
  const workout = id
    ? workouts.find(w => w.id === id)
    : { title: "", exercises: [], id: "" };

  const [title, setTitle] = useState(workout.title);
  const [workoutExercises, setWorkoutExercises] = useState(
    exercises.map(ex => {
      let exercise = {
        id: "ex-" + ex.id,
        title: ex.title,
        checked: workout.exercises.map(e => e.id).includes(ex.id)
      };
      return exercise;
    })
  );

  const handleSubmit = e => {
    e.preventDefault();
    const selectedExercises = workoutExercises.filter(ex => ex.checked);
    const createdWorkout = {
      id,
      title,
      exercises: selectedExercises.map(ex => {
        let e = {
          id: ex.id.substring(3)
        };
        return e;
      })
    };

    id
      ? dispatch(updateWorkout(createdWorkout))
      : dispatch(addWorkout(createdWorkout));

    setTitle("");
    setWorkoutExercises([]);
    props.history.push("/workouts");
  };

  const handleCheck = e => {
    const tmpExercises = [...workoutExercises];
    for (let i in tmpExercises) {
      if (tmpExercises[i].id === e.target.id) {
        tmpExercises[i].checked = e.target.checked;
      }
    }

    setWorkoutExercises(tmpExercises);
  };

  return (
    <div className="add-workout container mt">
      <form action="" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s10 push-s1 push-l2 l8">
            <label htmlFor="title" className={id ? "active" : ""}>
              Workout
            </label>
            <input
              type="text"
              id="title"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
          </div>
        </div>
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
                      checked={ex.checked}
                      id={ex.id}
                    />
                    <span>{ex.title}</span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row"></div>
        <div>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default WorkoutForm;
