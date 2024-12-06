# React App dengan useReducer - Penjelasan Komponen dan Fungsinya

Pada artikel ini, kita akan membahas kode aplikasi React yang menggunakan `useReducer` untuk mengelola state aplikasi. Aplikasi ini adalah aplikasi kuis yang melibatkan berbagai state seperti loading, error, aktif, dan selesai. Penjelasan ini akan membantu pemula untuk memahami cara kerja React, khususnya terkait penggunaan `useReducer`, dan memberikan gambaran tentang struktur aplikasi yang lebih besar.

---

## **Pengertian**

**useReducer** adalah hook di React yang digunakan untuk mengelola state yang lebih kompleks. Biasanya digunakan sebagai pengganti **useState** ketika state kita memiliki banyak sub-nilai dan membutuhkan pengelolaan yang lebih terstruktur.

Dalam aplikasi ini, `useReducer` digunakan untuk mengelola status kuis, seperti apakah aplikasi sedang menunggu data, apakah ada error, status kuis (siap, aktif, selesai), serta informasi lainnya seperti skor dan waktu yang tersisa.

---

## **Cara Berpikir React**

Pada dasarnya, React adalah library untuk membangun antarmuka pengguna (UI) yang reaktif. Artinya, UI akan secara otomatis diperbarui saat ada perubahan pada **state** aplikasi. Ketika state berubah, React akan merender ulang komponen yang terkait dengan state tersebut.

Penting untuk memahami bahwa state dan UI saling terhubung: perubahan pada state akan memicu pembaruan pada UI. Begitu juga sebaliknya, interaksi pengguna (seperti klik tombol) bisa memicu perubahan pada state, yang kemudian merender ulang UI sesuai dengan perubahan tersebut.

---

## **Analogi Sederhana**

Bayangkan aplikasi ini sebagai permainan kuis interaktif. Komponen `App` adalah "otak" permainan yang mengelola semua hal terkait status permainan, seperti apakah kuis sudah dimulai atau belum, berapa banyak soal yang sudah dijawab, berapa banyak poin yang didapatkan, dan apakah waktu sudah habis atau belum. `useReducer` adalah sistem yang mengatur perubahan status tersebut dengan cara yang lebih terstruktur dan mudah dikelola.

---

## **Penjelasan Code Tiap Baris**

### **Import Libraries dan Komponen**

```javascript
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
```

- **useEffect**: Hook yang digunakan untuk melakukan side effect, seperti mengambil data dari server atau melakukan pembersihan ketika komponen unmount.
- **useReducer**: Hook untuk mengelola state kompleks dalam aplikasi.

Komponen yang diimpor akan digunakan di bagian UI aplikasi.

### **State Awal dan Reducer**

```javascript
const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondRemaining: null,
};
```

- **initialState**: Objek yang mendefinisikan nilai awal dari state aplikasi.
- `questions`: Daftar soal kuis (dimulai dengan kosong).
- `status`: Status aplikasi, dimulai dengan "loading" (data sedang diambil).
- `index`: Indeks soal yang sedang ditampilkan.
- `answer`: Jawaban yang dipilih pengguna.
- `points`: Poin yang didapatkan pengguna.
- `highscore`: Skor tertinggi yang pernah dicapai.
- `secondRemaining`: Waktu yang tersisa untuk menjawab soal.

```javascript
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action unknown");
  }
}
```

- **reducer**: Fungsi ini mengatur bagaimana state berubah berdasarkan tindakan (action) yang dikirimkan ke dalamnya.
- Setiap `case` menangani aksi tertentu:
  - **dataReceived**: Menyimpan soal yang diterima dan mengubah status menjadi "ready".
  - **dataFailed**: Mengubah status menjadi "error" jika pengambilan data gagal.
  - **start**: Menandakan kuis dimulai dan mengatur waktu.
  - **newAnswer**: Menyimpan jawaban yang diberikan dan menghitung poin.
  - **nextQuestion**: Melanjutkan ke soal berikutnya.
  - **finish**: Menyelesaikan kuis dan menyimpan skor tertinggi.
  - **restart**: Mengatur ulang semua ke keadaan awal.
  - **tick**: Mengurangi waktu yang tersisa setiap detiknya dan mengecek apakah waktu sudah habis.

### **Menerapkan useReducer**

```javascript
const [
  { questions, status, index, answer, points, highscore, secondRemaining },
  dispatch,
] = useReducer(reducer, initialState);
```

- **useReducer(reducer, initialState)**: Menggunakan hook `useReducer` untuk mendapatkan state saat ini dan fungsi `dispatch` yang digunakan untuk mengirimkan aksi ke reducer.

### **Pengambilan Data dari Server**

```javascript
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8000/questions");
      if (!res.ok) {
        throw new Error("Data fetch failed");
      }
      const data = await res.json();
      dispatch({ type: "dataReceived", payload: data });
    } catch (err) {
      console.error("Error fetching data:", err);
      dispatch({ type: "dataFailed", error: err.message });
    }
  };

  fetchData();
}, []);
```

- **useEffect**: Digunakan untuk mengambil data dari API saat komponen pertama kali dimuat. Begitu data diterima, dispatch dikirim untuk mengubah status menjadi "ready".

### **Render UI Berdasarkan Status**

```javascript
return (
  <div className="app">
    <Header />
    <Main>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
      )}
      {status === "active" && (
        <>
          <Progress
            index={index}
            numQuestions={numQuestions}
            points={points}
            maxPoissiblePoints={maxPoissiblePoints}
            answer={answer}
          />
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
          <Footer>
            <Timer dispatch={dispatch} secondRemaining={secondRemaining} />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              index={index}
              numQuestions={numQuestions}
            />
          </Footer>
        </>
      )}
      {status === "finished" && (
        <FinishScreen
          points={points}
          maxPossiblePoints={maxPoissiblePoints}
          highscore={highscore}
          dispatch={dispatch}
        />
      )}
    </Main>
  </div>
);
```

- **Render Komponen Berdasarkan Status**: Berdasarkan nilai `status`, aplikasi akan merender komponen yang berbeda. Misalnya, ketika status "loading", komponen `Loader` akan ditampilkan, dan ketika status "active", komponen soal, timer, dan tombol berikutnya akan muncul.

---

## **Kesimpulan**

- **useReducer** adalah cara yang sangat baik untuk mengelola state yang kompleks di React, terutama ketika banyak nilai yang saling bergantung.
- Dengan menggunakan `useReducer`, kita bisa dengan mudah menangani berbagai aksi yang terjadi dalam aplikasi, seperti memuat data, memulai kuis, menghitung poin, dan mengatur waktu.
- Reducer berfungsi seperti pengontrol alur permainan, di mana setiap aksi yang terjadi (seperti menjawab soal atau menyelesaikan kuis) mengubah status aplikasi dan memicu pembaruan UI.
- Dalam aplikasi ini, status seperti "loading", "ready", dan "finished" memungkinkan kita untuk menampilkan UI yang berbeda sesuai dengan kondisi aplikasi.

Dengan memahami `useReducer`, kita bisa mengelola state yang lebih kompleks dan membuat aplikasi yang lebih mudah dip

elihara.
