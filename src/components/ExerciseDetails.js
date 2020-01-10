import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ExerciseContext } from "../context/ExerciseContext";
import { deleteExercise } from "../actions/exerciseActions";

const ExerciseDetails = ({ exercise }) => {
  const { dispatch } = useContext(ExerciseContext);
  console.log("EXERCISE: ", exercise);

  return (
    <div className="exercise card">
      <div className="card-content">
        <Link to={"/exercises/details/" + exercise.id}>
          <span className="card-title teal-text">{exercise.title}</span>
        </Link>
        <div className="mb">
          <p>
            <span className="lbl">Weight</span>
            {exercise.currentWeight}
          </p>
        </div>

        <div className="card-action">
          <button
            className="btn-flat white indigo-text"
            onClick={() => {
              dispatch(deleteExercise(exercise.id));
            }}
          >
            Delete
          </button>
          <Link
            className="btn-flat white indigo-text"
            to={"/exercises/update/" + exercise.id}
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
