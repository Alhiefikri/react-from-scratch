# README: Penjelasan tentang Custom Hook `useKey`

## Pengertian

`useKey` adalah sebuah **custom hook** dalam React yang memungkinkan kita untuk menangani event keypress atau penekanan tombol pada keyboard. Hook ini berguna jika kita ingin menjalankan sebuah aksi tertentu ketika tombol keyboard tertentu ditekan.

Pada dasarnya, custom hook ini mengabstraksi logika deteksi penekanan tombol ke dalam satu fungsi sehingga kita bisa menggunakannya secara ulang (reusable) di berbagai komponen React.

## Cara Berpikir React

Di React, kita bekerja dengan konsep **state** dan **effects**. Ketika sebuah komponen perlu merespon perubahan eksternal (seperti penekanan tombol keyboard), kita menggunakan **hooks**. `useEffect` adalah salah satu hook yang memungkinkan kita untuk melakukan aksi setelah render komponen. Di dalam `useEffect`, kita dapat menangani efek samping, seperti mendengarkan event atau melakukan pembersihan setelah event selesai.

Selain itu, React mengedepankan prinsip **composability**—artinya kita dapat membangun aplikasi dari komponen-komponen kecil yang dapat dipakai ulang, salah satunya melalui custom hooks.

## Analogi Sederhana

Bayangkan kamu sedang menulis sebuah surat, dan kamu ingin surat itu hanya bisa diubah jika seseorang menekan tombol tertentu, misalnya tombol `Enter`. `useKey` adalah seperti seorang asisten yang berdiri di dekat kamu dan mendengarkan tombol `Enter` yang ditekan. Ketika tombol itu ditekan, asisten akan memerintahkan kamu untuk melakukan aksi tertentu (misalnya, mengirim surat). Asisten ini juga akan berhenti bekerja saat surat selesai ditulis, sehingga tidak ada lagi gangguan.

## Penjelasan Code Tiap Baris

```javascript
import { useEffect } from "react";
```

- **Baris ini** mengimpor hook `useEffect` dari React. Hook ini digunakan untuk menjalankan efek samping (side effects) setelah komponen dirender.

```javascript
export function useKey(key, action) {
```

- **Baris ini** mendefinisikan custom hook `useKey`. Hook ini menerima dua parameter:
  - `key`: nama tombol keyboard yang ingin kita dengarkan (misalnya `"Enter"`).
  - `action`: fungsi yang akan dipanggil saat tombol tersebut ditekan.

```javascript
  useEffect(
    function () {
```

- **Baris ini** menggunakan `useEffect` untuk menetapkan efek samping. `useEffect` menerima fungsi yang dijalankan setelah render komponen.

```javascript
function callback(e) {
  if (e.code.toLowerCase() === key.toLowerCase()) {
    action();
  }
}
```

- **Baris ini** mendefinisikan fungsi `callback` yang akan dipanggil setiap kali event `keydown` terjadi. Fungsi ini akan memeriksa apakah tombol yang ditekan (dari properti `e.code` pada event) sama dengan `key` yang diberikan pada parameter hook.
- `e.code` adalah properti event yang menunjukkan tombol yang ditekan. Kita menggunakan `toLowerCase()` untuk menghindari masalah perbedaan huruf besar dan kecil pada nama tombol (misalnya, `"Enter"` vs `"enter"`).
- Jika tombol yang ditekan cocok dengan `key`, maka fungsi `action` akan dipanggil, yang berarti aksi tertentu akan dieksekusi.

```javascript
document.addEventListener("keydown", callback);
```

- **Baris ini** menambahkan event listener ke objek `document`. Setiap kali event `keydown` terjadi (tombol ditekan), fungsi `callback` akan dipanggil.

```javascript
return function () {
  document.removeEventListener("keydown", callback);
};
```

- **Baris ini** adalah **pembersihan** efek samping (clean-up) yang dilakukan saat komponen dibersihkan atau hook tidak digunakan lagi.
- Fungsi `removeEventListener` akan menghapus event listener yang sebelumnya telah ditambahkan. Ini penting untuk mencegah memory leak (memori yang tidak terlepas) jika komponen dihapus atau jika hook tidak lagi diperlukan.

```javascript
    },
    [action, key]
  );
}
```

- **Baris ini** adalah bagian terakhir dari `useEffect`. `useEffect` kedua argumennya adalah array dependensi.
- Artinya, efek ini hanya akan dijalankan ulang jika `action` atau `key` berubah. Ini adalah cara React mengoptimalkan komponen agar tidak melakukan render atau efek berulang tanpa alasan.

## Kesimpulan

Custom hook `useKey` memberikan cara yang sederhana dan elegan untuk menangani event `keydown` di dalam komponen React. Dengan menggunakan hook ini, kita tidak perlu menulis ulang logika penanganan key event di berbagai tempat dalam aplikasi. Cukup gunakan hook ini dengan dua parameter utama:

1. `key`: nama tombol yang ingin dideteksi.
2. `action`: fungsi yang ingin dijalankan saat tombol tersebut ditekan.

Penggunaan `useEffect` memastikan bahwa event listener ditambahkan setelah render dan dibersihkan dengan benar ketika komponen tidak lagi membutuhkan event tersebut.

Contoh penggunaan:

```javascript
import { useKey } from "./useKey";

function App() {
  useKey("Enter", () => {
    console.log("Tombol Enter ditekan!");
  });

  return <div>Tekan tombol Enter di keyboard untuk melihat log!</div>;
}
```

Pada contoh di atas, setiap kali tombol `Enter` ditekan, akan muncul log di konsol.

Dengan menggunakan custom hook `useKey`, kita dapat lebih efisien mengelola event keyboard dalam aplikasi React kita!
