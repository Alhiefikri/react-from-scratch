# **Komponen `Box`**

## **Pengertian**

Komponen `Box` adalah komponen interaktif dalam React yang berfungsi untuk menampilkan konten yang bisa **dibuka dan ditutup**. Pengguna dapat mengklik tombol untuk menyembunyikan atau menampilkan konten di dalam `Box`, sehingga memungkinkan untuk menampilkan lebih banyak informasi secara dinamis.

## **Cara Berpikir React**

React bekerja dengan prinsip **state-driven rendering**, artinya perubahan pada state (seperti status `isOpen` yang menyatakan apakah `Box` terbuka atau tertutup) akan memicu pembaruan pada tampilan komponen. Komponen `Box` mengelola state internal untuk mengatur apakah konten di dalamnya terlihat atau tidak.

## **Analogi Sederhana**

Bayangkan komponen `Box` seperti **kotak berisi barang** yang bisa dibuka dan ditutup. Ketika kamu menekan tombol, kotak tersebut akan **terbuka** atau **tertutup**, menunjukkan atau menyembunyikan barang di dalamnya. Jika tombolnya tertulis `+`, artinya kotak tertutup, dan jika tombolnya tertulis `–`, artinya kotak terbuka dan isinya bisa dilihat.

## **Penjelasan Code Tiap Baris**

### **Import `useState` Hook**

```js
import { useState } from "react";
```

- Mengimpor `useState` hook dari React. Hook ini digunakan untuk mengelola **state** dalam komponen fungsional.

### **Definisi Komponen `Box`**

```js
export default function Box({ children }) {
```

- Komponen `Box` didefinisikan sebagai fungsi yang menerima prop `children`, yaitu konten yang akan dipassing dan ditampilkan di dalam `Box`.

### **State untuk Mengelola Keadaan "Terbuka" atau "Tertutup"**

```js
const [isOpen, setIsOpen] = useState(true);
```

- `useState` digunakan untuk membuat state lokal `isOpen`, yang mengatur apakah konten dalam `Box` terbuka atau tertutup. Nilai awalnya adalah `true`, yang berarti kotak terbuka secara default.

### **Render Tombol Toggle dan Konten**

```js
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
```

- Komponen ini merender elemen `div` dengan kelas `box` yang membungkus seluruh konten komponen.
- Di dalamnya ada tombol dengan kelas `btn-toggle`. Tombol ini memanggil `setIsOpen` saat diklik, yang membalik nilai `isOpen` (toggle).
- Jika `isOpen` bernilai `true`, tombol akan menampilkan `–` (kotak terbuka), jika `false`, tombol akan menampilkan `+` (kotak tertutup).

### **Tampilkan Konten Jika Terbuka**

```js
      {isOpen && children}
    </div>
  );
}
```

- Bagian ini mengecek apakah `isOpen` bernilai `true`. Jika ya, maka `children` (konten yang dipassing ke dalam `Box`) akan dirender dan ditampilkan.
- Jika `isOpen` bernilai `false`, maka `children` tidak akan dirender (konten disembunyikan).

## **Kesimpulan**

Komponen `Box` adalah contoh komponen interaktif dalam React yang menggunakan **state** untuk mengontrol tampilan konten yang bisa dibuka dan ditutup. Dengan menggunakan `useState`, komponen ini dapat menampilkan atau menyembunyikan elemen di dalamnya berdasarkan aksi pengguna. Komponen ini berguna untuk menampilkan informasi tambahan atau konten yang bisa dipilih/dilewati oleh pengguna tanpa mengganggu tampilan utama aplikasi.

---

### Komponen `MovieList`

---

## **Pengertian**

Komponen `MovieList` bertugas untuk menampilkan daftar film yang diterima sebagai prop `movies`. Komponen ini memetakan setiap item dalam array `movies` ke dalam komponen `Movie`, yang bertanggung jawab untuk merender informasi terkait film tersebut. Komponen `MovieList` juga menerima fungsi `onSelectMovie` untuk menangani aksi ketika pengguna memilih sebuah film.

---

## **Cara Berpikir React**

