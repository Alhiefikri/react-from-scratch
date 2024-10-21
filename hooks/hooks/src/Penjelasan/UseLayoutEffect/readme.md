# README: Memahami Hooks React - useLayoutEffect

## Pengertian

**useLayoutEffect** adalah hook di React yang mirip dengan `useEffect`, tetapi berbeda dalam hal waktu eksekusi. `useLayoutEffect` dijalankan setelah semua DOM di-render, tetapi sebelum browser menggambar (paint) ke layar. Ini berguna untuk mengatur layout dan DOM sebelum tampilan diperbarui, memastikan bahwa pengguna tidak melihat perubahan yang tidak diinginkan atau flicker.

## Fungsi Kode

Berikut adalah contoh implementasi `useLayoutEffect`:

```javascript
import React, { useRef, useState, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  const [number, setNumber] = useState(0);
  const [sectionStyle, setSectionStyle] = useState({});
  const sectionRef = useRef();

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);
    for (let i = 0; i <= 100000000; i++) {
      if (i === 100000) setSectionStyle({ paddingTop: `${random}px` });
    }
  }, [number]);

  return (
    <div className="container">
      <section className="content" ref={sectionRef} style={sectionStyle}>
        <button onClick={() => setNumber((prev) => prev - 1)}>-</button>
        <div>{number}</div>
        <button onClick={() => setNumber((prev) => prev + 1)}>+</button>
      </section>
    </div>
  );
};

export default UseLayoutEffect;
```

### Penjelasan Kode

1. **State dan Ref**: Kita mendefinisikan dua state:

   - `number`: digunakan untuk menghitung nilai yang ditampilkan.
   - `sectionStyle`: digunakan untuk menyimpan gaya dinamis dari elemen `section`.

2. **useLayoutEffect**: Hook ini digunakan untuk mengatur gaya `paddingTop` dari elemen berdasarkan angka acak yang dihasilkan. Ini memastikan bahwa perubahan pada gaya terjadi sebelum browser melakukan render.

3. **Pengaturan Gaya**: Dalam `useLayoutEffect`, kita menghasilkan angka acak dan mengubah `sectionStyle` hanya setelah iterasi mencapai 100.000. Hal ini bisa menambah latensi jika dibiarkan terus-menerus, tetapi memberikan gambaran tentang cara kerja `useLayoutEffect`.

4. **Render Komponen**: Komponen merender dua tombol untuk increment dan decrement nilai, serta menampilkan nilai tersebut di tengah.

## Cara Berpikir React

`useLayoutEffect` memungkinkan kita untuk melakukan manipulasi DOM yang memerlukan hasil yang segera terlihat oleh pengguna. Dengan menggunakan hook ini, kita dapat memanipulasi layout dan gaya sebelum browser melakukan rendering, sehingga mengurangi risiko flickering atau perubahan yang terlihat oleh pengguna.

### Analogi Sederhana

Bayangkan kita seorang arsitek yang memastikan bahwa semua furnitur telah ditempatkan dengan benar sebelum membuka pintu untuk tamu. Dengan `useLayoutEffect`, kita memastikan bahwa semua elemen berada pada tempatnya sebelum tamu melihat ruangan tersebut.

## Penggunaan Umum `useLayoutEffect`

### 1. Mengatur Layout

`useLayoutEffect` sering digunakan untuk mengatur layout yang membutuhkan pengukuran sebelum penggambaran.

### 2. Animasi

Kita bisa menggunakannya untuk menginisialisasi animasi dengan gaya yang tepat sebelum elemen dirender ke layar.

### 3. Metrik DOM

Saat kita perlu mengambil ukuran atau posisi elemen DOM yang sudah ada sebelum rendering dilakukan.

### 4. Integrasi dengan Library Pihak Ketiga

Ketika menggunakan library pihak ketiga yang memerlukan ukuran dan posisi elemen, `useLayoutEffect` dapat memastikan bahwa data tersebut akurat.

## Contoh Proyek Nyata

### 1. Dashboard Analitik

Dalam aplikasi dashboard analitik, `useLayoutEffect` dapat digunakan untuk menghitung ukuran elemen grafik sebelum menggambar data.

### 2. Aplikasi Pembuat Formulir

Saat membangun aplikasi pembuat formulir yang dinamis, `useLayoutEffect` dapat digunakan untuk mengatur elemen input berdasarkan layout yang diinginkan.

### 3. Aplikasi E-Commerce

Dalam aplikasi e-commerce, kita dapat menggunakan `useLayoutEffect` untuk menghitung dan menyesuaikan tampilan gambar produk sebelum rendering.

## Kesimpulan

`useLayoutEffect` adalah hook yang sangat berguna dalam React untuk melakukan manipulasi DOM sebelum browser menggambar ke layar. Dengan memahami dan menerapkan `useLayoutEffect`, kita dapat memastikan bahwa semua perubahan layout terlihat mulus tanpa flickering. Contoh di atas menunjukkan bagaimana menggunakan `useLayoutEffect` dalam konteks pengaturan gaya dinamis, dan penerapan ini dapat disesuaikan dengan berbagai kebutuhan aplikasi.
