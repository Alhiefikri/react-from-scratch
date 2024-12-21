# README: Penjelasan tentang Custom Hook `useMovies`

## Pengertian

`useMovies` adalah sebuah **custom hook** yang digunakan untuk mengambil data film dari API eksternal (dalam hal ini menggunakan API OMDB) berdasarkan query pencarian yang diberikan. Hook ini mengelola beberapa state untuk mengelola proses pengambilan data film, yaitu:

- Daftar film yang ditemukan (`movies`).
- Status loading saat data sedang diambil (`isLoading`).
- Menangani kesalahan jika terjadi masalah selama pengambilan data (`error`).

Hook ini juga menggunakan **abort controller** untuk membatalkan permintaan API jika query berubah atau komponen dihancurkan, menghindari permintaan yang tidak perlu atau kebocoran memori (memory leaks).

## Cara Berpikir React

Di React, kita sering bekerja dengan data yang diambil dari API atau server eksternal. Biasanya, kita perlu mengelola beberapa hal:

- Status loading: untuk memberi tahu pengguna bahwa data sedang dimuat.
- Data yang diterima: untuk ditampilkan kepada pengguna.
- Error: untuk memberi tahu pengguna jika ada masalah saat memuat data.

Custom hook ini menggabungkan logika tersebut menggunakan `useState` untuk menyimpan status dan `useEffect` untuk melakukan efek samping (fetching data dari API).

## Analogi Sederhana

Bayangkan kamu sedang menggunakan mesin pencari film. Ketika kamu mengetikkan nama film, kamu menunggu mesin pencari itu untuk mencari film yang sesuai. Begitu pencarian selesai, mesin akan menunjukkan daftar film yang ditemukan. Namun, jika kamu mengubah pencarian atau jika ada kesalahan dalam pencarian, mesin pencari akan memberi tahu kamu.

`useMovies` bertindak seperti mesin pencari film ini. Ia:

- Mendengarkan query pencarian.
- Melakukan pencarian ke API eksternal.
- Menampilkan daftar film yang ditemukan atau memberi tahu jika terjadi kesalahan.

## Penjelasan Code Tiap Baris

```javascript
import { useEffect } from "react";
import { useState } from "react";
import { KEY } from "../components/KEY";
```

- **Baris ini** mengimpor dua hook dari React: `useEffect` dan `useState`.
  - `useState` digunakan untuk menyimpan dan mengelola state dalam komponen.
  - `useEffect` digunakan untuk melakukan efek samping, yaitu mengambil data dari API.
  - `KEY` adalah kunci API untuk OMDB yang disimpan di file lain, sehingga kita bisa menggunakan API tersebut.

```javascript
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
```

- **Baris ini** mendefinisikan state:
  - `movies`: Menyimpan daftar film yang ditemukan dari API. Nilai awalnya adalah array kosong.
  - `isLoading`: Menyimpan status apakah data sedang dimuat atau tidak. Nilai awalnya `false`.
  - `error`: Menyimpan pesan kesalahan jika ada masalah saat pengambilan data. Nilai awalnya adalah string kosong.

```javascript
  useEffect(
    function () {
      const controller = new AbortController();
```

- **Baris ini** menggunakan `useEffect` untuk melakukan fetching data setiap kali `query` berubah.
- `AbortController` digunakan untuk membatalkan permintaan fetch jika komponen dihancurkan atau query berubah sebelum permintaan selesai.

```javascript
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
```

- **Baris ini** mendefinisikan fungsi `fetchMovies` untuk melakukan pengambilan data film secara asinkron.
- `setIsLoading(true)` mengubah status loading menjadi `true`, menandakan bahwa data sedang dimuat.
- `setError("")` memastikan bahwa pesan kesalahan direset jika ada pencarian baru.

```javascript
const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {
  signal: controller.signal,
});
```

- **Baris ini** melakukan permintaan fetch ke API OMDB dengan menggunakan query pencarian (`s=${query}`).
- `controller.signal` digunakan untuk mengaitkan permintaan dengan controller sehingga kita bisa membatalkannya jika perlu.

