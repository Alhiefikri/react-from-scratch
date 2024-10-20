# README: Komponen AnimeList

## Deskripsi

Komponen `AnimeList` bertugas menampilkan daftar anime dengan menggunakan komponen `Anime` untuk setiap item dalam daftar.

## Kode

```javascript
import Anime from "./Anime"; // Mengimpor komponen Anime untuk menampilkan informasi setiap anime

// Mendefinisikan komponen AnimeList yang menerima props animes dan onSelectedAnime
export default function AnimeList({ animes, onSelectedAnime }) {
  // Mengembalikan elemen JSX untuk merender daftar anime
  return (
    // Elemen ul untuk daftar anime
    <ul className="list list-anime">
      {/* Menggunakan map untuk merender komponen Anime untuk setiap anime dalam daftar */}
      {animes?.map((anime) => (
        <Anime
          key={anime.mal_id} // Menggunakan mal_id sebagai kunci unik untuk setiap item
          anime={anime} // Mengirimkan data anime ke komponen Anime
          onSelectedAnime={onSelectedAnime} // Mengirimkan fungsi pemilih anime ke komponen Anime
        />
      ))}
    </ul>
  );
}
```

## Penjelasan Kode

1. **Impor Komponen Anime**:

   - `import Anime from "./Anime";`
     - Mengimpor komponen `Anime` untuk digunakan dalam daftar.

2. **Definisi Komponen**:

   - `export default function AnimeList({ animes, onSelectedAnime }) { ... }`
     - Mendefinisikan komponen `AnimeList` yang menerima props `animes` (daftar anime) dan `onSelectedAnime` (fungsi untuk menangani pemilihan anime).

3. **Mengembalikan Elemen JSX**:

   - `return ( <ul className="list list-anime"> ... </ul> );`
     - Mengembalikan elemen `<ul>` dengan kelas CSS `list list-anime`.

4. **Merender Daftar Anime**:

   - `{animes?.map((anime) => ( ... ))}`
     - Menggunakan metode `map` untuk mengiterasi setiap item dalam array `animes`.
     - `?.` digunakan untuk mencegah error jika `animes` adalah `undefined`.

5. **Komponen Anime**:
   - `<Anime key={anime.mal_id} anime={anime} onSelectedAnime={onSelectedAnime} />`
     - Merender komponen `Anime` untuk setiap anime dalam daftar.
     - `key={anime.mal_id}` memberikan kunci unik untuk setiap item berdasarkan `mal_id`.
     - Mengirimkan data anime dan fungsi pemilih ke komponen `Anime`.

## Alur Kode

1. Komponen `AnimeList` menerima daftar anime dan fungsi pemilih sebagai props.
2. Menggunakan metode `map` untuk merender setiap anime dalam bentuk komponen `Anime`.
3. Setiap komponen `Anime` menerima data spesifik dan fungsi pemilih untuk interaksi.

## Cara Kode Bekerja

- Komponen `AnimeList` menyusun daftar anime dengan merender setiap item menggunakan komponen `Anime`, membuatnya modular dan mudah dikelola.

## Cara Berpikir React

- Penggunaan props dan metode `map` memungkinkan komponen ini untuk secara dinamis merender data yang diterima dari sumber luar, menjadikannya responsif terhadap perubahan.

## Analogi Sederhana

Bayangkan `AnimeList` seperti daftar menu di restoran.

- **Setiap item dalam daftar** adalah hidangan yang berbeda (komponen `Anime`).
- **Daftar menu** memberikan informasi tentang hidangan yang tersedia.

## Kesimpulan

Komponen `AnimeList` menyajikan daftar anime secara terstruktur dan terorganisir, memungkinkan pengguna untuk melihat berbagai pilihan. Dengan memanfaatkan komponen `Anime`, kode ini tetap bersih dan mudah dipelihara.

Jika ada komponen lain yang ingin dijelaskan, silakan beri tahu!
