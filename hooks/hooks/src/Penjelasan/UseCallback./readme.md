# README: Memahami Hooks React - useCallback

## Pengertian

**useCallback** adalah hook di React yang digunakan untuk mengoptimalkan performa aplikasi dengan memcached fungsi. Hook ini mengembalikan versi memoized dari fungsi yang hanya berubah jika salah satu dependensi dalam array dependensi berubah. Ini sangat berguna untuk menghindari re-render yang tidak perlu, terutama ketika kita meneruskan fungsi sebagai props ke komponen anak.

## Fungsi Kode

Berikut adalah contoh implementasi `useCallback`:

```javascript
import React, { useCallback, useState } from "react";
import List from "../components/List";

const UseCallback = () => {
  const [state, setState] = useState(false);
  const [dep, setDep] = useState(false);
  console.log("Parent Component rendered");

  const handler = useCallback(
    (event) => {
      console.log("You clicked ", event.currentTarget);
    },
    [dep]
  );

  const stateHandler = () => {
    setState(!state);
  };

  return (
    <>
      <button onClick={stateHandler}>Change State Of Parent Component</button>
      <List handler={handler} />
      <button onClick={() => setDep(!dep)}>Ganti Dependency</button>
    </>
  );
};

export default UseCallback;
```

### Penjelasan Kode

1. **useState**: Kita mendefinisikan dua state: `state` dan `dep`. `state` digunakan untuk mengubah state dari komponen induk, sedangkan `dep` berfungsi sebagai dependensi untuk `useCallback`.

2. **useCallback**: Kita membuat fungsi `handler` yang menggunakan `useCallback`. Fungsi ini hanya akan dibuat ulang jika nilai `dep` berubah. Ini berarti jika `dep` tidak berubah, `handler` akan tetap sama antara render.

3. **stateHandler**: Fungsi ini digunakan untuk mengubah state dari komponen induk.

4. **Render**: Komponen menampilkan dua tombol—satu untuk mengubah state dari komponen induk dan satu untuk mengganti dependensi. Komponen `List` menerima `handler` sebagai props.

## Cara Berpikir React

Dalam React, performa adalah kunci, terutama untuk aplikasi yang lebih besar. Menggunakan `useCallback` membantu kita mengontrol kapan fungsi dibuat ulang. Dengan mengoptimalkan fungsi yang sering diteruskan sebagai props, kita dapat mencegah re-render yang tidak perlu pada komponen anak.

### Analogi Sederhana

Bayangkan kita memiliki resep yang sama untuk membuat kue. Jika kita terus menulis ulang resep setiap kali kita ingin membuat kue, itu akan menjadi tidak efisien. Alih-alih, kita bisa menyimpan resep tersebut dan hanya mengacu padanya setiap kali kita ingin membuat kue (menggunakan `useCallback`). Dengan cara ini, kita menghemat waktu dan usaha.

## Penggunaan Umum `useCallback`

### 1. Mencegah Re-render Komponen Anak

`useCallback` sangat berguna saat kita ingin mencegah re-render komponen anak yang bergantung pada fungsi yang diteruskan sebagai props. Ini bisa sangat berguna untuk komponen yang mahal dalam hal performa.

### 2. Memperbaiki Performa pada Daftar Panjang

Ketika menangani daftar panjang item (seperti dalam aplikasi e-commerce), menggunakan `useCallback` dapat mencegah komponen dari re-render yang tidak perlu saat fungsi tidak berubah.

### 3. Integrasi dengan Library Pihak Ketiga

Saat menggunakan library pihak ketiga yang mengandalkan referensi fungsi, `useCallback` membantu memastikan bahwa fungsi yang diteruskan tetap sama sepanjang siklus hidup komponen.

## Contoh Proyek Nyata

### 1. Aplikasi E-Commerce

Dalam aplikasi seperti **Amazon**, kita bisa menggunakan `useCallback` untuk fungsi filter atau pencarian yang diteruskan ke komponen anak. Ini memastikan bahwa komponen anak tidak re-render saat komponen induk berubah tanpa mengubah fungsi pencarian.

### 2. Aplikasi Media Sosial

Dalam aplikasi seperti **Facebook**, `useCallback` dapat digunakan untuk mengelola fungsi yang mengubah status atau komentar, memastikan performa tetap optimal saat pengguna berinteraksi dengan banyak elemen UI.

### 3. Aplikasi Dashboard

Pada aplikasi analitik seperti **Google Analytics**, `useCallback` bisa digunakan untuk fungsi pengambilan data yang kompleks, sehingga pengguna dapat melihat data tanpa mengalami lag yang disebabkan oleh re-render yang berlebihan.

## Kesimpulan

`useCallback` adalah alat yang penting dalam React untuk mengoptimalkan performa dengan mencegah re-render yang tidak perlu. Dengan memahami dan menerapkan `useCallback`, kita dapat meningkatkan efisiensi aplikasi dan memberikan pengalaman pengguna yang lebih baik. Contoh di atas menunjukkan bagaimana membuat dan menggunakan `useCallback` untuk mengelola fungsi di dalam komponen, serta manfaatnya dalam situasi nyata.
