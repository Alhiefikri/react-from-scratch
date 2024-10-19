# README: Contoh Penggunaan Komponen di React

## Deskripsi

Dokumen ini menjelaskan contoh sederhana penggunaan React untuk membuat dan merender komponen. Dalam contoh ini, kita akan membuat komponen `Header` yang menampilkan judul di antarmuka pengguna.

## Struktur Kode

### 1. HTML Dasar

```html
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

- Library ini diperlukan untuk menggunakan fitur-fitur React. `React` digunakan untuk membuat komponen, sedangkan `ReactDOM` digunakan untuk merender komponen ke dalam DOM.

### 3. Menggunakan Babel

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

- Babel memungkinkan kita untuk menulis JSX, sintaks yang mirip HTML di dalam JavaScript, sehingga lebih mudah dalam membuat komponen.

### 4. Kode React

```javascript
<script type="text/jsx">
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);

  function Header() {
    return (<h1>Belajar React bareng WPU 🚀</h1>);
  }

  root.render(<Header />);
</script>
```

#### Penjelasan Kode:

- **`const container = document.getElementById('root');`**: Mengambil elemen `div` dengan ID `root`.

- **`const root = ReactDOM.createRoot(container);`**: Membuat root React yang akan digunakan untuk merender komponen ke dalam elemen yang telah diambil.

- **`function Header() { ... }`**: Mendefinisikan komponen `Header`. Komponen ini adalah fungsi yang mengembalikan elemen JSX, dalam hal ini sebuah elemen `<h1>` dengan teks "Belajar React bareng WPU 🚀".

- **`root.render(<Header />);`**: Merender komponen `Header` ke dalam kontainer yang sudah ditentukan.

## Kesimpulan

Contoh ini menunjukkan cara membuat komponen sederhana di React dan merendernya ke dalam DOM. Dengan menggunakan komponen, kita dapat membangun antarmuka pengguna yang lebih terstruktur dan mudah dikelola.
