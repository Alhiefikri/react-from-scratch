# README: Memahami Hooks React - useRef (Contoh 2)

## Pengertian

**useRef** adalah hook di React yang digunakan untuk menyimpan referensi ke elemen DOM atau untuk menyimpan nilai yang ingin dipertahankan antara render tanpa memicu re-render. Dalam contoh ini, kita akan menggunakan `useRef` untuk fokus pada elemen input saat tombol diklik.

## Fungsi Kode

Berikut adalah contoh implementasi `useRef` untuk mengakses dan fokus pada input:

```javascript
import React from "react";
import { useRef } from "react";

const UseRef2 = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

export default UseRef2;
```

### Penjelasan Kode

1. **Referensi Input**:

   - `inputRef` dibuat menggunakan `useRef` dan diinisialisasi dengan `null`. Ini akan digunakan untuk menyimpan referensi ke elemen input.

2. **Fokus Input**:

   - Fungsi `focusInput` akan dipanggil saat tombol diklik. Di dalam fungsi ini, kita menggunakan `inputRef.current.focus()` untuk memberikan fokus pada elemen input yang direferensikan.

3. **Render Komponen**:
   - Komponen merender elemen input dan tombol. Saat tombol diklik, fungsi `focusInput` akan mengatur fokus pada input.

## Cara Berpikir React

`useRef` memberikan cara yang mudah untuk berinteraksi dengan elemen DOM secara langsung, seperti memberikan fokus pada input, tanpa mempengaruhi state atau menyebabkan re-render. Ini membuat interaksi dengan elemen DOM menjadi lebih efisien.

### Analogi Sederhana

Bayangkan Anda memiliki remote control untuk TV. Anda dapat menggunakannya untuk mengubah saluran atau meningkatkan volume tanpa harus mengubah isi TV itu sendiri. `useRef` berfungsi seperti remote control ini untuk elemen DOM.

## Penggunaan Umum `useRef`

### 1. Mengakses Elemen DOM

`useRef` sering digunakan untuk mendapatkan akses langsung ke elemen DOM, seperti input, button, atau canvas.

### 2. Mengelola Fokus

Dalam aplikasi formulir, `useRef` digunakan untuk mengatur fokus pada elemen input, meningkatkan pengalaman pengguna.

### 3. Menyimpan Nilai Antara Render

Kita juga bisa menggunakan `useRef` untuk menyimpan nilai yang tidak perlu menyebabkan re-render, seperti ID timer.

## Contoh Proyek Nyata

### 1. Aplikasi Formulir

Dalam aplikasi formulir, `useRef` bisa digunakan untuk fokus secara otomatis pada input pertama saat pengguna membuka halaman.

### 2. Aplikasi Chat

Di aplikasi chat, `useRef` dapat digunakan untuk scroll ke elemen terbaru saat pesan baru masuk.

### 3. Aplikasi Permainan

Dalam aplikasi permainan, `useRef` dapat digunakan untuk mendapatkan referensi ke elemen canvas dan menggambar objek tanpa memicu re-render.

## Kesimpulan

`useRef` adalah hook yang bermanfaat dalam React untuk menyimpan referensi ke elemen DOM dan memberikan interaksi yang lebih baik dengan antarmuka pengguna. Contoh di atas menunjukkan cara menggunakan `useRef` untuk memberikan fokus pada elemen input, dan penerapan ini dapat disesuaikan dengan berbagai kebutuhan aplikasi. Dengan memahami cara kerja `useRef`, kita dapat meningkatkan pengalaman pengguna dan menjaga performa aplikasi tetap optimal.
