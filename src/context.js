import React, { Component } from "react";
import uuid from 'uuid';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TASK":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case "ADD_TASK":
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        task: "Get milk"
      },
      {
        id: uuid(),
        task: "Go workout"
      },
      {
        id: uuid(),
        task: "Study some React"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