```javascript
if (!res.ok) throw new Error("Something went wrong with fetching movies");
```

- **Baris ini** memeriksa apakah respons dari API berhasil. Jika status respons bukan OK, maka akan melemparkan kesalahan.

```javascript
const data = await res.json();
if (data.Response === "False") throw new Error("Movie not found");
```

- **Baris ini** mengubah respons API menjadi objek JSON. Jika API mengembalikan `Response: "False"`, berarti tidak ada film yang ditemukan, sehingga akan melemparkan kesalahan.

```javascript
setMovies(data.Search);
setError("");
```

- **Baris ini** jika data ditemukan, daftar film (`data.Search`) disimpan dalam state `movies`.
- `setError("")` memastikan bahwa pesan kesalahan direset jika pencarian berhasil.

```javascript
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
```

- **Baris ini** menangani error jika ada masalah saat pengambilan data.
  - Jika kesalahan bukan karena pembatalan permintaan (`AbortError`), maka akan ditangani dengan menampilkan pesan kesalahan.
  - `finally` memastikan bahwa `setIsLoading(false)` dipanggil, menandakan bahwa proses pemuatan telah selesai, baik berhasil atau gagal.

```javascript
if (query.length < 3) {
  setMovies([]);
  setError("");
  return;
}
fetchMovies();
```

- **Baris ini** memeriksa apakah panjang query kurang dari 3 karakter. Jika iya, maka mengosongkan daftar film (`setMovies([])`) dan menghapus kesalahan (`setError("")`), dan keluar dari fungsi untuk menghindari permintaan API yang tidak perlu.
- Jika panjang query lebih dari 2 karakter, fungsi `fetchMovies` dipanggil untuk mengambil data.

```javascript
      return function () {
        controller.abort();
      };
    },
    [query]
  );
```

- **Baris ini** mengembalikan fungsi pembersihan (`return function() {...}`) yang dipanggil ketika efek samping dihentikan (seperti saat komponen dihancurkan atau `query` berubah). Fungsi ini akan membatalkan permintaan API yang sedang berlangsung dengan `controller.abort()`.

```javascript
  return { movies, isLoading, error, setMovies, setError, setIsLoading };
}
```

- **Baris ini** mengembalikan objek yang berisi:
  - `movies`: Daftar film yang ditemukan.
  - `isLoading`: Status apakah data sedang dimuat.
  - `error`: Pesan kesalahan jika ada.
  - `setMovies`, `setError`, `setIsLoading`: Fungsi-fungsi untuk memperbarui state secara manual jika diperlukan.

## Kesimpulan

Custom hook `useMovies` menyediakan cara yang efisien untuk melakukan pencarian film menggunakan API OMDB. Hook ini mengelola tiga state utama: `movies`, `isLoading`, dan `error`. Fitur utama dari hook ini adalah:

1. Melakukan fetching data berdasarkan query pencarian.
2. Mengelola status loading dan kesalahan.
3. Membatalkan permintaan API yang sedang berlangsung jika query berubah atau komponen dihancurkan, untuk menghindari kebocoran memori atau permintaan yang tidak perlu.

### Contoh Penggunaan:

```javascript
import { useMovies } from "./useMovies";

function MovieSearch() {
  const { movies, isLoading, error, setMovies } = useMovies("batman");

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
}
```

Pada contoh di atas:

- Hook `useMovies` digunakan untuk mencari film dengan kata kunci `"batman"`.
- Jika sedang dimuat, akan menampilkan pesan loading.
- Jika terjadi kesalahan, pesan error akan ditampilkan.
- Daftar film yang ditemukan akan ditampilkan dalam bentuk list.

Dengan `useMovies`, kamu bisa menangani pencarian film dengan cara yang lebih terstruktur dan efisien, sambil menangani berbagai status loading, error, dan pembatalan permintaan secara otomatis!
