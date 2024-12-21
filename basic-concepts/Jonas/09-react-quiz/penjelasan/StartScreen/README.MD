# Penjelasan Komponen `StartScreen`

Komponen **StartScreen** ini bertanggung jawab untuk menampilkan layar awal aplikasi kuis, di mana pengguna disambut dan diberi opsi untuk memulai kuis. Komponen ini juga menampilkan jumlah soal yang akan dijawab oleh pengguna. Ketika pengguna siap untuk memulai, mereka dapat menekan tombol untuk memulai kuis.

---

## **Pengertian**

Komponen `StartScreen` digunakan untuk menampilkan tampilan awal sebelum kuis dimulai. Tampilan ini memberi informasi tentang jumlah soal yang ada dalam kuis, serta menyajikan tombol yang akan memulai kuis tersebut.

Komponen ini menggunakan **dispatch** untuk mengirimkan tindakan ke **reducer** yang akan mengubah status aplikasi menjadi "active" (aktif), menandakan bahwa kuis sudah dimulai.

---

## **Cara Berpikir Komponen Ini**

Komponen `StartScreen` adalah tampilan **awal** atau **splash screen** yang memberikan informasi awal kepada pengguna sebelum kuis dimulai. Di dalamnya ada dua elemen utama:

1. **Informasi tentang jumlah soal** yang akan dihadapi.
2. **Tombol untuk memulai** permainan.

Ketika pengguna mengklik tombol, aplikasi akan memulai kuis dengan mengubah status menjadi aktif menggunakan `dispatch`.

---

## **Analogi Sederhana**

Bayangkan kamu berada di depan pintu masuk ke sebuah kuis. Sebelum kamu masuk dan mulai menjawab soal, kamu melihat papan yang memberitahukan berapa banyak soal yang akan kamu jawab dan memberi kamu tombol untuk memulai kuis. Komponen `StartScreen` berfungsi seperti papan informasi tersebut.

---

## **Penjelasan Code Tiap Baris**

```javascript
function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let&apos;s start
      </button>
    </div>
  );
}
```

### **Bagian 1: Mendeklarasikan Fungsi Komponen**

```javascript
function StartScreen({ numQuestions, dispatch }) {
```

- **`StartScreen`** adalah komponen berbasis fungsi yang menerima dua **props**:
  - **`numQuestions`**: Jumlah total soal yang ada dalam kuis.
  - **`dispatch`**: Fungsi yang digunakan untuk mengirimkan aksi (action) ke reducer untuk memperbarui status aplikasi.

### **Bagian 2: Elemen Tampilan (JSX)**

```javascript
return (
  <div className="start">
    <h2>Welcome to the React Quiz!</h2>
    <h3>{numQuestions} questions to test your React mastery</h3>
    <button className="btn btn-ui" onClick={() => dispatch({ type: "start" })}>
      Let&apos;s start
    </button>
  </div>
);
```

- **`<div className="start">`**: Membungkus seluruh konten dari komponen `StartScreen`. Biasanya ini digunakan untuk memberi gaya (styling) atau pengelompokkan elemen-elemen yang ada di dalamnya.
- **`<h2>`**: Menampilkan teks sambutan kepada pengguna, yaitu "Welcome to the React Quiz!".
- **`<h3>`**: Menampilkan jumlah soal yang ada, menggunakan properti `numQuestions` yang diterima dari komponen induk. Misalnya, jika ada 10 soal, maka akan muncul teks "10 questions to test your React mastery".
- **`<button>`**: Tombol yang memungkinkan pengguna untuk memulai kuis. Ketika tombol ini diklik:

  - **`onClick={() => dispatch({ type: "start" })}`**: Menggunakan fungsi `dispatch` untuk mengirimkan aksi dengan tipe `"start"`. Aksi ini akan ditangani oleh reducer di komponen `App` yang akan mengubah status aplikasi menjadi `"active"`, yang berarti kuis akan dimulai.

  - **`className="btn btn-ui"`**: Menambahkan kelas CSS untuk memberi gaya (styling) pada tombol.

  - **`Let&apos;s start`**: Teks pada tombol, yang menunjukkan kepada pengguna bahwa mereka bisa memulai kuis dengan mengklik tombol ini.

---

## **Kesimpulan**

Komponen `StartScreen` adalah layar pembuka yang digunakan untuk memberi informasi kepada pengguna tentang jumlah soal dalam kuis dan memungkinkan pengguna untuk memulai kuis dengan mengklik tombol "Let's start". Ketika tombol ditekan, komponen ini akan mengirimkan aksi menggunakan `dispatch`, yang akan memberi tahu reducer untuk mengubah status aplikasi menjadi `"active"`, menandakan bahwa kuis siap dimulai.

- **Tampilan yang Bersih**: Hanya menampilkan teks sambutan dan tombol untuk memulai.
- **Proses Interaktif**: Tombol akan mengirimkan aksi untuk memulai kuis.
- **Menggunakan dispatch**: Untuk mengubah status aplikasi dan memulai kuis.

Komponen ini sederhana tetapi penting untuk memberi pengguna gambaran awal tentang aplikasi dan memberi mereka kontrol untuk memulai kuis.
