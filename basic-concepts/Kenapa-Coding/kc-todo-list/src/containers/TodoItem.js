import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../actions";
import TodoItem from "../components/TodoItem";

export default connect(null, { editTodo, deleteTodo })(TodoItem);
