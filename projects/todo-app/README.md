# Dokumentasi Aplikasi Todo App

## Penjelasan Kode

### Impor Dependencies

```javascript
import { useEffect, useState } from "react";
import classes from "./styles.module.css";
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";
```

- `useEffect` dan `useState` adalah hook-hook React yang digunakan untuk mengelola efek samping dan status komponen.
- `classes` adalah sebuah objek yang berisi kelas-kelas CSS yang digunakan untuk styling komponen.
- `TodoItem` dan `TodoDetails` adalah komponen-komponen yang digunakan dalam aplikasi.
- `Skeleton` adalah komponen dari library Material UI yang digunakan untuk menampilkan placeholder saat data sedang dimuat.

### Komponen App

```javascript
function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Fungsi untuk mengambil daftar todo dari API
  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();
      console.log(result);
      if (result?.todos && result?.todos.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg(null);
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMsg(null);
      }
    } catch (e) {
      console.log(e);
      setErrorMsg("Some error occured");
    }
  }

  // Fungsi untuk mengambil detail todo berdasarkan ID
  async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${getCurrentTodoId}`
      );
      const details = await apiResponse.json();
      if (details) {
        setTodoDetails(details);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
      console.log(details);
    } catch (e) {
      console.log(e);
    }
  }

  // Panggil fungsi fetchListOfTodos saat komponen dimuat
  useEffect(() => {
    fetchListOfTodos();
  }, []);

  // Tampilkan loading skeleton jika sedang memuat data
  if (loading)
    return <Skeleton variant="rectangulat" width={650} height={650} />;

  return (
    <div className={classes.mainWraper}>
      <h1 className={classes.headerTitle}>Todo APP using Material UI</h1>
      <div className={classes.todoListWrapper}>
        {/* Render daftar todo */}
        {todoList && todoList.length > 0
          ? todoList.map((todoItem) => (
              <TodoItem
                fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
                todo={todoItem}
              />
            ))
          : null}
      </div>
      {/* Render komponen TodoDetails */}
      <TodoDetails
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
        todoDetails={todoDetails}
        setTodoDetails={setTodoDetails}
      />
    </div>
  );
}

export default App;
```

1. Komponen `App` adalah komponen utama dari aplikasi Todo App.
2. Komponen ini menggunakan beberapa state untuk mengelola data dan status aplikasi, seperti:
   - `loading`: menandakan apakah data sedang dimuat
   - `todoList`: menyimpan daftar todo
   - `errorMsg`: menyimpan pesan kesalahan jika terjadi error saat mengambil data
   - `todoDetails`: menyimpan detail todo yang sedang dilihat
   - `openDialog`: menandakan apakah dialog detail todo sedang terbuka
3. Komponen ini memiliki dua fungsi utama:
   - `fetchListOfTodos()`: fungsi ini digunakan untuk mengambil daftar todo dari API
   - `fetchDetailsOfCurrentTodo()`: fungsi ini digunakan untuk mengambil detail todo berdasarkan ID
4. `useEffect` digunakan untuk memanggil `fetchListOfTodos()` saat komponen dimuat.
5. Jika `loading` bernilai `true`, komponen akan menampilkan `Skeleton` sebagai placeholder.
6. Komponen ini merender `TodoList` untuk menampilkan daftar todo dan `TodoDetails` untuk menampilkan detail todo.

Secara keseluruhan, komponen `App` bertanggung jawab untuk mengambil data, mengelola status aplikasi, dan merender komponen-komponen lain yang dibutuhkan untuk membangun aplikasi Todo App.
