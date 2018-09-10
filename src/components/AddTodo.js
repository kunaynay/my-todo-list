import React, { Component } from "react";
import { Consumer } from "../context";
import uuid from "uuid";
import PropTypes from 'prop-types'


class AddTodo extends Component {
  state = {
    id: '',
    task: '',
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { task } = this.state;

    if(task==='') {
      this.setState({ errors: {task: 'Todo is required'}})
    }

    const newTodo = {
      task,
      id: uuid()
    };

    dispatch({type: 'ADD_TASK', payload: newTodo});

    this.setState({
      id: '',
      task: '',
      error: {}
    })
  };

  render() {
    const { task } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <div>
                  <label htmlFor="task">Add a to-do</label>
                  <input
                    type="text"
                    placeholder="Enter here"
                    name="task"
                    value={task}
                    onChange={this.onChange}
                  />
                </div>
                <input type="submit" value="Add" />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}


export default AddTodo;