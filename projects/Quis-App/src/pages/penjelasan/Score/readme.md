# README: Halaman Score pada Quiz App

## Pengertian

Halaman Score menampilkan hasil skor pengguna setelah menyelesaikan kuis. Di sini, pengguna dapat melihat nilai akhir mereka, jumlah jawaban yang benar dan salah, serta memiliki opsi untuk meninjau jawaban yang diberikan.

## Alur Code

Berikut adalah penjelasan fungsi dari setiap bagian dalam kode halaman Score:

### Kode

```javascript
const Score = ({ score, setDisplay, setIndex }) => {
  // Mendefinisikan komponen Score yang menerima props score, setDisplay, dan setIndex.
  const handleClick = () => {
    // Fungsi untuk menangani klik pada tombol "Hasil Jawaban".
    setDisplay("review"); // Mengubah tampilan menjadi "review".
    setIndex(0); // Mengatur indeks kembali ke 0 untuk meninjau jawaban dari awal.
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-1 p-[15px]">
      {" "}
      // Div utama dengan styling Flexbox untuk layout.
      <div className="text-copper text-center font-alfa text-[100px]">
        {" "}
        // Menampilkan teks skor dengan styling. YOUR SCORE
      </div>
      <div className="flex h-[280px] w-[280px] items-center justify-center rounded-[280px] border-[6px] border-english-lavender font-alfa text-[120px] text-pastelPink">
        {" "}
        // Menampilkan nilai skor dalam lingkaran.
        {Math.floor(score.score)} // Menghitung dan menampilkan skor bulat.
      </div>
      <div className="flex gap-[100px] font-alfa text-[28px] text-english-lavender">
        {" "}
        // Menampilkan jumlah jawaban benar dan salah.
        <div>Benar : {score.true}</div>
        <div>Salah : {score.false}</div>
      </div>
      <div
        onClick={handleClick} // Menangani klik untuk melihat hasil jawaban.
        className="bg-copper mt-4 flex cursor-pointer border-[6px] border-pastelPink p-2 font-alfa text-[32px] text-pastelPink hover:scale-110 hover:border-white hover:text-white"
      >
        Hasil Jawaban
      </div>
    </div>
  );
};

export default Score; // Mengekspor komponen Score untuk digunakan di file lain.
```

## Penjelasan Fungsi Tiap Baris

1. **`const Score = ({ score, setDisplay, setIndex }) => {`**: Mendefinisikan komponen fungsional `Score` yang menerima props `score`, `setDisplay`, dan `setIndex`.

2. **`const handleClick = () => {`**: Mendefinisikan fungsi yang akan dijalankan ketika tombol "Hasil Jawaban" diklik.

   - **`setDisplay("review");`**: Mengubah tampilan aplikasi menjadi "review" untuk menampilkan jawaban yang diberikan.
   - **`setIndex(0);`**: Mengatur indeks pertanyaan kembali ke 0 untuk memulai tinjauan dari pertanyaan pertama.

3. **`return (`**: Memulai bagian render dari komponen.

4. **`<div className="flex h-full flex-col items-center justify-center gap-1 p-[15px]">`**:

   - Membuat div utama dengan:
     - `flex`: Menggunakan Flexbox untuk tata letak.
     - `h-full`: Tinggi penuh untuk menyesuaikan konten.
     - `flex-col`: Mengatur elemen secara vertikal.
     - `items-center`: Menyejajarkan elemen di tengah secara horizontal.
     - `justify-center`: Menyejajarkan elemen di tengah secara vertikal.
     - `gap-1`: Memberikan jarak antar elemen.
     - `p-[15px]`: Memberikan padding sekitar 15px.

5. **`<div className="text-copper text-center font-alfa text-[100px]">`**:

   - Menampilkan teks "YOUR SCORE" dengan:
     - `text-copper`: Warna teks tembaga.
     - `text-center`: Menyusun teks di tengah.
     - `font-alfa`: Menggunakan font khusus.

