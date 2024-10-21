# README: Memahami Hooks React - useMemo

## Pengertian

**useMemo** adalah hook di React yang digunakan untuk mengingat hasil perhitungan (memoization) sehingga tidak perlu menghitung ulang nilai yang sama di setiap render, terutama saat perhitungan tersebut memakan waktu. Ini membantu meningkatkan performa aplikasi dengan menghindari perhitungan yang tidak perlu.

## Fungsi Kode

Berikut adalah contoh implementasi `useMemo`:

```javascript
import React, { useEffect, useMemo, useState } from "react";

function getKuadrat(num) {
  console.log("fungsi kuadrat");
  for (let i = 0; i < 2000000000; i++) {}
  return num * num;
}

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [redButton, setRedButton] = useState(false);

  const kuadrat = useMemo(() => {
    return getKuadrat(count);
  }, [count]);

  const display = useMemo(() => {
    return {
      text: redButton
        ? "Click untuk membuat button blue"
        : "Click untuk membuat button red",
      color: `${redButton ? "red" : ""}`,
    };
  }, [redButton]);

  useEffect(() => {
    console.log("display dibuat ulang");
  }, [display]);

  return (
    <div className="container">
      <div className="hooks">useMemo</div>
      <div className="content">
        <button
          className={`${redButton ? "red" : ""}`}
          onClick={() => setCount((count) => count - 1)}
        >
          decrement
        </button>
        <div>{count}</div>
        <button
          className={`${redButton ? "red" : ""}`}
          onClick={() => setCount((count) => count + 1)}
        >
          increment
        </button>
      </div>
      <button
        className={display.color}
        onClick={() => setRedButton((color) => !color)}
      >
        {display.text}
      </button>
      <div>Hasil dari count x count = {kuadrat}</div>
    </div>
  );
};

export default UseMemo;
```

### Penjelasan Kode

1. **State dan Fungsi**:

   - `count`: menyimpan nilai yang dapat dihitung kuadratnya.
   - `redButton`: digunakan untuk mengubah tampilan tombol.
   - `getKuadrat(num)`: fungsi yang menghitung kuadrat dari angka dan memiliki latensi yang tinggi (simulasi).

2. **useMemo untuk Kuadrat**:

   - `kuadrat`: menggunakan `useMemo` untuk menyimpan hasil dari `getKuadrat(count)`. Fungsi ini hanya akan dipanggil ulang ketika `count` berubah.

3. **useMemo untuk Display**:

   - `display`: menggunakan `useMemo` untuk menghasilkan objek dengan properti `text` dan `color` berdasarkan nilai `redButton`. Ini akan menghentikan pembuatan ulang objek ini sampai `redButton` berubah.

4. **useEffect**:

   - Menggunakan `useEffect` untuk mencetak pesan ke konsol ketika `display` diubah, menunjukkan bahwa objek baru telah dibuat.

5. **Render Komponen**:
   - Terdapat dua tombol untuk increment dan decrement `count`, serta tombol yang mengubah warna berdasarkan nilai `redButton`. Hasil kuadrat dari `count` ditampilkan di bagian bawah.

## Cara Berpikir React

`useMemo` memungkinkan kita untuk mengoptimalkan performa aplikasi dengan menyimpan hasil perhitungan yang mahal dan hanya menghitung ulang saat data yang relevan berubah. Ini berguna saat bekerja dengan komponen yang memerlukan banyak perhitungan atau saat rendering dapat menghambat kinerja aplikasi.

### Analogi Sederhana

Bayangkan Anda seorang pelukis yang hanya ingin menggambar ulang gambar saat Anda mengubah sketsa asli. Dengan `useMemo`, Anda bisa menyimpan gambar yang sudah jadi dan hanya menggambar ulang ketika sketsa berubah, menghemat waktu dan usaha.

## Penggunaan Umum `useMemo`

### 1. Menghindari Perhitungan Ulang

`useMemo` sering digunakan untuk menghindari perhitungan ulang pada nilai yang mahal, seperti hasil dari algoritma atau fungsi kompleks.

### 2. Mengoptimalkan Render

Saat merender daftar yang panjang atau elemen kompleks, `useMemo` dapat digunakan untuk menghindari render ulang yang tidak perlu pada elemen yang tidak berubah.

### 3. Menghasilkan Objek Stabil

Menghasilkan objek atau array yang stabil untuk digunakan sebagai dependensi dalam hook lain, seperti `useEffect` atau `useCallback`.

## Contoh Proyek Nyata

### 1. Aplikasi Dashboard

Di aplikasi dashboard analitik, kita dapat menggunakan `useMemo` untuk menghitung metrik yang kompleks hanya saat data sumber berubah, menghindari perhitungan berulang yang tidak perlu.

### 2. Aplikasi E-Commerce

Dalam aplikasi e-commerce, `useMemo` dapat digunakan untuk menghitung total harga produk dalam keranjang belanja tanpa menghitung ulang setiap kali ada render yang tidak terkait.

### 3. Aplikasi Pembuat Laporan

Di aplikasi yang memungkinkan pengguna untuk membuat laporan, `useMemo` dapat digunakan untuk menghitung hasil atau ringkasan hanya saat data yang relevan diubah.

## Kesimpulan

`useMemo` adalah hook yang sangat bermanfaat dalam React untuk meningkatkan performa aplikasi dengan menyimpan hasil perhitungan yang mahal. Dengan memahami dan menerapkan `useMemo`, kita dapat menghindari perhitungan ulang yang tidak perlu dan menjaga aplikasi tetap responsif. Contoh di atas menunjukkan penggunaan `useMemo` dalam konteks perhitungan kuadrat, dan penerapan ini dapat disesuaikan dengan berbagai kebutuhan aplikasi.
