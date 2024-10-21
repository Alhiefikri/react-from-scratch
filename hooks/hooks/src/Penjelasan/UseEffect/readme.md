# README: Memahami Hooks React - useEffect

## Pengertian

**useEffect** adalah hook di React yang memungkinkan kita untuk menjalankan efek samping dalam komponen fungsional. Efek samping ini bisa berupa pengambilan data, pengaturan langganan, atau pengubahan DOM secara langsung. `useEffect` memberikan cara untuk menangani siklus hidup komponen tanpa menggunakan kelas, menjadikannya lebih mudah dan lebih intuitif.

## Fungsi Kode

Berikut adalah contoh implementasi `useEffect`:

```javascript
import React, { useState, useEffect } from "react";
import Todos from "../components/Todos";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  const handleIncrement = () => {
    setCount((previousState) => previousState + 1);
  };

  const handleDecrement = () => {
    setCount2((previousState) => previousState - 1);
  };

  return (
    <div className="container">
      <div className="hooks">useEffect</div>
      <div className="content">
        <button onClick={handleDecrement}>decrement</button>
        <div>{count}</div>
        <div>{count2}</div>
        <button onClick={handleIncrement}>increment</button>
      </div>
      <div>
        {todos.map((todo) => {
          return <Todos key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default UseEffect;
```

### Penjelasan Kode

1. **useState**: Kita mendefinisikan tiga state:

   - `count`: digunakan untuk menghitung nilai dengan tombol increment dan decrement.
   - `count2`: state kedua untuk menghitung nilai.
   - `todos`: digunakan untuk menyimpan data tugas yang diambil dari API.

2. **useEffect**: Kita menggunakan `useEffect` untuk mengambil data dari API ketika komponen pertama kali dirender. Efek ini hanya dijalankan sekali karena kita memberikan array kosong `[]` sebagai dependensi.

3. **handleIncrement & handleDecrement**: Fungsi-fungsi ini digunakan untuk mengubah nilai `count` dan `count2` masing-masing ketika tombol ditekan.

4. **Render**: Komponen merender tombol untuk increment dan decrement, serta menampilkan nilai `count` dan `count2`. Selain itu, daftar tugas (todos) ditampilkan dengan menggunakan komponen `Todos`.

## Cara Berpikir React

Dalam React, efek samping adalah bagian penting dari interaksi pengguna dan pengambilan data. `useEffect` membantu kita mengelola efek ini dengan lebih mudah dalam komponen fungsional, menjaga logika kita terpisah dari tampilan dan memudahkan pengelolaan state.

### Analogi Sederhana

Bayangkan kita adalah seorang koki yang sedang memasak. Saat kita menunggu air mendidih (efek samping), kita bisa melakukan hal lain, seperti mempersiapkan bahan-bahan (state). `useEffect` adalah cara bagi kita untuk kembali dan memeriksa apakah air sudah mendidih, sehingga kita bisa melanjutkan langkah berikutnya dalam resep.

## Penggunaan Umum `useEffect`

### 1. Pengambilan Data

`useEffect` sering digunakan untuk mengambil data dari API saat komponen dirender, seperti dalam contoh di atas.

### 2. Pengaturan Langganan

Ketika kita perlu mengatur langganan untuk event, seperti mendengarkan event dari WebSocket atau dari library pihak ketiga.

### 3. Mengelola Timer

Kita dapat menggunakan `useEffect` untuk mengatur dan membersihkan timer atau interval.

### 4. Mengubah DOM Secara Langsung

Jika kita perlu mengubah elemen DOM secara langsung, `useEffect` adalah tempat yang tepat untuk melakukannya setelah render.

## Contoh Proyek Nyata

### 1. Aplikasi E-Commerce

Dalam aplikasi e-commerce seperti **Amazon**, `useEffect` digunakan untuk mengambil daftar produk dari API saat halaman dimuat.

### 2. Aplikasi Media Sosial

Dalam aplikasi media sosial seperti **Twitter**, `useEffect` dapat digunakan untuk mengambil feed tweet pengguna saat komponen dirender.

### 3. Aplikasi Manajemen Proyek

Aplikasi seperti **Trello** menggunakan `useEffect` untuk mengambil dan menyimpan data tugas dari API saat memuat halaman.

### 4. Aplikasi Analitik

Dalam aplikasi analitik seperti **Google Analytics**, `useEffect` dapat digunakan untuk mengambil metrik secara real-time saat halaman dimuat.

## Kesimpulan

`useEffect` adalah alat yang kuat dalam React untuk mengelola efek samping dalam komponen fungsional. Dengan memahami dan menerapkan `useEffect`, kita dapat menangani pengambilan data, pengaturan langganan, dan berbagai efek samping lainnya dengan cara yang lebih terstruktur dan mudah dikelola. Contoh di atas menunjukkan bagaimana `useEffect` digunakan dalam konteks pengambilan data, dan penerapan ini dapat disesuaikan dengan berbagai kebutuhan aplikasi.
