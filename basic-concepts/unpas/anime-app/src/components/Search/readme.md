# README: Komponen Search

## Deskripsi

Komponen `Search` menyediakan antarmuka untuk pengguna mencari anime dengan menggunakan input teks.

## Kode

```javascript
import { useState } from "react"; // Mengimpor hook useState dari React untuk mengelola state

// Mendefinisikan komponen Search yang menerima props children
export default function Search({ children }) {
  // Menginisialisasi state query untuk menyimpan input pencarian
  const [query, setQuery] = useState("");

  // Mengembalikan elemen JSX untuk rendering
  return (
    // Elemen div sebagai wadah untuk input pencarian
    <div className="search-container">
      {/* Input untuk menerima teks pencarian */}
      <input
        className="search" // Kelas CSS untuk styling
        type="text" // Tipe input adalah teks
        placeholder="Search anime..." // Placeholder untuk memberi petunjuk pengguna
        value={query} // Mengikat nilai input dengan state query
        onChange={(e) => setQuery(e.target.value)} // Memperbarui state query saat input berubah
      />
      {/* Menampilkan konten tambahan yang disisipkan sebagai props children */}
      {children}
    </div>
  );
}
```

## Penjelasan Kode

1. **Impor useState**:

   - `import { useState } from "react";`
     - Mengimpor hook `useState` untuk mengelola state lokal di dalam komponen.

2. **Definisi Komponen**:

   - `export default function Search({ children }) { ... }`
     - Mendefinisikan komponen `Search` yang menerima props `children`.

3. **State untuk Query**:

   - `const [query, setQuery] = useState("");`
     - Menginisialisasi state `query` untuk menyimpan input pencarian dan fungsi `setQuery` untuk memperbarui state tersebut.

4. **Mengembalikan Elemen JSX**:

   - `return ( <div className="search-container"> ... </div> );`
     - Mengembalikan elemen `<div>` dengan kelas CSS `search-container`.

5. **Input Pencarian**:

   - `<input className="search" type="text" placeholder="Search anime..." value={query} onChange={(e) => setQuery(e.target.value)} />`
     - Menggunakan elemen `<input>` untuk menerima input teks dari pengguna.
     - `placeholder` memberikan petunjuk tentang apa yang harus dicari.
     - `value={query}` mengikat nilai input dengan state `query`.
     - `onChange` menangani perubahan input, memperbarui state `query` saat pengguna mengetik.

6. **Menampilkan Children**:
   - `{children}`
     - Menampilkan konten tambahan yang disisipkan sebagai props `children`.

## Alur Kode

1. Komponen `Search` merender elemen input di dalam `search-container`.
2. Ketika pengguna mengetik, state `query` diperbarui sesuai dengan input.
3. Konten tambahan (children) ditampilkan di bawah input pencarian.

## Cara Kode Bekerja

- `Search` mengelola input pengguna dan memperbarui state dengan menggunakan hook `useState`, yang memungkinkan responsif terhadap perubahan input.

## Cara Berpikir React

- Penggunaan state di React memungkinkan komponen untuk merespons interaksi pengguna, seperti mengetik di input pencarian, sehingga menciptakan pengalaman pengguna yang dinamis.

## Analogi Sederhana

Bayangkan `Search` seperti kotak surat.

- **Input** adalah celah tempat pengguna memasukkan surat.
- **State** adalah surat yang sedang ditulis di dalam kotak, berubah seiring pengguna mengetik.

## Kesimpulan

Komponen `Search` adalah alat interaktif yang memungkinkan pengguna mencari anime dengan mudah. Dengan mengelola state input, komponen ini menciptakan pengalaman pencarian yang responsif dan intuitif.
