import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteExercise } from "../actions/exerciseActions";

class Exercises extends Component {
  handleDelete = id => {
    this.props.deleteExercise(id);
  };

  render() {
    const { exercises } = this.props;
    const exerciseList = exercises.length ? (
      exercises.map(ex => {
        return (
          <div className="exercise card" key={ex.id}>
            <div className="card-content">
              <Link to={"/exercises/details/" + ex.id}>
                <span className="card-title teal-text">{ex.title}</span>
              </Link>
              <div className="mb">
                <p>
                  <span className="lbl">Weight</span>
                  {ex.currentWeight}
                </p>
              </div>

              <div className="card-action">
                <button
                  className="btn-flat white indigo-text"
                  onClick={() => {
                    this.handleDelete(ex.id);
                  }}
                >
                  Delete
                </button>
                <Link
                  className="btn-flat white indigo-text"
                  to={"/exercises/update/" + ex.id}
                >
                  Update
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
      <div className="exercises container">
        <h4 className="center">Exercises</h4>
        <Link
          to="/exercises/add"
          className="add-fab btn-floating btn-large waves-effect waves-light text-teal text-darken-3"
        >
          <i className="material-icons">add</i>
        </Link>
        <div className="grid">{exerciseList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteExercise: id => {
      dispatch(deleteExercise(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exercises);
