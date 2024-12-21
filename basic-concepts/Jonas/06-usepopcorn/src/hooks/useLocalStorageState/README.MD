# README: Penjelasan tentang Custom Hook `useLocalStorageState`

## Pengertian

`useLocalStorageState` adalah sebuah **custom hook** dalam React yang mengelola state komponen, namun dengan cara menyimpan nilai state tersebut di **localStorage** browser. Dengan hook ini, data yang disimpan tidak hanya ada di memori aplikasi (state), tetapi juga disimpan secara persisten di browser. Artinya, nilai tersebut tetap ada meskipun halaman di-refresh atau aplikasi ditutup dan dibuka kembali.

Hook ini sangat berguna jika kamu ingin mempertahankan nilai state antar sesi pengguna, misalnya untuk menyimpan preferensi pengguna atau status login.

## Cara Berpikir React

Di React, kita biasanya mengelola **state** dengan `useState` dan melakukan efek samping dengan `useEffect`. Dalam hook `useLocalStorageState`, kita memadukan keduanya:

- Menggunakan `useState` untuk menyimpan nilai state dalam memori.
- Menggunakan `useEffect` untuk menyimpan dan memperbarui nilai state di **localStorage** setiap kali state berubah, sehingga nilai tersebut tetap ada saat pengguna kembali membuka aplikasi.

## Analogi Sederhana

Bayangkan kamu sedang menulis sebuah daftar belanja di aplikasi. Ketika kamu menambahkan atau mengubah barang dalam daftar, kamu ingin agar daftar tersebut tetap ada meskipun aplikasi ditutup dan dibuka kembali. `useLocalStorageState` berfungsi seperti sebuah buku catatan yang tidak hanya kamu simpan di dalam aplikasi, tapi juga disalin ke sebuah lemari (localStorage) di luar aplikasi. Ketika kamu membuka aplikasi lagi, buku catatan itu akan tetap ada dan mengingatkan kamu tentang apa yang telah kamu catat sebelumnya.

## Penjelasan Code Tiap Baris

```javascript
import { useEffect } from "react";
import { useState } from "react";
```

- **Baris ini** mengimpor dua hook dari React: `useEffect` dan `useState`.
  - `useState` digunakan untuk mengelola nilai state dalam komponen.
  - `useEffect` digunakan untuk menangani efek samping, seperti pembaruan data ke localStorage.

```javascript
export function useLocalStorageState(initalState, key) {
```

- **Baris ini** mendefinisikan custom hook `useLocalStorageState` yang menerima dua parameter:
  - `initialState`: Nilai awal untuk state jika tidak ada nilai yang ditemukan di `localStorage`.
  - `key`: Nama kunci yang akan digunakan untuk menyimpan dan mengambil data dari `localStorage`.

```javascript
const [value, setValue] = useState(function () {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : initalState;
});
```

- **Baris ini** mendeklarasikan state `value` dan `setValue` dengan menggunakan hook `useState`.
  - Fungsi pertama yang diberikan ke `useState` akan dijalankan saat pertama kali komponen dirender. Fungsi ini akan mencoba untuk mengambil nilai yang disimpan di `localStorage` dengan `localStorage.getItem(key)`.
  - Jika ada data yang disimpan dengan kunci `key`, maka data tersebut diubah (parsed) dari format string JSON kembali menjadi objek JavaScript dengan `JSON.parse()`.
  - Jika tidak ada data yang disimpan di `localStorage`, maka nilai awal `initialState` yang diberikan ke hook akan digunakan sebagai nilai state.

```javascript
useEffect(
  function () {
    localStorage.setItem(key, JSON.stringify(value));
  },
  [value, key]
);
```

- **Baris ini** menggunakan hook `useEffect` untuk memperbarui `localStorage` setiap kali nilai `value` atau `key` berubah.
  - `localStorage.setItem(key, JSON.stringify(value))` menyimpan nilai state (`value`) ke `localStorage`. Nilai state diubah menjadi string JSON menggunakan `JSON.stringify()` karena `localStorage` hanya dapat menyimpan data dalam bentuk string.
  - Hook ini memastikan bahwa setiap kali nilai state berubah, data baru akan disimpan ke `localStorage` dengan kunci yang sesuai.

```javascript
  return [value, setValue];
}
```

- **Baris ini** mengembalikan sebuah array yang berisi dua elemen:
  1. `value`: Nilai state saat ini.
  2. `setValue`: Fungsi yang digunakan untuk memperbarui nilai state.
- Ini memungkinkan kita untuk menggunakan `useLocalStorageState` dalam bentuk yang mirip dengan `useState`, tetapi dengan data yang disinkronkan dengan `localStorage`.

## Kesimpulan

Custom hook `useLocalStorageState` menyediakan cara yang mudah dan efektif untuk mengelola state dalam komponen React yang juga disimpan secara persisten di browser menggunakan `localStorage`. Hal ini memungkinkan data seperti preferensi pengguna, status login, atau setting aplikasi tetap terjaga bahkan setelah halaman di-refresh atau aplikasi ditutup dan dibuka kembali.

### Cara Kerja:

1. **Initial State**: Hook ini menerima nilai awal dan kunci `key` untuk `localStorage`.
2. **Ambil Data dari `localStorage`**: Ketika komponen pertama kali dirender, hook akan mencoba untuk mengambil data yang sudah ada di `localStorage`. Jika data ada, akan digunakan sebagai nilai state; jika tidak, nilai default dari `initialState` akan digunakan.
3. **Menyimpan ke `localStorage`**: Setiap kali nilai state berubah, `useEffect` akan menyimpan perubahan nilai state ke `localStorage`.

### Contoh Penggunaan:

```javascript
import { useLocalStorageState } from "./useLocalStorageState";

function App() {
  // Menggunakan hook untuk menyimpan 'theme' dalam localStorage
  const [theme, setTheme] = useLocalStorageState("light", "theme");

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
```

Pada contoh di atas:

- Nilai `theme` akan disimpan dalam `localStorage` dengan kunci `"theme"`.
- Ketika pengguna mengklik tombol, nilai `theme` akan berubah dan perubahan tersebut langsung disinkronkan ke `localStorage`. Jadi, meskipun halaman di-refresh, nilai theme yang dipilih tetap dipertahankan.

Dengan `useLocalStorageState`, kita bisa lebih mudah mengelola state yang perlu bertahan setelah halaman di-refresh tanpa harus menulis banyak kode. Hook ini memungkinkan data lebih persisten dan bisa bertahan antar sesi pengguna.
