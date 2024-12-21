# Short-Circuiting dan Logical Operators (&&, ||, ??) dalam JavaScript

## Penjelasan Sederhana

Operator logika (&&, ||, ??) tidak hanya untuk menghasilkan true/false, tapi bisa digunakan untuk membuat keputusan cerdas dalam code. Short-circuiting adalah ketika JavaScript berhenti mengevaluasi ekspresi begitu hasilnya sudah bisa ditentukan.

### Analogi Sederhana

- && (AND) seperti mencari rumah: Harus cek SEMUA syarat (lokasi bagus DAN harga cocok)
- || (OR) seperti mencari transportasi: Cukup dapat SALAH SATU (naik bus ATAU taksi)
- ?? (Nullish) seperti rencana cadangan: Pakai rencana A, kalau TIDAK ADA baru pakai rencana B

### Kenapa Perlu Dipelajari?

- Membuat code lebih efisien
- Menangani nilai default dengan cara elegan
- Sangat berguna untuk conditional rendering di React
- Menghindari error karena nilai null/undefined

## Penjelasan Code

### 1. AND Operator (&&)

```javascript
console.log(true && "Some String"); // Output: "Some String"
console.log(false && "Some String"); // Output: false

// Penggunaan praktis
const hasMovieAdaptation = true;
console.log(hasMovieAdaptation && "This book has a movie");
```

Penjelasan:

- Jika bagian kiri true, hasil = bagian kanan
- Jika bagian kiri false, hasil = false
- Sering digunakan untuk conditional rendering

### 2. OR Operator (||)

```javascript
console.log(true || "Some String"); // Output: true
console.log(false || "Some String"); // Output: "Some String"

// Penggunaan praktis
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
```

Penjelasan:

- Jika bagian kiri true/truthy, langsung pakai nilai itu
- Jika bagian kiri false/falsy, pakai nilai bagian kanan
- Bagus untuk nilai default, tapi hati-hati dengan 0 dan ""

### 3. Nullish Coalescing Operator (??)

```javascript
const count = book.reviews.librarything?.reviewsCount ?? "no data";

// Perbedaan dengan ||
const zero = 0;
console.log(zero || "default"); // Output: "default"
console.log(zero ?? "default"); // Output: 0
```

Penjelasan:

- Hanya menganggap null dan undefined sebagai "tidak ada nilai"
- Lebih aman dari || untuk angka dan string kosong
- Bagus untuk nilai default yang benar-benar "tidak ada"

## Tujuan & Manfaat

### 1. Apa yang Bisa Diselesaikan

- Membuat logic kondisional yang ringkas
- Menangani nilai default dengan cerdas
- Menghindari error null/undefined
- Conditional rendering di React

### 2. Kapan Menggunakannya

AND (&&):

- Untuk conditional rendering
- Ketika ingin menjalankan sesuatu hanya jika kondisi true

OR (||):

- Untuk nilai default (kecuali 0 dan "")
- Ketika ingin menggunakan nilai pertama yang truthy

Nullish (??):

- Untuk nilai default yang aman
- Ketika 0 dan "" adalah nilai valid

### 3. Keuntungan

- Code lebih ringkas dari if/else
- Performa lebih baik (short-circuit)
- Menghindari bug terkait nilai falsy
- Lebih ekspresif dan mudah dibaca

### Catatan Penting

1. Perbedaan || dan ??:

   - || cek falsy values (false, 0, "", null, undefined)
   - ?? hanya cek null dan undefined

2. Tips Penggunaan:
   - Gunakan && untuk conditional rendering
   - Gunakan ?? untuk nilai default yang aman
   - Hati-hati dengan nilai 0 dan "" saat menggunakan ||
   - Bisa dikombinasikan dengan optional chaining (?.)
