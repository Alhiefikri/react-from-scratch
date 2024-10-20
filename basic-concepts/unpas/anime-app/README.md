# README: Komponen App

## Deskripsi

Komponen `App` adalah komponen utama yang mengelola state dan mengatur semua komponen lain dalam aplikasi, menampilkan daftar anime dan detail anime yang dipilih.

## Kode

```javascript
import { useState } from "react"; // Mengimpor hook useState dari React
import "./App.css"; // Mengimpor stylesheet untuk penataan
import NavBar from "./components/Navbar"; // Mengimpor komponen NavBar
import Search from "./components/Search"; // Mengimpor komponen Search
import NumResult from "./components/NumResult"; // Mengimpor komponen NumResult
import Box from "./components/Box"; // Mengimpor komponen Box
import AnimeList from "./components/AnimeList"; // Mengimpor komponen AnimeList
import Main from "./components/Main"; // Mengimpor komponen Main
import AnimeDetail from "./components/AnimeDetail"; // Mengimpor komponen AnimeDetail

// Data statis untuk anime
const animesData = [
  // Daftar objek anime dengan informasi lengkap
  {
    mal_id: 21,
    title: "One Piece",
    year: 1999,
    image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    score: 8.71,
    synopsis: "Barely surviving in a barrel...",
  },
  // Data anime lainnya...
];

// Mendefinisikan komponen App
export default function App() {
  // Menginisialisasi state untuk daftar anime dan anime yang dipilih
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  // Fungsi untuk menangani pemilihan anime
  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }

  // Mengembalikan elemen JSX untuk rendering aplikasi
  return (
    <>
      <NavBar>
        <Search>
          <NumResult animes={animes} />{" "}
          {/* Menampilkan jumlah hasil pencarian */}
        </Search>
      </NavBar>

      <Main>
        <Box>
          <AnimeList animes={animes} onSelectedAnime={handleSelectedAnime} />{" "}
          {/* Menampilkan daftar anime */}
        </Box>
        <Box>
          <AnimeDetail selectedAnime={selectedAnime} />{" "}
          {/* Menampilkan detail anime yang dipilih */}
        </Box>
      </Main>
    </>
  );
}
```

## Penjelasan Kode

1. **Impor Modul**:

   - Mengimpor berbagai komponen dan hook yang diperlukan untuk membangun aplikasi.

2. **Data Anime**:

   - `const animesData = [...]` berisi daftar objek anime yang digunakan sebagai data awal untuk aplikasi.

3. **Definisi Komponen**:

   - `export default function App() { ... }` mendefinisikan komponen utama aplikasi.

4. **State Management**:

   - `const [animes, setAnimes] = useState(animesData);`
     - Menginisialisasi state `animes` dengan data awal.
   - `const [selectedAnime, setSelectedAnime] = useState(animes[0]);`
     - Menginisialisasi state untuk anime yang dipilih, default ke anime pertama.

5. **Fungsi Pemilihan Anime**:

   - `function handleSelectedAnime(id) { ... }`
     - Mengupdate state `selectedAnime` berdasarkan id anime yang dipilih dari daftar.

6. **Rendering Komponen**:
   - Menggunakan JSX untuk mengatur struktur aplikasi:
     - `NavBar` dan `Search` di bagian atas untuk navigasi dan pencarian.
     - `Main` sebagai kontainer untuk menampilkan daftar anime dan detail anime yang dipilih.

## Alur Kode

1. Aplikasi dimulai dengan menginisialisasi state untuk daftar anime dan anime yang dipilih.
2. Pengguna dapat memilih anime dari daftar, yang kemudian memperbarui detail yang ditampilkan.
3. Struktur aplikasi terbagi ke dalam komponen yang lebih kecil untuk modularitas.

## Cara Kode Bekerja

- Komponen `App` mengelola state dan interaksi antar komponen, memberikan data dan fungsi yang diperlukan untuk menampilkan anime dan detailnya.

## Cara Berpikir React

- Pendekatan berbasis komponen membuat aplikasi ini terstruktur dengan baik, di mana setiap komponen memiliki tanggung jawab tertentu, meningkatkan reusabilitas dan pemeliharaan.

## Analogi Sederhana

Bayangkan `App` seperti direktur sebuah teater.

- **Direktur** mengatur semua aktor (komponen) untuk berinteraksi, memastikan bahwa setiap bagian berfungsi dengan baik dalam pertunjukan yang lebih besar.

## Kesimpulan

Komponen `App` adalah pusat dari aplikasi ini, mengelola data dan interaksi pengguna. Dengan struktur yang terorganisir dan penggunaan komponen yang jelas, aplikasi dapat dikembangkan dan dipelihara dengan lebih mudah.
