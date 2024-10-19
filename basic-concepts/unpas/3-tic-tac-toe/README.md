Berikut adalah README yang berfokus pada penjelasan kode Tic Tac Toe secara rinci, tanpa bagian instalasi.

---

# Tic Tac Toe Game

## Deskripsi

Tic Tac Toe adalah permainan dua pemain yang bergiliran untuk menempatkan simbol (X atau O) di dalam grid 3x3. Pemain pertama yang berhasil menempatkan tiga simbol berturut-turut (horizontal, vertikal, atau diagonal) menang. Proyek ini dibangun menggunakan React.

## Penjelasan Kode

### Import dan Inisialisasi

```javascript
/* eslint-disable react/prop-types */
import { useState } from "react"; // Mengimpor hook useState dari React
```

- **`useState`**: Hook ini digunakan untuk mengelola state dalam komponen.

### Komponen Square

```javascript
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
```

- **Fungsi**: `Square` bertanggung jawab untuk menampilkan satu kotak permainan.
- **Props**:
  - **`value`**: Nilai yang ditampilkan di dalam kotak (X, O, atau null).
  - **`onSquareClick`**: Fungsi yang dipanggil saat kotak diklik.
- **`return`**: Mengembalikan elemen tombol yang mewakili kotak permainan.

### Komponen Board

```javascript
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return; // Jika kotak sudah terisi atau sudah ada pemenang, keluar dari fungsi

    const nextSquares = squares.slice(); // Membuat salinan dari array squares
    nextSquares[i] = xIsNext ? "X" : "O"; // Menentukan simbol yang ditempatkan berdasarkan giliran
    onPlay(nextSquares); // Memanggil fungsi onPlay untuk memperbarui status permainan
  }
```

- **Fungsi**: `Board` menampilkan grid permainan.
- **Props**:
  - **`xIsNext`**: Boolean yang menunjukkan apakah giliran pemain X atau O.
  - **`squares`**: Array yang menyimpan status dari setiap kotak.
  - **`onPlay`**: Fungsi yang dipanggil untuk memperbarui status permainan.
- **`handleClick`**: Mengelola logika ketika kotak diklik.

### Logika Menentukan Pemenang dan Status

```javascript
  const winner = calculateWinner(squares); // Menghitung pemenang
  let status = ""; // Status permainan
  if (winner) {
    status = "Winner: " + winner; // Jika ada pemenang
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O"); // Menampilkan siapa yang bermain selanjutnya
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((square, index) => (
          <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
    </>
  );
}
```

- **`winner`**: Menggunakan fungsi `calculateWinner` untuk menentukan apakah ada pemenang.
- **`status`**: Mengatur status permainan berdasarkan apakah ada pemenang atau siapa yang bermain berikutnya.
- **Rendering**:
  - Menampilkan status permainan dan grid.
  - Menggunakan `map` untuk membuat kotak (`Square`) berdasarkan status yang ada.

### Komponen Game

```javascript
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]); // Menyimpan sejarah langkah
  const [currentMove, setCurrentMove] = useState(0); // Menyimpan langkah saat ini
  const xIsNext = currentMove % 2 === 0; // Menentukan giliran pemain
  const currentSquares = history[currentMove]; // Mengambil status kotak saat ini
```

- **Fungsi**: `Game` mengelola status keseluruhan permainan.
- **State**:
  - **`history`**: Menyimpan semua langkah yang diambil.
  - **`currentMove`**: Menyimpan langkah saat ini yang ditampilkan.
- **`xIsNext`**: Menghitung giliran pemain berdasarkan `currentMove`.

### Fungsi untuk Melompat ke Langkah Tertentu

```javascript
function jumpTo(nextMove) {
  setCurrentMove(nextMove); // Melompat ke langkah tertentu
}
```

- **`jumpTo`**: Memungkinkan pemain untuk melompat ke langkah sebelumnya dalam sejarah permainan.

### Menangani Langkah Baru

```javascript
function handlePlay(nextSquares) {
  const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // Memperbarui sejarah langkah
  setHistory(nextHistory); // Mengatur sejarah baru
  setCurrentMove(nextHistory.length - 1); // Mengatur langkah saat ini ke langkah terakhir
}
```

- **`handlePlay`**: Memperbarui langkah dan sejarah permainan ketika pemain membuat langkah baru.

### Menampilkan Langkah Permainan

```javascript
const moves = history.map((squares, move) => {
  let description = move > 0 ? "Go to Move #" + move : "Go to game Start"; // Deskripsi untuk tombol langkah
  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
});
```

- **`moves`**: Menghasilkan daftar langkah-langkah yang dapat diakses kembali.
- **Deskripsi**: Menampilkan "Go to Move #" untuk setiap langkah yang diambil.

### Rendering Komponen Game

```javascript
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol> {/* Menampilkan langkah yang sudah diambil */}
      </div>
    </div>
  );
}
```

- **Rendering**: Menggabungkan semua bagian.
- **`Board`**: Menyediakan status permainan dan menangani interaksi.
- **`game-info`**: Menampilkan sejarah langkah.

### Fungsi untuk Menghitung Pemenang

```javascript
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    // Memeriksa semua kemungkinan kemenangan
    const [a, b, c] = lines[i]; // Mengambil tiga posisi

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Mengembalikan pemenang jika ada
    }
  }
  return null; // Tidak ada pemenang
}
```

- **Fungsi**: Memeriksa apakah ada pemenang dalam permainan.
- **`lines`**: Menyimpan semua kombinasi kemenangan.
- **Logika**: Memeriksa setiap kombinasi untuk melihat apakah ada yang cocok dan mengembalikan simbol pemenang.

## Kesimpulan

Proyek Tic Tac Toe ini adalah cara yang baik untuk memahami konsep dasar React, seperti pengelolaan state, pengolahan event, dan rendering kondisional. Dengan memahami kode ini, kamu dapat belajar tentang bagaimana React mengelola interaksi pengguna dan logika permainan.

---

README ini memberikan penjelasan mendetail tentang setiap bagian kode, sehingga mudah dimengerti oleh orang awam sekaligus memberikan wawasan yang lebih dalam bagi pembaca yang ingin memahami logika di baliknya.
