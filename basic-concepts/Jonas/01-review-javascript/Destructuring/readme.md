# Destructuring dalam JavaScript

## Penjelasan Sederhana

Destructuring adalah cara 'membongkar' nilai dari object atau array ke dalam variable terpisah.

### Analogi Sederhana

Bayangkan Anda punya kotak berisi mainan (object/array). Daripada mengambil satu-per-satu mainan dari kotak, dengan destructuring Anda bisa langsung mengeluarkan beberapa mainan sekaligus dan memberikan nama untuk masing-masing mainan tersebut.

### Kenapa Perlu Dipelajari?

- Membuat code lebih ringkas dan mudah dibaca
- Menghindari pengulangan penulisan nama object
- Sangat sering digunakan di React untuk props dan state

## Penjelasan Code

### 1. Object Destructuring

```javascript
const book = getBook(3);
// Cara lama
const title = book.title;
const author = book.author;

// Dengan destructuring
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
```

Penjelasan baris per baris:

- Kita mengambil data buku dengan ID 3
- Daripada menulis `book.title`, `book.author` berulang kali
- Kita bisa 'membongkar' semua properti yang dibutuhkan dalam satu baris

### 2. Array Destructuring

```javascript
const genres = ["science fiction", "novel", "adventure"];
// Cara lama
const primaryGenre = genres[0];
const secondaryGenre = genres[1];

// Dengan destructuring
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
```

Penjelasan baris per baris:

- Array `genres` berisi daftar genre
- Kita mengambil genre pertama sebagai `primaryGenre`
- Genre kedua sebagai `secondaryGenre`
- `...otherGenres` mengambil sisa genre yang ada (rest operator)

## Tujuan & Manfaat

### 1. Apa yang Bisa Diselesaikan

- Mengambil data dari object/array dengan cara yang lebih efisien
- Memberikan nama yang lebih bermakna untuk setiap nilai
- Mengambil sebagian atau seluruh data sesuai kebutuhan

### 2. Kapan Menggunakannya

- Saat mengambil data dari API
- Saat bekerja dengan props di React
- Saat perlu mengambil beberapa nilai dari object/array sekaligus

### 3. Keuntungan

- Code lebih pendek dan bersih
- Mengurangi pengulangan
- Lebih mudah dibaca dan dipahami
- Mengurangi kesalahan pengetikan nama properti
