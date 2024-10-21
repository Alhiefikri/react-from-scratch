# README: Memahami Custom Hook di React - useVideos

## Pengertian

**Custom Hook** adalah fungsi JavaScript yang dapat menggunakan satu atau lebih Hooks React. Custom Hook memungkinkan kita untuk mengelola logika stateful yang dapat digunakan kembali di berbagai komponen. Dengan membuat Custom Hook, kita dapat memisahkan logika bisnis dari tampilan UI, sehingga kode menjadi lebih bersih dan mudah dikelola.

## Fungsi Kode

Berikut adalah contoh implementasi Custom Hook menggunakan `useVideos`:

```javascript
/** @format */

import React from "react";
import { useState } from "react";
import useVideos from "../useVideos";

const CustomHook = () => {
  const [term, setTerm] = useState(null);
  const [videos, search] = useVideos("murrotal");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(term);
    search(term);
    console.log(videos);
  };

  return (
    <div className="container">
      <form className="content" onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(event) => setTerm(event.target.value)}
          id="simple-search"
          placeholder="Telusuri"
          required
        />
        <input type="submit" value="Cari" />
      </form>
      <div>
        {videos.map((video) => {
          return (
            <div className="content" key={video.id.videoId}>
              <img
                alt={video.snippet.title}
                src={video.snippet.thumbnails.medium.url}
              />
              <div className="">
                <p className="text-sm font-roboto font-bold line-clamp-2">
                  {video.snippet.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomHook;
```

### Penjelasan Kode

1. **useState**: Menggunakan `useState` untuk menyimpan nilai input pencarian (`term`).
2. **useVideos**: Memanggil Custom Hook `useVideos` dengan parameter pencarian awal ('murrotal'). Hook ini mengembalikan array yang berisi daftar video dan fungsi `search`.
3. **onSubmit**: Fungsi ini menangani pengiriman form. Ketika form disubmit, nilai `term` akan dicetak dan fungsi `search` akan dipanggil untuk mencari video berdasarkan input.
4. **Render**: Komponen akan merender form pencarian dan daftar video yang ditemukan, lengkap dengan gambar dan judul.

## Cara Berpikir React

Dengan Custom Hook, kita bisa memisahkan logika dari komponen UI. Ini membuat komponen lebih mudah dibaca dan diuji. Logika yang sama dapat digunakan di berbagai komponen tanpa mengulangi kode, meningkatkan efisiensi pengembangan.

### Analogi Sederhana

Bayangkan kita membuat resep masakan. Jika kita membuat resep yang sama berulang kali, alih-alih menuliskan semua langkah setiap kali, kita bisa menuliskan langkah-langkahnya di sebuah buku resep (Custom Hook). Ketika kita ingin memasak, kita cukup merujuk ke buku tersebut untuk mendapatkan instruksi.

## Penggunaan Umum Custom Hook

### 1. Pengelolaan Data API

Custom Hook sering digunakan untuk mengambil data dari API, seperti contoh di atas dengan `useVideos`. Ini memungkinkan kita untuk menangani logika pengambilan data dengan mudah.

### 2. Formulir Dinamis

Custom Hook dapat digunakan untuk mengelola state dan validasi dalam formulir yang kompleks, memisahkan logika formulir dari tampilan UI.

### 3. Manajemen Autentikasi

Custom Hook juga bisa digunakan untuk mengelola state autentikasi, seperti login dan logout, sehingga dapat digunakan kembali di berbagai komponen.

### 4. Efek Samping

Kita bisa menggunakan Custom Hook untuk menangani efek samping yang berulang, seperti pengaturan interval atau event listener.

## Contoh Proyek Nyata

### 1. Aplikasi Video Streaming

Dalam aplikasi seperti **YouTube**, Custom Hook seperti `useVideos` bisa digunakan untuk mengambil dan mengelola data video, memungkinkan pengguna untuk mencari dan menampilkan video dengan efisien.

### 2. Aplikasi E-Commerce

Custom Hook bisa digunakan untuk menangani logika keranjang belanja, pengambilan data produk, dan filter produk, membuat kode lebih modular.

### 3. Aplikasi Manajemen Proyek

Dalam aplikasi seperti **Trello**, Custom Hook dapat digunakan untuk mengelola data tugas dan proyek, memungkinkan berbagai komponen untuk mengakses dan mengubah data dengan mudah.

## Kesimpulan

Custom Hook adalah alat yang powerful dalam React untuk memisahkan logika dari tampilan, memungkinkan penggunaan ulang kode di berbagai komponen. Dengan Custom Hook, kita dapat meningkatkan keterbacaan, pengujian, dan pengelolaan kode dalam aplikasi React. Contoh di atas menunjukkan bagaimana membuat dan menggunakan Custom Hook untuk pengambilan data video, dan pendekatan ini dapat diterapkan dalam berbagai konteks lainnya.
