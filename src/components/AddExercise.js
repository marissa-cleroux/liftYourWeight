import React, { Component } from "react";
import { connect } from "react-redux";
import { addExercise } from "../actions/exerciseActions";

class AddExercise extends Component {
  state = {
    title: "",
    currentWeight: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.title && !this.state.currentWeight) {
      return;
    }
    this.props.addExercise(this.state);
    this.setState({
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
              <label htmlFor="title">Exercise </label>
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
              <label htmlFor="currentWeight">Starting Weight </label>
              <input
                type="text"
                id="currentWeight"
                onChange={this.handleChange}
                value={this.state.weight}
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

const mapStateToProps = state => {
  return {
    exercises: state.exercises
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addExercise: exercise => {
      dispatch(addExercise(exercise));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExercise);
