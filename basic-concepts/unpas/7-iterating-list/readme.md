# README: Menampilkan Daftar Menggunakan React

## Deskripsi

Dokumen ini menjelaskan contoh penggunaan React untuk menampilkan daftar elemen dengan menggunakan array. Dalam contoh ini, kita akan membuat komponen `Header` dan `HomePage`, di mana `HomePage` akan menampilkan daftar siswa.

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
    const students = ['Sandhika Galih', 'Doddy Ferdiansyah', 'Erik'];
    return (
      <div>
        <Header />
        <ul>
          {students.map((student) => (
            <li key={student}>{student}</li>
          ))}
        </ul>
      </div>
    );
  }

  root.render(<HomePage />);
</script>
```

#### Penjelasan Kode:

- **`const container = document.getElementById('root');`**: Mengambil elemen `div` dengan ID `root`.

- **`const root = ReactDOM.createRoot(container);`**: Membuat root React yang akan digunakan untuk merender komponen ke dalam elemen yang telah diambil.

- **`function Header({author}) { ... }`**: Mendefinisikan komponen `Header`. Komponen ini menerima props `author` dan menampilkan judul. Jika tidak ada nama penulis, akan menampilkan "WPU" sebagai default.

- **`function HomePage() { ... }`**: Mendefinisikan komponen `HomePage`. Di dalamnya, terdapat array `students` yang berisi nama-nama siswa. Komponen ini merender komponen `Header` dan sebuah daftar (`<ul>`).

  - **`{students.map(...)}`**: Menggunakan `map` untuk mengiterasi array `students` dan menghasilkan elemen `<li>` untuk setiap siswa. Setiap elemen `<li>` diberikan atribut `key` yang unik menggunakan nama siswa, untuk membantu React mengidentifikasi elemen yang telah dirender.

- **`root.render(<HomePage />);`**: Merender komponen `HomePage` ke dalam kontainer yang sudah ditentukan.

## Kesimpulan

Contoh ini menunjukkan bagaimana menggunakan array dan metode `map` di React untuk menampilkan daftar elemen. Dengan cara ini, kita dapat membuat antarmuka pengguna yang dinamis dan interaktif dengan mudah.
