import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Exercises extends Component {
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
                <Link className="indigo-text" to={"/exercises/delete/" + ex.id}>
                  Delete
                </Link>
                <Link className="indigo-text" to={"/exercises/update/" + ex.id}>
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

export default connect(mapStateToProps)(Exercises);