React menggunakan pendekatan **komponen bersarang** dan **state-driven rendering**. Komponen `MovieList` bertugas merender sebuah daftar film berdasarkan data yang diterima (props). Setiap item dalam daftar film akan diproses secara terpisah oleh komponen `Movie` dengan bantuan fungsi `map()`. Ketika pengguna berinteraksi dengan film tersebut, fungsi `onSelectMovie` akan dipanggil untuk melakukan suatu aksi (seperti memilih film).

---

## **Analogi Sederhana**

Bayangkan `MovieList` seperti **daftar film** yang terletak di sebuah **rak film**. Setiap film dalam daftar adalah sebuah **buku** yang memiliki informasi tertentu (misalnya, judul, gambar, dll.). Ketika kamu mengklik salah satu film (atau "buku"), kamu akan membuka buku tersebut untuk melihat detailnya lebih lanjut. Dalam hal ini, komponen `Movie` bertindak seperti sebuah buku, dan `MovieList` adalah rak yang menyusun semua buku tersebut.

---

## **Penjelasan Code Tiap Baris**

### **Import Komponen `Movie`**

```js
import Movie from "../../Movie/Movie";
```

- Mengimpor komponen `Movie`, yang akan digunakan untuk merender setiap item film di dalam daftar. Setiap film akan dirender menggunakan komponen ini.

### **Definisi Komponen `MovieList`**

```js
export default function MovieList({ movies, onSelectMovie }) {
```

- Komponen `MovieList` didefinisikan sebagai fungsi yang menerima dua prop:
  - `movies`: array berisi data film yang akan ditampilkan.
  - `onSelectMovie`: fungsi yang akan dipanggil ketika pengguna memilih sebuah film.

### **Render Daftar Film Menggunakan `map()`**

```js
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
```

- `return` merender sebuah elemen `ul` (unordered list) dengan dua kelas CSS: `list` dan `list-movies`.
- **`{movies?.map((movie) => ( ... ))}`**:
  - Fungsi `map()` digunakan untuk mengiterasi setiap objek `movie` dalam array `movies`. Setiap objek film akan diproses dan dirender sebagai sebuah elemen `Movie`.
  - Setiap `Movie` menerima prop:
    - `movie`: data film yang akan diteruskan ke komponen `Movie`.
    - `key={movie.imdbID}`: setiap item dalam daftar harus memiliki properti `key` yang unik untuk membantu React melacak perubahan dan optimasi rendering.
    - `onSelectMovie={onSelectMovie}`: fungsi `onSelectMovie` diteruskan ke komponen `Movie`, yang memungkinkan film tersebut dipilih.

---

## **Kesimpulan**

Komponen `MovieList` adalah komponen **presentasional** yang merender daftar film dalam bentuk list. Komponen ini menggunakan fungsi `map()` untuk memetakan array `movies` ke dalam komponen `Movie`. Dengan menerima fungsi `onSelectMovie` sebagai prop, `MovieList` memungkinkan interaksi pengguna dengan film dalam daftar, seperti memilih film untuk melihat detailnya. Ini adalah contoh komponen **daftar dinamis** yang memanfaatkan data dan event handling untuk memberikan pengalaman pengguna yang interaktif.

---

### Komponen `Movie`

---

## **Pengertian**

Komponen `Movie` bertugas untuk menampilkan informasi tentang satu film dalam daftar, seperti gambar poster, judul, dan tahun rilis. Komponen ini menerima dua prop:

- `movie`: objek yang berisi data tentang film.
- `onSelectMovie`: fungsi yang akan dipanggil ketika pengguna mengklik film tersebut, memungkinkan untuk memilih film dan menampilkan detailnya.

---

## **Cara Berpikir React**

Komponen ini adalah **komponen presentasional** yang hanya bertugas menampilkan informasi dari objek `movie` dengan format yang sudah ditentukan. Ketika pengguna mengklik item film, fungsi `onSelectMovie` dipanggil, yang biasanya digunakan untuk memilih film atau membuka detail lebih lanjut tentang film tersebut.

---

## **Analogi Sederhana**

