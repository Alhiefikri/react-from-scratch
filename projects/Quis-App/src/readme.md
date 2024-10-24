# README: Quiz App

## Pengertian

Quiz App adalah aplikasi berbasis React yang dirancang untuk memungkinkan pengguna mengikuti kuis, menjawab pertanyaan, dan melihat hasilnya. Aplikasi ini mengimplementasikan konsep dasar React seperti komponen, state, dan props.

## Alur Code

Aplikasi ini terdiri dari beberapa komponen yang berfungsi untuk menampilkan tampilan kuis yang interaktif. Berikut adalah penjelasan fungsi dari setiap baris dalam kode utama:

### Kode

```javascript
import { useState } from "react"; // Mengimpor hook useState dari React untuk mengelola state.
import "./App.css"; // Mengimpor stylesheet untuk styling aplikasi.
import Footer from "./components/Footer"; // Mengimpor komponen Footer.
import Header from "./components/Header"; // Mengimpor komponen Header.
import Start from "./pages/Start"; // Mengimpor halaman Start.
import Question from "./pages/Question"; // Mengimpor halaman Question.
import Score from "./pages/Score"; // Mengimpor halaman Score.
import Review from "./pages/Review"; // Mengimpor halaman Review.

function App() {
  const [display, setDisplay] = useState("start"); // Mengatur state awal untuk tampilan (default: "start").
  const [index, setIndex] = useState(0); // Mengatur state awal untuk indeks pertanyaan (default: 0).
  const [answer, setAnswer] = useState({}); // Mengatur state untuk menyimpan jawaban pengguna.
  const [score, setScore] = useState({}); // Mengatur state untuk menyimpan skor pengguna.

  const handlePrev = () => {
    // Fungsi untuk mengurangi indeks pertanyaan (navigasi mundur).
    setIndex((index) => index - 1);
  };

  const handleNext = () => {
    // Fungsi untuk menambah indeks pertanyaan (navigasi maju).
    setIndex((index) => index + 1);
  };

  const handleReset = () => {
    // Fungsi untuk mereset semua state ke nilai awal.
    setIndex(0); // Mengembalikan indeks ke 0.
    setAnswer({}); // Menghapus semua jawaban.
    setDisplay("start"); // Mengubah tampilan ke halaman awal.
    setScore({}); // Menghapus skor.
  };

  return (
    <div className="flex h-screen flex-col">
      {" "}
      // Membuat div dengan styling flexbox untuk layout.
      <Header display={display} /> // Menampilkan komponen Header dengan prop
      display.
      <div className="w-full flex-1 bg-charcoal">
        {" "}
        // Div utama untuk menampung konten.
        {display == "start" && <Start setDisplay={setDisplay} />} // Menampilkan
        halaman Start jika display adalah "start".
        {display == "question" && ( // Menampilkan halaman Question jika display adalah "question".
          <Question
            setScore={setScore}
            index={index}
            handleNext={handleNext}
            handlePrev={handlePrev}
            answer={answer}
            setAnswer={setAnswer}
            setDisplay={setDisplay}
          />
        )}
        {display === "score" && ( // Menampilkan halaman Score jika display adalah "score".
          <Score score={score} setDisplay={setDisplay} setIndex={setIndex} />
        )}
        {display === "review" && ( // Menampilkan halaman Review jika display adalah "review".
          <Review
            index={index}
            answer={answer}
            setDisplay={setDisplay}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
      </div>
      <Footer handleReset={handleReset} /> // Menampilkan komponen Footer dengan
      fungsi reset.
    </div>
  );
}

export default App; // Mengekspor komponen App untuk digunakan di tempat lain.
```

## Penjelasan Fungsi Tiap Baris

1. **`import { useState } from "react";`**: Mengimpor hook `useState` dari React untuk mengelola state lokal dalam komponen.

2. **`import "./App.css";`**: Mengimpor file CSS untuk styling aplikasi.

3. **`import Footer from "./components/Footer";`**: Mengimpor komponen Footer yang akan ditampilkan di bagian bawah aplikasi.

4. **`import Header from "./components/Header";`**: Mengimpor komponen Header yang akan ditampilkan di bagian atas aplikasi.

5. **`import Start from "./pages/Start";`**: Mengimpor halaman Start yang menjadi tampilan awal aplikasi.

6. **`import Question from "./pages/Question";`**: Mengimpor halaman Question yang menampilkan pertanyaan kuis.

