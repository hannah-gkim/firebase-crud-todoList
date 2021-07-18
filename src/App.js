import React from "react";
import "./App.css";
import Form from "./components/Forms";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
