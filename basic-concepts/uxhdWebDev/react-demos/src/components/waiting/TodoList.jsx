import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Add new Todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
