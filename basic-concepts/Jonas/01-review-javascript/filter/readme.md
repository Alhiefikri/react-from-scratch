# **Materi: The Array filter Method**

## **Pendahuluan**

Metode `filter()` adalah salah satu metode array di JavaScript yang memungkinkan kita untuk membuat array baru dengan hanya elemen-elemen yang memenuhi kondisi tertentu. Fungsi ini sangat berguna ketika kita ingin menyaring elemen dari array yang memenuhi kriteria tertentu, tanpa mengubah array asli.

## **Tujuan**

Tujuan dari `filter()` adalah untuk memfilter elemen-elemen dalam array yang memenuhi kondisi yang kita tentukan di dalam sebuah fungsi callback. Hasil dari metode ini adalah array baru yang hanya berisi elemen-elemen yang lolos dari kondisi tersebut.

---

## **Penjelasan Kode**

Berikut adalah contoh penggunaan metode `filter()` pada kode yang Anda berikan:

```javascript
// 1. Menyaring buku dengan jumlah halaman lebih dari 500 dan ada adaptasi filmnya
const longBooksWithMovie = books
  .filter((book) => book.pages > 500) // Menyaring buku dengan lebih dari 500 halaman
  .filter((book) => book.hasMovieAdaptation); // Menyaring buku yang memiliki adaptasi film
console.log(longBooksWithMovie);
```

### Penjelasan:

- **`filter()` pertama**: Menyaring array `books` untuk mendapatkan hanya buku-buku yang memiliki lebih dari 500 halaman.
- **`filter()` kedua**: Setelah mendapatkan buku-buku yang lebih panjang, kita menyaring lagi untuk hanya memilih buku-buku yang memiliki adaptasi film (`hasMovieAdaptation: true`).

### Tujuan Kode:

Kode ini menyaring buku-buku dalam array yang memiliki **lebih dari 500 halaman** dan **memiliki adaptasi film**. Hasilnya adalah array baru yang hanya berisi buku-buku yang memenuhi kedua kriteria tersebut.

---

### Contoh Lain: Menyaring Berdasarkan Genre

```javascript
// 2. Menyaring buku-buku dengan genre "adventure"
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure")) // Buku dengan genre "adventure"
  .map((book) => book.title); // Menampilkan hanya judulnya
console.log(adventureBooks);
```

### Penjelasan:

- **`filter()`**: Kita menggunakan `filter()` untuk mendapatkan buku-buku yang termasuk dalam genre "adventure". Fungsi callback `(book) => book.genres.includes("adventure")` memeriksa apakah genre buku mencakup "adventure".
- **`map()`**: Setelah menyaring buku dengan genre "adventure", kita menggunakan `map()` untuk hanya menampilkan judul buku-buku tersebut.

### Tujuan Kode:

Kode ini menyaring buku-buku dengan genre "adventure" dan menampilkan **judul-judulnya** saja.

---

## **Analogi Sederhana**

Bayangkan Anda memiliki daftar teman, dan Anda hanya ingin mengundang teman-teman yang tinggal di kota tertentu. Anda bisa menggunakan `filter()` untuk menyaring teman-teman yang memenuhi kriteria tersebut.

**Contoh**:

- Daftar teman:

  ```javascript
  const friends = [
    { name: "Alice", city: "New York" },
    { name: "Bob", city: "Los Angeles" },
    { name: "Charlie", city: "New York" },
  ];
  ```

- Menggunakan `filter()` untuk hanya mendapatkan teman yang tinggal di "New York":
  ```javascript
  const newYorkFriends = friends.filter((friend) => friend.city === "New York");
  console.log(newYorkFriends);
  // Output: [{ name: "Alice", city: "New York" }, { name: "Charlie", city: "New York" }]
  ```

Dengan `filter()`, Anda dapat memilih hanya teman-teman yang tinggal di kota tertentu dan mengabaikan yang lainnya.

---

## **Kesimpulan**

- **filter()** adalah metode array yang digunakan untuk membuat array baru berisi elemen-elemen yang memenuhi kondisi tertentu.
- Fungsi callback dalam `filter()` digunakan untuk memeriksa setiap elemen dalam array, dan hanya elemen yang memenuhi kriteria yang akan dimasukkan dalam array baru.
- `filter()` tidak mengubah array asli, sehingga kita mendapatkan array baru sebagai hasil.
