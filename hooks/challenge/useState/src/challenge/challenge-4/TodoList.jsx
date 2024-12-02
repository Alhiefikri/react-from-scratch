import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.trim() === "") return; // Validasi input kosong
    setTodos([...todos, { id: Date.now(), text: item }]); // Tambahkan ID unik
    setItem("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add a new task"
          style={{
            padding: "10px",
            fontSize: "1.2em",
            marginBottom: "20px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{ padding: "10px 20px", fontSize: "1em", marginTop: "10px" }}
        >
          Add Todo
        </button>
      </form>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              padding: "10px",
              margin: "5px 0",
              backgroundColor: "#f4f4f4",
              borderRadius: "5px",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