Bayangkan komponen `Movie` seperti sebuah **kartu film** yang menampilkan informasi dasar tentang film tersebut, seperti gambar dan tahun rilis. Ketika kamu mengklik kartu film tersebut, kamu akan "memilih" film itu untuk melihat informasi lebih lanjut.

---

## **Penjelasan Code Tiap Baris**

### **Definisi Komponen `Movie`**

```js
export default function Movie({ movie, onSelectMovie }) {
```

- Komponen `Movie` didefinisikan sebagai sebuah fungsi yang menerima dua prop:
  - `movie`: objek yang berisi data terkait film (seperti judul, poster, tahun rilis).
  - `onSelectMovie`: fungsi yang dipanggil saat pengguna mengklik film.

### **Render Elemen `li` untuk Setiap Film**

```js
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
```

- Komponen ini merender sebuah elemen `li` (list item), yang mewakili setiap film.
- Ketika elemen `li` ini diklik, fungsi `onSelectMovie` akan dipanggil dengan `movie.imdbID` sebagai argumen. Ini berarti bahwa setiap film dapat dipilih berdasarkan ID unik-nya.

### **Menampilkan Poster Film**

```js
<img src={movie.Poster} alt={`${movie.Title} poster`} />
```

- Gambar poster film ditampilkan menggunakan elemen `img`. Sumber gambar (`src`) diambil dari properti `Poster` dalam objek `movie`.
- Alt text pada gambar diatur menjadi `${movie.Title} poster`, yang memberikan deskripsi gambar jika poster tidak dapat ditampilkan.

### **Menampilkan Judul Film**

```js
<h3>{movie.Title}</h3>
```

- Judul film ditampilkan dalam elemen `h3`. Nilai dari `movie.Title` yang diteruskan dari objek `movie` ditampilkan sebagai teks.

### **Menampilkan Tahun Rilis Film**

```js
<div>
  <p>
    <span>🗓</span>
    <span>{movie.Year}</span>
  </p>
</div>
```

- Di dalam elemen `div`, informasi tentang tahun rilis film ditampilkan dalam elemen `p`.
- Ikon kalender (`🗓`) diikuti dengan teks tahun rilis, yang diambil dari properti `Year` dalam objek `movie`.

---

## **Kesimpulan**

Komponen `Movie` adalah komponen presentasional yang bertugas menampilkan informasi dasar tentang film dalam bentuk kartu. Ini mencakup poster, judul, dan tahun rilis film. Komponen ini juga menangani event klik pada setiap item film untuk memungkinkan interaksi pengguna, seperti memilih film untuk melihat detail lebih lanjut. Dengan menggunakan prop `onSelectMovie`, komponen ini memungkinkan aplikasi untuk melakukan aksi lebih lanjut saat film dipilih, seperti membuka detail film atau memulai aksi lain berdasarkan ID film.

---

Baik, saya akan membuat penjelasan yang lebih jelas dan detail mengenai komponen `MovieDetail`, termasuk penggunaan **custom hook** `useKey` dan integrasi dengan **localStorage** secara lebih mendalam. Berikut adalah versi yang lebih lengkap dan detail:

---

## **Komponen `MovieDetail`**

### **Pengertian**

Komponen `MovieDetail` digunakan untuk menampilkan informasi lengkap mengenai film yang dipilih oleh pengguna, seperti judul film, poster, tahun rilis, sinopsis, rating IMDb, dan detail lainnya. Komponen ini juga memungkinkan pengguna memberikan rating pribadi untuk film yang sedang ditampilkan dan menambahkannya ke dalam daftar film yang sudah ditonton. Selain itu, fitur interaktif lainnya termasuk penggunaan keyboard (tombol **Escape**) untuk menutup tampilan film dan penyimpanan data rating di **localStorage** agar tetap konsisten antar sesi.

### **Fitur Utama**

