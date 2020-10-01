import React from "react";
import "./App.css";
import Todo from "./components/todo/todo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Khoa" };
  }

  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}
