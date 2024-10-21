# README: Memahami Hooks React - useState

## Pengertian

**useState** adalah hook di React yang digunakan untuk mendeklarasikan dan mengelola state dalam komponen fungsional. Hook ini memungkinkan kita untuk menyimpan nilai yang dapat berubah seiring interaksi pengguna, dan ketika state diperbarui, komponen akan otomatis melakukan re-render.

## Fungsi Kode

Berikut adalah contoh implementasi `useState`:

```javascript
import React, { useState } from "react";

const UseState = () => {
  function initialState() {
    console.log("running");
    return 0;
  }

  const [state, setState] = useState({ count: 0, name: "ranggo" });
  const { count, name } = state;

  const handleIncrement = () => {
    setState((previousState) => {
      return { ...previousState, count: previousState.count + 1 };
    });
  };

  const handleDecrement = () => {
    setState((previousState) => {
      return { ...previousState, count: previousState.count - 1 };
    });
  };

  return (
    <div className="container">
      <div className="hooks">useState</div>
      <div className="content">
        <button onClick={handleDecrement}>decrement</button>
        <div>{count}</div>
        <div>{name}</div>
        <button onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
};

export default UseState;
```

### Penjelasan Kode

1. **State Awal**:

   - `useState` diinisialisasi dengan objek yang berisi `count` dan `name`. Nilai awal untuk `count` adalah 0 dan `name` adalah "ranggo".

2. **Fungsi Handle Increment**:

   - Fungsi `handleIncrement` akan dipanggil saat tombol increment diklik. Fungsi ini memperbarui `count` dalam state dengan menambahkan 1 ke nilai sebelumnya.

3. **Fungsi Handle Decrement**:

   - Fungsi `handleDecrement` akan dipanggil saat tombol decrement diklik. Fungsi ini mengurangi nilai `count` dengan 1.

4. **Render Komponen**:
   - Komponen merender dua tombol untuk increment dan decrement nilai, serta menampilkan nilai `count` dan `name` di tengah.

### Catatan tentang Inisialisasi State

- Pada contoh ini, fungsi `initialState` yang ditetapkan tidak digunakan. Biasanya, kita bisa menggunakan fungsi ini untuk menghitung state awal jika perlu. Namun, kita menggunakan objek langsung dalam `useState`.

## Cara Berpikir React

`useState` memungkinkan kita untuk mendeklarasikan state dengan cara yang mudah dan intuitif dalam komponen fungsional. Saat state diubah, React akan mengatur ulang komponen, sehingga kita dapat menjaga tampilan dan logika tetap sinkron.

### Analogi Sederhana

Bayangkan `useState` seperti kantong untuk menyimpan barang. Setiap kali Anda memasukkan atau mengeluarkan barang (state), kantong tersebut akan diperbarui, dan Anda dapat melihat barang yang ada di dalamnya.

## Penggunaan Umum `useState`

### 1. Mengelola Input Form

`useState` sering digunakan untuk menyimpan nilai dari input dalam formulir.

### 2. Menyimpan Status Komponen

Kita bisa menggunakan `useState` untuk menyimpan status komponen, seperti apakah modal terbuka atau tidak.

### 3. Mengelola Data Dinamis

`useState` cocok untuk mengelola data yang sering berubah, seperti daftar item atau hasil pencarian.

## Contoh Proyek Nyata

### 1. Aplikasi To-Do List

Dalam aplikasi to-do list, `useState` digunakan untuk menyimpan daftar tugas yang perlu diselesaikan.

### 2. Aplikasi E-Commerce

Di aplikasi e-commerce, `useState` digunakan untuk menyimpan status keranjang belanja, termasuk jumlah item.

### 3. Aplikasi Cuaca

Dalam aplikasi cuaca, `useState` dapat digunakan untuk menyimpan data cuaca yang diperoleh dari API.

## Kesimpulan

`useState` adalah alat yang sangat berguna dalam React untuk mengelola state dalam komponen fungsional. Contoh di atas menunjukkan cara menggunakan `useState` untuk memperbarui nilai `count` dan menampilkan informasi di antarmuka pengguna. Dengan memahami cara kerja `useState`, kita dapat mengembangkan aplikasi yang responsif dan interaktif dengan lebih efisien.
