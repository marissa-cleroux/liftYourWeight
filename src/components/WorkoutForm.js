import React, { Component } from "react";
import { connect } from "react-redux";
import { addWorkout, updateWorkout } from "../actions/workoutActions";
let isUpdate = false;

class WorkoutForm extends Component {
  state = {
    id: "",
    title: "",
    exercises: []
  };

  componentDidMount = () => {
    this.setState({
      id: this.props.workout.id,
      title: this.props.workout.title,
      exercises: this.props.exercises
    });
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleCheck = e => {
    const { exercises } = this.state;

    for (var i in exercises) {
      if (exercises[i].id === e.target.id) {
        exercises[i].checked = e.target.checked;
      }
    }

    this.setState({
      ...this.state,
      exercises
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.title && !this.state.exercises.length) {
      return;
    }

    const workout = {
      id: this.state.id,
      title: this.state.title,
      exercises: this.state.exercises.map(ex => {
        let e = {
          id: ex.id.substring(3)
        };
        return e;
      })
    };

    this.props.submit(workout);
    this.setState({
      id: "",
      title: "",
      exercises: []
    });

    this.props.history.push("/workouts");
  };

  render() {
    return (
      <div className="add-workout container mt">
        <form action="" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s10 push-s1 push-l2 l8">
              <label htmlFor="title" className={isUpdate ? "active" : ""}>
                Workout
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
            <div className="grid col s10 push-s1 push-l2 l8">
              {this.state.exercises.map(ex => {
                return (
                  <div key={ex.id}>
                    <label>
                      <input
                        type="checkbox"
                        value={ex.id}
                        name="exercise"
                        onChange={this.handleCheck}
                        checked={ex.checked}
                        id={ex.id}
                      />
                      <span>{ex.title}</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row"></div>
          <div>
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { workouts } = state.workouts;
  let id = ownProps.match.params.workout_id;

  isUpdate = id !== undefined;

  const workout = id
    ? workouts.find(w => w.id === id)
    : { id: "", title: "", exercises: [] };

  const exercises = state.exercises.exercises.map(ex => {
    let exercise = {
      id: "ex-" + ex.id,
      title: ex.title,
      checked: workout.exercises.map(e => e.id).includes(ex.id)
    };
    return exercise;
  });

  return {
    workout,
    exercises
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submit: isUpdate
      ? workout => {
          dispatch(updateWorkout(workout));
        }
      : workout => {
          dispatch(addWorkout(workout));
        }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutForm);
