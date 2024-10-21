# README: Memahami Hooks React - useReducer

## Pengertian

**useReducer** adalah hook di React yang digunakan untuk mengelola state dengan cara yang lebih terstruktur dibandingkan dengan `useState`. Ini berguna terutama dalam aplikasi yang memiliki logika state yang kompleks atau saat state tergantung pada nilai state sebelumnya. `useReducer` mengikuti pola Redux, menggunakan reducer untuk memperbarui state berdasarkan action yang diberikan.

## Fungsi Kode

Berikut adalah contoh implementasi `useReducer`:

```javascript
import React, { useState, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import { ACTION } from "../reducer/actionType";

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({ type: ACTION.INCREMENT, payload: 20 });
  };

  const handleDecrement = () => {
    dispatch({ type: ACTION.DECREMENT });
  };

  return (
    <div className="container">
      <div className="hooks">useReducer</div>
      <div className="content">
        <button onClick={handleDecrement}>decrement</button>
        <div>{state.count}</div>
        <button onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
};

export default UseReducer;
```

### Penjelasan Kode

1. **State dan Reducer**:

   - Kita mendefinisikan state menggunakan `useReducer`, dengan `reducer` dan nilai awal `{ count: 0 }`. `reducer` adalah fungsi yang akan menangani logika pengubahan state.

2. **Action**:

   - Ketika tombol increment atau decrement diklik, fungsi `handleIncrement` dan `handleDecrement` dipanggil. Masing-masing akan mendispatch action dengan tipe tertentu (INCREMENT atau DECREMENT) ke reducer.

3. **Render Komponen**:
   - Komponen merender dua tombol untuk increment dan decrement nilai `count`, serta menampilkan nilai `count` di tengah.

### Struktur Reducer

Berikut adalah contoh sederhana dari `reducer` yang digunakan:

```javascript
// reducer.js
import { ACTION } from "./actionType";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + action.payload };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

### Struktur Action Type

Contoh file `actionType.js` yang mendefinisikan action types:

```javascript
// actionType.js
export const ACTION = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};
```

## Cara Berpikir React

`useReducer` memberikan cara yang lebih terstruktur untuk mengelola state, terutama saat aplikasi menjadi lebih kompleks. Dengan memisahkan logika pengubahan state ke dalam reducer, kita dapat lebih mudah memahami dan memelihara kode.

### Analogi Sederhana

Bayangkan Anda adalah manajer restoran yang mengelola pesanan. Setiap kali ada pesanan baru (action), Anda akan memberikan instruksi (reducer) untuk memperbarui jumlah makanan yang tersedia. Dengan cara ini, Anda menjaga segala sesuatunya tetap terorganisir dan terstruktur.

## Penggunaan Umum `useReducer`

### 1. Manajemen State Kompleks

`useReducer` sangat berguna ketika ada beberapa sub-state atau state yang saling bergantung satu sama lain.

### 2. Mengelola Formulir

Saat mengelola state dari formulir yang kompleks dengan banyak field, `useReducer` dapat membantu menjaga semua nilai dan validasi tetap terorganisir.

### 3. Menangani API

Saat menangani hasil dari API yang kompleks dengan banyak aksi (seperti loading, success, error), `useReducer` dapat membantu memisahkan logika tersebut.

## Contoh Proyek Nyata

### 1. Aplikasi To-Do List

Dalam aplikasi to-do list, `useReducer` dapat digunakan untuk mengelola daftar tugas dengan aksi seperti menambahkan, menghapus, dan menyelesaikan tugas.

### 2. Aplikasi E-Commerce

Di aplikasi e-commerce, `useReducer` bisa digunakan untuk mengelola state keranjang belanja, termasuk menambahkan atau menghapus item dan menghitung total harga.

### 3. Aplikasi Pembuat Formulir

Dalam aplikasi yang memungkinkan pengguna membuat formulir dinamis, `useReducer` dapat digunakan untuk mengelola state input dan validasi dengan lebih baik.

## Kesimpulan

`useReducer` adalah alat yang kuat dalam React untuk mengelola state dengan cara yang lebih terstruktur dan terorganisir. Dengan memahami dan menerapkan `useReducer`, kita dapat meningkatkan keterbacaan dan pemeliharaan kode, terutama dalam aplikasi yang kompleks. Contoh di atas menunjukkan penggunaan `useReducer` untuk mengelola count, dan penerapan ini dapat disesuaikan dengan berbagai kebutuhan aplikasi.
