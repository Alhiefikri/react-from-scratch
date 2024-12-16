import React, { useReducer, useState } from "react";

// initialState untuk reducer
const initialState = {
  tasks: [],
  remaining: 0,
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case "removeTask":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "countRemaining":
      return {
        ...state,
        remaining: state.tasks.filter((task) => !task.completed).length,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function TodoApp() {
  const [{ tasks, remaining }, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");

  function addTask() {
    if (inputValue.trim()) {
      dispatch({ type: "addTask", payload: inputValue });
      setInputValue("");
    }
  }

  function removeTask(id) {
    dispatch({ type: "removeTask", payload: id });
  }

  return (
    <div>
      <h1>Todo App</h1>
      <p>Remaining tasks: {remaining}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button onClick={() => removeTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
