import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ExerciseContext } from "../context/ExerciseContext";
import ExerciseDetails from "./ExerciseDetails";

const Exercises = () => {
  const { exercises } = useContext(ExerciseContext);
  console.log("EXERCISES: ", exercises);
  return exercises.length ? (
    <div className="exercises container">
      <h4 className="center">Exercises</h4>
      <Link
        to="/exercises/add"
        className="add-fab btn-floating btn-large waves-effect waves-light text-teal text-darken-3"
      >
        <i className="material-icons">add</i>
      </Link>
      <div className="grid">
        {exercises.map(exercise => {
          return <ExerciseDetails exercise={exercise} key={exercise.id} />;
        })}
      </div>
    </div>
  ) : (
    <div>
      <div className="empty">No exercises to perform</div>
      <Link
        to="/exercises/add"
        className="add-fab btn-floating btn-large waves-effect waves-light text-teal text-darken-3"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default Exercises;
