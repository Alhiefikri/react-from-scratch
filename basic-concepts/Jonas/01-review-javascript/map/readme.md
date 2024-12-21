# **Materi: The Array map Method**

## **Pendahuluan**

Metode `map()` adalah salah satu metode array yang paling sering digunakan di JavaScript. Metode ini memungkinkan kita untuk membuat array baru dengan memodifikasi setiap elemen dalam array lama berdasarkan fungsi yang kita tentukan.

Pada dasarnya, `map()` mengambil setiap elemen dari array yang ada dan menerapkannya ke sebuah fungsi callback, kemudian mengembalikan array baru dengan hasil dari penerapan fungsi tersebut.

## **Tujuan**

Tujuan dari `map()` adalah untuk memanipulasi atau mengubah data dalam array tanpa mengubah array aslinya. Ini sangat berguna ketika kita perlu mendapatkan data yang telah diubah formatnya atau hanya beberapa elemen dari array yang ada.

---

## **Penjelasan Kode**

Berikut adalah contoh kode yang menggunakan metode `map()`:

```javascript
const books = getBooks(); // Mengambil array buku

// 1. Mengambil hanya judul dari setiap buku
const titles = books.map((book) => book.title);
console.log(titles); // Output: Array of book titles
```

### Penjelasan:

- **Fungsi `map()`**: Kita memanggil `map()` pada array `books`. Fungsi `map()` menerima sebuah fungsi callback yang dijalankan pada setiap elemen array.
- **Callback function**: Dalam contoh ini, callback function `(book) => book.title` menerima setiap objek `book` dan hanya mengambil properti `title` dari objek tersebut. Hasilnya adalah array baru yang berisi semua judul buku.

### Tujuan Kode:

Tujuan dari kode di atas adalah untuk mengekstrak **judul** dari setiap buku dalam array `books`. Ini akan menghasilkan array baru yang berisi hanya judul-judul buku, tanpa informasi lainnya.

---

### Contoh Lain: Membuat Objek Baru dengan `map()`

```javascript
// 2. Membuat array objek baru dengan data penting
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  releaseDate: book.publicationDate,
  reviewsCount: getTotalReviewCount(book),
}));
console.log(essentialData);
```

### Penjelasan:

- **Membuat objek baru**: Dalam contoh ini, kita menggunakan `map()` untuk membuat array baru yang berisi objek-objek dengan properti `title`, `author`, `releaseDate`, dan `reviewsCount`.
- **Fungsi `getTotalReviewCount()`**: Fungsi ini menghitung jumlah ulasan dari beberapa platform (seperti Goodreads dan LibraryThing). Kita memanggil fungsi ini untuk mendapatkan jumlah ulasan untuk setiap buku.

### Tujuan Kode:

Tujuan dari kode ini adalah untuk mengubah struktur data dari array buku yang awalnya memiliki banyak properti menjadi array objek dengan hanya data yang penting, seperti judul buku, penulis, tanggal rilis, dan jumlah ulasan.

---

## **Analogi Sederhana**

Bayangkan Anda memiliki daftar siswa dengan nama, umur, dan nilai mereka. Anda hanya ingin mendapatkan nama-nama siswa tersebut dalam sebuah daftar baru. Alih-alih menulis kode berulang kali untuk mengambil nama setiap siswa, Anda dapat menggunakan `map()` untuk melakukannya dalam satu langkah.

**Contoh**:

- Daftar siswa awal:

  ```javascript
  const students = [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bob", age: 22, grade: "B" },
    { name: "Charlie", age: 21, grade: "A" },
  ];
  ```

- Menggunakan `map()` untuk mendapatkan hanya nama siswa:
  ```javascript
  const studentNames = students.map((student) => student.name);
  console.log(studentNames); // Output: ["Alice", "Bob", "Charlie"]
  ```

Dengan cara ini, Anda bisa mendapatkan hasil yang sama tanpa perlu menulis kode panjang dan berulang.

---

## **Kesimpulan**

- **map()** adalah metode array yang sangat berguna untuk memodifikasi atau memilih elemen tertentu dari array tanpa mengubah array asli.
- **Fungsi callback** yang kita berikan pada `map()` menentukan bagaimana elemen dalam array akan diubah.
- Anda dapat menggunakan `map()` untuk membuat array baru yang berisi hasil transformasi data sesuai dengan kebutuhan Anda.
