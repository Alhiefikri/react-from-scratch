# README: Halaman Start pada Quiz App

## Pengertian

Halaman Start adalah tampilan awal dari aplikasi Quiz App. Halaman ini menyambut pengguna dengan judul kuis, tombol untuk memulai kuis, dan kutipan motivasi. Pengguna dapat melanjutkan ke halaman pertanyaan dengan mengklik tombol "START".

## Alur Code

Berikut adalah penjelasan fungsi dari setiap bagian dalam kode halaman Start:

### Kode

```javascript
const Start = ({ setDisplay }) => {
  // Mendefinisikan komponen Start yang menerima prop setDisplay.
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 font-alfa">
      {" "}
      // Div utama dengan styling Flexbox untuk menampilkan elemen secara
      vertikal.
      <div className="font-aclonica text-[120px] text-english-lavender">
        {" "}
        // Judul aplikasi dengan styling khusus. QUIZ APP
      </div>
      <div
        onClick={() => setDisplay("question")} // Mengubah tampilan ke "question" ketika tombol diklik.
        className="bg-copper cursor-pointer rounded-xl border-[6px] border-pastelPink px-5 text-[48px] text-pastelPink hover:scale-110 hover:border-white hover:text-white" // Styling tombol dengan efek hover.
      >
        START
      </div>
      <div className="text-center text-[24px] text-english-lavender">
        {" "}
        // Kutipan motivasi dengan styling. “Don’t let the setbacks define you{" "}
        <br /> let them be stepping stones to triumph.”
      </div>
    </div>
  );
};

export default Start; // Mengekspor komponen Start untuk digunakan di file lain.
```

## Penjelasan Fungsi Tiap Baris

1. **`const Start = ({ setDisplay }) => {`**: Mendefinisikan komponen fungsional `Start` yang menerima `setDisplay` sebagai prop. Prop ini digunakan untuk mengubah tampilan aplikasi.

2. **`return (`**: Memulai bagian render dari komponen.

3. **`<div className="flex h-full flex-col items-center justify-center gap-5 font-alfa">`**:

   - Membuat div utama dengan:
     - `flex`: Menggunakan Flexbox untuk tata letak.
     - `h-full`: Tinggi penuh untuk menyesuaikan konten.
     - `flex-col`: Mengatur elemen secara vertikal.
     - `items-center`: Menyejajarkan elemen di tengah secara horizontal.
     - `justify-center`: Menyejajarkan elemen di tengah secara vertikal.
     - `gap-5`: Memberikan jarak antar elemen.
     - `font-alfa`: Menggunakan font khusus untuk tampilan.

4. **`<div className="font-aclonica text-[120px] text-english-lavender">`**:

   - Membuat judul aplikasi dengan:
     - `font-aclonica`: Font khusus untuk judul.
     - `text-[120px]`: Ukuran font besar.
     - `text-english-lavender`: Warna teks lavender.

5. **`QUIZ APP`**: Teks yang ditampilkan sebagai judul aplikasi.

6. **`<div`**: Memulai div untuk tombol "START".

   - **`onClick={() => setDisplay("question")}`**: Fungsi yang dipanggil saat tombol diklik, mengubah nilai `display` menjadi "question", yang akan menampilkan halaman pertanyaan.
   - **`className="bg-copper cursor-pointer rounded-xl border-[6px] border-pastelPink px-5 text-[48px] text-pastelPink hover:scale-110 hover:border-white hover:text-white"`**:
     - `bg-copper`: Warna latar belakang tombol.
     - `cursor-pointer`: Mengubah kursor menjadi pointer saat hover.
     - `rounded-xl`: Menambahkan sudut membulat pada tombol.
     - `border-[6px] border-pastelPink`: Menambahkan border dengan ketebalan 6px dan warna pastel pink.
     - `px-5`: Memberikan padding horizontal.
     - `text-[48px]`: Ukuran teks untuk tombol.
     - `text-pastelPink`: Warna teks pastel pink.
     - `hover:scale-110`: Efek zoom saat hover.
     - `hover:border-white`: Mengubah warna border menjadi putih saat hover.
     - `hover:text-white`: Mengubah warna teks menjadi putih saat hover.

7. **`START`**: Teks yang ditampilkan di tombol.

8. **`<div className="text-center text-[24px] text-english-lavender">`**:

   - Membuat div untuk kutipan motivasi dengan:
     - `text-center`: Menyusun teks di tengah.
     - `text-[24px]`: Ukuran font untuk kutipan.
     - `text-english-lavender`: Warna teks lavender.

9. **`“Don’t let the setbacks define you <br /> let them be stepping stones to triumph.”`**: Teks kutipan motivasi.

10. **`</div>`**: Menutup div untuk kutipan.

11. **`}`**: Menutup definisi komponen.

12. **`export default Start;`**: Mengekspor komponen `Start` untuk digunakan di bagian lain dari aplikasi.

## Kesimpulan

Halaman Start adalah bagian penting dari Quiz App yang memberikan pengalaman pengguna yang menyenangkan saat memulai kuis. Dengan desain yang menarik dan tombol interaktif, pengguna dapat dengan mudah melanjutkan ke halaman pertanyaan. Penjelasan di atas diharapkan dapat membantu pemula memahami cara kerja halaman ini dan konsep dasar React dalam membangun komponen. Jika ada pertanyaan lebih lanjut atau umpan balik, silakan disampaikan!
