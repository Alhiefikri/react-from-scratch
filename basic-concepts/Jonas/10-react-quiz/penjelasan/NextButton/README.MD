# Penjelasan Komponen `NextButton`

Komponen **NextButton** bertanggung jawab untuk menampilkan tombol "Next" yang memungkinkan pengguna untuk beralih ke soal berikutnya atau menyelesaikan kuis ketika soal terakhir tercapai. Tombol ini hanya akan muncul jika pengguna telah memilih jawaban untuk soal yang sedang aktif. Selain itu, tombol ini akan memiliki dua fungsi berbeda tergantung pada status soal yang sedang ditampilkan:

- Jika soal ini bukan soal terakhir, tombol akan mengarahkan pengguna ke soal berikutnya.
- Jika soal ini adalah soal terakhir, tombol akan menyelesaikan kuis dan menampilkan hasil.

---

## **Pengertian**

Komponen `NextButton` akan:

1. **Menampilkan Tombol "Next"**: Tombol ini akan muncul hanya jika pengguna sudah memilih jawaban untuk soal yang sedang aktif.
2. **Fungsi Tombol Berbeda**:
   - Jika soal ini bukan soal terakhir, tombol "Next" akan mengarahkan pengguna ke soal berikutnya.
   - Jika soal ini adalah soal terakhir, tombol "Next" akan menyelesaikan kuis dan menampilkan hasil.

---

## **Cara Berpikir Komponen Ini**

Komponen `NextButton` memiliki dua kondisi logika utama:

1. **Jika jawaban belum dipilih**: Tombol tidak akan ditampilkan.
2. **Jika jawaban sudah dipilih**:
   - Jika soal ini bukan soal terakhir, tombol akan mengarahkan pengguna ke soal berikutnya.
   - Jika soal ini adalah soal terakhir, tombol akan menyelesaikan kuis.

---

## **Analogi Sederhana**

Bayangkan kamu sedang mengikuti ujian, dan di setiap soal, setelah kamu memilih jawaban, kamu diberi tombol "Next" untuk melanjutkan ke soal berikutnya. Namun, jika itu adalah soal terakhir, tombol tersebut akan berubah untuk menyelesaikan ujian dan menampilkan hasilnya. `NextButton` berfungsi seperti tombol "Next" ini, tapi dengan logika untuk menyelesaikan ujian jika soal sudah selesai.

---

## **Penjelasan Code Tiap Baris**

```javascript
function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
```

- **`NextButton`** adalah komponen berbasis fungsi yang menerima beberapa properti (props):

  - **`dispatch`**: Fungsi untuk mengirimkan aksi ke reducer, digunakan untuk mengubah status aplikasi.
  - **`answer`**: Menyimpan jawaban yang dipilih oleh pengguna untuk soal saat ini. Jika `null`, berarti jawaban belum dipilih.
  - **`index`**: Indeks dari soal saat ini. Ini digunakan untuk menentukan soal mana yang sedang ditampilkan.
  - **`numQuestions`**: Jumlah total soal dalam kuis.

- **`if (answer === null) return null;`**: Jika pengguna belum memilih jawaban untuk soal ini (nilai `answer` adalah `null`), tombol "Next" tidak akan ditampilkan sama sekali.

```javascript
if (index < numQuestions - 1)
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
```

- **`if (index < numQuestions - 1)`**: Jika soal saat ini bukan soal terakhir (artinya `index` masih kurang dari `numQuestions - 1`), maka tampilkan tombol "Next". Tombol ini akan mengarah ke soal berikutnya.
  - **`onClick={() => dispatch({ type: "nextQuestion" })}`**: Ketika tombol ditekan, akan mengirimkan aksi dengan tipe `nextQuestion` menggunakan `dispatch`, yang akan mengubah status aplikasi dan memajukan soal ke soal berikutnya.

```javascript
if (index === numQuestions - 1)
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
      Next
    </button>
  );
```

- **`if (index === numQuestions - 1)`**: Jika soal saat ini adalah soal terakhir (indeks sama dengan jumlah soal dikurangi satu), maka tampilkan tombol "Next" yang fungsinya untuk menyelesaikan kuis.
  - **`onClick={() => dispatch({ type: "finish" })}`**: Ketika tombol ini ditekan, akan mengirimkan aksi dengan tipe `finish`, yang akan mengubah status aplikasi menjadi "finished" dan menampilkan hasil kuis.

---

## **Kesimpulan**

Komponen `NextButton` adalah tombol yang memungkinkan pengguna untuk berpindah ke soal berikutnya setelah memilih jawaban, atau menyelesaikan kuis jika sudah mencapai soal terakhir. Tombol ini hanya akan ditampilkan jika pengguna telah memilih jawaban.

- **Pengaturan Tampilan Tombol**: Tombol hanya akan muncul jika ada jawaban yang dipilih.
- **Dua Fungsi**:
  - Berpindah ke soal berikutnya jika ini bukan soal terakhir.
  - Menyelesaikan kuis jika soal ini adalah soal terakhir.
- **Menggunakan `dispatch`**: Tombol ini mengirimkan aksi menggunakan `dispatch` untuk mengubah status aplikasi dan mengarahkan ke soal berikutnya atau menyelesaikan kuis.

Komponen ini sangat penting dalam alur navigasi kuis karena memberikan kontrol kepada pengguna untuk melanjutkan ke soal berikutnya atau mengakhiri kuis setelah soal terakhir.
