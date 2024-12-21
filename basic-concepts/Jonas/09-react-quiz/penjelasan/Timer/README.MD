# Penjelasan Komponen `Timer`

Komponen **Timer** ini bertugas untuk menampilkan waktu mundur (countdown) selama kuis berlangsung dan mengatur pembaruan waktu setiap detiknya. Setiap detik, komponen ini mengirimkan aksi menggunakan `dispatch` untuk memperbarui status aplikasi terkait waktu yang tersisa.

---

## **Pengertian**

Komponen `Timer` berfungsi untuk menampilkan timer (waktu mundur) yang mengurangi satu detik setiap detiknya. Timer ini terhubung dengan status waktu yang tersisa (`secondRemaining`), dan setiap detik pembaruan, `dispatch` akan mengirimkan aksi untuk mengurangi waktu yang tersisa, hingga waktu habis dan kuis selesai.

---

## **Cara Berpikir Komponen Ini**

Komponen ini berfokus pada dua hal utama:

1. **Menghitung waktu mundur**: Mengurangi `secondRemaining` setiap detik.
2. **Menampilkan waktu dalam format MM:SS**: Mengubah detik yang tersisa menjadi format menit dan detik yang mudah dipahami oleh pengguna.

---

## **Analogi Sederhana**

Bayangkan kamu sedang mengikuti ujian, dan di atas meja ada jam hitung mundur yang menunjukkan berapa lama lagi waktu yang tersisa. Setiap detik jam itu terus berputar mundur, dan kamu bisa melihat berapa banyak waktu yang tersisa sampai ujian selesai. Komponen `Timer` bertindak seperti jam tersebut.

---

## **Penjelasan Code Tiap Baris**

```javascript
import { useEffect } from "react";
```

- **`useEffect`**: Hook React untuk menjalankan efek samping, dalam hal ini untuk mengatur interval setiap detik.

### **Bagian 1: Perhitungan Waktu**

```javascript
const mins = Math.floor(secondRemaining / 60);
const seconds = secondRemaining % 60;
```

- **`mins`**: Menghitung menit dengan membagi `secondRemaining` (jumlah detik yang tersisa) dengan 60 dan membulatkan hasilnya ke bawah menggunakan `Math.floor`.
- **`seconds`**: Menghitung detik yang tersisa setelah mengurangi menit, dengan menggunakan operasi modulus (`secondRemaining % 60`).

### **Bagian 2: Mengatur Interval**

```javascript
useEffect(() => {
  const id = setInterval(() => {
    dispatch({ type: "tick" });
  }, 1000);

  return () => clearInterval(id);
}, [dispatch]);
```

- **`useEffect`**: Efek ini digunakan untuk memulai interval saat komponen pertama kali dimuat dan membersihkannya ketika komponen di-unmount (hilang).
  - **`setInterval(() => { dispatch({ type: "tick" }); }, 1000)`**: Setiap detik (1000 ms), aksi `dispatch` dengan tipe `"tick"` dikirim ke reducer untuk mengurangi `secondRemaining` sebanyak satu detik.
  - **`clearInterval(id)`**: Menghentikan interval ketika komponen tidak lagi digunakan atau dihapus, untuk mencegah kebocoran memori atau interval yang terus berjalan.

### **Bagian 3: Menampilkan Timer**

```javascript
return (
  <div className="timer">
    {mins < 10 && "0"}
    {mins}:{seconds < 10 && "0"}
    {seconds}
  </div>
);
```

- **`<div className="timer">`**: Menampilkan elemen dengan kelas CSS untuk memberikan gaya pada timer.
- **`{mins < 10 && "0"}`**: Menambahkan angka "0" di depan menit jika menit kurang dari 10, agar formatnya konsisten (misalnya, "09" daripada "9").
- **`{mins}:{seconds < 10 && "0"}{seconds}`**: Menampilkan waktu dalam format **MM:SS** dengan menambahkan angka "0" jika detik kurang dari 10.

---

## **Kesimpulan**

Komponen `Timer` mengatur countdown dengan mengurangi detik yang tersisa setiap detiknya dan menampilkan waktu dalam format menit dan detik. Komponen ini menggunakan `setInterval` untuk pembaruan waktu setiap detik, dan `dispatch` untuk mengirimkan aksi yang memperbarui state waktu yang tersisa dalam aplikasi.

- **Penghitungan Waktu**: Timer mengubah `secondRemaining` menjadi format waktu yang mudah dipahami.
- **Interval Detik**: Menggunakan `setInterval` untuk mengurangi waktu secara real-time.
- **Menampilkan Timer**: Timer ditampilkan dalam format **MM:SS** dengan angka leading 0 jika perlu.

Komponen ini berfungsi dengan baik untuk aplikasi kuis yang membutuhkan penghitungan waktu yang akurat dan pembaruan setiap detik.
