import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteWorkout } from "../actions/workoutActions";

class Workouts extends Component {
  handleDelete = id => {
    this.props.deleteWorkout(id);
  };

  render() {
    const { workouts, exercises } = this.props;

    const workoutList = workouts.length ? (
      workouts.map(workout => {
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
                    this.handleDelete(workout.id);
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
      })
    ) : (
      <div className="center"></div>
    );

    return (
      <div className="workouts container">
        <h4 className="center">Workouts</h4>
        <Link
          to="/workouts/add"
          className="add-fab btn-floating btn-large waves-effect waves-light text-teal text-darken-3"
        >
          <i className="material-icons">add</i>
        </Link>
        <div className="grid">{workoutList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    workouts: state.workouts.workouts,
    exercises: state.exercises.exercises
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteWorkout: id => {
      dispatch(deleteWorkout(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Workouts);
