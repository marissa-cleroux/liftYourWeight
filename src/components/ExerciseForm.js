import React, { useState, useContext } from "react";
import { addExercise, updateExercise } from "../actions/exerciseActions";
import { ExerciseContext } from "../context/ExerciseContext";

const ExerciseForm = props => {
  const { exercises, dispatch } = useContext(ExerciseContext);
  const id = props.match.params.exercise_id;
  const exercise = id
    ? exercises.find(ex => ex.id === id)
    : { id: "", title: "", currentWeight: "" };

  const [title, setTitle] = useState(exercise.title);
  const [currentWeight, setCurrentWeight] = useState(exercise.currentWeight);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      id
        ? updateExercise({ title, currentWeight, id: exercise.id })
        : addExercise({ title, currentWeight })
    );
    setTitle("");
    setCurrentWeight("");
    props.history.push("/exercises");
  };

  return (
    <div className="add-exercise container mt">
      <form action="" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s10 push-s1 push-l2 l8">
            <label htmlFor="title" className={id ? "active" : ""}>
              Exercise{" "}
            </label>
            <input
              type="text"
              id="title"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s10 push-s1 push-l2 l8">
            <label htmlFor="currentWeight" className={id ? "active" : ""}>
              Starting Weight
            </label>
            <input
              type="text"
              id="currentWeight"
              onChange={e => setCurrentWeight(e.target.value)}
              value={currentWeight}
            />
          </div>
        </div>
        <div>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ExerciseForm;
