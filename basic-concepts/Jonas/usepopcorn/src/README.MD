# README - Komponen App

## Pengertian

Komponen `App` adalah komponen utama dalam aplikasi yang mengelola seluruh alur dan logika aplikasi. Komponen ini mengatur pencarian film, menampilkan daftar film yang ditemukan, memungkinkan pengguna untuk menonton dan mengelola film yang sudah ditonton (watched), serta mengelola status loading dan error. Komponen ini juga mengatur komunikasi antara berbagai komponen lainnya, seperti `Navbar`, `MovieList`, dan `MovieDetail`.

## Cara Berpikir React

React bersifat **komponen berbasis status** (state-driven). Komponen `App` bertindak sebagai induk dari berbagai komponen lainnya, dan sebagian besar logika aplikasi terpusat di sini. Komponen ini mengelola status aplikasi seperti:

- **`query`**: Kata kunci pencarian yang dimasukkan oleh pengguna.
- **`movies`**: Daftar film yang ditemukan berdasarkan pencarian.
- **`watched`**: Daftar film yang sudah ditonton.
- **`isLoading`**: Status yang menunjukkan apakah aplikasi sedang memuat data.
- **`error`**: Pesan error jika ada masalah dengan pengambilan data film.
- **`selectedId`**: ID film yang dipilih untuk ditampilkan detailnya.

### Analogi Sederhana

Bayangkan komponen `App` seperti seorang manajer di sebuah bioskop. Manajer ini mengelola pencarian film yang tersedia, mengatur film mana yang sudah ditonton oleh pengunjung, menampilkan detail film yang dipilih, dan juga menangani jika ada masalah dalam mencari film. Jika semua berjalan dengan baik, manajer akan menampilkan daftar film yang ditemukan, tetapi jika ada masalah (seperti tidak ada film yang ditemukan), dia akan memberi tahu pengunjung.

## Penjelasan Code Tiap Baris

### Import Dependencies

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
```

- Mengimpor berbagai komponen yang digunakan dalam aplikasi seperti `Loader`, `Navbar`, `Search`, `MovieList`, dan lainnya.
- Mengimpor `KEY` yang berisi kunci API untuk mengambil data film dari OMDB API.

### State Management

```js
const [query, setQuery] = useState("");
const [movies, setMovies] = useState([]);
const [watched, setWatched] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");
const [selectedId, setSelectedId] = useState(null);
```

- Menggunakan hook `useState` untuk mengelola status aplikasi:
  - `query`: Menyimpan kata kunci pencarian film.
  - `movies`: Menyimpan hasil pencarian film.
  - `watched`: Menyimpan daftar film yang sudah ditonton.
  - `isLoading`: Menyimpan status apakah data sedang dimuat.
  - `error`: Menyimpan pesan error jika ada masalah dalam mengambil data.
  - `selectedId`: Menyimpan ID film yang dipilih untuk menampilkan detail.

### Fungsi untuk Mengelola Rating dan Tindakan Pengguna

```js
function handleSelectMovie(id) {
  setSelectedId((selectedId) => (id === selectedId ? null : id));
}
```

- Fungsi ini mengatur ID film yang dipilih. Jika pengguna mengklik film yang sama, film tersebut akan "dilepas" (dengan mengatur `selectedId` ke `null`).

```js
function handleCloseMovie() {
  setSelectedId(null);
}
```

- Fungsi ini menutup detail film yang sedang dibuka dengan mengatur `selectedId` ke `null`.

```js
function handleAddWatched(movie) {
  setWatched((watched) => [...watched, movie]);
}
```

- Fungsi ini menambahkan film yang sudah ditonton ke dalam daftar `watched`.

```js
function handleDeleteWatched(id) {
  setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
}
```

- Fungsi ini menghapus film dari daftar `watched` berdasarkan ID-nya.

### Pengambilan Data (API Request)

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

- Menggunakan hook `useEffect` untuk mengambil data dari OMDB API setiap kali nilai `query` berubah.
  - Jika `query` lebih pendek dari 3 karakter, pencarian dibatalkan.
  - Data dari API diambil menggunakan `fetch()`. Jika respons tidak berhasil, akan ditampilkan pesan error.
  - Jika data ditemukan, `movies` di-update.
  - Jika terjadi kesalahan, pesan error akan ditampilkan.
  - Setelah pengambilan data selesai, status loading akan berhenti.

### Struktur JSX Komponen

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

- Komponen ini merender seluruh struktur aplikasi:
  - **`Navbar`**: Menampilkan kolom pencarian dan jumlah hasil film yang ditemukan.
  - **`Main`**: Merupakan wadah utama yang membungkus dua kolom:
    - Kolom pertama menampilkan daftar film yang ditemukan atau loader jika sedang memuat data. Jika ada error, maka pesan error akan ditampilkan.
    - Kolom kedua menampilkan detail film yang dipilih atau daftar film yang sudah ditonton (`watched`).

### Kesimpulan

Komponen `App` adalah komponen induk yang mengelola seluruh alur dan status aplikasi. Dengan menggunakan hooks seperti `useState` dan `useEffect`, komponen ini menangani pencarian film, pengelolaan film yang sudah ditonton, status loading, dan error handling.

Komponen-komponen lain seperti `Navbar`, `MovieList`, `MovieDetail`, dan `WatchedMovieList` diintegrasikan dalam `App` untuk menyediakan tampilan antarmuka yang dinamis dan interaktif. Aplikasi ini memungkinkan pengguna untuk mencari film, menambahkan film yang sudah ditonton ke daftar, dan melihat detail film dengan mudah.
