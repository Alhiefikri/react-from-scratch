# README: Penggunaan Default Props di React

## Deskripsi

Dokumen ini menjelaskan contoh penggunaan React untuk membuat komponen yang menggunakan default props. Dalam contoh ini, kita akan membuat komponen `Header` yang menampilkan nama penulis, dan jika tidak ada nama yang diberikan, akan menampilkan nama default.

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

  function Header({author}) {
    return (<h1>Belajar React bareng {author ? author : 'WPU'} 🚀</h1>);
  }

  function HomePage() {
    return (
      <div>
        <Header />
        <Header author="Pa Dhika"/>
      </div>
    );
  }

  root.render(<HomePage />);
</script>
```

#### Penjelasan Kode:

- **`const container = document.getElementById('root');`**: Mengambil elemen `div` dengan ID `root`.

- **`const root = ReactDOM.createRoot(container);`**: Membuat root React yang akan digunakan untuk merender komponen ke dalam elemen yang telah diambil.

- **`function Header({author}) { ... }`**: Mendefinisikan komponen `Header` yang menerima props `author`. Menggunakan destructuring, kita dapat langsung mendapatkan nilai `author` dari props. Jika `author` tidak ada, maka akan menampilkan "WPU" sebagai default.

- **`function HomePage() { ... }`**: Mendefinisikan komponen `HomePage`. Komponen ini merender dua elemen `Header`. Satu tanpa props (menggunakan default), dan satu lagi dengan props `author` bernama "Pa Dhika".

- **`root.render(<HomePage />);`**: Merender komponen `HomePage` ke dalam kontainer yang sudah ditentukan, yang secara otomatis juga merender kedua komponen `Header`.

## Kesimpulan

Contoh ini menunjukkan bagaimana menggunakan props dengan default value di React. Dengan cara ini, kita dapat membuat komponen yang lebih fleksibel, di mana mereka dapat menampilkan nilai default jika tidak ada nilai yang diberikan.
