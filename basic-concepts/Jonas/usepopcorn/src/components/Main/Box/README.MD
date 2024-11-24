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

### Komponen `MovieDetail`

---

## **Pengertian**

Komponen `MovieDetail` menampilkan informasi lengkap tentang film yang dipilih, seperti judul, poster, sinopsis, rating IMDb, dan informasi lainnya. Komponen ini juga memungkinkan pengguna untuk memberikan rating film dan menambahkannya ke daftar film yang sudah ditonton. Jika film sudah ada dalam daftar "watched", maka pengguna akan melihat rating yang telah mereka berikan sebelumnya.

---

## **Cara Berpikir React**

Komponen ini mengelola beberapa **state** lokal, termasuk status loading, detail film yang dimuat, dan rating pengguna. Ketika komponen dimuat, film yang dipilih (dengan `selectedId`) akan diambil dari API (OMDb API) menggunakan `useEffect`. Jika film sudah ditonton sebelumnya, komponen akan menampilkan rating yang telah diberikan. React's **state** dan **effect hooks** digunakan untuk mengatur data, menangani event, dan memperbarui tampilan berdasarkan interaksi pengguna.

---

## **Analogi Sederhana**

Bayangkan komponen `MovieDetail` seperti **tampilan rinci sebuah film** di aplikasi atau website streaming. Ketika kamu memilih sebuah film, kamu akan melihat informasi lengkapnya—seperti poster, sinopsis, aktor, dan rating. Kamu juga bisa memberikan rating dan menambahkannya ke daftar "film yang sudah ditonton". Jika film sudah ada dalam daftar tersebut, kamu hanya akan melihat rating yang telah kamu berikan.

---

## **Penjelasan Code Tiap Baris**

### **Import dan Inisialisasi State**

```js
import { useEffect, useState } from "react";
import { KEY } from "../../KEY";
import Loader from "../../UI/Loader";
import StarRating from "../../StarRating";
```

- Mengimpor **hook React** `useState` dan `useEffect`, serta komponen `Loader` dan `StarRating`.
- `KEY` diimpor dari file lain, yang berisi API key untuk mengakses OMDb API.

### **State Lokal dan Deklarasi Variabel**

```js
const [movie, setMovie] = useState({});
const [isLoading, setIsLoading] = useState(false);
const [userRating, setUserRating] = useState("");
```

- `movie`: Menyimpan data film yang diambil dari API.
- `isLoading`: Status loading untuk menampilkan spinner (loader) saat film sedang diambil.
- `userRating`: Menyimpan rating pengguna untuk film yang sedang ditampilkan.

### **Memeriksa Apakah Film Sudah Ditonton**

```js
const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
const watchUserRating = watched.find(
  (movie) => movie.imdbID === selectedId
)?.userRating;
```

- `isWatched`: Mengecek apakah film sudah ada dalam daftar film yang sudah ditonton (`watched`). Ini dilakukan dengan memeriksa apakah `imdbID` dari film yang dipilih (`selectedId`) ada dalam daftar `watched`.
- `watchUserRating`: Mengambil rating pengguna dari daftar `watched` jika film sudah ditonton.

### **Destructuring Data Film**

```js
const {
  Title: title,
  Year: year,
  Poster: poster,
  Runtime: runtime,
  imdbRating,
  Plot: plot,
  Released: released,
  Actors: actors,
  Director: director,
  Genre: genre,
} = movie;
```

- Menggunakan **destructuring assignment** untuk mengambil properti penting dari objek `movie`, seperti judul, poster, tahun, rating IMDb, durasi, sinopsis, dan lainnya.

