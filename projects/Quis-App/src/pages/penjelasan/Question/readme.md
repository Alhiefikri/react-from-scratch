# README: Halaman Pertanyaan pada Quiz App

## Pengertian

Halaman Pertanyaan adalah komponen yang menampilkan pertanyaan kuis, pilihan jawaban, serta navigasi untuk berpindah antar soal. Pengguna dapat memilih jawaban dan melanjutkan ke soal berikutnya atau menyelesaikan kuis.

## Alur Code

Berikut adalah penjelasan fungsi dari setiap bagian dalam kode halaman Pertanyaan:

### Kode

```javascript
/* eslint-disable react/prop-types */
import { questions } from "../data/data"; // Mengimpor data pertanyaan dari file data.

const Question = ({
  index,
  handleNext,
  handlePrev,
  answer,
  setAnswer,
  setScore,
  setDisplay,
}) => {
  const handleAns = (key, num) => {
    setAnswer({ ...answer, [num + 1]: key }); // Menyimpan jawaban yang dipilih.
  };

  const handleSubmit = () => {
    let result = 0;
    questions.map((q, i) => {
      if (q.answer == answer[i + 1]) {
        result++; // Menghitung jumlah jawaban benar.
      }
    });
    setScore({
      score: (result / questions.length) * 100, // Menghitung skor persentase.
      true: result, // Menyimpan jumlah jawaban benar.
      false: questions.length - result, // Menyimpan jumlah jawaban salah.
    });
    setDisplay("score"); // Mengubah tampilan ke halaman skor.
  };

  return (
    <div className="relative flex h-full flex-col gap-[54px] p-[54px] font-alfa">
      {" "}
      // Div utama dengan layout flex.
      <>
        <div className="flex justify-center text-center text-[32px] text-white">{`Soal ${index + 1} : ${questions[index].question}`}</div>
        <div className="mx-[20px] grid grid-cols-2 gap-x-[142px] gap-y-[42px]">
          {" "}
          // Menampilkan pilihan jawaban dalam grid.
          {Object.entries(questions[index].options).map(([key, val]) => {
            return (
              <div
                onClick={() => handleAns(key, index)} // Menangani pilihan jawaban.
                key={key}
                className={`hover:bg-copper flex h-[111px] cursor-pointer items-center rounded-[20px] p-4 text-[20px] text-white hover:border-4 hover:border-white ${answer[index + 1] === key ? "bg-copper border-4 border-white" : "bg-pastelPink"}`}
              >{`${key}. ${val}`}</div>
            );
          })}
        </div>
      </>
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
            <path d="M58.5 32.75H22.5L31.1625 24.0875C31.9013 23.3488 32.25 22.4675 32.25 21.5C32.25 19.655 30.7256 17.75 28.5 17.75C27.5044 17.75 26.6362 18.1119 25.9125 18.8375L10.9912 33.7588C10.3762 34.3738 9.75 35.1331 9.75 36.5C9.75 37.8669 10.2731 38.525 10.9612 39.2131L25.9125 54.1625C26.6362 54.8881 27.5044 55.25 28.5 55.25C30.7275 55.25 32.25 53.345 32.25 51.5C32.25 50.5325 31.9013 49.6513 31.1625 48.9125L22.5 40.25H58.5C60.57 40.25 62.25 38.57 62.25 36.5C62.25 34.43 60.57 32.75 58.5 32.75Z" />
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
            <path d="M13.5 40.25H49.5L40.8375 48.9125C40.0987 49.6512 39.75 50.5325 39.75 51.5C39.75 53.345 41.2744 55.25 43.5 55.25C44.4956 55.25 45.3638 54.8881 46.0875 54.1625L61.0088 39.2412C61.6238 38.6262 62.25 37.8669 62.25 36.5C62.25 35.1331 61.7269 34.475 61.0388 33.7869L46.0875 18.8375C45.3638 18.1119 44.4956 17.75 43.5 17.75C41.2725 17.75 39.75 19.655 39.75 21.5C39.75 22.4675 40.0987 23.3487 40.8375 24.0875L49.5 32.75H13.5C11.43 32.75 9.75 34.43 9.75 36.5C9.75 38.57 11.43 40.25 13.5 40.25Z" />
          </svg>
        )}
        {index + 1 === questions.length && (
          <div
            onClick={handleSubmit} // Tombol untuk menyelesaikan kuis.
            className="bg-copper cursor-pointer border-[6px] border-solid border-pastelPink p-1 text-[36px] text-pastelPink hover:scale-110 hover:border-white hover:text-white hover:shadow-2xl"
          >
            Finish
          </div>
        )}
      </div>
    </div>
  );
};

export default Question; // Mengekspor komponen Question untuk digunakan di file lain.
```