1. **Menampilkan Detail Film**: Komponen ini menampilkan detail seperti judul, poster, durasi, genre, aktor, sutradara, sinopsis, dan rating IMDb film yang dipilih.
2. **Memberikan Rating Pengguna**: Pengguna dapat memberikan rating untuk film tersebut menggunakan komponen **StarRating**. Jika film telah ditonton sebelumnya, rating yang telah diberikan sebelumnya akan ditampilkan.
3. **Menambah Film ke Daftar "Watched"**: Pengguna dapat menambah film ke dalam daftar film yang sudah ditonton jika film tersebut belum ada di daftar "watched".
4. **Tombol Escape untuk Menutup Tampilan Film**: Tombol **Escape** dapat digunakan untuk menutup tampilan detail film dengan cepat.
5. **Penyimpanan Data dengan `localStorage`**: Rating pengguna dan status film yang sudah ditonton disimpan dalam `localStorage` untuk memastikan data tetap ada meskipun aplikasi di-refresh atau pengguna menutup dan membuka aplikasi lagi.

---

### **Penjelasan Detail tentang Komponen `MovieDetail`**

Komponen `MovieDetail` mengelola beberapa state lokal untuk menangani status dan data terkait film yang sedang ditampilkan. Berikut adalah penjelasan mendalam tentang bagaimana komponen ini bekerja.

#### **State dan Variabel**

```js
const [movie, setMovie] = useState({});
const [isLoading, setIsLoading] = useState(false);
const [userRating, setUserRating] = useState("");
const countRef = useRef(0);
```

- **`movie`**: Menyimpan informasi lengkap tentang film yang dipilih dari API.
- **`isLoading`**: Status loading yang digunakan untuk menampilkan loader/spinner ketika data film sedang diambil dari API.
- **`userRating`**: Menyimpan rating yang diberikan oleh pengguna untuk film yang sedang ditampilkan.
- **`countRef`**: Menggunakan `useRef` untuk menyimpan jumlah perubahan rating yang dilakukan oleh pengguna (misalnya jika pengguna mengubah rating beberapa kali).

#### **Fungsi untuk Menambah Film ke Daftar "Watched"**

```js
function handleAdd() {
  const newWatchMovie = {
    imdbID: selectedId,
    title,
    year,
    poster,
    imdbRating: Number(imdbRating),
    runtime: Number(runtime.split(" ").at(0)),
    userRating,
    countRatingDecisions: countRef.current,
  };
  onAddWatched(newWatchMovie);
  onCloseMovie();
}
```

- **`handleAdd`**: Fungsi yang dipanggil ketika pengguna menambahkan film ke dalam daftar film yang sudah ditonton. Fungsi ini membuat objek `newWatchMovie` yang berisi semua informasi penting tentang film yang dipilih, termasuk rating pengguna yang baru. Data ini kemudian ditambahkan ke daftar film yang sudah ditonton dengan memanggil fungsi `onAddWatched`.

#### **Hook `useKey` untuk Menutup Film dengan Tombol Escape**

```js
useKey("Escape", onCloseMovie);
```

- **`useKey`**: Hook ini memungkinkan komponen untuk merespons penekanan tombol keyboard. Pada contoh ini, ketika tombol **Escape** ditekan, fungsi `onCloseMovie` akan dipanggil, yang bertujuan untuk menutup tampilan detail film yang sedang ditampilkan. Ini meningkatkan pengalaman pengguna dengan memungkinkan navigasi lebih cepat menggunakan keyboard.

#### **Effect untuk Mengambil Detail Film dari API**

```js
useEffect(
  function () {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  },
  [selectedId]
);
```

- **`useEffect`**: Hook ini digunakan untuk mengambil data detail film dari API OMDb setiap kali `selectedId` (ID film yang dipilih) berubah. Ketika data berhasil diambil, state `movie` akan diperbarui dengan data yang diterima dari API. Selama proses pengambilan data, status loading (`isLoading`) akan diset ke `true` untuk menampilkan spinner, dan setelah data selesai diambil, status loading diubah menjadi `false`.

#### **Effect untuk Mengubah Judul Halaman di Browser**

```js
useEffect(
  function () {
    if (!title) return;
    document.title = `Movie | ${title}`;

    return function () {
      document.title = "usePopcorn";
    };
  },
  [title]
);
```

