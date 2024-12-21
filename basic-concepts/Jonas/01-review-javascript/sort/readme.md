# **Materi: The Array sort Method**

## **Pendahuluan**

Metode `sort()` di JavaScript digunakan untuk mengurutkan elemen-elemen dalam sebuah array. Secara default, metode ini mengurutkan elemen-elemen array sebagai string, tetapi kita bisa menyesuaikan cara pengurutan dengan menyediakan fungsi pembanding (callback function).

## **Tujuan**

Tujuan dari `sort()` adalah untuk mengurutkan elemen-elemen dalam array sesuai dengan urutan yang kita tentukan. Fungsi ini akan mengubah array yang ada (in-place) dan mengurutkan elemen-elemen dalam urutan yang diinginkan.

---

## **Penjelasan Kode**

Berikut adalah contoh penggunaan metode `sort()` pada kode yang Anda kirimkan:

```javascript
// 1. Mengurutkan array angka secara menurun
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => b - a);
console.log(sorted); // Output: [9, 7, 6, 3, 1]
console.log(arr); // Output: [3, 7, 1, 9, 6] (array asli tidak berubah)
```

### Penjelasan:

- **`arr.slice()`**: Kita menggunakan `slice()` untuk membuat salinan dari array asli, karena `sort()` mengubah array yang ada. Dengan menggunakan `slice()`, array asli tidak akan terpengaruh.
- **`sort()` dengan fungsi pembanding**: Fungsi pembanding `(a, b) => b - a` digunakan untuk mengurutkan angka dari yang terbesar ke yang terkecil.
  - Jika `b - a` lebih besar dari 0, maka `b` akan ditempatkan sebelum `a` (untuk pengurutan menurun).
  - Jika `b - a` lebih kecil dari 0, maka `a` akan ditempatkan sebelum `b` (untuk pengurutan menaik).

### Tujuan Kode:

Kode ini digunakan untuk mengurutkan array angka dari yang terbesar ke yang terkecil.

---

### Contoh Lain: Mengurutkan Buku Berdasarkan Jumlah Halaman

```javascript
// 2. Mengurutkan buku berdasarkan jumlah halaman (dari yang paling sedikit ke yang terbanyak)
const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedByPages);
```

### Penjelasan:

- **Menggunakan `sort()` untuk mengurutkan objek**: Pada kode ini, kita mengurutkan array `books` berdasarkan jumlah halaman (`pages`).
- **Fungsi pembanding `(a, b) => a.pages - b.pages`**: Fungsi ini membandingkan jumlah halaman dari dua buku. Jika `a.pages` lebih kecil dari `b.pages`, maka `a` akan ditempatkan lebih dahulu (untuk pengurutan menaik).

### Tujuan Kode:

Kode ini digunakan untuk mengurutkan buku-buku berdasarkan jumlah halaman mereka, dari yang paling sedikit hingga yang terbanyak.

---

## **Analogi Sederhana**

Bayangkan Anda memiliki daftar teman dan ingin mengurutkan mereka berdasarkan usia. Anda bisa menggunakan `sort()` untuk mengurutkan array teman berdasarkan usia dari yang termuda hingga yang tertua.

**Contoh**:

- Daftar teman dengan usia:

  ```javascript
  const friends = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
  ];
  ```

- Menggunakan `sort()` untuk mengurutkan teman berdasarkan usia:
  ```javascript
  const sortedFriends = friends.sort((a, b) => a.age - b.age);
  console.log(sortedFriends);
  // Output: [{ name: "Charlie", age: 22 }, { name: "Alice", age: 25 }, { name: "Bob", age: 30 }]
  ```

Dengan `sort()`, Anda bisa mengurutkan teman-teman Anda berdasarkan usia mereka dari yang paling muda hingga yang paling tua.

---

## **Kesimpulan**

- **`sort()`** adalah metode array yang digunakan untuk mengurutkan elemen-elemen dalam array sesuai dengan urutan yang kita tentukan.
- Secara default, `sort()` mengurutkan elemen-elemen sebagai string, tetapi Anda bisa memberikan fungsi pembanding untuk mengatur urutan pengurutan.
- `sort()` mengubah array yang ada, jadi jika Anda ingin mempertahankan array asli, pastikan untuk membuat salinan array terlebih dahulu.
