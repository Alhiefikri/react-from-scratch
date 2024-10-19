# README: Latihan Komponen Tombol dan Counter yang Lebih Kompleks di React

## Deskripsi

Dokumen ini menjelaskan latihan yang lebih kompleks menggunakan React, di mana kita akan membuat aplikasi yang terdiri dari tombol untuk meningkatkan, mengurangi, dan mereset counter. Aplikasi ini juga akan menonaktifkan tombol berdasarkan nilai counter, serta menampilkan pesan "done!" ketika counter melebihi batas tertentu.

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
//  <!-- Kode React -->
    <script type="text/jsx">
      // Mengambil elemen dengan ID 'root' dari DOM
      const container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);

      // Komponen MyButton
      function MyButton({ text, onClick, counter }) {
        // Menentukan apakah tombol harus dinonaktifkan berdasarkan kondisi counter
        const disabled = (text !== 'Reset!')
          ? ((counter > 9 || counter < 0) ? true : false)
          : ((counter > 9 || counter < 0) ? false : true);

        // Mengatur gaya tombol jika tombol adalah 'Reset!'
        const myStyle = (text !== 'Reset!') ? {} : { margin: 20, display: 'block' };

        return (
          <button onClick={onClick} disabled={disabled} style={myStyle}>
            {text} {/* Menampilkan teks tombol */}
          </button>
        );
      }

      // Komponen MyCounter
      function MyCounter({ counter }) {
        // Mengubah nilai counter menjadi 'done!' jika lebih dari 9 atau kurang dari 0
        if (counter > 9 || counter < 0) {
          counter = 'done!';
        }

        return (
          <span style={{ margin: 20 }}>{counter}</span> {/* Menampilkan nilai counter */}
        );
      }

      // Komponen HomePage
      function HomePage() {
        // Menggunakan state untuk menyimpan nilai counter
        const [counter, setCounter] = React.useState(0);

        // Fungsi untuk menambah counter
        function increment() {
          setCounter(counter + 1);
        }

        // Fungsi untuk mengurangi counter
        function decrement() {
          setCounter(counter - 1);
        }

        // Fungsi untuk mereset counter
        function reset() {
          setCounter(0);
        }

        return (
          <div>
            {/* Tombol untuk mengurangi counter */}
            <MyButton text={'-'} onClick={decrement} counter={counter} />
            {/* Menampilkan nilai counter */}
            <MyCounter counter={counter} />
            {/* Tombol untuk menambah counter */}
            <MyButton text={'+'} onClick={increment} counter={counter} />
            {/* Tombol untuk mereset counter */}
            <MyButton text={'Reset!'} onClick={reset} counter={counter} />
          </div>
        );
      }

      // Merender komponen HomePage ke dalam root
      root.render(<HomePage />);
    </script>
```

#### Penjelasan Kode:

- **`const container = document.getElementById('root');`**: Mengambil elemen `div` dengan ID `root`.

- **`const root = ReactDOM.createRoot(container);`**: Membuat root React yang akan digunakan untuk merender komponen ke dalam elemen yang telah diambil.

- **`function MyButton({ text, onClick, counter }) { ... }`**: Mendefinisikan komponen `MyButton`. Komponen ini menerima props `text`, `onClick`, dan `counter`. Tombol akan dinonaktifkan (`disabled`) berdasarkan kondisi counter:

  - Tombol "+" dan "-" akan dinonaktifkan jika counter lebih dari 9 atau kurang dari 0.
  - Tombol "Reset!" akan dinonaktifkan jika counter berada dalam rentang yang valid.

- **`function MyCounter({ counter }) { ... }`**: Mendefinisikan komponen `MyCounter`. Komponen ini menampilkan nilai counter, tetapi jika counter lebih dari 9 atau kurang dari 0, maka akan menampilkan "done!".

- **`function HomePage() { ... }`**: Mendefinisikan komponen `HomePage`. Di dalamnya, kita menggunakan state dengan `useState` untuk menyimpan nilai counter.

  - **`const [counter, setCounter] = React.useState(0);`**: Menginisialisasi state `counter` dengan nilai awal 0.

  - **Fungsi `increment`, `decrement`, dan `reset`**: Mengelola perubahan nilai counter saat tombol diklik.

- **`return` di `HomePage`**: Merender tombol untuk mengurangi, meningkatkan, dan mereset counter, serta menampilkan nilai counter di antara tombol-tombol tersebut.

- **`root.render(<HomePage />);`**: Merender komponen `HomePage` ke dalam kontainer yang sudah ditentukan.

## Kesimpulan

Latihan ini menunjukkan bagaimana menangani event di React dengan kondisi yang lebih kompleks, seperti mengaktifkan dan menonaktifkan tombol berdasarkan nilai counter. Dengan cara ini, kita dapat membuat antarmuka pengguna yang lebih interaktif dan responsif.