7. **`import Score from "./pages/Score";`**: Mengimpor halaman Score yang menampilkan hasil skor setelah menyelesaikan kuis.

8. **`import Review from "./pages/Review";`**: Mengimpor halaman Review yang memungkinkan pengguna meninjau jawaban mereka.

9. **`function App() {`**: Mendefinisikan komponen fungsional App.

10. **`const [display, setDisplay] = useState("start");`**: Menginisialisasi state `display` dengan nilai awal "start". `setDisplay` adalah fungsi untuk mengubah nilai `display`.

11. **`const [index, setIndex] = useState(0);`**: Menginisialisasi state `index` untuk melacak pertanyaan yang sedang ditampilkan, dimulai dari 0.

12. **`const [answer, setAnswer] = useState({});`**: Menginisialisasi state `answer` untuk menyimpan jawaban pengguna dalam bentuk objek.

13. **`const [score, setScore] = useState({});`**: Menginisialisasi state `score` untuk menyimpan skor pengguna dalam bentuk objek.

14. **`const handlePrev = () => { setIndex((index) => index - 1); };`**: Mendefinisikan fungsi untuk navigasi mundur ke pertanyaan sebelumnya dengan mengurangi `index`.

15. **`const handleNext = () => { setIndex((index) => index + 1); };`**: Mendefinisikan fungsi untuk navigasi maju ke pertanyaan berikutnya dengan menambah `index`.

16. **`const handleReset = () => {`**: Mendefinisikan fungsi untuk mereset aplikasi ke keadaan awal.

    - **`setIndex(0);`**: Mengembalikan indeks ke 0.
    - **`setAnswer({});`**: Menghapus semua jawaban yang diberikan.
    - **`setDisplay("start");`**: Mengubah tampilan kembali ke halaman awal.
    - **`setScore({});`**: Menghapus skor yang sudah dihitung.

17. **`return (`**: Memulai bagian render dari komponen.

18. **`<div className="flex h-screen flex-col">`**: Membuat div utama dengan styling Flexbox untuk membuat layout vertikal.

19. **`<Header display={display} />`**: Menampilkan komponen Header dan mengoper prop `display` untuk menampilkan informasi yang sesuai.

20. **`<div className="w-full flex-1 bg-charcoal">`**: Membuat div untuk menampung konten utama dengan styling.

21. **`{display == "start" && <Start setDisplay={setDisplay} />}`**: Jika `display` adalah "start", maka menampilkan komponen Start dan mengoper fungsi `setDisplay`.

22. **`{display == "question" && (`**: Jika `display` adalah "question", maka menampilkan komponen Question dengan berbagai props.

    - **`setScore={setScore}`**: Mengoper fungsi untuk mengatur skor.
    - **`index={index}`**: Mengoper nilai indeks saat ini.
    - **`handleNext={handleNext}`**: Mengoper fungsi untuk navigasi maju.
    - **`handlePrev={handlePrev}`**: Mengoper fungsi untuk navigasi mundur.
    - **`answer={answer}`**: Mengoper jawaban yang sudah diberikan.
    - **`setAnswer={setAnswer}`**: Mengoper fungsi untuk mengatur jawaban.
    - **`setDisplay={setDisplay}`**: Mengoper fungsi untuk mengatur tampilan.

23. **`{display === "score" && (`**: Jika `display` adalah "score", maka menampilkan komponen Score dengan props yang sesuai.

24. **`{display === "review" && (`**: Jika `display` adalah "review", maka menampilkan komponen Review dengan props yang sesuai.

25. **`</div>`**: Menutup div untuk konten utama.

26. **`<Footer handleReset={handleReset} />`**: Menampilkan komponen Footer dan mengoper fungsi reset untuk mereset aplikasi.

27. **`</div>`**: Menutup div utama.

28. **`export default App;`**: Mengekspor komponen App agar bisa digunakan di file lain.

## Kesimpulan

Quiz App merupakan contoh aplikasi yang mengimplementasikan konsep dasar React dengan baik. Dengan pemisahan tanggung jawab antar komponen, penggunaan state untuk mengelola data, dan navigasi yang jelas, aplikasi ini memberikan pengalaman kuis yang interaktif dan mudah digunakan. Penjelasan setiap baris kode di atas diharapkan dapat membantu pemula untuk memahami bagaimana aplikasi ini bekerja dan bagaimana menggunakan React untuk membangun aplikasi web. Jika ada pertanyaan atau masukan, silakan sampaikan!
