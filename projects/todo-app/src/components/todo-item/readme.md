## Komponen TodoItem

Komponen `TodoItem` adalah komponen yang bertanggung jawab untuk merender satu item todo dalam daftar todo.

### Impor Dependencies

```javascript
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
```

- `Button`, `Card`, `CardActions`, `CardContent`, dan `Typography` adalah komponen-komponen dari library Material UI yang digunakan untuk membangun tampilan.

### Struktur Komponen

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