- **`useEffect` kedua**: Hook ini digunakan untuk mengubah judul halaman di browser setiap kali film yang ditampilkan berubah. Judul halaman diubah menjadi "Movie | {title}" agar lebih informatif. Ketika komponen di-unmount atau judul film tidak lagi tersedia, judul halaman akan dikembalikan ke "usePopcorn" sebagai judul default aplikasi.

---

### **Proses Pengambilan dan Penyimpanan Rating dengan LocalStorage**

Jika pengguna memberikan rating untuk film yang sedang ditampilkan, komponen ini menyimpan rating pengguna ke dalam **localStorage** dan menambahkannya ke dalam daftar film yang sudah ditonton. Ini bertujuan untuk menjaga konsistensi data antar sesi.

#### **Menggunakan LocalStorage**

Misalnya, setiap kali pengguna menambahkan film ke dalam daftar "watched" melalui `handleAdd`, data seperti rating pengguna disimpan di **localStorage** agar tidak hilang saat aplikasi di-refresh.

```js
useEffect(() => {
  const savedWatchedMovies =
    JSON.parse(localStorage.getItem("watchedMovies")) || [];
  onAddWatched(savedWatchedMovies);
}, []);
```

- **Menyimpan Data**: Saat film ditambahkan ke daftar "watched", komponen akan menyimpan data film yang baru dalam **localStorage** agar data tersebut tetap ada meskipun pengguna menutup atau me-refresh aplikasi.
- **Mengambil Data**: Data yang tersimpan dalam **localStorage** dapat diambil kembali pada saat aplikasi dimulai untuk menampilkan film yang sudah ditonton beserta rating yang diberikan sebelumnya.

---

### **Rendering UI**

```js
return (
  <div className="details">
    {isLoading ? (
      <Loader />
    ) : (
      <>
        <header>
          <button className="btn-back" onClick={onCloseMovie}>
            &larr;
          </button>
          <img src={poster} alt={`Poster of ${movie} movie`} />
          <div className="details-overview">
            <h2>{title}</h2>
            <p>
              {released} &bull; {runtime}
            </p>
            <p>{genre}</p>
            <p>
              <span>🌟</span>
              {imdbRating} IMDb rating
            </p>
          </div>
        </header>
        <section>
          <div className="rating">
            {!isWatched ? (
              <>
                <StarRating
                  maxRating={10}
                  size={24}
                  onSetRating={setUserRating}
                />
                {userRating > 0 && (
                  <button className="btn-add" onClick={handleAdd}>
                    + Add to List
                  </button>
                )}
              </>
            ) : (
              <p>
                You rated this movie {watchUserRating} <span>⭐</span>
              </p>
            )}
          </div>
          <p>
            <em>{plot}</em>
          </p>
          <p>Starring {actors}</p>
          <p>Directed by {director}</p>
        </section>
      </>
    )}
  </div>
);
```

- **Tampilan**: Ketika data film telah berhasil diambil, komponen akan menampilkan detail film, seperti judul, poster, rating IMDb, sinopsis, dan aktor/sutradara.
- **Rating Pengguna**: Pengguna dapat memberikan rating melalui komponen **StarRating**, dan tombol **+ Add to List** akan muncul jika rating sudah diberikan.
- **Tombol Kembali**: Tombol dengan simbol panah `<` memungkinkan pengguna untuk menutup detail film dan kembali ke tampilan sebelumnya.

---

### **Kesimpulan**

Komponen `MovieDetail` adalah komponen yang sangat dinamis dan interaktif dalam aplikasi. Dengan menggunakan **React Hooks** (`useState`, `useEffect`, `useRef`) dan custom hook `useKey`, komponen ini memberikan pengalaman pengguna yang mulus, termasuk kemampuan menutup film dengan tombol Escape dan menyimpan data secara permanen di **localStorage**.

Komponen ini tidak hanya menampilkan detail film, tetapi juga memungkinkan pengguna untuk berinteraksi dengan film tersebut—memberikan rating, menambahkannya ke dalam daftar "watched", dan mengelola data dengan cara yang efisien dan intuitif.