### **Handle Fungsi untuk Menambah Film ke Daftar Watched**

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
  };
  onAddWatched(newWatchMovie);
  onCloseMovie();
}
```

- `handleAdd`: Fungsi yang akan dipanggil ketika pengguna menambahkan film ke daftar yang sudah ditonton. Fungsi ini membuat objek film baru dengan informasi lengkap dan rating pengguna, lalu menambahkannya ke daftar `watched` melalui `onAddWatched`.

### **Effect untuk Menutup Film dengan Tombol Escape**

```js
useEffect(
  function () {
    function callback(e) {
      if (e.code === "Escape") {
        onCloseMovie();
      }
    }
    document.addEventListener("keydown", callback);

    return function () {
      document.removeEventListener("keydown", callback);
    };
  },
  [onCloseMovie]
);
```

- **`useEffect` pertama**: Menambahkan event listener untuk menutup detail film ketika tombol **Escape** ditekan. Event listener dibersihkan saat komponen dibersihkan (cleanup).

### **Effect untuk Mengambil Detail Film dari API**

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

- **`useEffect` kedua**: Ketika `selectedId` berubah, `useEffect` ini akan memanggil API OMDb untuk mengambil detail film berdasarkan ID yang dipilih. Setelah data diterima, state `movie` diperbarui dengan data film, dan status loading diubah menjadi `false`.

### **Effect untuk Mengubah Title Halaman**

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

- **`useEffect` ketiga**: Mengubah judul halaman (tab browser) menjadi "Movie | {judul film}" setiap kali `title` film diperbarui. Setelah komponen dibersihkan, judul halaman akan dikembalikan ke "usePopcorn".

### **Render UI Komponen**

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

- Menampilkan informasi detail film, termasuk judul, poster, sinopsis, rating IMDb, dan informasi lainnya.
- Jika film belum ditonton, pengguna dapat memberikan rating dengan menggunakan komponen `StarRating` dan menambahkannya ke daftar "watched". Jika film sudah ditonton, rating yang telah diberikan ditampilkan.

---

## **Kesimpulan**

Komponen `MovieDetail` adalah komponen yang bertugas menampilkan detail film yang dipilih, serta memungkinkan pengguna memberikan rating dan menambahkannya ke daftar film yang sudah ditonton. Komponen ini menggunakan beberapa `useEffect` hooks untuk menangani perubahan data, event keyboard (tombol Escape), dan pengambilan data film dari API. Dengan menggunakan state React untuk mengelola data, komponen ini memberikan pengalaman interaktif yang memungkinkan pengguna berinteraksi dengan informasi film secara dinamis.

---

### Komponen `WatchedMovieList`

---

## **Pengertian**

Komponen `WatchedMovieList` bertanggung jawab untuk menampilkan daftar film yang sudah ditonton oleh pengguna. Komponen ini menerima props `watched`, yaitu array dari film-film yang sudah ditonton, dan memetakan masing-masing film ke dalam komponen `WatchMovie`. Selain itu, komponen ini juga menerima fungsi `onDeleteWatched` untuk menghapus film dari daftar yang sudah ditonton.

---

## **Cara Berpikir React**

Komponen ini mengandalkan **state** yang diteruskan melalui props (`watched`) untuk menampilkan daftar film yang sudah ditonton. Setiap film yang ada dalam daftar `watched` akan dipetakan ke dalam elemen `<li>` yang berisi komponen `WatchMovie`. Komponen `WatchMovie` akan menerima informasi tentang film serta fungsi untuk menghapus film dari daftar saat tombol hapus diklik.

---

## **Analogi Sederhana**

Bayangkan komponen ini seperti **daftar film yang sudah kamu tonton** dalam aplikasi. Setiap kali kamu menonton film dan menambahkannya ke daftar, komponen ini akan menampilkan film-film tersebut dalam bentuk daftar. Setiap item di dalam daftar memiliki tombol untuk menghapus film dari daftar tersebut, yang memungkinkan kamu untuk mengelola film yang sudah ditonton.

---

## **Penjelasan Code Tiap Baris**

### **Import Komponen `WatchMovie`**

```js
import WatchMovie from "../../WatchedMovie";
```

- Mengimpor komponen `WatchMovie` yang akan digunakan untuk menampilkan setiap film dalam daftar `watched`.

### **Menerima Props dan Mapping Daftar Film**

```js
export default function WatchedMovieList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}
```

- **`watched`**: Array yang berisi daftar film yang sudah ditonton.
- **`onDeleteWatched`**: Fungsi yang akan diteruskan ke komponen `WatchMovie` untuk menangani penghapusan film dari daftar yang sudah ditonton.
- **`watched.map`**: Fungsi `.map()` digunakan untuk mengiterasi array `watched` dan merender setiap film menjadi komponen `WatchMovie`.
- **`key={movie.imdbID}`**: Memberikan properti `key` untuk setiap komponen yang dirender. React memerlukan `key` untuk mengidentifikasi elemen secara unik saat merender daftar.
- **`movie={movie}`**: Meneruskan objek film sebagai prop ke komponen `WatchMovie`.
- **`onDeleteWatched={onDeleteWatched}`**: Meneruskan fungsi `onDeleteWatched` ke komponen `WatchMovie` untuk memungkinkan penghapusan film.

### **Komponen `WatchMovie`**

Komponen `WatchMovie` (yang diimpor di atas) bertanggung jawab untuk merender setiap film dalam daftar. Ini mungkin berisi tampilan informasi film dan tombol untuk menghapus film dari daftar.

---

## **Kesimpulan**

Komponen `WatchedMovieList` adalah komponen yang menampilkan daftar film yang sudah ditonton dengan menggunakan array `watched` yang diteruskan sebagai prop. Setiap film dalam daftar ditampilkan menggunakan komponen `WatchMovie`, dan setiap film dapat dihapus dari daftar dengan memanggil fungsi `onDeleteWatched`. Komponen ini membantu pengguna untuk mengelola film-film yang telah mereka tonton dalam aplikasi.

---

### Komponen `WatchedSummary`

---

## **Pengertian**

Komponen `WatchedSummary` menampilkan ringkasan statistik dari film-film yang telah ditonton oleh pengguna. Ringkasan ini mencakup total jumlah film yang ditonton, rata-rata rating IMDb, rata-rata rating pengguna, dan total durasi film yang telah ditonton. Komponen ini menerima props `watched`, yaitu array yang berisi film-film yang sudah ditonton.

---

## **Cara Berpikir React**

Komponen ini menghitung nilai rata-rata dari berbagai properti film yang ada di dalam array `watched`. Misalnya, menghitung rata-rata rating IMDb, rating pengguna, dan runtime film. Kemudian, komponen ini menampilkan hasil perhitungan tersebut di dalam antarmuka pengguna. Komponen `WatchedSummary` tidak mengubah state, hanya membaca data yang diteruskan melalui props.

---

## **Analogi Sederhana**

Bayangkan kamu memiliki jurnal yang mencatat semua film yang sudah kamu tonton. Setelah menonton sejumlah film, kamu ingin tahu beberapa statistik seperti: "Berapa banyak film yang sudah saya tonton?" atau "Berapa rating rata-rata film yang saya tonton?". Komponen ini berfungsi seperti kalkulator yang menghitung statistik berdasarkan jurnal film yang telah kamu buat. Kemudian, komponen ini menampilkan hasilnya untuk kamu lihat.

---

## **Penjelasan Code Tiap Baris**

### **Menghitung Nilai Rata-Rata**

```js
const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
const avgUserRating = average(watched.map((movie) => movie.userRating));
const avgRuntime = average(watched.map((movie) => movie.runtime));
```

- **`watched.map(...)`**: Menggunakan metode `.map()` untuk membuat array baru yang berisi nilai-nilai dari properti tertentu (seperti `imdbRating`, `userRating`, dan `runtime`) untuk setiap film dalam array `watched`.
- **`average(...)`**: Fungsi `average` digunakan untuk menghitung rata-rata dari array yang sudah dibentuk sebelumnya. Fungsi `average` diimpor dari file `../../Average`, dan fungsinya mungkin terlihat seperti ini:
  ```js
  export function average(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
  }
  ```
  Fungsi ini mengakumulasi semua nilai dalam array menggunakan `.reduce()` dan kemudian membaginya dengan jumlah elemen di array untuk mendapatkan rata-rata.

### **Menampilkan Statistik dalam UI**

```js
return (
  <div className="summary">
    <h2>Movies you watched</h2>
    <div>
      <p>
        <span>#️⃣</span>
        <span>{watched.length} movies</span>
      </p>
      <p>
        <span>⭐️</span>
        <span>{avgImdbRating.toFixed(2)}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{avgUserRating.toFixed(2)}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{avgRuntime} min</span>
      </p>
    </div>
  </div>
);
```

- **`watched.length`**: Menampilkan jumlah film yang telah ditonton dengan mengambil panjang array `watched`.
- **`avgImdbRating.toFixed(2)`**: Menampilkan rata-rata rating IMDb dengan dua angka desimal.
- **`avgUserRating.toFixed(2)`**: Menampilkan rata-rata rating pengguna dengan dua angka desimal.
- **`avgRuntime`**: Menampilkan durasi rata-rata film yang telah ditonton dalam satuan menit.

### **Penggunaan HTML dan Elemen `span`**

- **`<span>#️⃣</span>`**: Menampilkan emoji "#️⃣" sebagai simbol untuk jumlah film.
- **`<span>⭐️</span>`**: Menampilkan emoji "⭐️" sebagai simbol untuk rating IMDb.
- **`<span>🌟</span>`**: Menampilkan emoji "🌟" sebagai simbol untuk rating pengguna.
- **`<span>⏳</span>`**: Menampilkan emoji "⏳" sebagai simbol untuk durasi runtime.

---

## **Kesimpulan**

Komponen `WatchedSummary` memberikan gambaran statistik singkat tentang film-film yang telah ditonton oleh pengguna. Dengan menggunakan props `watched`, komponen ini menghitung rata-rata beberapa properti film (rating IMDb, rating pengguna, dan runtime), dan menampilkannya dengan cara yang mudah dibaca. Ini memberi pengguna gambaran umum tentang seberapa banyak film yang sudah mereka tonton dan bagaimana kualitas serta durasinya secara keseluruhan.
