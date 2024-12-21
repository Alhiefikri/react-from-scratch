# Penjelasan Komponen `FinishScreen`

Komponen **FinishScreen** ini digunakan untuk menampilkan hasil akhir kuis setelah pengguna selesai menjawab semua soal. Komponen ini menunjukkan berapa banyak poin yang diperoleh pengguna, persentase keberhasilan, emoji sebagai umpan balik, dan highscore yang dicapai. Komponen ini juga memberikan tombol untuk memulai ulang kuis.

---

## **Pengertian**

Komponen `FinishScreen` berfungsi untuk:

1. Menampilkan **hasil akhir** dari kuis: Poin yang diperoleh pengguna, persentase skor, dan emoji sebagai umpan balik.
2. Menampilkan **highscore**: Menampilkan skor tertinggi yang pernah dicapai.
3. Menyediakan **tombol Restart**: Memberikan tombol untuk memulai ulang kuis jika pengguna ingin mencoba lagi.

---

## **Cara Berpikir Komponen Ini**

Komponen ini berfokus pada memberikan umpan balik visual kepada pengguna berdasarkan hasil kuis mereka:

1. **Menghitung Persentase Skor**: Menghitung berapa persen poin yang berhasil diperoleh dari total poin maksimum.
2. **Menentukan Emoji**: Berdasarkan persentase, memilih emoji yang sesuai sebagai umpan balik visual (seperti medali 🥇, atau wajah bingung 🤨).
3. **Menampilkan Hasil**: Menampilkan hasil berupa jumlah poin, persentase, dan highscore.
4. **Restart Kuis**: Mengizinkan pengguna untuk memulai ulang kuis melalui tombol yang memicu aksi `restart`.

---

## **Analogi Sederhana**

Bayangkan kamu sedang mengikuti ujian dan setelah selesai, hasil ujianmu ditampilkan di layar. Layar itu menunjukkan:

- **Berapa banyak poin yang kamu dapatkan**
- **Berapa persen nilai kamu dibandingkan total**
- **Emosi kamu tergantung seberapa baik hasil ujianmu** (medali untuk yang sempurna, atau wajah bingung untuk yang kurang baik).
- **Tombol untuk mencoba lagi** jika kamu ingin berusaha lebih baik.

Komponen `FinishScreen` bekerja seperti layar hasil ujian ini.

---

## **Penjelasan Code Tiap Baris**

```javascript
const percentage = (points / maxPossiblePoints) * 100;
```

- **`percentage`**: Menghitung persentase nilai yang diperoleh dari nilai maksimum yang mungkin diperoleh. Ini mengalikan perbandingan poin yang didapat dengan total poin maksimum dan mengalikannya dengan 100 untuk mendapatkan nilai persentase.

```javascript
let emoji;
if (percentage === 100) emoji = "🥇";
if (percentage >= 80 && percentage < 100) emoji = "🎉";
if (percentage >= 50 && percentage < 80) emoji = "👍";
if (percentage >= 0 && percentage < 50) emoji = "🤨";
if (percentage === 0) emoji = "🤦‍♂️";
```

- **`emoji`**: Berdasarkan persentase yang dihitung, kita menentukan emoji yang akan ditampilkan sebagai umpan balik visual kepada pengguna:
  - **`🥇`**: Jika persentase adalah 100%, tampilkan medali emas.
  - **`🎉`**: Jika persentase antara 80-99%, tampilkan emoji perayaan.
  - **`👍`**: Jika persentase antara 50-79%, tampilkan emoji "thumbs up".
  - **`🤨`**: Jika persentase antara 0-49%, tampilkan emoji "thinking" atau bingung.
  - **`🤦‍♂️`**: Jika persentase adalah 0%, tampilkan emoji "facepalm" yang menunjukkan hasil buruk.

```javascript
return (
  <>
    <p className="result">
      <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
      {maxPossiblePoints} ({Math.ceil(percentage)}%)
    </p>

    <p className="highscore">(Highscore: {highscore} points)</p>
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart quiz
    </button>
  </>
);
```

- **`<p className="result">`**: Menampilkan hasil akhir kuis dengan emoji, poin yang didapat, poin maksimum, dan persentase. `Math.ceil(percentage)` digunakan untuk membulatkan persentase ke atas.
- **`<p className="highscore">`**: Menampilkan skor tertinggi yang pernah dicapai (highscore).
- **`<button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>Restart quiz</button>`**: Tombol yang memungkinkan pengguna untuk memulai ulang kuis. Ketika tombol diklik, aksi `dispatch` dengan tipe `restart` dikirim ke reducer, yang akan mereset status aplikasi ke kondisi awal.

---

## **Kesimpulan**

Komponen `FinishScreen` menampilkan hasil akhir kuis kepada pengguna dengan cara yang menyenangkan dan informatif:

- **Hasil Skor dan Persentase**: Menampilkan berapa banyak poin yang diperoleh dan berapa persen nilai tersebut dibandingkan dengan total nilai maksimum.
- **Emoji sebagai Umpan Balik**: Memberikan umpan balik visual berupa emoji yang menunjukkan tingkat keberhasilan.
- **Highscore**: Menampilkan skor tertinggi yang tercatat.
- **Tombol Restart**: Memberikan tombol untuk memulai ulang kuis jika pengguna ingin mencoba lagi.

Komponen ini memberikan kesan akhir yang positif dengan memberikan feedback langsung tentang hasil kuis dan memungkinkan pengguna untuk mencoba lagi jika mereka ingin berusaha lebih baik.
