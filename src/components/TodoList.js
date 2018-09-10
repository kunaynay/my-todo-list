import React, { Component } from "react";
import Todo from "./Todo";
import { Consumer } from "../context";

class TodoList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { todos } = value;
          return (
            <React.Fragment>
              {todos.map(todo => (
                <Todo
                  key={todo.id}
                  todo={todo}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default TodoList;
