# Penjelasan Kode `AppLayout` dengan React Router

## Pengertian

Komponen `AppLayout` ini bertindak sebagai **layout utama** untuk aplikasi kamu yang memiliki beberapa halaman. Layout utama ini memiliki beberapa elemen tetap (seperti `Header` dan `CartOverview`) dan area dinamis yang bisa berubah sesuai dengan halaman yang sedang ditampilkan (yaitu, tempat di mana komponen lain dirender menggunakan `Outlet` dari React Router). Komponen ini juga menangani status pemuatan (loading) dengan menampilkan sebuah **Loader** ketika halaman sedang dimuat.

---

## Cara Berpikir React dan React Router di Kode Ini

- **Komponen Layout**: Dalam React, kita sering menggunakan komponen layout yang berfungsi sebagai kerangka dasar dari tampilan aplikasi. Komponen layout ini bisa mencakup header, footer, sidebar, dan elemen-elemen umum lainnya yang tidak berubah antar halaman.
- **Routing Dinamis**: Bagian utama dari layout ini adalah penggunaan `Outlet`, yang berfungsi untuk merender komponen halaman yang sesuai dengan rute yang aktif. Rute yang berbeda akan menampilkan halaman yang berbeda di dalam area `main`.
- **Loader dan Navigasi**: Komponen ini juga menangani status pemuatan (loading) dengan menampilkan komponen `Loader` saat navigasi sedang berlangsung, memberikan indikasi kepada pengguna bahwa halaman sedang dimuat.

---

## Analogi Sederhana

Bayangkan aplikasi kamu adalah sebuah restoran. `AppLayout` adalah **struktur restoran** yang memiliki elemen-elemen tetap seperti pintu masuk (`Header`) dan meja untuk melihat daftar menu (`CartOverview`). Sementara itu, bagian utama restoran di mana pelanggan duduk dan memesan makanan (halaman dinamis) adalah area yang akan berubah-ubah sesuai dengan pilihan pelanggan (melalui `Outlet`).

---

## Penjelasan Kode Tiap Baris

### 1. Impor Modul dan Komponen

```javascript
import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import { useNavigation } from "react-router-dom";
import Loader from "./Loader";
```

- **`Outlet`**: Digunakan oleh React Router untuk menampilkan komponen berdasarkan rute yang aktif. Ini adalah tempat untuk merender halaman yang spesifik dari aplikasi.
- **`CartOverview`**: Komponen ini akan ditampilkan di bagian bawah layout, memberikan informasi singkat tentang isi keranjang belanja.
- **`Header`**: Komponen header yang akan ditampilkan di bagian atas layout, biasanya berisi navigasi atau informasi penting lainnya.
- **`useNavigation`**: Hook ini berasal dari React Router dan digunakan untuk mengetahui status navigasi saat ini, apakah sedang dalam proses pemuatan atau tidak.
- **`Loader`**: Komponen ini menampilkan animasi atau indikasi bahwa halaman sedang dimuat.

### 2. Komponen `AppLayout`

```javascript
const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
};
```

- **`const navigation = useNavigation();`**: Menggunakan hook `useNavigation` untuk mendapatkan informasi tentang status navigasi saat ini. Status ini akan memberi tahu kita apakah aplikasi sedang memuat halaman baru atau tidak.
- **`const isLoading = navigation.state === "loading";`**: Menggunakan status navigasi untuk memeriksa apakah saat ini aplikasi sedang dalam keadaan pemuatan (misalnya, ketika pengguna berpindah halaman). Jika `state` adalah `"loading"`, berarti aplikasi sedang memuat halaman.

- **`{isLoading && <Loader />}`**: Jika aplikasi sedang dalam status "loading", komponen `Loader` akan ditampilkan di layar, memberi tahu pengguna bahwa halaman sedang dimuat.

- **`<Header />`**: Komponen `Header` yang akan selalu ditampilkan di bagian atas layout.

- **`<main>`**: Bagian utama dari layout yang berfungsi sebagai area tempat komponen halaman yang aktif akan dirender. Ini adalah tempat di mana **`Outlet`** berada.

  - **`<Outlet />`**: Ini adalah elemen dari React Router yang bertanggung jawab untuk merender konten yang sesuai berdasarkan rute yang sedang aktif. Konten di dalam `Outlet` akan berubah sesuai dengan navigasi halaman, namun komponen `Header` dan `CartOverview` akan tetap berada di tempatnya.

- **`<CartOverview />`**: Komponen ini terletak di bagian bawah layout, dan menampilkan ringkasan keranjang belanja, biasanya dengan informasi tentang jumlah item atau total harga.

### 3. Ekspor Komponen

```javascript
export default AppLayout;
```

- **`export default AppLayout;`**: Menyediakan komponen `AppLayout` untuk digunakan di luar file ini. Ini memungkinkan komponen `AppLayout` untuk diimpor dan digunakan sebagai layout utama dalam aplikasi.

---

## Kesimpulan

Komponen `AppLayout` berfungsi sebagai **kerangka layout** dasar yang digunakan di seluruh aplikasi. Ini mencakup:

- **Header** di bagian atas.
- **Area dinamis** (`<main>`) yang menampilkan halaman-halaman berbeda berdasarkan rute yang sedang aktif menggunakan `<Outlet />`.
- **CartOverview** di bagian bawah untuk memberikan ringkasan informasi tentang keranjang belanja pengguna.

Selain itu, komponen ini juga menangani **loading state** dengan menampilkan komponen `Loader` ketika aplikasi sedang memuat halaman baru. Dengan menggunakan `useNavigation` dari React Router, kita bisa memantau status navigasi dan memberikan feedback visual kepada pengguna saat menunggu halaman baru dimuat.

Dengan demikian, `AppLayout` menjadi komponen penting untuk memberikan struktur dan pengalaman pengguna yang konsisten di seluruh aplikasi React yang menggunakan React Router.
