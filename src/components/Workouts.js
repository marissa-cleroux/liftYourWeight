import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WorkoutContext } from "../contexts/WorkoutContext";
import WorkoutDetails from "./WorkoutDetails";

const Workouts = () => {
  const { workouts } = useContext(WorkoutContext);
  return workouts.length ? (
    <div className="workouts container">
      <h4 className="center">Workouts</h4>
      <Link
        to="/workouts/add"
        className="add-fab btn-floating btn-large waves-effect waves-light text-teal text-darken-3"
      >
        <i className="material-icons">add</i>
      </Link>
      <div className="grid">
        {workouts.map(workout => {
          return <WorkoutDetails workout={workout} key={workout.id} />;
        })}
      </div>
    </div>
  ) : (
    <div>
      <div className="empty">No workouts to complete</div>

      <Link
        to="/workouts/add"
        className="add-fab btn-floating btn-large waves-effect waves-light text-teal text-darken-3"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default Workouts;
