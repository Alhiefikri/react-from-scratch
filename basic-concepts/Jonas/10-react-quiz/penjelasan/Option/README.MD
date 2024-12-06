# Penjelasan Komponen `Option`

Komponen **Option** ini bertanggung jawab untuk menampilkan pilihan jawaban (options) bagi pengguna dalam sebuah soal kuis. Setiap pilihan dijadikan tombol yang bisa diklik oleh pengguna. Komponen ini juga menangani penandaan jawaban yang benar atau salah, serta mencegah pengguna untuk memilih jawaban lebih dari satu kali.

---

## **Pengertian**

Komponen `Option` digunakan untuk menampilkan pilihan jawaban pada sebuah soal dalam kuis. Setiap pilihan dibuat sebagai tombol, dan komponen ini juga memberikan feedback visual berupa penandaan jawaban yang benar atau salah setelah pengguna memilihnya. Selain itu, komponen ini memanfaatkan fungsi `dispatch` untuk mengirimkan jawaban yang dipilih ke reducer untuk diproses lebih lanjut.

---

## **Cara Berpikir Komponen Ini**

Komponen ini berfokus pada:

1. **Menampilkan Pilihan Jawaban**: Setiap opsi jawaban dari soal ditampilkan sebagai tombol.
2. **Interaktivitas**: Pengguna dapat mengklik salah satu pilihan untuk menjawab soal.
3. **Penandaan Jawaban**: Setelah jawaban dipilih, pilihan yang benar dan salah akan diberi penanda (misalnya, warna hijau untuk yang benar dan merah untuk yang salah).
4. **Mencegah Pilihan Ganda**: Setelah pengguna memilih jawaban, tombol jawaban akan dinonaktifkan agar tidak bisa mengubah pilihan.

---

## **Analogi Sederhana**

Bayangkan kamu sedang mengisi soal pilihan ganda di ujian. Setiap pilihan yang ada di soal ditampilkan dalam bentuk tombol. Setelah kamu memilih salah satu jawaban, tombol untuk pilihan yang benar diberi tanda hijau dan tombol untuk pilihan yang salah diberi tanda merah. Setelah itu, kamu tidak bisa mengubah pilihan tersebut. `Option` bekerja seperti ini, memberi pilihan, menandai jawaban yang benar atau salah, dan mencegah perubahan setelah dijawab.

---

## **Penjelasan Code Tiap Baris**

```javascript
const hasAnswered = answer !== null;
```

- **`hasAnswered`**: Variabel ini digunakan untuk memeriksa apakah pengguna sudah memilih jawaban (`answer !== null`). Ini akan menentukan apakah kita harus menandai pilihan sebagai benar atau salah setelah jawaban dipilih.

```javascript
<div className="options">
  {question.options.map((option, index) => (
```

- **`question.options.map(...)`**: `question.options` adalah array yang berisi pilihan jawaban untuk soal. Di sini, kita menggunakan `map` untuk merender setiap opsi sebagai tombol.
  - **`option`**: Setiap elemen dalam `question.options`, yaitu teks pilihan jawaban.
  - **`index`**: Indeks dari elemen dalam array, digunakan untuk menentukan urutan dan memberikan penanda yang unik untuk setiap tombol.

```javascript
<button
  className={`btn btn-option ${index === answer ? "answer" : ""} ${
    hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""
  }`}
  key={option}
  disabled={answer !== null}
  onClick={() => dispatch({ type: "newAnswer", payload: index })}
>
  {option}
</button>
```

- **`className`**: Dinamis, berdasarkan kondisi berikut:
  - **`btn btn-option`**: Kelas dasar untuk tombol, memberikan gaya default.
  - **`index === answer ? "answer" : ""`**: Jika `index` sama dengan jawaban yang dipilih (yaitu, tombol ini adalah jawaban yang dipilih), maka tombol akan diberi kelas `answer`, yang bisa digunakan untuk memberikan penanda visual pada jawaban yang dipilih.
  - **`hasAnswered ? index === question.correctOption ? "correct" : "wrong" : ""`**: Setelah pengguna menjawab, jika pilihan ini adalah jawaban yang benar (indeksnya cocok dengan `question.correctOption`), tombol akan diberi kelas `correct` (warna hijau atau tanda lain). Jika salah, tombol akan diberi kelas `wrong` (warna merah atau tanda lainnya).
- **`key={option}`**: Memberikan key yang unik pada setiap elemen yang dirender, sesuai dengan nilai `option`.
- **`disabled={answer !== null}`**: Menonaktifkan tombol setelah jawaban dipilih. Ini memastikan pengguna tidak dapat memilih lebih dari satu jawaban.
- **`onClick={() => dispatch({ type: "newAnswer", payload: index })}`**: Ketika tombol ditekan, dispatch akan mengirimkan aksi dengan tipe `newAnswer` yang membawa indeks jawaban yang dipilih (`payload: index`) ke reducer untuk diproses lebih lanjut.

```javascript
{
  option;
}
```

- **`{option}`**: Menampilkan teks dari pilihan jawaban dalam tombol.

---

## **Kesimpulan**

Komponen `Option` bertugas menampilkan pilihan jawaban sebagai tombol pada sebuah soal. Setelah pengguna memilih jawaban, komponen ini memberikan umpan balik visual dengan menandai jawaban yang benar dan salah, serta menonaktifkan tombol pilihan agar pengguna tidak dapat mengubah jawabannya. Berikut adalah fitur-fitur utama dari komponen ini:

- **Interaktivitas**: Pengguna dapat memilih salah satu jawaban.
- **Penandaan Jawaban**: Jawaban yang benar ditandai dengan kelas `correct`, sementara jawaban yang salah ditandai dengan kelas `wrong`.
- **Menonaktifkan Pilihan Setelah Dijawab**: Tombol jawaban akan dinonaktifkan setelah pengguna memilih salah satu jawaban.

Dengan demikian, komponen `Option` memastikan pengalaman pengguna yang baik dengan memberikan umpan balik instan tentang jawaban yang dipilih dan mencegah pilihan ganda setelah soal dijawab.