## Penjelasan Fungsi Tiap Baris

1. **`/* eslint-disable react/prop-types */`**: Menghentikan peringatan linting terkait prop-types untuk komponen ini.

2. **`import { questions } from "../data/data";`**: Mengimpor data pertanyaan dari file data.

3. **`const Question = ({ index, handleNext, handlePrev, answer, setAnswer, setScore, setDisplay }) => {`**: Mendefinisikan komponen fungsional `Question` yang menerima props `index`, `handleNext`, `handlePrev`, `answer`, `setAnswer`, `setScore`, dan `setDisplay`.

4. **`const handleAns = (key, num) => {`**: Fungsi untuk menangani pemilihan jawaban, mengupdate state `answer` dengan jawaban yang dipilih.

5. **`const handleSubmit = () => {`**: Fungsi untuk menghitung skor ketika kuis diselesaikan:

   - Menghitung jumlah jawaban benar.
   - Menghitung skor sebagai persentase dari jawaban benar.
   - Memperbarui state `score` dan mengubah tampilan ke halaman skor.

6. **`return (`**: Memulai bagian render dari komponen.

7. **`<div className="relative flex h-full flex-col gap-[54px] p-[54px] font-alfa">`**: Membuat div utama dengan layout flex untuk menampung konten kuis.

8. **`<div className="text-center flex justify-center text-[32px] text-white">`**: Menampilkan nomor soal dan pertanyaan dengan penataan teks yang rapi.

9. **`{`Soal ${index + 1} : ${questions[index].question}`}`**: Menggunakan template literal untuk menampilkan soal saat ini.

10. \*\*`<

div className="mx-[20px] grid grid-cols-2 gap-x-[142px] gap-y-[42px]">`\*\*: Membuat grid untuk menampilkan pilihan jawaban.

11. **`Object.entries(questions[index].options).map(([key, val]) => {`**: Mengiterasi pilihan jawaban dari pertanyaan yang sedang ditampilkan.

12. **`<div onClick={() => handleAns(key, index)} key={key} ...>`**: Menampilkan pilihan jawaban yang dapat diklik.

13. **`className={`...`**: Menetapkan gaya untuk pilihan jawaban, termasuk efek hover dan kondisi untuk menandai pilihan yang sudah dipilih.

14. **`<div className="max-[20px] absolute bottom-[60px] right-[54px] flex justify-end gap-5">`**: Membuat div untuk menampung kontrol navigasi di bagian bawah.

15. **`{index !== 0 && ( ... )}`**: Menampilkan tombol untuk kembali ke soal sebelumnya jika bukan soal pertama.

16. **`{index + 1 !== questions.length && ( ... )}`**: Menampilkan tombol untuk melanjutkan ke soal berikutnya jika bukan soal terakhir.

17. **`{index + 1 === questions.length && ( ... )}`**: Menampilkan tombol "Finish" jika sudah di soal terakhir.

18. **`export default Question;`**: Mengekspor komponen Question untuk digunakan di file lain.

## Kesimpulan

Halaman Pertanyaan berfungsi untuk menyajikan pertanyaan dan pilihan jawaban dalam kuis. Dengan fungsionalitas navigasi dan penghitungan skor yang efisien, pengguna dapat menjawab pertanyaan dan melihat hasilnya dengan mudah. Desain yang responsif dan interaktif memberikan pengalaman pengguna yang baik.
