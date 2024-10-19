# README untuk Latihan React

## Deskripsi

Proyek ini adalah aplikasi sederhana menggunakan React yang menghitung dan mengubah nilai menggunakan beberapa operasi matematika. Aplikasi ini memiliki tombol untuk mengalikan, membagi, menambah, mengurangi, dan mereset nilai.

## Struktur Kode

### 1. HTML Dasar

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
</html>
```

- **`<!DOCTYPE html>`**: Mendefinisikan bahwa ini adalah dokumen HTML5.
- **`<html>` dan `<body>`**: Struktur dasar dokumen HTML.
- **`<div id="root"></div>`**: Tempat di mana aplikasi React kita akan dirender.

### 2. Mengimpor React dan Babel

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

- **Mengimpor React**: Library untuk membangun antarmuka pengguna.
- **Mengimpor ReactDOM**: Membantu kita merender komponen React ke dalam DOM.
- **Mengimpor Babel**: Memungkinkan kita untuk menggunakan JSX, sintaks yang mirip HTML dalam JavaScript.

### 3. Script JSX

```html
    <script type="text/jsx">
```

- **`type="text/jsx"`**: Memberitahu browser bahwa kita akan menggunakan JSX di dalam script ini.

### 4. Menentukan Elemen Root

```javascript
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
```

- **`const container`**: Mengambil elemen DOM dengan ID `root` untuk menjadi tempat aplikasi kita.
- **`const root`**: Membuat root React yang akan digunakan untuk merender komponen kita.

### 5. Komponen MyButton

```javascript
function MyButton({ text, onClick }) {
  const myStyle = text !== "Reset!" ? {} : { margin: 20, display: "block" };

  return (
    <button onClick={onClick} style={myStyle}>
      {text}
    </button>
  );
}
```

- **`function MyButton`**: Mendefinisikan komponen fungsional `MyButton` yang menerima props `text` dan `onClick`.
- **`myStyle`**: Menentukan gaya untuk tombol berdasarkan teks yang diberikan.
- **`<button>`**: Mengembalikan elemen tombol. Jika tombol diklik, fungsi `onClick` akan dipanggil, dan teks akan ditampilkan di dalam tombol.

### 6. Komponen MyCounter

```javascript
function MyCounter({ counter }) {
  return <span style={{ margin: 20 }}>{counter}</span>;
}
```

- **`function MyCounter`**: Mendefinisikan komponen untuk menampilkan nilai `counter`.
- **`<span>`**: Menggunakan elemen `<span>` untuk menampilkan nilai counter dengan gaya margin.

### 7. Komponen HomePage

```javascript
      function HomePage() {
        const [counter, setCounter] = React.useState(2);
```

- **`function HomePage`**: Komponen utama yang mengelola logika aplikasi.
- **`const [counter, setCounter]`**: Menggunakan state untuk menyimpan nilai `counter` dengan nilai awal 2.

### 8. Fungsi Operasi Matematika

```javascript
function multiply() {
  setCounter(counter * 2);
}

function divide() {
  setCounter(counter / 2);
}

function increment() {
  setCounter(counter + 1);
}

function decrement() {
  setCounter(counter - 1);
}

function reset() {
  setCounter(2);
}
```

- **`multiply`**: Mengalikan nilai `counter` dengan 2.
- **`divide`**: Membagi nilai `counter` dengan 2.
- **`increment`**: Menambah nilai `counter` dengan 1.
- **`decrement`**: Mengurangi nilai `counter` dengan 1.
- **`reset`**: Mengatur nilai `counter` kembali ke 2.

### 9. Menggunakan Komponen

```javascript
        return (
          <div>
            <MyButton text={'/'} onClick={divide} />
            <MyCounter counter={counter} />
            <MyButton text={'x'} onClick={multiply} />
            <MyButton text={'+'} onClick={increment} />
            <MyButton text={'-'} onClick={decrement} />
            <MyButton text={'Reset'} onClick={reset} />
          </div>
        );
      }
```

- **`<div>`**: Mengelompokkan semua elemen dalam satu wadah.
- **Menggunakan `MyButton`**: Menggunakan tombol untuk setiap operasi dengan memberikan teks dan fungsi klik yang sesuai.
- **`<MyCounter>`**: Menampilkan nilai `counter`.

### 10. Merender Aplikasi

```javascript
root.render(<HomePage />);
```

- **`root.render`**: Merender komponen `HomePage` ke dalam elemen DOM yang sudah ditentukan.

## Kesimpulan

Aplikasi ini adalah contoh dasar bagaimana menggunakan React untuk membuat komponen interaktif dengan state. Dengan memahami setiap bagian dari kode ini, kamu akan lebih siap untuk mengembangkan aplikasi yang lebih kompleks.
