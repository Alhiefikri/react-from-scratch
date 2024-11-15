# **Membangun Aplikasi Counter dan Tanggal dengan React**

## Tujuan Kode

Tujuan dari aplikasi ini adalah untuk membuat sebuah **counter** (penghitung) yang memungkinkan pengguna untuk menambah atau mengurangi jumlah hari dari tanggal saat ini. Dengan aplikasi ini, pengguna dapat melihat tanggal yang dihitung berdasarkan jumlah hari yang dimasukkan, baik itu hari ke depan maupun ke belakang.

---

## Penjelasan dan Pengertian

Pada aplikasi ini, kita akan membangun sebuah komponen React yang terdiri dari dua bagian utama:

1. **Counter** untuk mengubah nilai `count` (jumlah hari).
2. **Date** untuk menampilkan tanggal yang dihitung berdasarkan nilai `count` yang dipilih oleh pengguna.

### Konsep Penting:

- **useState**: Hook untuk menyimpan dan memperbarui state (data yang bisa berubah).
- **Event Handling**: Menggunakan fungsi `onClick` untuk menangani interaksi pengguna.
- **Conditional Rendering**: Menampilkan teks berbeda berdasarkan nilai `count`.
- **Date Object**: Menggunakan objek `Date` untuk mendapatkan tanggal saat ini dan memanipulasinya sesuai dengan nilai `count`.

---

## Penjelasan Tiap Baris Kode

### Baris Pertama - Impor React dan CSS:

```javascript
import { useState } from "react";
import "./App.css";
```

- **Penjelasan**:
  - `useState` diimpor dari React untuk mengelola state di komponen fungsional.
  - `./App.css` adalah file CSS untuk styling aplikasi (biasanya digunakan untuk penataan tampilan).

### Komponen `App`:

```javascript
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
```

- **Penjelasan**:
  - `App` adalah komponen utama dalam aplikasi. Di dalamnya, kita memanggil komponen `Counter` yang akan menangani fungsionalitas penghitung dan tanggal.

### Komponen `Counter`:

```javascript
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
```

- **Penjelasan**:
  - Di sini kita menggunakan dua `useState` hooks:
    - `count`: Menyimpan nilai penghitung yang akan mempengaruhi tanggal.
    - `step`: Menyimpan nilai langkah untuk setiap kali tombol "+" atau "-" diklik (misalnya, langkah 1, 2, dll.).

```javascript
const date = new Date();
date.setDate(date.getDate() + count);
```

- **Penjelasan**:
  - Membuat objek `date` yang berisi tanggal saat ini (`new Date()`).
  - `date.setDate(date.getDate() + count)` mengubah tanggal berdasarkan nilai `count`. Jika `count` bernilai positif, tanggal akan digeser ke depan; jika negatif, tanggal akan digeser ke belakang.

### Rendering UI:

```javascript
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span style={{ fontSize: "2rem" }}>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
```

- **Penjelasan**:
  - Di bagian ini, kita menampilkan dua tombol untuk mengatur nilai `step` (langkah) yang akan digunakan dalam penghitung. Setiap kali tombol diklik, nilai `step` akan dikurangi atau ditambah.
  - Fungsi `onClick` di tombol memanggil `setStep`, yang akan mengubah nilai `step` menggunakan fungsi callback `(c) => c - 1` atau `(c) => c + 1`.

```javascript
<div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
  <button onClick={() => setCount((c) => c - step)}>-</button>
  <span style={{ fontSize: "2rem" }}>Count: {count}</span>
  <button onClick={() => setCount((c) => c + step)}>+</button>
</div>
```

- **Penjelasan**:
  - Bagian ini adalah untuk kontrol penghitung utama (`count`). Tombol "+" dan "-" akan menambah atau mengurangi nilai `count` berdasarkan nilai `step`.
  - `setCount` digunakan untuk memperbarui nilai `count`. Fungsi `(c) => c - step` mengurangi `count` dengan nilai `step`, sedangkan `(c) => c + step` menambahkannya.

```javascript
      <p style={{ fontSize: "2rem" }}>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span> {date.toDateString()}</span>
      </p>
    </div>
  );
}
```

- **Penjelasan**:
  - Di sini kita menampilkan tanggal yang dihitung dan teks penjelasan.
  - **Conditional Rendering**: Berdasarkan nilai `count`, kita menampilkan teks yang berbeda:
    - Jika `count === 0`, kita menampilkan "Today is".
    - Jika `count > 0`, kita menampilkan "X days from today is".
    - Jika `count < 0`, kita menampilkan "X days ago was".
  - `date.toDateString()` mengubah objek `date` menjadi string tanggal yang lebih mudah dibaca (misalnya, "Sat Dec 28 2024").

---

## Cara Berpikir di React

1. **State dan Update**: Di React, kita bekerja dengan state yang bisa berubah (seperti `count` dan `step`). Ketika nilai state berubah, React akan otomatis merender ulang tampilan untuk mencocokkan state baru tersebut.
2. **Event Handling**: Pengguna berinteraksi dengan aplikasi melalui tombol, dan kita menangani interaksi ini dengan fungsi `onClick`.
3. **Komponen Terpisah**: Aplikasi dipecah menjadi komponen-komponen kecil (seperti `App` dan `Counter`), yang masing-masing bertanggung jawab untuk bagian tertentu dari UI dan logika.

---

## Kesimpulan

Aplikasi ini menunjukkan bagaimana cara membuat aplikasi penghitung (counter) dan menghitung tanggal dengan React. Kamu belajar bagaimana menggunakan `useState` untuk mengelola state, bagaimana menangani event, dan bagaimana memanipulasi objek `Date` untuk menampilkan tanggal yang diinginkan. Dengan menggunakan React, kita bisa membuat UI yang interaktif dan dinamis hanya dengan sedikit kode dan logika.

Jika kamu ingin mengembangkan lebih lanjut, kamu bisa menambahkan fitur seperti mengubah tampilan tanggal, menambahkan reset button, atau menyimpan nilai `count` agar tetap ada setelah halaman di-refresh.
