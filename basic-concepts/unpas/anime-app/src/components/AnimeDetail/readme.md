# README: Komponen AnimeDetail

## Deskripsi

Komponen `AnimeDetail` menampilkan detail lengkap dari anime yang dipilih, termasuk gambar, judul, tahun rilis, skor, dan sinopsis.

## Kode

```javascript
// Mendefinisikan komponen AnimeDetail yang menerima props selectedAnime
export default function AnimeDetail({ selectedAnime }) {
  // Mengembalikan elemen JSX untuk menampilkan detail anime
  return (
    <div className="details">
      {/* Bagian header untuk menampilkan gambar dan informasi dasar */}
      <header>
        <img src={selectedAnime.image} alt={`${selectedAnime.title} cover`} />{" "}
        {/* Gambar cover anime */}
        <div className="details-overview">
          <h2>{selectedAnime.title}</h2> {/* Menampilkan judul anime */}
          <p>
            {selectedAnime.year} &bull; {selectedAnime.score}{" "}
            {/* Menampilkan tahun dan skor */}
          </p>
        </div>
      </header>
      {/* Bagian section untuk menampilkan sinopsis */}
      <section>
        <p>
          <em>{selectedAnime.synopsis}</em> {/* Menampilkan sinopsis anime */}
        </p>
      </section>
    </div>
  );
}
```

## Penjelasan Kode

1. **Definisi Komponen**:

   - `export default function AnimeDetail({ selectedAnime }) { ... }`
     - Mendefinisikan komponen `AnimeDetail` yang menerima props `selectedAnime`.

2. **Mengembalikan Elemen JSX**:

   - `return ( <div className="details"> ... </div> );`
     - Mengembalikan elemen `<div>` dengan kelas CSS `details` untuk penataan.

3. **Bagian Header**:

   - `<header> ... </header>`
     - Menyimpan informasi dasar anime, termasuk gambar dan judul.

4. **Gambar Cover Anime**:

   - `<img src={selectedAnime.image} alt={`${selectedAnime.title} cover`} />`
     - Menampilkan gambar cover anime dengan atribut alt yang sesuai.

5. **Overview Anime**:

   - `<div className="details-overview"> ... </div>`
     - Menampilkan judul dan informasi tahun serta skor anime.
   - `{selectedAnime.year} &bull; {selectedAnime.score}`
     - Menggunakan simbol &bull; untuk memisahkan tahun dan skor.

6. **Bagian Section**:
   - `<section> ... </section>`
     - Menyediakan area untuk menampilkan sinopsis anime.
   - `<p><em>{selectedAnime.synopsis}</em></p>`
     - Menampilkan sinopsis dengan penekanan (italic).

## Alur Kode

1. Komponen `AnimeDetail` menerima detail dari anime yang dipilih melalui props `selectedAnime`.
2. Menggunakan elemen HTML untuk menyusun informasi seperti gambar, judul, tahun, skor, dan sinopsis.

## Cara Kode Bekerja

- Komponen `AnimeDetail` menyajikan informasi lengkap tentang anime yang dipilih dengan cara yang terstruktur dan mudah dibaca.

## Cara Berpikir React

- Penggunaan props memungkinkan komponen ini untuk menerima dan menampilkan data spesifik, meningkatkan modularitas dan penggunaan kembali.

## Analogi Sederhana

Bayangkan `AnimeDetail` seperti halaman buku informasi tentang anime.

- **Informasi di halaman** adalah gambaran lengkap tentang anime tersebut, memberikan semua detail yang diperlukan kepada pembaca.

## Kesimpulan

Komponen `AnimeDetail` menyediakan tampilan mendetail untuk anime yang dipilih, membuatnya lebih informatif dan menarik bagi pengguna. Dengan struktur yang jelas dan penggunaan elemen yang tepat, komponen ini sangat membantu dalam menyampaikan informasi dengan efektif.

Jika ada komponen lain yang ingin dijelaskan, silakan beri tahu!
