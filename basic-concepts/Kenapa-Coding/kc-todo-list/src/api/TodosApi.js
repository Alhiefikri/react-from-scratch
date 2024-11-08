import axios from "axios";

export const fetchTodosApi = async () => {
  const response = await axios.get("http://localhost:3005/todos");
  return response;
};
export const createTodoApi = async (todo) => {
  const response = await axios.post("http://localhost:3005/todos", todo);
  return response;
};
export const deleteTodoApi = async (id) => {
  const response = await axios.delete(`http://localhost:3005/todos/${id}`);
  return response;
};
export const editTodoApi = async (id, data) => {
  const response = await axios.put(`http://localhost:3005/todos/${id}`, data);
  return response;
};
