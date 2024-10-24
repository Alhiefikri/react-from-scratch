# README: Halaman Review pada Quiz App

## Pengertian

Halaman Review digunakan untuk menampilkan hasil jawaban pengguna untuk setiap soal dalam kuis. Pengguna dapat melihat soal yang telah dijawab, pilihan jawaban yang dipilih, dan apakah jawaban tersebut benar atau salah. Selain itu, pengguna juga dapat navigasi antara soal-soal yang telah dijawab dan kembali ke halaman skor.

## Alur Code

Berikut adalah penjelasan fungsi dari setiap bagian dalam kode halaman Review:

### Kode

```javascript
/* eslint-disable react/prop-types */
import { questions } from "../data/data"; // Mengimpor data pertanyaan dari file data.

const Review = ({ answer, index, setDisplay, handlePrev, handleNext }) => {
  // Mendefinisikan komponen Review.
  return (
    <div className="relative flex h-full flex-col gap-[20px] p-[54px] font-alfa">
      {" "}
      // Div utama dengan layout flex.
      <div className="flex justify-center text-center text-[32px] text-white">{`Soal ${index + 1} : ${questions[index].question}`}</div>
      <div className="flex w-full justify-center">
        {" "}
        // Menampilkan jawaban yang dipilih.
        <div className="bg-copper flex h-[161px] w-[500px] rounded-[20px] border-4 border-solid border-white p-5 text-[20px] text-white">
          {answer[index + 1]
            ? `${answer[index + 1]} . ${questions[index].options[answer[index + 1]]}`
            : "Kamu Tidak Menjawab Soal Ini"}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 text-[64px] text-pastelPink">
        {" "}
        // Menampilkan apakah jawaban benar atau salah.
        {questions[index].answer === answer[index + 1] ? "BENAR" : "SALAH"}
        <span>
          {questions[index].answer === answer[index + 1] ? (
            <svg // Ikon untuk jawaban benar.
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="85"
              viewBox="0 0 85 85"
              fill="none"
            >
              {/* SVG Path untuk ikon centang */}
            </svg>
          ) : (
            <svg // Ikon untuk jawaban salah.
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="85"
              viewBox="0 0 85 85"
              fill="none"
            >
              {/* SVG Path untuk ikon silang */}
            </svg>
          )}
        </span>
      </div>
      <div className="text-center text-[20px] text-pastelPink">
        Jawabannya adalah : {questions[index].options[questions[index].answer]}{" "}
        // Menampilkan jawaban yang benar.
      </div>
      <div className="max-[20px] absolute bottom-[60px] right-[54px] flex justify-end gap-5">
        {" "}
        // Kontrol navigasi.
        {index !== 0 && (
          <svg // Tombol untuk kembali ke soal sebelumnya.
            onClick={handlePrev}
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="73"
            viewBox="0 0 72 73"
            className="bg-copper cursor-pointer rounded-full border-[6px] border-solid border-pastelPink hover:scale-110 hover:border-white hover:fill-white hover:shadow-2xl"
            fill="#EAB2A0"
          >
            {/* SVG Path untuk tombol sebelumnya */}
          </svg>
        )}
        {index + 1 !== questions.length && (
          <svg // Tombol untuk melanjutkan ke soal berikutnya.
            onClick={handleNext}
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="73"
            viewBox="0 0 72 73"
            className="bg-copper cursor-pointer rounded-full border-[6px] border-solid border-pastelPink fill-pastelPink hover:scale-110 hover:border-white hover:fill-white hover:shadow-2xl"
            fill="#EAB2A0"
          >
            {/* SVG Path untuk tombol berikutnya */}
          </svg>
        )}
        <div
          onClick={() => setDisplay("score")} // Tombol untuk melihat skor.
          className="bg-copper cursor-pointer border-[6px] border-solid border-pastelPink p-1 text-[36px] text-pastelPink hover:scale-110 hover:border-white hover:text-white hover:shadow-2xl"
        >
          Lihat Skor
        </div>
      </div>
    </div>
  );
};

export default Review; // Mengekspor komponen Review untuk digunakan di file lain.
```

## Penjelasan Fungsi Tiap Baris

1. **`/* eslint-disable react/prop-types */`**: Menghentikan peringatan linting terkait prop-types untuk komponen ini.

2. **`import { questions } from "../data/data";`**: Mengimpor data pertanyaan dari file data.

3. **`const Review = ({ answer, index, setDisplay, handlePrev, handleNext }) => {`**: Mendefinisikan komponen fungsional `Review` yang menerima props `answer`, `index`, `setDisplay`, `handlePrev`, dan `handleNext`.

