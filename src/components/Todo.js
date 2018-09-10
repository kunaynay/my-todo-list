import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class Todo extends Component {
  state = {
    taskDone: false
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({type:'DELETE_TASK', payload: id});
  };

  onCompletedClick = e => {
    this.setState({ taskDone: !this.state.taskDone });
  };

  render() {
    const { task, id } = this.props.todo;
    const { taskDone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <p>
                <span
                  className={taskDone ? "done" : null}
                  onClick={this.onCompletedClick}
                >
                  {task}
                </span>{" "}
                <i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fas fa-trash" />
              </p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired
};

export default Todo;
