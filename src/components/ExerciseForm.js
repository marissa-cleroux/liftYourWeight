import React, { Component } from "react";
import { connect } from "react-redux";
import { addExercise, updateExercise } from "../actions/exerciseActions";

let isUpdate = false;

class ExerciseForm extends Component {
  state = {
    id: "",
    title: "",
    currentWeight: ""
  };

  componentDidMount = () => {
    this.setState({
      id: this.props.exercise.id,
      title: this.props.exercise.title,
      currentWeight: this.props.exercise.currentWeight
    });
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.title && !this.state.currentWeight) {
      return;
    }
    this.props.submit(this.state);
    this.setState({
      id: "",
      title: "",
      currentWeight: ""
    });
    this.props.history.push("/exercises");
  };

  render() {
    return (
      <div className="add-exercise container mt">
        <form action="" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s10 push-s1 push-l2 l8">
              <label htmlFor="title" className={isUpdate ? "active" : ""}>
                Exercise{" "}
              </label>
              <input
                type="text"
                id="title"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 push-s1 push-l2 l8">
              <label
                htmlFor="currentWeight"
                className={isUpdate ? "active" : ""}
              >
                Starting Weight{" "}
              </label>
              <input
                type="text"
                id="currentWeight"
                onChange={this.handleChange}
                value={this.state.currentWeight}
              />
            </div>
          </div>
          <div>
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.exercise_id;
  console.log("PROPS: ", ownProps);
  console.log("ID: ", id);
  isUpdate = id !== undefined;
  let exercise = id
    ? state.exercises.find(ex => ex.id === id)
    : { id: "", title: "", currentWeight: "" };

  console.log("EXERCISE: ", exercise);
  console.log("EXERCISES: ", state.exercises);
  return {
    exercise
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submit: isUpdate
      ? exercise => {
          dispatch(updateExercise(exercise));
        }
      : exercise => {
          dispatch(addExercise(exercise));
        }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseForm);
