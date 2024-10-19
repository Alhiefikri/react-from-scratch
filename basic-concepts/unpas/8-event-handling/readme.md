# README: Event Handling di React

## Deskripsi

Dokumen ini menjelaskan contoh penggunaan React untuk menangani event. Dalam contoh ini, kita akan membuat komponen `HomePage` yang menampilkan tombol "Like" dan menghitung jumlah klik pada tombol tersebut.

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
    <script type="text/babel">
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
<script type="text/babel">
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);

  function Header({ author }) {
    return (<h1>Belajar React bareng {author ? author : 'WPU'} 🚀</h1>);
  }

  function HomePage() {
    const [likes, setLikes] = React.useState(0);

    function handleClick() {
      setLikes(likes + 1);
    }

    return (
      <div>
        <Header />
        <button onClick={handleClick}>Like ({likes})</button>
      </div>
    );
  }

  root.render(<HomePage />);
</script>
```

#### Penjelasan Kode:

- **`const container = document.getElementById('root');`**: Mengambil elemen `div` dengan ID `root`.

- **`const root = ReactDOM.createRoot(container);`**: Membuat root React yang akan digunakan untuk merender komponen ke dalam elemen yang telah diambil.

- **`function Header({ author }) { ... }`**: Mendefinisikan komponen `Header`. Komponen ini menerima props `author` dan menampilkan judul. Jika tidak ada nama penulis, akan menampilkan "WPU" sebagai default.

- **`function HomePage() { ... }`**: Mendefinisikan komponen `HomePage`. Di dalamnya, kita menggunakan state dengan `useState` untuk menyimpan jumlah likes.

  - **`const [likes, setLikes] = React.useState(0);`**: Menginisialisasi state `likes` dengan nilai awal 0.

  - **`function handleClick() { ... }`**: Mendefinisikan fungsi `handleClick` yang akan dijalankan ketika tombol diklik. Fungsi ini akan memperbarui nilai `likes` dengan menambah 1.

- **`<button onClick={handleClick}>Like ({likes})</button>`**: Merender tombol dengan event handler `onClick` yang memanggil fungsi `handleClick` saat tombol diklik. Jumlah likes ditampilkan di dalam tombol.

- **`root.render(<HomePage />);`**: Merender komponen `HomePage` ke dalam kontainer yang sudah ditentukan.

## Kesimpulan

Contoh ini menunjukkan bagaimana menangani event di React dengan menggunakan state. Dengan cara ini, kita dapat membuat antarmuka pengguna yang interaktif, di mana tindakan pengguna dapat mempengaruhi tampilan aplikasi secara langsung.
