import React, { Component } from "react";
import Header from "./components/layout/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import './App.css';

import { Provider } from './context'

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div>
            <AddTodo />
            <TodoList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
