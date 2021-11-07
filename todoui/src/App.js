import React from "react";

import AddBar from "./components/addbar";
import TodoList from "./components/todolist";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AddBar />
        <TodoList />
      </div>
    );
  }
}

export default App;
