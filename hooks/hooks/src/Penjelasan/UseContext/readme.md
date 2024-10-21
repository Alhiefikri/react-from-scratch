# README: Memahami Hooks React - UseContext

## Pengertian

**Hooks** adalah fitur dalam React yang memungkinkan kita untuk menggunakan state dan fitur lainnya dari React tanpa menulis kelas. Salah satu hooks yang sangat berguna adalah `useContext`, yang membantu kita mengelola state global di dalam aplikasi React. Dengan `useContext`, kita bisa menghindari "prop drilling", yaitu proses mengoper props ke dalam banyak level komponen.

## Fungsi Kode

Berikut adalah contoh implementasi `useContext`:

```javascript
import React from "react";
import Navbar from "../components/Navbar";
import { useState, createContext } from "react";
import Page from "../components/Page";

// Membuat konteks untuk login
export const LoginContext = createContext();

const UseContext = () => {
  // Menggunakan state untuk menentukan status login
  const [isLogin, setIsLogin] = useState(false);

  return (
    // Menyediakan state dan setter melalui Provider
    <LoginContext.Provider value={[isLogin, setIsLogin]}>
      <Navbar />
      <Page />
    </LoginContext.Provider>
  );
};

export default UseContext;
```

### Penjelasan Kode

1. **createContext**: Kita membuat konteks baru dengan `createContext()`, yang akan digunakan untuk menyimpan dan berbagi state login di seluruh aplikasi.
2. **useState**: Kita menggunakan hook `useState` untuk mengatur apakah pengguna sedang login atau tidak. Nilai awalnya adalah `false`.
3. **LoginContext.Provider**: Kita membungkus komponen `Navbar` dan `Page` dengan `LoginContext.Provider`, sehingga kedua komponen tersebut dapat mengakses state `isLogin` dan fungsi `setIsLogin`.

## Cara Berpikir React

React berfokus pada komponen yang dapat digunakan kembali. Dengan `useContext`, kita bisa membuat state yang dapat diakses di seluruh komponen tanpa harus mengoper props dari komponen atas ke komponen bawah. Ini mempermudah pengelolaan state dan meningkatkan keterbacaan kode.

### Analogi Sederhana

Bayangkan sebuah perpustakaan (aplikasi) yang memiliki banyak buku (komponen). Jika seseorang ingin tahu apakah sebuah buku tersedia (state login), alih-alih menginformasikan setiap pengunjung (komponen anak) secara terpisah, kita bisa memasang papan pengumuman di pintu masuk (konteks) yang memberi tahu semua orang sekaligus. Dengan cara ini, semua pengunjung bisa langsung tahu status ketersediaan tanpa harus bertanya satu per satu.

## Penggunaan Umum `useContext`

### 1. Manajemen Autentikasi

`useContext` sering digunakan untuk mengelola status autentikasi pengguna, seperti menyimpan informasi apakah pengguna sudah login atau tidak.

### 2. Tema Aplikasi

Dalam aplikasi yang memiliki tema yang dapat diubah (misalnya, mode gelap dan terang), `useContext` dapat membantu dalam menyimpan pilihan tema dan memungkinkan semua komponen untuk mengakses dan merespons perubahan tema.

### 3. Pengaturan Bahasa

Untuk aplikasi yang mendukung beberapa bahasa, `useContext` dapat digunakan untuk menyimpan bahasa yang dipilih, sehingga komponen dapat menyesuaikan konten yang ditampilkan sesuai dengan preferensi pengguna.

### 4. Keranjang Belanja

Dalam aplikasi e-commerce, `useContext` sering digunakan untuk mengelola state keranjang belanja, memungkinkan berbagai komponen untuk menambahkan atau menghapus item tanpa perlu mengoper props ke dalam banyak level.

## Contoh Proyek Nyata

### 1. Aplikasi E-Commerce

Aplikasi seperti **Shopify** atau **Amazon** menggunakan `useContext` untuk mengelola state keranjang belanja dan informasi pengguna, sehingga komponen yang berbeda dapat dengan mudah mengakses informasi yang relevan.

### 2. Dashboard Analitik

Aplikasi seperti **Google Analytics** bisa menggunakan `useContext` untuk mengelola tema dan pengaturan tampilan dashboard, memungkinkan pengguna untuk mengubah tema secara real-time.

### 3. Aplikasi Media Sosial

Aplikasi seperti **Facebook** atau **Twitter** dapat memanfaatkan `useContext` untuk mengelola status autentikasi pengguna, sehingga semua komponen dalam aplikasi dapat menyesuaikan tampilan konten yang relevan.

### 4. Aplikasi Manajemen Proyek

Aplikasi seperti **Trello** atau **Asana** menggunakan `useContext` untuk mengelola data proyek dan tugas, memungkinkan informasi tentang proyek yang sedang aktif diakses oleh berbagai komponen.

## Kesimpulan

`useContext` adalah alat yang sangat berguna dalam React untuk mengelola state global dan menghindari prop drilling. Dengan memahami dan menerapkan `useContext`, kita bisa membuat aplikasi yang lebih terstruktur dan mudah dipelihara. Penggunaan konteks ini menjadi penting ketika aplikasi kita mulai berkembang dan membutuhkan cara yang efisien untuk berbagi data antar komponen.

Dengan contoh yang diberikan, kita telah melihat bagaimana membuat dan menggunakan konteks dengan `useContext`. Implementasi yang sederhana ini dapat dikembangkan lebih lanjut sesuai kebutuhan aplikasi yang lebih kompleks.
