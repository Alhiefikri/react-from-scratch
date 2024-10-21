# README: Memahami Hooks React - useRef

## Pengertian

**useRef** adalah hook di React yang digunakan untuk menyimpan referensi ke elemen DOM atau untuk menyimpan nilai yang ingin dipertahankan antara render tanpa memicu re-render. `useRef` sangat berguna untuk menyimpan nilai yang tidak perlu dilacak dalam state atau ketika kita ingin berinteraksi dengan elemen DOM secara langsung.

## Fungsi Kode

Berikut adalah contoh implementasi `useRef`:

```javascript
import React from "react";
import { useState, useRef } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
    countRef.current++;

    console.log("state : ", count);
    console.log("useRef : ", countRef.current);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="container">
      <div className="hooks">useRef</div>
      <div className="content">
        <button onClick={handleDecrement}>decrement</button>
        <div>{countRef.current}</div>
        <button onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
};

export default UseRef;
```

### Penjelasan Kode

1. **State dan Ref**:

   - `count`: state yang dikelola menggunakan `useState`, digunakan untuk menyimpan nilai yang ditampilkan pada antarmuka pengguna.
   - `countRef`: referensi yang dikelola menggunakan `useRef`, digunakan untuk menyimpan nilai kuantitas yang tidak memicu re-render.

2. **Handle Increment**:

   - Fungsi `handleIncrement` akan meningkatkan nilai `count` dan `countRef.current` setiap kali tombol increment diklik.
   - Nilai `countRef.current` diperbarui tanpa menyebabkan re-render, memungkinkan kita untuk menyimpan informasi tambahan tanpa mempengaruhi tampilan.

3. **Render Komponen**:
   - Komponen merender dua tombol untuk increment dan decrement nilai, serta menampilkan nilai `countRef.current` di tengah.

### Perbedaan Antara State dan useRef

- **State (`useState`)**: Menggunakan state menyebabkan re-render pada komponen setiap kali nilainya berubah.
- **Ref (`useRef`)**: Menggunakan ref tidak menyebabkan re-render, dan berguna untuk menyimpan nilai yang perlu dipertahankan tanpa mempengaruhi tampilan.

## Cara Berpikir React

`useRef` adalah alat yang berguna untuk menyimpan nilai yang tidak perlu menyebabkan komponen merender ulang. Ini berguna saat kita ingin menjaga performa aplikasi tetap baik dengan menghindari re-render yang tidak perlu.

### Analogi Sederhana

Bayangkan Anda memiliki buku catatan. Anda dapat menulis informasi penting di sana (state) dan juga memiliki bookmark untuk menandai halaman saat ini (useRef). Mengubah bookmark tidak mengubah isi buku, tetapi membantu Anda mengingat posisi saat ini.

## Penggunaan Umum `useRef`

### 1. Menyimpan Referensi Elemen DOM

`useRef` sering digunakan untuk mendapatkan akses langsung ke elemen DOM, misalnya, saat menggunakan input untuk fokus.

### 2. Menyimpan Nilai yang Tidak Perlu Menyebabkan Re-render

Saat kita perlu menyimpan nilai, seperti timer ID atau interval, tanpa memicu render ulang.

### 3. Menangani Performa

Menggunakan `useRef` untuk menyimpan nilai yang tidak perlu di-render ulang dapat membantu meningkatkan performa, terutama dalam aplikasi yang kompleks.

## Contoh Proyek Nyata

### 1. Aplikasi Formulir

Dalam aplikasi formulir, `useRef` dapat digunakan untuk mengakses elemen input secara langsung, misalnya, untuk fokus secara otomatis saat komponen dimuat.

### 2. Aplikasi Timer

Dalam aplikasi timer, `useRef` dapat digunakan untuk menyimpan ID interval atau timeout, memungkinkan kita untuk membersihkan saat komponen tidak lagi diperlukan.

### 3. Aplikasi Canvas

Dalam aplikasi berbasis canvas, `useRef` bisa digunakan untuk menyimpan referensi ke elemen canvas untuk menggambar tanpa memicu render ulang.

## Kesimpulan

`useRef` adalah hook yang kuat dalam React untuk menyimpan referensi ke elemen DOM atau nilai yang perlu dipertahankan tanpa memicu re-render. Dengan memahami dan menerapkan `useRef`, kita dapat meningkatkan performa aplikasi dan menjaga tampilan tetap responsif. Contoh di atas menunjukkan penggunaan `useRef` untuk menyimpan nilai dan memperbarui referensi tanpa mempengaruhi rendering, dan penerapan ini dapat disesuaikan dengan berbagai kebutuhan aplikasi.
