Oh, paham sekarang! Jadi, kamu ingin penjelasan lebih mendalam mengenai **full code aplikasi** yang sudah kamu kirimkan, beserta **fitur baru yang ditambahkan** seperti penggunaan **custom hooks** dan **local storage**. Berikut adalah pembaruan yang mencakup fitur tambahan yang ada pada aplikasi tersebut.

---

# README - Komponen `App`

## Pengertian

Komponen `App` adalah komponen utama dalam aplikasi yang mengelola alur dan logika aplikasi secara keseluruhan. Komponen ini mengatur pencarian film, menampilkan daftar film yang ditemukan, memungkinkan pengguna untuk menonton dan mengelola film yang sudah ditonton (watched), serta menangani status loading dan error. Selain itu, komponen `App` mengelola interaksi antar komponen-komponen lain seperti `Navbar`, `MovieList`, `MovieDetail`, dan `WatchedMovieList`.

Pada aplikasi ini, pengguna dapat mencari film, melihat detail film yang dipilih, menambahkan film yang sudah ditonton ke dalam daftar "watched", dan menghapus film dari daftar tersebut. Selain itu, data film yang sudah ditonton disimpan secara persistens di `localStorage` sehingga tetap ada meskipun pengguna me-refresh halaman.

## Fitur Baru yang Ditambahkan

### 1. **Custom Hooks untuk Mengambil Data (useMovies)**

- **Fungsi**: `useMovies` adalah custom hook yang digunakan untuk mengelola pencarian dan pengambilan data film dari API.
- **Penjelasan**: Hook ini menerima parameter `query` (kata kunci pencarian film), dan akan memanggil OMDB API setiap kali `query` berubah. Ketika data berhasil diambil, hook ini akan meng-update daftar film (`movies`). Jika ada error dalam pengambilan data (misalnya tidak ada film yang ditemukan), hook ini juga mengelola status error (`error`).
- **Keuntungan**: Menggunakan custom hook `useMovies` memungkinkan pengelolaan logika pengambilan data di luar komponen utama, sehingga membuat kode menjadi lebih modular dan mudah dikelola.

### 2. **Custom Hook untuk Local Storage (useLocalStorageState)**

- **Fungsi**: `useLocalStorageState` adalah custom hook yang digunakan untuk mengelola status aplikasi yang juga disimpan dalam `localStorage`.
- **Penjelasan**: Hook ini digunakan untuk menyimpan daftar film yang sudah ditonton (`watched`) dalam `localStorage`. Dengan menggunakan hook ini, data `watched` tetap tersimpan meskipun pengguna me-refresh halaman. Hook ini menerima dua parameter: nilai awal (`initialState`) dan kunci untuk menyimpan data (`key`).
- **Keuntungan**: Menyimpan data di `localStorage` memberikan pengalaman pengguna yang lebih baik karena data yang telah disimpan tetap ada saat aplikasi dimuat ulang. Hal ini memungkinkan pengguna untuk melanjutkan aktivitas mereka tanpa kehilangan data yang telah dimasukkan sebelumnya.

### 3. **Penyimpanan dan Pengelolaan Data Film yang Sudah Ditonton**

- **Fungsi**: Aplikasi ini memungkinkan pengguna untuk menambahkan film ke dalam daftar "watched" dan menghapus film dari daftar tersebut.
- **Penjelasan**: Pengguna dapat memilih film dari daftar pencarian, melihat detail film tersebut, dan menambahkannya ke dalam daftar film yang sudah ditonton. Daftar film yang sudah ditonton ini kemudian disimpan dalam `localStorage` sehingga data tetap ada meskipun pengguna menutup aplikasi atau me-refresh halaman.
- **Keuntungan**: Fitur ini memberikan kenyamanan kepada pengguna untuk mengelola film-film yang telah mereka tonton, dan memungkinkan mereka untuk kembali melihat daftar film yang telah ditonton sebelumnya.

### 4. **Handling State for Loading and Error**

- **Fungsi**: Aplikasi mengelola status loading (`isLoading`) dan error (`error`) selama pengambilan data dari API.
- **Penjelasan**: Saat aplikasi mengambil data film dari API, status `isLoading` di-set ke `true` untuk menampilkan indikator loading (misalnya spinner). Jika terjadi kesalahan saat mengambil data (misalnya tidak ada film yang ditemukan atau masalah dengan koneksi), status `error` di-set dengan pesan yang sesuai. Jika pengambilan data berhasil, status `isLoading` di-set ke `false` dan daftar film yang ditemukan ditampilkan.
- **Keuntungan**: Pengguna akan diberikan umpan balik visual yang jelas tentang status aplikasi, seperti indikator loading atau pesan error yang menjelaskan masalah yang terjadi.

## Penjelasan Code Tiap Bagian

### 1. **Import Dependencies**

