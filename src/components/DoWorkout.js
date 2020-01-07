import React, { Component } from "react";
import { connect } from "react-redux";
import completeWorkout from "../actions/completeWorkoutActions";

class DoWorkout extends Component {
  state = {
    workout: {},
    exercises: []
  };

  componentDidMount = e => {
    this.setState({
      workout: this.props.workout,
      exercises: this.props.exercises
    });
  };

  handleCheck = e => {
    let { exercises } = this.state;

    for (let i in exercises) {
      if (exercises[i].id === e.target.id) {
        exercises[i].completed = e.target.checked;
      }
    }

    this.setState({
      ...this.state,
      exercises
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let { workout, exercises } = this.state;

    workout.exercises = exercises.map(ex => {
      let exercise = {
        id: ex.id,
        weight: ex.currentWeight
      };
      return exercise;
    });

    this.props.completeWorkout(workout, exercises);

    this.setState({
      workout: {},
      exercises: []
    });
    this.props.history.push("/workouts");
  };

  render() {
    return (
      <div className="container do-workout">
        <form onSubmit={this.handleSubmit}>
          <h4>Complete {this.state.workout.title} Workout</h4>
          <p>
            Check the set when you complete the exercises at the intended
            weight, do not check if you have not completed the exercise at the
            intended weight.
          </p>
          <div className="checkboxes row">
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
                        checked={ex.completed}
                        id={ex.id}
                      />
                      <span>
                        {ex.title} at {ex.currentWeight} lbs
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <button className="btn">Finish</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { workouts } = state.workouts;
  const { exercises } = state.exercises;

  const workout = workouts.find(w => w.id === ownProps.match.params.workout_id);
  const workoutExerciseIds = workout.exercises.map(ex => ex.id);

  const workoutExercises = exercises
    .filter(ex => workoutExerciseIds.includes(ex.id))
    .map(ex => {
      let exercise = {
        ...ex,
        completed: false
      };
      return exercise;
    });

  return {
    workout,
    exercises: workoutExercises
  };
};

const mapDispatchToProps = dispatch => {
  return {
    completeWorkout: (workout, exercises) =>
      dispatch(completeWorkout(workout, exercises))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoWorkout);
