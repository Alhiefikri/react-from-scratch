import * as types from "../constants/ActionTypes";
import {
  createTodoApi,
  editTodoApi,
  deleteTodoApi,
  fetchTodosApi,
} from "../api/TodosApi";

export const addTodo = (text) => async (dispatch) => {
  try {
    const todo = { text: text, completed: false };
    const res = await createTodoApi(todo);
    dispatch({ type: types.ADD_TODOS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const editTodo = (data) => async (dispatch) => {
  try {
    const editedTodo = { ...data, completed: !data.completed };
    const res = await editTodoApi(data.id, editedTodo);
    dispatch({ type: types.EDIT_TODOS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    await deleteTodoApi(id);
    dispatch({ type: types.DELETE_TODOS, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const fetchTodos = () => async (dispatch) => {
  try {
    const res = await fetchTodosApi();
    dispatch({ type: types.GET_TODOS, payload: res.data });
  } catch (error) {}
};
