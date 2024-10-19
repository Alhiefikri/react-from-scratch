# README: Latihan Komponen Tombol dan Counter di React

## Deskripsi

Dokumen ini menjelaskan latihan untuk membuat aplikasi sederhana menggunakan React yang terdiri dari tombol untuk meningkatkan, mengurangi, dan mereset counter. Dalam latihan ini, kita akan membuat tiga komponen: `MyButton`, `MyCounter`, dan `HomePage`.

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

  function MyButton({ text, onClick, counter }) {
    const myStyle = (text !== 'Reset!') ? {} : { margin: 20, display: 'block' };

    return (
      <button onClick={onClick} style={myStyle}>
        {text}
      </button>
    );
  }

  function MyCounter({ counter }) {
    return (
      <span style={{ margin: 20 }}>{counter}</span>
    );
  }

  function HomePage() {
    const [counter, setCounter] = React.useState(0);

    function increment() {
      setCounter(counter + 1);
    }

    function decrement() {
      setCounter(counter - 1);
    }

    function reset() {
      setCounter(0);
    }

    return (
      <div>
        <MyButton text={'-'} onClick={decrement} counter={counter} />
        <MyCounter counter={counter} />
        <MyButton text={'+'} onClick={increment} counter={counter} />
        <MyButton text={'Reset!'} onClick={reset} counter={counter} />
      </div>
    );
  }

  root.render(<HomePage />);
</script>
```

#### Penjelasan Kode:

- **`const container = document.getElementById('root');`**: Mengambil elemen `div` dengan ID `root`.

- **`const root = ReactDOM.createRoot(container);`**: Membuat root React yang akan digunakan untuk merender komponen ke dalam elemen yang telah diambil.

- **`function MyButton({ text, onClick, counter }) { ... }`**: Mendefinisikan komponen `MyButton`. Komponen ini menerima props `text`, `onClick`, dan `counter`. Jika teks tombol adalah "Reset!", maka tombol akan diberikan style tertentu untuk tampilan.

- **`function MyCounter({ counter }) { ... }`**: Mendefinisikan komponen `MyCounter`. Komponen ini menampilkan nilai counter dalam elemen `<span>`.

- **`function HomePage() { ... }`**: Mendefinisikan komponen `HomePage`. Di dalamnya, kita menggunakan state dengan `useState` untuk menyimpan nilai counter.

  - **`const [counter, setCounter] = React.useState(0);`**: Menginisialisasi state `counter` dengan nilai awal 0.

  - **Fungsi `increment`, `decrement`, dan `reset`**: M 分 ngelola perubahan nilai counter saat tombol diklik.

- **`return` di `HomePage`**: Merender tombol untuk mengurangi, meningkatkan, dan mereset counter, serta menampilkan nilai counter di antara tombol-tombol tersebut.

- **`root.render(<HomePage />);`**: Merender komponen `HomePage` ke dalam kontainer yang sudah ditentukan.

## Kesimpulan

Latihan ini menunjukkan bagaimana membuat komponen fungsional yang berinteraksi satu sama lain di React. Dengan menggunakan props dan state, kita dapat membangun antarmuka pengguna yang dinamis dan responsif.
