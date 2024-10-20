# README: Komponen Box

## Deskripsi

Komponen `Box` berfungsi sebagai wadah interaktif yang dapat dibuka dan ditutup, memungkinkan pengguna untuk melihat konten di dalamnya.

## Kode

```javascript
import { useState } from "react"; // Mengimpor hook useState dari React untuk mengelola state

// Mendefinisikan komponen Box yang menerima props children
export default function Box({ children }) {
  // Menginisialisasi state isOpen untuk mengontrol tampilan konten
  const [isOpen, setIsOpen] = useState(true);

  // Mengembalikan elemen JSX untuk rendering
  return (
    // Elemen div dengan kelas CSS box untuk penataan
    <div className="box">
      {/* Tombol untuk membuka/tutup box */}
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {/* Menampilkan simbol berdasarkan status isOpen */}
        {isOpen ? "–" : "+"}
      </button>
      {/* Menampilkan konten jika isOpen adalah true */}
      {isOpen && children}
    </div>
  );
}
```

## Penjelasan Kode

1. **Impor useState**:

   - `import { useState } from "react";`
     - Mengimpor hook `useState` untuk mengelola state lokal dalam komponen.

2. **Definisi Komponen**:

   - `export default function Box({ children }) { ... }`
     - Mendefinisikan komponen `Box` yang menerima props `children`.

3. **State untuk Mengontrol Pembukaan**:

   - `const [isOpen, setIsOpen] = useState(true);`
     - Menginisialisasi state `isOpen` untuk menentukan apakah konten dalam box ditampilkan (true) atau disembunyikan (false).

4. **Mengembalikan Elemen JSX**:

   - `return ( <div className="box"> ... </div> );`
     - Mengembalikan elemen `<div>` dengan kelas CSS `box`.

5. **Tombol Pembuka/Tutup**:

   - `<button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}> ... </button>`
     - Menggunakan elemen `<button>` untuk mengubah status `isOpen` saat diklik.
     - Menampilkan simbol "–" jika box terbuka dan "+" jika tertutup.

6. **Menampilkan Konten**:
   - `{isOpen && children}`
     - Konten yang disisipkan (children) akan ditampilkan hanya jika `isOpen` adalah true.

## Alur Kode

1. Komponen `Box` merender elemen `<div>` yang berisi tombol dan konten.
2. Ketika tombol diklik, status `isOpen` diperbarui, menentukan apakah konten ditampilkan atau tidak.
3. Konten (children) hanya ditampilkan jika `isOpen` bernilai true.

## Cara Kode Bekerja

- Komponen `Box` mengelola interaksi pengguna dengan menyimpan state pembukaan, memungkinkan konten untuk ditampilkan atau disembunyikan dengan mudah.

## Cara Berpikir React

- Menggunakan state dan props, `Box` menciptakan komponen yang interaktif dan dapat digunakan kembali di berbagai konteks.

## Analogi Sederhana

Bayangkan `Box` seperti kotak penyimpanan dengan tutup.

- **Tombol** adalah pegangan untuk membuka atau menutup kotak.
- **Konten di dalam kotak** adalah barang yang hanya bisa dilihat ketika tutupnya dibuka.

## Kesimpulan

Komponen `Box` menyediakan cara interaktif untuk menampilkan konten, memungkinkan pengguna untuk membuka dan menutup bagian tertentu dari antarmuka. Ini membuatnya sangat berguna untuk menyusun informasi yang lebih kompleks dengan cara yang terorganisir dan intuitif.
