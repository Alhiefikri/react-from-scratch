# Penjelasan Komponen `Main`

Komponen **Main** ini adalah komponen pembungkus (wrapper) yang digunakan untuk membungkus seluruh konten utama aplikasi, dalam hal ini adalah bagian-bagian utama dari kuis. Komponen ini akan menerima `children` sebagai props dan menampilkannya di dalam elemen `<main>` dengan kelas CSS `main`.

---

## **Pengertian**

Komponen `Main` adalah komponen sederhana yang hanya bertugas untuk membungkus konten yang diterimanya (dalam bentuk `children`) ke dalam elemen HTML `<main>`. Ini memberi struktur pada aplikasi dan memastikan bahwa konten utama ditampilkan di dalam elemen `<main>` untuk tujuan semantik dan styling.

---

## **Cara Berpikir Komponen Ini**

Komponen ini berfungsi sebagai wadah (wrapper) untuk komponen-komponen lain yang menjadi bagian utama dari aplikasi. `children` akan diteruskan ke dalam komponen ini dan ditampilkan di dalam elemen `<main>`. Dengan demikian, komponen `Main` tidak mengubah atau memanipulasi konten apapun, hanya menyediakannya tempat yang konsisten di dalam halaman.

---

## **Analogi Sederhana**

Bayangkan `Main` seperti sebuah **lemari** besar yang memiliki banyak rak di dalamnya. Setiap rak di dalam lemari ini adalah komponen atau bagian dari aplikasi (seperti soal, timer, tombol, dll). Jadi, komponen `Main` hanya berfungsi untuk menampung dan mengorganisir semua "rak" tersebut dalam satu wadah yang besar.

---

## **Penjelasan Code Tiap Baris**

```javascript
const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};
```

- **`const Main = ({ children }) => {}`**: Ini adalah komponen berbasis fungsi yang menerima `children` sebagai props. `children` adalah konten yang dimasukkan ke dalam komponen `Main` saat digunakan.
- **`<main className="main">`**: Elemen HTML `<main>` digunakan untuk menandai bagian utama dari halaman, secara semantik menunjukkan bahwa ini adalah konten utama aplikasi. Elemen ini memiliki kelas CSS `main` untuk penataan tampilan (styling).
- **`{children}`**: Ini adalah tempat di mana konten yang diteruskan ke dalam komponen `Main` akan ditampilkan. Dengan kata lain, komponen ini akan menerima elemen-elemen lain (seperti soal, tombol, dll) dan menampilkannya di dalam elemen `<main>`.

---

## **Kesimpulan**

Komponen `Main` adalah komponen pembungkus yang menampung dan menampilkan konten utama aplikasi dalam elemen `<main>`. Komponen ini menerima `children` dan menampilkannya di dalam elemen HTML `<main>` dengan kelas CSS `main`.

- **Menyediakan Struktur**: Memberikan struktur halaman dengan menyertakan elemen `<main>` yang mengandung konten utama aplikasi.
- **Menggunakan `children`**: Semua elemen yang diteruskan ke dalam komponen ini akan ditampilkan di dalamnya.
- **Semantik HTML**: Menggunakan elemen `<main>` yang memberikan arti semantik sebagai bagian utama dari halaman, membuat aplikasi lebih mudah dipahami oleh mesin pencari dan pembaca layar.

Komponen ini sangat sederhana tetapi sangat penting dalam memberikan struktur yang konsisten di seluruh aplikasi.
