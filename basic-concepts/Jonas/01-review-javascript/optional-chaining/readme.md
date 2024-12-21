# Optional Chaining (?.) dalam JavaScript

## Penjelasan Sederhana

Optional chaining (?.) memungkinkan kita untuk membaca properti dalam object yang bersarang dengan aman, tanpa khawatir error jika salah satu propertinya tidak ada (undefined/null).

### Analogi Sederhana

Bayangkan Anda mencari buku di perpustakaan:

- Lantai 2 → Rak 3 → Baris A → Buku "JavaScript"
  Tanpa optional chaining, Anda harus cek satu-per-satu:

1. Apa lantai 2 ada?
2. Di lantai 2, apa rak 3 ada?
3. Di rak 3, apa baris A ada?
4. Di baris A, apa buku "JavaScript" ada?

Dengan optional chaining, Anda bisa langsung cari "Lantai 2?.Rak 3?.Baris A?.Buku JavaScript" - jika ada yang tidak ada, tidak akan error.

### Kenapa Perlu Dipelajari?

- Menghindari error "Cannot read property of undefined"
- Membuat code lebih aman dan bersih
- Sangat berguna saat bekerja dengan API response
- Wajib dalam React saat handling data dinamis

## Penjelasan Code

### 1. Basic Optional Chaining

```javascript
// Data buku
const book = {
  reviews: {
    goodreads: {
      rating: 4.5,
      reviewsCount: 50,
    },
  },
};

// Cara lama - berantai if
let reviewCount;
if (
  book.reviews &&
  book.reviews.goodreads &&
  book.reviews.goodreads.reviewsCount
) {
  reviewCount = book.reviews.goodreads.reviewsCount;
}

// Dengan optional chaining
const reviewCount = book.reviews?.goodreads?.reviewsCount;
```

Penjelasan:

- `?.` akan mengecek apakah properti sebelumnya ada
- Jika tidak ada, langsung return undefined tanpa error
- Lebih ringkas dan mudah dibaca

### 2. Kombinasi dengan Nullish Coalescing

```javascript
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}
```

Penjelasan:

- `?.` mengamankan akses ke properti
- `??` memberikan nilai default jika hasilnya null/undefined
- Kombinasi keduanya membuat handling data sangat aman

### 3. Penggunaan dengan Method

```javascript
// Mengecek dan memanggil method
const result = object.someMethod?.();

// Penggunaan dengan array
const firstElement = array?.[0];
```

## Tujuan & Manfaat

### 1. Apa yang Bisa Diselesaikan

- Mengakses properti bersarang dengan aman
- Menghindari error saat data tidak lengkap
- Membuat code defensive tanpa banyak if
- Handling data API yang tidak konsisten

### 2. Kapan Menggunakannya

- Saat mengakses properti yang mungkin tidak ada
- Saat bekerja dengan response API
- Saat mengakses data dari third party
- Saat struktur data tidak pasti/dinamis

### 3. Keuntungan

- Code lebih bersih dan ringkas
- Menghindari nested if checks
- Lebih mudah dibaca dan di-maintain
- Mengurangi kemungkinan runtime errors

### Catatan Penting

1. Best Practices:

   - Kombinasikan dengan ?? untuk nilai default
   - Gunakan saat struktur data tidak pasti
   - Jangan overuse - kalau yakin data ada, tidak perlu ?.

2. Perhatikan:

   - Hanya melindungi dari null/undefined
   - Tidak menggantikan proper error handling
   - Bisa membuat bug tersembunyi jika overused

3. Performance:
   - Sedikit lebih lambat dari akses langsung
   - Trade-off yang worth it untuk keamanan
   - Gunakan secara bijak sesuai kebutuhan
