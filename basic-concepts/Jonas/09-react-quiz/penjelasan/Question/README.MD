# Penjelasan Komponen `Question`

Komponen **Question** ini bertanggung jawab untuk menampilkan sebuah soal dalam kuis, lengkap dengan pilihan jawabannya. Komponen ini menerima data soal (pertanyaan) dan meneruskannya ke komponen **Option**, yang akan menampilkan pilihan jawaban.

---

## **Pengertian**

Komponen `Question` digunakan untuk menampilkan:

1. **Pertanyaan**: Menampilkan soal yang sedang dihadapi.
2. **Pilihan Jawaban**: Menyediakan opsi untuk memilih jawaban, yang dikelola oleh komponen lain, yaitu komponen **Option**.

Komponen ini bekerja dengan cara menerima soal (pertanyaan) dan menampilkan jawaban dari soal tersebut dengan bantuan komponen **Option**.

---

## **Cara Berpikir Komponen Ini**

Komponen `Question` bertugas untuk:

1. Menampilkan teks soal.
2. Menyertakan komponen lain (`Option`) yang menangani pilihan jawaban.

Intinya, komponen ini adalah **penghubung** antara data soal dan cara menampilkan pilihan-pilihan jawaban melalui komponen `Option`.

---

## **Analogi Sederhana**

Bayangkan kamu sedang mengikuti ujian, dan soal pertama muncul di layar. Setelah itu, kamu diberi beberapa pilihan jawaban di bawah soal tersebut. Komponen `Question` bertindak seperti bagian yang menampilkan soal, sementara komponen **Option** adalah bagian yang menampilkan pilihan jawabannya.

---

## **Penjelasan Code Tiap Baris**

```javascript
import Option from "./Option";
```

- **`import Option from "./Option"`**: Menyertakan komponen `Option` yang akan digunakan untuk menampilkan pilihan jawaban dari soal.

### **Bagian 1: Fungsi Komponen `Question`**

```javascript
function Question({ question, dispatch, answer }) {
```

- **`Question`** adalah komponen berbasis fungsi yang menerima tiga properti (props):
  - **`question`**: Berisi objek soal yang akan ditampilkan. Objek ini biasanya mencakup teks soal dan pilihan-pilihan jawabannya.
  - **`dispatch`**: Fungsi yang digunakan untuk mengirimkan aksi ke reducer, yang digunakan untuk memperbarui status aplikasi, misalnya, untuk mengirimkan jawaban yang dipilih.
  - **`answer`**: Menyimpan jawaban yang dipilih untuk soal ini (bisa bernilai `null` jika belum ada jawaban).

### **Bagian 2: Menampilkan Soal dan Komponen `Option`**

```javascript
return (
  <div>
    <h4>{question.question}</h4>
    <Option question={question} dispatch={dispatch} answer={answer} />
  </div>
);
```

- **`<h4>{question.question}</h4>`**: Menampilkan teks dari soal yang ada dalam objek `question`. Properti `question` di dalam objek `question` adalah teks soal yang akan ditampilkan kepada pengguna.
- **`<Option question={question} dispatch={dispatch} answer={answer} />`**: Komponen `Option` digunakan untuk menampilkan pilihan jawaban. Komponen ini menerima:
  - **`question`**: Menyertakan data soal, yang akan diteruskan ke dalam komponen `Option`.
  - **`dispatch`**: Fungsi yang diteruskan agar komponen `Option` bisa mengirimkan aksi jika ada jawaban yang dipilih.
  - **`answer`**: Nilai jawaban yang dipilih, untuk memungkinkan komponen `Option` tahu apakah soal ini sudah dijawab atau belum.

---

## **Kesimpulan**

Komponen `Question` adalah komponen yang menampilkan soal dan mengirimkan data soal serta informasi terkait (seperti jawaban yang dipilih dan fungsi `dispatch`) ke komponen lain, yaitu `Option`, untuk menampilkan pilihan jawabannya.

- **Menampilkan Soal**: Komponen ini menampilkan teks soal yang sedang dikerjakan.
- **Menghubungkan ke `Option`**: Menyertakan komponen `Option` yang menampilkan pilihan jawaban.
- **Menggunakan Props**: Menggunakan props untuk meneruskan data soal, `dispatch`, dan jawaban yang sudah dipilih.

Dengan cara ini, komponen `Question` berfungsi sebagai penghubung antara data soal dan komponen yang menampilkan pilihan jawabannya, memberikan struktur yang bersih dan mudah dikelola untuk aplikasi kuis.
