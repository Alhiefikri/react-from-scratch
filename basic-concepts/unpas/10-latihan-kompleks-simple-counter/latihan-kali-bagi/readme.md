# README untuk Counter Application

## Deskripsi

Counter Application ini dibangun menggunakan React. Aplikasi ini memungkinkan pengguna untuk melakukan operasi aritmatika pada nilai counter dan meresetnya. Tombol diatur agar diaktifkan atau dinonaktifkan berdasarkan nilai counter.

## Struktur Kode

### 1. HTML Dasar

```html
<div id="root"></div>
```

- Tempat di mana aplikasi React akan dirender.

### 2. Mengimpor Skrip

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

- Mengimpor React, ReactDOM, dan Babel untuk menggunakan JSX.

### 3. Menentukan Root React

```javascript
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
```

- Mengambil elemen HTML dengan ID `root` dan menciptakan root untuk aplikasi React.

### 4. Komponen `MyButton`

```javascript
function MyButton({ text, onClick, counter }) {
  const disabled =
    text !== "Reset!"
      ? counter > 49 || counter < 0
        ? true
        : false
      : counter > 49 || counter < 0
      ? false
      : true;
  const myStyle = text !== "Reset!" ? {} : { margin: 20, display: "block" };

  return (
    <button onClick={onClick} disabled={disabled} style={myStyle}>
      {text}
    </button>
  );
}
```

- Menerima `text`, `onClick`, dan `counter`.
- Menentukan apakah tombol harus dinonaktifkan berdasarkan nilai `counter`.
- Mengembalikan elemen `<button>`.

### 5. Komponen `MyCounter`

```javascript
function MyCounter({ counter }) {
  if (counter > 49 || counter < 0) {
    counter = "done!";
  }

  return <span style={{ margin: 20 }}>{counter}</span>;
}
```

- Menampilkan "done!" jika `counter` di luar rentang yang ditentukan.

### 6. Komponen `HomePage`

```javascript
function HomePage() {
  const [counter, setCounter] = React.useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function multiply() {
    setCounter(counter * 2);
  }

  function divide() {
    setCounter(counter / 2);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div>
      <MyCounter counter={counter} />
      <MyButton text={"-"} onClick={decrement} counter={counter} />
      <MyButton text={"+"} onClick={increment} counter={counter} />
      <MyButton text={"x"} onClick={multiply} counter={counter} />
      <MyButton text={"/"} onClick={divide} counter={counter} />
      <MyButton text={"Reset!"} onClick={reset} counter={counter} />
    </div>
  );
}
```

- Menggunakan state untuk menyimpan nilai `counter`.
- Menyediakan fungsi untuk melakukan operasi aritmatika dan mereset nilai.

### 7. Merender Aplikasi

```javascript
root.render(<HomePage />);
```

- Merender komponen `HomePage` ke dalam elemen `root`.

## Alur Kerja Aplikasi

1. Aplikasi dimulai dengan `counter` diinisialisasi ke 0.
2. Pengguna dapat menggunakan tombol untuk melakukan operasi pada nilai counter.
3. Jika nilai counter lebih dari 49 atau kurang dari 0, tombol selain "Reset!" dinonaktifkan, dan tampilan counter menjadi "done!".
4. Pengguna dapat mereset counter kapan saja menggunakan tombol "Reset!".
