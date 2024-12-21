# Template Literals dalam JavaScript

## Penjelasan Sederhana

Template literals adalah cara modern untuk membuat string di JavaScript menggunakan backtick (`) sebagai pengganti tanda kutip biasa (' atau "). Kita bisa memasukkan variable dan ekspresi JavaScript langsung ke dalam string.

### Analogi Sederhana

Bayangkan Anda punya template surat, di mana ada bagian-bagian kosong yang bisa diisi dengan nama, tanggal, atau informasi lain. Template literals seperti itu - sebuah template string di mana Anda bisa dengan mudah "mengisi" bagian-bagian yang dinamis.

### Kenapa Perlu Dipelajari?

- Membuat string yang berisi variable jadi lebih mudah
- Tidak perlu lagi menggunakan + untuk menggabungkan string
- Bisa membuat string multi-baris dengan mudah

## Penjelasan Code

### 1. Contoh Basic Template Literals

```javascript
const title = "Dune";
const author = "Frank Herbert";
const pages = 658;
const publicationDate = "1965-01-01";

// Cara lama
const oldWay =
  title + ", a " + pages + "-page long book, was written by " + author;

// Dengan template literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}`;
```

Penjelasan:

- Gunakan backtick (`) untuk membuka dan menutup string
- Gunakan ${} untuk memasukkan variable atau ekspresi
- Bisa memanggil fungsi di dalam ${}

### 2. Menggunakan Ekspresi dan Ternary

```javascript
const hasMovieAdaptation = true;
const movieText = `The book has ${
  hasMovieAdaptation ? "" : "not"
} been adapted as a movie`;
```

Penjelasan:

- Bisa memasukkan operasi ternary dalam ${}
- Berguna untuk membuat text kondisional

### 3. Multi-line String

```javascript
// Cara lama
const oldMultiline = "Baris 1\n" + "Baris 2\n" + "Baris 3";

// Dengan template literals
const multiline = `
  Baris 1
  Baris 2
  Baris 3
`;
```

Penjelasan:

- Enter langsung dikenali sebagai baris baru
- Tidak perlu escape character \n
- Indentasi dipertahankan

## Tujuan & Manfaat

### 1. Apa yang Bisa Diselesaikan

- Membuat string dinamis dengan mudah
- Membuat string multi-baris
- Memasukkan hasil perhitungan ke dalam string
- Membuat template HTML string

### 2. Kapan Menggunakannya

- Saat membuat string yang berisi variable
- Saat membuat pesan yang kondisional
- Saat membuat string multi-baris
- Saat membuat template HTML di JavaScript/React

### 3. Keuntungan

- Code lebih bersih dan mudah dibaca
- Mengurangi kesalahan sintaks
- Lebih mudah maintenance
- Performa lebih baik dari concatenation
- Syntax highlighting yang lebih baik di editor
