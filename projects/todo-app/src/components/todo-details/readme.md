# Dokumentasi Aplikasi Todo App

## Cara Berpikir React

React adalah sebuah library JavaScript untuk membangun antarmuka pengguna yang interaktif. Cara berpikir dalam React berbeda dengan cara berpikir dalam pemrograman tradisional. Dalam React, kita tidak lagi berpikir tentang bagaimana memperbarui DOM secara manual, melainkan berpikir tentang bagaimana membuat komponen-komponen yang dapat merender tampilan berdasarkan data yang dimiliki.

Bayangkan sebuah aplikasi sebagai sebuah pohon yang terdiri dari berbagai cabang dan daun. Setiap cabang dan daun mewakili sebuah komponen dalam React. Komponen-komponen ini dapat saling berhubungan dan saling memanggil satu sama lain untuk membentuk keseluruhan tampilan aplikasi.

Saat data berubah, React akan secara efisien memperbarui hanya bagian-bagian yang berubah pada DOM, tanpa perlu memperbarui seluruh halaman. Ini membuat aplikasi menjadi lebih responsif dan efisien.

## Analogi Sederhana

Bayangkan Anda sedang membuat sebuah puzzle. Setiap potongan puzzle mewakili sebuah komponen dalam React. Anda dapat membuat potongan-potongan puzzle yang berbeda (komponen) dan kemudian menyusunnya menjadi sebuah gambar yang utuh (aplikasi).

Ketika Anda ingin mengubah gambar pada puzzle, Anda tidak perlu membongkar seluruh puzzle dan menyusunnya kembali. Anda cukup mengubah potongan-potongan tertentu yang membutuhkan perubahan, dan React akan memastikan bahwa hanya bagian yang berubah saja yang diperbarui pada DOM.

## Penjelasan Kode

Berikut adalah penjelasan untuk setiap baris kode dalam aplikasi Todo App:

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

### Komponen TodoItem

```javascript
export default function TodoItem({ todo, fetchDetailsOfCurrentTodo }) {
  return (
    <Card
      sx={{
        maxWidth: 450,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h5" color={"text.secondary"}>
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => fetchDetailsOfCurrentTodo(todo?.id)}
          sx={{
            backgroundColor: "#000000",
            color: "#ffffff",
            opacity: "0.75",
            "&:hover": {
              backgroundColor: "#000000",
              color: "#ffffff",
              opacity: "1",
            },
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
```

1. Komponen `TodoItem` menerima dua props:
   - `todo`: objek todo yang akan ditampilkan
   - `fetchDetailsOfCurrentTodo`: fungsi yang akan dipanggil saat pengguna mengklik tombol "Details"
2. Komponen ini menampilkan satu card yang berisi:
   - Judul todo pada `CardContent`
   - Tombol "Details" pada `CardActions`
3. Saat tombol "Details" diklik, komponen akan memanggil fungsi `fetchDetailsOfCurrentTodo` dengan mengirimkan ID todo.
4. Komponen ini menggunakan beberapa style dari Material UI untuk menampilkan card dengan tampilan yang rapi dan konsisten.

Secara keseluruhan, komponen `TodoItem` bertanggung jawab untuk merender satu item todo dengan tampilan yang menarik dan menyediakan interaksi untuk melihat detail todo.

### Komponen TodoDetails

```javascript
function TodoDetails({
  todoDetails,
  openDialog,
  setOpenDialog,
  setTodoDetails,
}) {
  return (
    <Fragment>
      <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActiopnpns>
          <Button
            onClick={() => {
              setTodoDetails(null);
              setOpenDialog(false);
            }}
          >
            Close
          </Button>
        </DialogActiopnpns>
      </Dialog>
    </Fragment>
  );
}

export default TodoDetails;
```

1. Komponen `TodoDetails` menerima empat props:
   - `todoDetails`: objek todo yang akan ditampilkan detailnya
   - `openDialog`: boolean yang menandakan apakah dialog sedang terbuka
   - `setOpenDialog`: fungsi untuk mengubah status `openDialog`
   - `setTodoDetails`: fungsi untuk mengubah nilai `todoDetails`
2. Komponen ini menampilkan sebuah dialog yang berisi:
   - Judul todo pada `DialogTitle`
   - Tombol "Close" pada `DialogActions`
3. Saat tombol "Close" diklik, komponen akan memanggil fungsi `setOpenDialog` untuk menutup dialog dan fungsi `setTodoDetails` untuk mengosongkan nilai `todoDetails`.

Secara keseluruhan, komponen `TodoDetails` bertanggung jawab untuk menampilkan detail dari sebuah todo dalam bentuk dialog. Komponen ini juga menyediakan interaksi untuk menutup dialog.
