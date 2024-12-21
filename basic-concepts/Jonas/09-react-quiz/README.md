# README: Memahami Penggunaan `useReducer` dalam Aplikasi Kuis React

## **Pengantar**

Pada aplikasi React, untuk menangani logika status yang kompleks atau yang melibatkan banyak state yang saling bergantung, kita sering menggunakan **`useReducer`**. `useReducer` adalah hook React yang memungkinkan kita untuk mengelola state aplikasi dengan cara yang lebih terstruktur, khususnya untuk kasus di mana banyak perubahan state terjadi berdasarkan aksi-aksi tertentu (seperti mengubah status kuis, menghitung poin, dsb).

Dalam aplikasi kuis yang kita buat, kita menggunakan `useReducer` untuk menangani berbagai jenis perubahan state, mulai dari status kuis, pertanyaan yang sedang ditampilkan, hingga penghitungan waktu dan poin.

Pada dokumentasi ini, kita akan fokus pada bagaimana `useReducer` diterapkan dalam aplikasi kuis, dan menjelaskan langkah demi langkah cara kerjanya dengan analogi dan contoh kode.

---

## **Apa itu `useReducer`?**

`useReducer` adalah hook di React yang digunakan untuk menangani state dengan cara yang lebih terstruktur daripada `useState`, terutama ketika ada banyak perubahan dalam state yang saling bergantung satu sama lain. `useReducer` bekerja dengan cara menerima dua parameter utama:

1. **Reducer function**: Fungsi yang menentukan bagaimana state aplikasi berubah berdasarkan aksi yang diberikan.
2. **Initial state**: State awal yang digunakan sebelum terjadi perubahan.

---

## **Bagaimana `useReducer` Bekerja?**

Pada dasarnya, `useReducer` bekerja mirip dengan **Redux** tetapi dalam skala yang lebih kecil dan lebih sederhana. Dengan `useReducer`, kita memiliki **state** dan **aksi (actions)**. Berdasarkan **aksi** yang dikirim, fungsi **reducer** akan mengubah **state** sesuai dengan logika yang ditentukan.

### Struktur dasar `useReducer`:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

- `state`: Merupakan objek yang berisi nilai-nilai state saat ini.
- `dispatch`: Fungsi yang digunakan untuk mengirimkan **aksi** ke **reducer**.

### Flow-nya adalah:

1. **State awal** (`initialState`) diberikan ke `useReducer`.
2. Pengguna mengirimkan **aksi** dengan `dispatch`.
3. Aksi yang dikirimkan akan diproses oleh **reducer function** untuk menentukan perubahan apa yang akan dilakukan pada state.
4. **State** yang baru kemudian diterapkan dan diteruskan ke komponen.

---

## **Contoh Penerapan `useReducer` di Aplikasi Kuis**

Berikut adalah penjelasan tentang cara `useReducer` digunakan di aplikasi kuis, langkah demi langkah:

### 1. **Initial State**

Di awal, kita mendefinisikan state awal aplikasi yang mencakup berbagai informasi penting untuk aplikasi kuis, seperti daftar pertanyaan, status kuis, skor, waktu yang tersisa, dll.

```javascript
const initialState = {
  questions: [],
  status: "loading", // loading, error, ready, active, finished
  index: 0, // Indeks soal yang sedang ditampilkan
  answer: null, // Jawaban yang dipilih pengguna
  points: 0, // Poin yang didapat
  highscore: 0, // Skor tertinggi
  secondRemaining: null, // Waktu yang tersisa
};
```

State ini menjadi acuan untuk menyimpan seluruh data yang diperlukan sepanjang permainan, mulai dari daftar pertanyaan hingga status permainan saat ini.

### 2. **Reducer Function**

Reducer adalah fungsi yang menerima dua argumen:

- **state**: Nilai state sebelumnya.
- **action**: Aksi yang ingin dilakukan, yang berisi tipe dan payload (data yang dibawa aksi tersebut).

Reducer akan memeriksa tipe aksi yang dikirim dan memutuskan bagaimana state harus berubah.

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

- **`dataReceived`**: Ketika data pertanyaan berhasil dimuat dari server, kita mengupdate state `questions` dan mengganti status menjadi "ready".
- **`start`**: Ketika kuis dimulai, kita set status menjadi "active" dan menghitung waktu berdasarkan jumlah soal.
- **`newAnswer`**: Ketika pengguna memilih jawaban, kita menghitung apakah jawabannya benar atau salah dan mengupdate skor (`points`).
- **`nextQuestion`**: Setelah pengguna mengklik tombol "Next", kita menampilkan soal berikutnya.
- **`finish`**: Ketika kuis selesai, kita menampilkan skor akhir dan membandingkan dengan `highscore`.
- **`restart`**: Jika pengguna memilih untuk memulai ulang, kita reset state ke keadaan semula.
- **`tick`**: Menghitung waktu mundur setiap detik.

### 3. **Menggunakan `useReducer` dalam Komponen**

Dalam komponen utama, kita menggunakan `useReducer` untuk mengelola state dan mengirimkan aksi ke reducer.

```javascript
const [
  { questions, status, index, answer, points, highscore, secondRemaining },
  dispatch,
] = useReducer(reducer, initialState);
```

- **State**: Berisi semua data yang diperlukan oleh aplikasi kuis.
- **dispatch**: Fungsi untuk mengirimkan aksi ke reducer.

Dengan `dispatch`, kita dapat mengirimkan aksi seperti `dataReceived`, `start`, `newAnswer`, dll. yang memicu perubahan state sesuai dengan yang kita tentukan dalam reducer.

---

## **Contoh Penggunaan `dispatch` dalam Komponen**

Di dalam komponen lain, seperti `StartScreen`, kita menggunakan `dispatch` untuk memulai kuis:

```javascript
<button className="btn btn-ui" onClick={() => dispatch({ type: "start" })}>
  Let's start
</button>
```

- Ketika tombol diklik, kita mengirimkan aksi `start` untuk memulai kuis, yang akan mengubah status state menjadi "active" dan menghitung waktu yang tersisa.

Di komponen `Option`, ketika pengguna memilih jawaban, kita juga mengirimkan aksi `newAnswer` untuk memproses jawaban:

```javascript
<button
  className="btn btn-option"
  onClick={() => dispatch({ type: "newAnswer", payload: index })}
>
  {option}
</button>
```

- `dispatch` mengirimkan aksi `newAnswer` dengan payload berupa indeks jawaban yang dipilih, yang kemudian diproses di reducer untuk menghitung skor.

---

## **Kesimpulan**

- **`useReducer`** sangat berguna ketika aplikasi memiliki banyak status yang saling bergantung, seperti yang kita lihat di aplikasi kuis ini.
- **State yang kompleks** seperti status kuis, waktu, skor, dan pertanyaan dapat dikelola dengan lebih terstruktur menggunakan `useReducer`.
- **Reducer function** adalah tempat kita mendefinisikan bagaimana setiap aksi akan mengubah state, berdasarkan tipe aksi yang dikirimkan.
- Dengan menggunakan **`dispatch`** untuk mengirimkan aksi, kita memisahkan logika perubahan state dari tampilan, yang menjadikan aplikasi lebih mudah dikelola dan dikembangkan.

Jika kamu masih merasa bingung, coba untuk berfokus pada satu bagian dulu (misalnya bagaimana mengubah status menjadi "active" setelah klik tombol start) dan pelan-pelan tambahkan aksi-aksi lainnya. `useReducer` akan lebih mudah dipahami dengan latihan dan eksperimen langsung di kode!
