import React, { useState } from "react";
import firebase from "../util/firebase";

export default function Form() {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      complete: false,
    };
    todoRef.push(todo);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={title} />
      <button onClick={createTodo}>Add Todo</button>
    </div>
  );
}
