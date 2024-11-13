# Arrow Functions dalam JavaScript

## Penjelasan Sederhana

Arrow function adalah cara baru dan lebih singkat untuk menulis function di JavaScript. Ini seperti versi 'ringkas' dari function biasa, menggunakan tanda panah (`=>`) sebagai pengganti kata `function`.

### Analogi Sederhana

Bayangkan Anda punya dua cara menulis alamat:

- Cara lama: "Jalan Merdeka Nomor 10, Jakarta Pusat, DKI Jakarta"
- Cara singkat: "Jl. Merdeka 10, Jakpus"
  Keduanya menuju tempat yang sama, tapi cara penulisannya berbeda.

### Kenapa Perlu Dipelajari?

- Code jadi lebih ringkas
- Sangat umum digunakan di React
- Standar dalam JavaScript modern
- Lebih mudah dibaca untuk function sederhana

## Penjelasan Code

### 1. Syntax Dasar

```javascript
// Function biasa
function getYear(str) {
  return str.split("-")[0];
}

// Arrow function
const getYear = (str) => str.split("-")[0];

// Contoh penggunaan
console.log(getYear("2024-01-01")); // Output: "2024"
```

Penjelasan:

- Hilangkan kata `function`
- Tambahkan tanda panah (`=>`) setelah parameter
- Untuk function satu baris, tidak perlu `return` dan kurung kurawal

### 2. Variasi Syntax

```javascript
// Tanpa parameter
const sayHello = () => "Hello!";

// Satu parameter (bisa tanpa kurung)
const double = (num) => num * 2;

// Multiple parameter (wajib pakai kurung)
const add = (a, b) => a + b;

// Multiple baris (wajib pakai kurung kurawal dan return)
const calculate = (a, b) => {
  const sum = a + b;
  return sum * 2;
};
```

Penjelasan baris per baris:

- Kurung () bisa dihilangkan jika hanya ada 1 parameter
- Kurung kurawal {} diperlukan jika ada multiple baris
- `return` diperlukan jika menggunakan kurung kurawal

### 3. Penggunaan dalam Array Methods

```javascript
// Contoh dengan map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);

// Contoh dengan filter
const books = getBooks();
const longBooks = books.filter((book) => book.pages > 500);
```

## Tujuan & Manfaat

### 1. Apa yang Bisa Diselesaikan

- Menulis function dengan syntax yang lebih ringkas
- Callback function dalam array methods
- Event handlers di React
- Function sederhana satu baris

### 2. Kapan Menggunakannya

- Saat menulis function sederhana
- Dalam array methods (map, filter, reduce)
- Sebagai callback function
- Di React components
- Saat tidak memerlukan `this` binding

### 3. Keuntungan

- Syntax lebih ringkas
- Tidak perlu menulis `return` untuk function satu baris
- Tidak ada masalah dengan `this` binding
- Lebih mudah dibaca untuk function sederhana

### Catatan Penting

1. Perbedaan dengan Function Biasa:

   - Tidak bisa digunakan sebagai constructor
   - Tidak memiliki `arguments` object
   - Tidak bisa menggunakan `this` seperti function biasa

2. Kapan Tidak Menggunakan Arrow Function:
   - Saat membutuhkan `this` yang merujuk ke object
   - Saat membutuhkan `arguments` object
   - Saat function perlu digunakan sebagai constructor
   - Saat function terlalu kompleks dan panjang
