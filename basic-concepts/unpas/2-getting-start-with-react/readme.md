# README: Pengenalan React

## Deskripsi

Dokumen ini menjelaskan contoh sederhana penggunaan React, sebuah library JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) dengan cara yang lebih efisien. React memungkinkan kita untuk membuat komponen UI yang dapat digunakan kembali dan mengelola state dengan mudah.

## Struktur Kode

### 1. HTML Dasar

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
    <!-- Mengimpor React dan ReactDOM -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- Mengimpor Babel untuk menggunakan JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <!-- Kode React -->
    <script type="text/jsx">
      // JavaScript code goes here
    </script>
  </body>
</html>
```

- **`<div id="root">`**: Tempat di mana semua komponen React akan dirender.

### 2. Mengimpor Library

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

- Ini adalah library utama yang dibutuhkan untuk menggunakan React. `React` berfungsi untuk membuat komponen, sedangkan `ReactDOM` untuk merender komponen tersebut ke dalam DOM.

### 3. Menggunakan Babel

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

- Babel memungkinkan kita untuk menggunakan JSX, yang adalah sintaks mirip HTML di dalam JavaScript. Ini membuat penulisan komponen menjadi lebih mudah dan intuitif.

### 4. Kode React

```javascript
<script type="text/jsx">
  const container = document.getElementById('root'); const root =
  ReactDOM.createRoot(container); root.render(
  <>
    <h1 className="heading">Belajar React bareng WPU 🚀</h1>
    <img src="img/img.png" width="80" alt="My Image" />
    <p
      onClick={(e) => {
        alert("ok!");
      }}
    >
      Belajar React itu mudah dan menyenangkan bukan?!
    </p>
  </>
  );
</script>
```

#### Penjelasan Kode:

- **`const container = document.getElementById('root');`**: Mengambil elemen `div` dengan ID `root`.

- **`const root = ReactDOM.createRoot(container);`**: Membuat root React yang akan digunakan untuk merender komponen ke dalam elemen yang telah diambil.

- **`root.render(...)`**: Merender elemen React ke dalam kontainer yang sudah ditentukan.

- **Fragment (`<> ... </>`)**: Mengelompokkan beberapa elemen tanpa menambah elemen tambahan di DOM.

  - **`<h1>`**: Membuat heading yang menampilkan teks "Belajar React bareng WPU 🚀".

  - **`<img>`**: Menyisipkan gambar. Pastikan path gambar sudah benar agar gambar muncul.

  - **`<p onClick={e => {alert('ok!')}}>`**: Membuat paragraf yang menampilkan alert ketika di-klik.

## Kesimpulan

Contoh ini memperlihatkan bagaimana React digunakan untuk membuat antarmuka pengguna yang dinamis dan interaktif. Dengan struktur yang jelas dan kemampuan untuk mengelola komponen, React memudahkan pengembangan aplikasi web.
