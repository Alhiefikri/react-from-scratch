# README: Komponen NumResult

## Deskripsi

Komponen `NumResult` menampilkan jumlah hasil pencarian anime yang ditemukan kepada pengguna.

## Kode

```javascript
// Mendefinisikan komponen NumResult yang menerima props animes
export default function NumResult({ animes }) {
  // Mengembalikan elemen JSX untuk menampilkan jumlah hasil
  return (
    // Elemen p untuk menampilkan pesan jumlah hasil
    <p className="search-results">
      Found <strong>{animes.length}</strong> results{" "}
      {/* Menampilkan jumlah hasil dengan penekanan */}
    </p>
  );
}
```

## Penjelasan Kode

1. **Definisi Komponen**:

   - `export default function NumResult({ animes }) { ... }`
     - Mendefinisikan komponen `NumResult` yang menerima props `animes`.

2. **Mengembalikan Elemen JSX**:

   - `return ( <p className="search-results"> ... </p> );`
     - Mengembalikan elemen `<p>` dengan kelas CSS `search-results` untuk penataan.

3. **Menampilkan Jumlah Hasil**:
   - `Found <strong>{animes.length}</strong> results`
     - Menampilkan pesan yang menunjukkan jumlah anime yang ditemukan.
     - `animes.length` menghitung jumlah elemen dalam array `animes`.
     - Menggunakan elemen `<strong>` untuk menekankan jumlah hasil.

## Alur Kode

1. Komponen `NumResult` merender elemen `<p>`.
2. Jumlah anime yang ditemukan ditampilkan berdasarkan panjang array `animes`.

## Cara Kode Bekerja

- Komponen `NumResult` menghitung dan menampilkan jumlah hasil pencarian berdasarkan props `animes`.

## Cara Berpikir React

- Komponen ini memanfaatkan props untuk menerima data dari komponen induk, menjadikannya dinamis dan dapat digunakan kembali.

## Analogi Sederhana

Bayangkan `NumResult` seperti papan pengumuman di depan toko.

- **Jumlah hasil** adalah jumlah produk yang tersedia di dalam toko yang ditampilkan di papan.

## Kesimpulan

Komponen `NumResult` memberikan informasi yang jelas tentang jumlah hasil pencarian kepada pengguna. Dengan menggunakan props, komponen ini bersifat dinamis dan mudah diintegrasikan dalam aplikasi pencarian.

Jika ada komponen lain yang ingin dijelaskan, silakan beri tahu!