```js
import { useEffect, useState } from "react";
import Loader from "./components/UI/Loader";
import ErrorMessage from "./components/UI/ErrorMessage";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Navbar/Search";
import WatchedMovieList from "./components/Main/Box/WatchedMovieList";
import WatchedSummary from "./components/Main/Box/WatchedSummary";
import MovieDetail from "./components/Main/Box/MovieDetails";
import Box from "./components/Main/Box/Box";
import MovieList from "./components/Main/Box/MovieList";
import Main from "./components/Main/Main";
import NumResults from "./components/Navbar/NumResult";
import { KEY } from "./components/KEY";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
```

- **useEffect, useState**: Hooks dari React untuk mengelola status dan efek samping dalam komponen.
- **Loader, ErrorMessage, Navbar, etc.**: Komponen UI yang digunakan dalam aplikasi.
- **KEY**: Kunci API untuk mengakses OMDB API.
- **useMovies**: Custom hook untuk mengambil data film dari API.
- **useLocalStorageState**: Custom hook untuk mengelola data di `localStorage`.

### 2. **State Management**

```js
const [query, setQuery] = useState("");
const [movies, setMovies] = useState([]);
const [watched, setWatched] = useLocalStorageState([], "watched");
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");
const [selectedId, setSelectedId] = useState(null);
```

- **query**: Kata kunci pencarian film yang dimasukkan pengguna.
- **movies**: Daftar film yang ditemukan berdasarkan pencarian.
- **watched**: Daftar film yang sudah ditonton, disimpan di `localStorage`.
- **isLoading**: Status untuk menandakan apakah data sedang dimuat.
- **error**: Pesan error jika terjadi masalah saat mengambil data.
- **selectedId**: ID film yang dipilih untuk ditampilkan detailnya.

### 3. **Fungsi untuk Mengelola Rating dan Tindakan Pengguna**

```js
function handleSelectMovie(id) {
  setSelectedId((selectedId) => (id === selectedId ? null : id));
}

function handleCloseMovie() {
  setSelectedId(null);
}

function handleAddWatched(movie) {
  setWatched((watched) => [...watched, movie]);
}

function handleDeleteWatched(id) {
  setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
}
```

- **handleSelectMovie**: Memilih film dan menampilkan detail film. Jika film yang sama diklik lagi, film tersebut akan "dilepas".
- **handleCloseMovie**: Menutup detail film yang sedang ditampilkan.
- **handleAddWatched**: Menambahkan film yang sudah ditonton ke dalam daftar `watched`.
- **handleDeleteWatched**: Menghapus film dari daftar `watched`.

### 4. **Pengambilan Data (API Request)**

```js
useEffect(
  function () {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    handleCloseMovie();
    fetchMovies();

    return function () {
      controller.abort();
    };
  },
  [query]
);
```

- **useEffect**: Mengambil data film dari OMDB API setiap kali nilai `query` berubah. Jika query kurang dari 3 karakter, pencarian dihentikan.
- **AbortController**: Digunakan untuk membatalkan permintaan fetch jika pengguna mengetikkan query baru sebelum respons sebelumnya diterima.

### 5. **Struktur JSX Komponen**

```js
return (
  <>
    <Navbar>
      <Search query={query} setQuery={setQuery} />
      <NumResults movies={movies} />
    </Navbar>

    <Main>
      <Box>
        {isLoading && <Loader />}
        {!isLoading && !error && (
          <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
        )}
        {error && <ErrorMessage message={error} />}
      </Box>

      <Box>
        {selectedId ? (
          <MovieDetail
            selectedId={selectedId}
            onCloseMovie={handleCloseMovie}
            onAddWatched={handleAddWatched}
            watched={watched}
          />
        ) : (
          <>
            <WatchedSummary watched={watched} />
            <WatchedMovieList
              watched={watched}
              onDeleteWatched={handleDeleteWatched}
            />
          </>
        )}
      </Box>
    </Main>
  </>
);
```

- **Navbar**: Menampilkan kolom pencarian dan jumlah hasil film yang ditemukan.
- **Main**: Merupakan wadah utama yang membungkus dua kolom:
  - Kolom pertama menampilkan daftar film atau loader jika sedang memuat data. Jika ada error, pesan error ditampilkan.
  - Kolom kedua menampilkan detail film yang dipilih atau daftar film yang sudah ditonton.

---

## Kesimpulan

Aplikasi ini adalah aplikasi pencarian film yang memungkinkan pengguna untuk mencari film, melihat detail film, serta mengelola daftar film yang sudah ditonton. Dengan menggunakan **custom hooks** seperti `useMovies` dan `useLocalStorageState`, aplikasi menjadi lebih modular dan data tetap tersimpan meskipun aplikasi dimuat ulang.

Fitur utama aplikasi meliputi pencarian film, penyimpanan daftar film yang sudah ditonton, dan tampilan detail film yang dipilih.
