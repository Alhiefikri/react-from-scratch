# Dokumentasi Aplikasi React

## Deskripsi Aplikasi

Aplikasi ini adalah contoh aplikasi React yang menggunakan routing untuk navigasi antar halaman. Fitur yang tersedia termasuk menampilkan semua postingan, mengedit postingan, menambah postingan baru, dan menampilkan pratayang postingan.

## Struktur Kode

### File: `App.jsx`

```javascript
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllPosts from "./pages/AllPosts";
import Edit from "./pages/Edit";
import AddNew from "./pages/AddNew";
import Preview from "./pages/Preview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/new" element={<AddNew />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </>
  );
}

export default App;
```

````

### Penjelasan Kode

1. **Import Statements**

   - `import "./App.css";`: Mengimpor file CSS untuk styling aplikasi.
   - `import { Routes, Route } from "react-router-dom";`: Mengimpor komponen untuk mengelola navigasi.
   - Mengimpor halaman:
     - `AllPosts`: Menampilkan daftar semua postingan.
     - `Edit`: Halaman untuk mengedit postingan.
     - `AddNew`: Halaman untuk menambah postingan baru.
     - `Preview`: Halaman untuk menampilkan pratayang.

2. **Fungsi `App`**

   - `function App() { ... }`: Mendefinisikan komponen utama `App`.
   - `return ( ... )`: Mengembalikan elemen JSX yang merender rute.

3. **Routing**

   - `<Routes>`: Mengelola semua rute.
   - `<Route>`:
     - `path="/"`: Rute untuk menampilkan `AllPosts`.
     - `path="/edit/:id"`: Rute untuk mengedit postingan berdasarkan ID.
     - `path="/new"`: Rute untuk menambah postingan baru.
     - `path="/preview"`: Rute untuk melihat pratayang postingan.

4. **Ekspor Komponen**
   - `export default App;`: Mengekspor komponen `App` untuk digunakan di file lain.

## Cara Menjalankan Aplikasi

1. Pastikan Node.js dan npm terinstal.
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Jalankan aplikasi:
   ```bash
   npm start
   ```
4. Akses `http://localhost:3000` di browser untuk melihat aplikasi.

## Catatan Tambahan

- Pastikan untuk mengimplementasikan komponen yang diimpor di folder `pages` agar aplikasi berfungsi dengan baik.
````
