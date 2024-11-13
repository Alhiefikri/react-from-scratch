# Ternary Operator dalam JavaScript

## Penjelasan Sederhana

Ternary operator adalah cara singkat untuk menulis if/else dalam satu baris. Ini seperti "jalan pintas" untuk membuat keputusan sederhana.

### Analogi Sederhana

Bayangkan Anda di persimpangan jalan:

- Jika hujan (kondisi), bawa payung (hasil benar)
- Jika tidak hujan, bawa topi (hasil salah)

Alih-alih menulis "JIKA hujan MAKA bawa payung KALAU TIDAK bawa topi", dengan ternary kita bisa tulis: "hujan ? payung : topi"

### Kenapa Perlu Dipelajari?

- Membuat code lebih ringkas
- Sangat berguna untuk conditional rendering di React
- Lebih mudah dibaca untuk kondisi sederhana

## Penjelasan Code

### 1. Struktur Dasar Ternary

```javascript
// Struktur:
// condition ? valueIfTrue : valueIfFalse

// Contoh dengan if/else biasa
let message;
if (pages > 1000) {
  message = "over a thousand pages";
} else {
  message = "less than a thousand pages";
}

// Dengan ternary operator
const pagesRange =
  pages > 1000 ? "over a thousand pages" : "less than a thousand pages";
```

Penjelasan:

- `condition` adalah kondisi yang diperiksa
- `?` memisahkan kondisi dan nilai jika benar
- `:` memisahkan nilai jika benar dan nilai jika salah

### 2. Penggunaan dalam Template Literals

```javascript
const summary = `The book has ${
  hasMovieAdaptation ? "" : "not"
} been adapted as a movie`;
```

Penjelasan:

- Digunakan dalam template literal untuk text kondisional
- Jika `hasMovieAdaptation` true, string kosong ditampilkan
- Jika false, kata "not" ditampilkan

### 3. Ternary Bersarang (Nested)

```javascript
const status = age > 18 ? "adult" : age > 12 ? "teenager" : "child";
```

Penjelasan:

- Bisa membuat multiple kondisi
- Sebaiknya hindari terlalu banyak nesting untuk menjaga keterbacaan

## Tujuan & Manfaat

### 1. Apa yang Bisa Diselesaikan

- Membuat keputusan sederhana dalam satu baris
- Menetapkan nilai berdasarkan kondisi
- Menampilkan text atau elemen secara kondisional
- Membuat logic sederhana lebih ringkas

### 2. Kapan Menggunakannya

- Saat kondisinya sederhana (benar/salah)
- Dalam JSX untuk conditional rendering
- Saat ingin menetapkan nilai berdasarkan kondisi
- Saat membuat string kondisional

### 3. Keuntungan

- Code lebih ringkas dari if/else
- Bagus untuk conditional rendering
- Bisa digunakan dalam ekspresi
- Mudah dibaca untuk kondisi sederhana

### Catatan Penting

- Jangan gunakan untuk logic yang kompleks
- Hindari terlalu banyak nesting
- Gunakan if/else untuk logic yang lebih kompleks
- Prioritaskan keterbacaan code