6. **`YOUR SCORE`**: Teks yang ditampilkan sebagai judul hasil skor.

7. **`<div className="flex h-[280px] w-[280px] items-center justify-center rounded-[280px] border-[6px] border-english-lavender font-alfa text-[120px] text-pastelPink">`**:

   - Membuat div untuk menampilkan skor dalam bentuk lingkaran dengan:
     - `flex`: Menggunakan Flexbox untuk tata letak.
     - `h-[280px]` dan `w-[280px]`: Mengatur tinggi dan lebar 280px.
     - `items-center`: Menyusun konten di tengah.
     - `justify-center`: Menyusun konten di tengah.
     - `rounded-[280px]`: Menambahkan sudut membulat sehingga menjadi lingkaran.
     - `border-[6px] border-english-lavender`: Menambahkan border dengan ketebalan 6px dan warna lavender.
     - `font-alfa`: Menggunakan font khusus.
     - `text-[120px]`: Ukuran teks untuk skor.
     - `text-pastelPink`: Warna teks pastel pink.

8. **`{Math.floor(score.score)}`**: Menghitung dan menampilkan nilai bulat dari skor yang diberikan.

9. **`<div className="flex gap-[100px] font-alfa text-[28px] text-english-lavender">`**:

   - Membuat div untuk menampilkan jumlah jawaban benar dan salah dengan:
     - `flex`: Menggunakan Flexbox untuk tata letak.
     - `gap-[100px]`: Memberikan jarak antar elemen.
     - `font-alfa`: Menggunakan font khusus.
     - `text-[28px]`: Ukuran teks untuk informasi jawaban.
     - `text-english-lavender`: Warna teks lavender.

10. **`<div>Benar : {score.true}</div>`**: Menampilkan jumlah jawaban yang benar.

11. **`<div>Salah : {score.false}</div>`**: Menampilkan jumlah jawaban yang salah.

12. **`<div`**: Memulai div untuk tombol "Hasil Jawaban".

- **`onClick={handleClick}`**: Menangani klik untuk menampilkan hasil jawaban.
- **`className="bg-copper mt-4 flex cursor-pointer border-[6px] border-pastelPink p-2 font-alfa text-[32px] text-pastelPink hover:scale-110 hover:border-white hover:text-white"`**:
  - `bg-copper`: Warna latar belakang tombol.
  - `mt-4`: Margin atas untuk memberikan jarak dari elemen sebelumnya.
  - `flex`: Menggunakan Flexbox untuk tata letak.
  - `cursor-pointer`: Mengubah kursor menjadi pointer saat hover.
  - `border-[6px] border-pastelPink`: Menambahkan border dengan ketebalan 6px dan warna pastel pink.
  - `p-2`: Memberikan padding pada tombol.
  - `font-alfa`: Menggunakan font khusus.
  - `text-[32px]`: Ukuran teks untuk tombol.
  - `text-pastelPink`: Warna teks pastel pink.
  - `hover:scale-110`: Efek zoom saat hover.
  - `hover:border-white`: Mengubah warna border menjadi putih saat hover.
  - `hover:text-white`: Mengubah warna teks menjadi putih saat hover.

13. **`Hasil Jawaban`**: Teks yang ditampilkan di tombol.

14. **`</div>`**: Menutup div untuk tombol.

15. **`}`**: Menutup definisi komponen.

16. **`export default Score;`**: Mengekspor komponen `Score` untuk digunakan di bagian lain dari aplikasi.

## Kesimpulan

Halaman Score memberikan umpan balik langsung kepada pengguna setelah menyelesaikan kuis. Dengan menampilkan skor, jumlah jawaban benar dan salah, serta opsi untuk meninjau jawaban, halaman ini meningkatkan pengalaman pengguna. Penjelasan di atas diharapkan dapat membantu pemula memahami cara kerja halaman ini dan konsep dasar React dalam membangun komponen. Jika ada pertanyaan atau masukan lebih lanjut, silakan sampaikan!
