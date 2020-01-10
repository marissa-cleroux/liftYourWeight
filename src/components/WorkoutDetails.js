import React, { useContext } from "react";
import { ExerciseContext } from "../contexts/ExerciseContext";
import { WorkoutContext } from "../contexts/WorkoutContext";
import { deleteWorkout } from "../actions/workoutActions";
import { Link } from "react-router-dom";

const WorkoutDetails = ({ workout }) => {
  const { exercises } = useContext(ExerciseContext);
  const { dispatch } = useContext(WorkoutContext);

  return (
    <div className="workout card" key={workout.id}>
      <div className="card-content">
        <Link to={"/workout/details/" + workout.id}>
          <span className="card-title teal-text">{workout.title}</span>
        </Link>
        <div className="mb">
          <p className="lbl">Exercises</p>
          {workout.exercises.map(ex => {
            return (
              <p key={"ex-" + ex.id}>
                {exercises.find(e => e.id === ex.id).title}
              </p>
            );
          })}
        </div>

        <div className="card-action">
          <button
            className="btn-flat white indigo-text"
            onClick={() => {
              dispatch(deleteWorkout(workout.id));
            }}
          >
            Delete
          </button>
          <Link
            className="btn-flat white indigo-text"
            to={"/workouts/update/" + workout.id}
          >
            Update
          </Link>

          <Link
            className="btn-flat white indigo-text"
            to={"/doworkout/" + workout.id}
          >
            Do Workout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
