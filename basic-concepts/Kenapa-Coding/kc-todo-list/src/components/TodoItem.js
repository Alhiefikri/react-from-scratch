import React from "react";
import { GrClose } from "react-icons/gr";

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  const handleEdit = () => {
    editTodo(todo);
  };
  return (
    <li className={`todo-item ${todo.completed ? "checked" : ""} `}>
      <div className="todo-text" onClick={handleEdit}>
        {todo.text}
      </div>
      <div
        className="todo-delete"
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        <GrClose />
      </div>
    </li>
  );
};

export default TodoItem;