4. **`return (`**: Memulai bagian render dari komponen.

5. **`<div className="relative flex h-full flex-col gap-[20px] p-[54px] font-alfa">`**: Membuat div utama dengan:

   - `relative`: Posisi relatif untuk penataan.
   - `flex`: Menggunakan Flexbox untuk tata letak.
   - `h-full`: Tinggi penuh untuk menyesuaikan konten.
   - `flex-col`: Mengatur elemen secara vertikal.
   - `gap-[20px]`: Memberikan jarak antar elemen.
   - `p-[54px]`: Memberikan padding sekitar 54px.

6. **`<div className="text-center flex justify-center text-[32px] text-white">`**:

   - Menampilkan nomor soal dan pertanyaan dengan:
     - `text-center`: Menyusun teks di tengah.
     - `flex justify-center`: Menggunakan Flexbox untuk menyusun elemen.
     - `text-[32px]`: Ukuran teks untuk pertanyaan.
     - `text-white`: Warna teks putih.

7. **`{`Soal ${index + 1} : ${questions[index].question}`}`**: Menggunakan template literal untuk menampilkan soal saat ini.

8. **`<div className="flex w-full justify-center">`**: Membuat div untuk menampilkan jawaban yang dipilih dengan:

   - `flex`: Menggunakan Flexbox untuk tata letak.
   - `w-full justify-center`: Memastikan elemen berada di tengah.

9. **`<div className="bg-copper flex h-[161px] w-[500px] rounded-[20px] border-4 border-solid border-white p-5 text-[20px] text-white">`**:

   - Menampilkan pilihan jawaban dengan:
     - `bg-copper`: Warna latar belakang tembaga.
     - `flex h-[161px] w-[500px]`: Mengatur ukuran elemen.
     - `rounded-[20px]`: Menambahkan sudut membulat.
     - `border-4 border-solid border-white`: Menambahkan border putih.
     - `p-5`: Memberikan padding.
     - `text-[20px] text-white`: Ukuran dan warna teks.

10. **`{answer[index + 1] ? ... : "Kamu Tidak Menjawab Soal Ini"}`**: Memeriksa apakah pengguna menjawab soal tersebut dan menampilkan jawaban atau pesan jika tidak.

11. **`<div className="flex items-center justify-center gap-2 text-[64px] text-pastelPink">`**:

    - Membuat div untuk menampilkan hasil (benar/salah) dengan:
      - `flex items-center justify-center`: Menggunakan Flexbox untuk tata letak.
      - `gap-2`: Memberikan jarak antar elemen.
      - `text-[64px] text-pastelPink`: Ukuran dan warna teks untuk hasil.

12. **`{questions[index].answer === answer[index + 1] ? "BENAR" : "SALAH"}`**: Memeriksa apakah jawaban pengguna benar atau salah dan menampilkannya.

13. **`<span>{...}</span>`**: Menampilkan ikon berdasarkan hasil jawaban:

    - **Jika benar**: Menampilkan ikon centang.
    - **Jika salah**: Menampilkan ikon silang.

14. **`<div className="text-center text-[20px] text-pastelPink">`**:

    - Menampilkan jawaban yang benar dengan:
      - `text-center`: Menyusun teks di tengah.
      - `text-[20px] text-pastelPink`: Ukuran dan warna teks.

15. **`Jawabannya adalah : {questions[index].options[questions[index].answer]}`**: Menampilkan jawaban yang benar.

16. **`<div className="max-[20px] absolute bottom-[60px] right-[54px] flex justify-end gap-5">`**: Kontrol navigasi

untuk kembali atau maju ke soal berikutnya.

17. **`{index !== 0 && (<svg onClick={handlePrev} ...`**: Tombol untuk kembali ke soal sebelumnya, ditampilkan hanya jika bukan soal pertama.

18. **`{index + 1 !== questions.length && (<svg onClick={handleNext} ...`**: Tombol untuk maju ke soal berikutnya, ditampilkan hanya jika bukan soal terakhir.

19. **`<div onClick={() => setDisplay("score")} ...>`**: Tombol untuk melihat skor, diatur untuk memanggil fungsi `setDisplay`.

20. **`export default Review;`**: Mengekspor komponen Review untuk digunakan di file lain.

## Kesimpulan

Halaman Review memberikan pengguna umpan balik yang jelas tentang jawaban mereka, mencakup pilihan yang dipilih, status kebenaran jawaban, dan kontrol navigasi untuk menelusuri soal. Dengan desain yang responsif dan interaktif, pengguna dapat dengan mudah mengevaluasi kinerja mereka dalam kuis.
