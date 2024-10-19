# README: Membuat Komponen dan Halaman di React

## Deskripsi

Dokumen ini menjelaskan contoh penggunaan React untuk membuat beberapa komponen dan merendernya dalam sebuah halaman. Dalam contoh ini, kita akan membuat komponen `Header` dan `HomePage`, di mana `HomePage` akan menampilkan `Header`.

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

- Babel memungkinkan kita untuk menulis JSX, yang merupakan sintaks mirip HTML di dalam JavaScript, sehingga lebih mudah dalam membuat komponen.

### 4. Kode React

```javascript
<script type="text/jsx">
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);

  function Header() {
    return (<h1>Belajar React bareng WPU 🚀</h1>);
  }

  function HomePage() {
    return (
      <div>
        <Header />
      </div>
    );
  }

  root.render(<HomePage />);
</script>
```

#### Penjelasan Kode:

- **`const container = document.getElementById('root');`**: Mengambil elemen `div` dengan ID `root`.

- **`const root = ReactDOM.createRoot(container);`**: Membuat root React yang akan digunakan untuk merender komponen ke dalam elemen yang telah diambil.

- **`function Header() { ... }`**: Mendefinisikan komponen `Header`. Komponen ini mengembalikan elemen JSX, yaitu sebuah elemen `<h1>` dengan teks "Belajar React bareng WPU 🚀".

- **`function HomePage() { ... }`**: Mendefinisikan komponen `HomePage`. Komponen ini mengembalikan elemen `<div>` yang berisi komponen `Header`.

- **`root.render(<HomePage />);`**: Merender komponen `HomePage` ke dalam kontainer yang sudah ditentukan, yang secara otomatis juga merender komponen `Header`.

## Kesimpulan

Contoh ini menunjukkan bagaimana membuat dan menggunakan beberapa komponen di React. Dengan membagi antarmuka pengguna menjadi komponen yang lebih kecil, kita dapat membuat aplikasi yang lebih terstruktur dan mudah dikelola.
