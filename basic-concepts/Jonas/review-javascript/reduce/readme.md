# **Materi: The Array reduce Method**

## **Pendahuluan**

Metode `reduce()` adalah salah satu metode array yang sangat kuat di JavaScript. `reduce()` digunakan untuk "mengurangi" array menjadi satu nilai tunggal berdasarkan operasi yang kita tentukan. Ini berguna ketika kita ingin melakukan operasi agregat seperti jumlah total, rata-rata, atau bahkan membuat objek baru berdasarkan data array.

## **Tujuan**

Tujuan dari `reduce()` adalah untuk menggabungkan semua elemen dalam array menjadi satu hasil dengan menggunakan fungsi callback yang kita tentukan. Fungsi ini mengiterasi setiap elemen dalam array dan mengakumulasi hasilnya.

---

## **Penjelasan Kode**

Berikut adalah contoh penggunaan metode `reduce()` pada kode yang Anda kirimkan:

```javascript
// 1. Menghitung jumlah total halaman dari semua buku
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
console.log(pagesAllBooks);
```

### Penjelasan:

- **Fungsi `reduce()`**: Pada kode di atas, kita memanggil `reduce()` pada array `books`. Fungsi `reduce()` menerima dua argumen:
  1. **Fungsi callback**: Fungsi callback ini mengambil dua parameter, `sum` dan `book`. `sum` adalah akumulator (nilai yang dihitung), dan `book` adalah elemen array yang sedang diproses.
  2. **Nilai awal**: Nilai awal yang diberikan adalah `0`. Ini berarti akumulator akan dimulai dari angka 0, dan setiap iterasi akan menambahkan jumlah halaman dari setiap buku ke dalamnya.
- **Proses**: `reduce()` akan mengiterasi semua buku dalam array dan menambahkan jumlah halaman setiap buku ke `sum`. Pada akhir iterasi, kita akan mendapatkan jumlah total halaman dari seluruh buku.

### Tujuan Kode:

Tujuan dari kode ini adalah untuk menghitung total jumlah halaman dari seluruh buku yang ada dalam array `books`.

---

### Contoh Lain: Menghitung Jumlah Ulasan dari Semua Buku

```javascript
// 2. Menghitung jumlah total ulasan dari semua buku (menggabungkan data dari berbagai platform)
const totalReviews = books.reduce((total, book) => {
  const goodreadsReviews = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarythingReviews = book.reviews.librarything?.reviewsCount ?? 0;
  return total + goodreadsReviews + librarythingReviews;
}, 0);
console.log(totalReviews);
```

### Penjelasan:

- **Callback Function**: Dalam contoh ini, kita menggunakan `reduce()` untuk mengakumulasi jumlah total ulasan dari dua platform: Goodreads dan LibraryThing.

  - **Optional Chaining (`?.`)**: Kita menggunakan optional chaining untuk mengakses jumlah ulasan tanpa menyebabkan error jika salah satu platform tidak memiliki data.
  - **Nilai Default dengan `??`**: Jika jumlah ulasan tidak ada (`undefined`), kita menggunakan `?? 0` untuk memberikan nilai default 0.

- **Proses**: `reduce()` akan mengiterasi setiap buku, mengambil jumlah ulasan dari masing-masing platform, dan menambahkan ke total.

### Tujuan Kode:

Tujuan dari kode ini adalah untuk menghitung jumlah total ulasan dari semua buku, baik dari Goodreads maupun LibraryThing.

---

## **Analogi Sederhana**

Bayangkan Anda sedang mengumpulkan uang untuk amal dari berbagai teman. Setiap teman memberikan jumlah yang berbeda. Anda ingin mengetahui total uang yang terkumpul. Anda bisa menggunakan `reduce()` untuk menjumlahkan uang yang diberikan oleh setiap teman.

**Contoh**:

- Daftar sumbangan:

  ```javascript
  const donations = [20, 50, 30, 100, 10];
  ```

- Menggunakan `reduce()` untuk menghitung total sumbangan:
  ```javascript
  const totalDonations = donations.reduce(
    (total, donation) => total + donation,
    0
  );
  console.log(totalDonations); // Output: 210
  ```

Dengan `reduce()`, Anda bisa dengan mudah menghitung total uang yang terkumpul dari semua teman.

---

## **Kesimpulan**

- **`reduce()`** adalah metode array yang digunakan untuk menggabungkan semua elemen dalam array menjadi satu nilai tunggal.
- Anda bisa menggunakan `reduce()` untuk berbagai tujuan seperti menjumlahkan angka, menggabungkan data, atau bahkan membangun objek baru.
- `reduce()` sangat fleksibel dan bisa digunakan dalam banyak situasi berbeda.
