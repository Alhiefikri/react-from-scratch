# README - Komponen Navbar

## Pengertian

Komponen `Navbar` adalah komponen yang berfungsi untuk membuat sebuah navigasi pada aplikasi. Navbar umumnya digunakan untuk menampilkan menu atau tautan untuk berpindah antara halaman-halaman yang ada dalam aplikasi. Komponen ini akan menampilkan sebuah logo dan memungkinkan untuk menampilkan elemen-elemen lain di dalamnya melalui properti `children`.

## Cara Berpikir React

Dalam React, aplikasi dibangun dari komponen-komponen kecil yang saling berinteraksi satu sama lain. Komponen bisa berupa komponen fungsi atau komponen kelas. Komponen dalam React bersifat deklaratif, yang berarti kita hanya perlu mendeskripsikan apa yang ingin ditampilkan (render), dan React yang akan menangani bagaimana menampilkan elemen-elemen tersebut di DOM.

React juga mendukung penggunaan _props_ untuk mengirimkan data atau elemen dari komponen induk ke komponen anak. Salah satu properti yang sering digunakan adalah `children`, yang memungkinkan kita menyisipkan konten apapun ke dalam komponen yang bersangkutan.

## Analogi Sederhana

Bayangkan sebuah navbar seperti sebuah lemari tempat kamu menyimpan barang-barang penting (seperti logo dan menu navigasi). Ketika kamu membuat komponen `Navbar`, kamu seperti sedang merancang lemari yang bisa menampung barang-barang apa saja. Barang-barang ini dapat berupa logo, link navigasi, atau konten lainnya yang ingin ditampilkan di dalam navbar.

- **Logo** adalah barang utama yang selalu ada di navbar.
- **Children** adalah barang lain yang bisa ditambahkan ke dalam navbar sesuai kebutuhan, seperti menu atau tombol.

## Penjelasan Code Tiap Baris

```js
import Logo from "./Logo";
```

- Baris ini mengimpor komponen `Logo` dari file `Logo.js` yang ada di direktori yang sama. Komponen `Logo` akan digunakan untuk menampilkan logo pada navbar.

```js
export default function Navbar({ children }) {
```

- Di sini, kita mendefinisikan komponen fungsi `Navbar`. Komponen ini menerima props yang disebut `children`. Dalam React, `children` adalah cara untuk menyisipkan konten dari komponen induk ke dalam komponen anak. Jadi, komponen `Navbar` bisa berisi berbagai macam elemen lain yang diberikan lewat `children`.

```js
  return (
    <nav className="nav-bar">
```

- Bagian ini menandakan bahwa komponen `Navbar` akan merender elemen `<nav>` dengan kelas CSS `nav-bar`. Elemen `<nav>` biasanya digunakan untuk menandakan bagian navigasi dalam halaman web.

```js
<Logo />
```

- Di sini, komponen `Logo` yang sudah diimpor sebelumnya akan dirender. Ini akan menampilkan logo di dalam navbar.

```js
{
  children;
}
```

- `children` adalah placeholder untuk konten yang disisipkan dalam komponen `Navbar`. Artinya, setiap elemen yang dipasang di dalam `<Navbar>` (di luar tag `<Logo />`) akan ditampilkan di sini.

```js
  </nav>
);
```

- Bagian ini menutup elemen `<nav>` dan mengakhiri fungsi `Navbar`. Seluruh komponen `Navbar` akan merender elemen `<nav>` yang berisi logo dan konten tambahan yang disisipkan lewat `children`.

```js
}
```

- Menutup fungsi `Navbar`.

## Kesimpulan

Komponen `Navbar` adalah sebuah elemen yang digunakan untuk menampilkan navigasi di dalam aplikasi. Komponen ini merender sebuah elemen `<nav>` yang berisi dua bagian utama:

1. **Logo**: Selalu tampil di dalam navbar.
2. **Children**: Konten tambahan yang bisa disisipkan ke dalam navbar, seperti menu atau tombol navigasi.

Dengan menggunakan properti `children`, komponen `Navbar` menjadi sangat fleksibel dan dapat menampilkan berbagai konten sesuai kebutuhan aplikasi.

Komponen ini membantu kita membangun antarmuka pengguna dengan cara yang terstruktur dan modular, di mana setiap bagian aplikasi bisa dikembangkan secara terpisah tetapi tetap saling berinteraksi.

---

# README - Komponen NumResults

## Pengertian

Komponen `NumResults` bertugas untuk menampilkan informasi jumlah hasil pencarian, misalnya dalam sebuah aplikasi yang menampilkan daftar film. Komponen ini menerima properti `movies`, yang berisi array daftar film yang ditemukan, dan menampilkan jumlah film yang ada dalam array tersebut. Jumlah ini ditampilkan dalam format teks, dengan jumlah hasil ditampilkan dengan huruf tebal menggunakan tag HTML `<strong>`.

## Cara Berpikir React

Seperti komponen lainnya, komponen `NumResults` di React adalah sebuah fungsi yang menerima data lewat properti (dalam hal ini properti `movies`). Data yang diterima akan digunakan untuk merender konten di halaman. React akan secara otomatis mengupdate tampilan komponen jika data yang diterima berubah.

Dengan pendekatan deklaratif React, kita cukup memberitahu React apa yang ingin ditampilkan (jumlah film), dan React akan menangani bagaimana menampilkan hasilnya.

## Analogi Sederhana

Bayangkan kamu sedang mencari buku di sebuah perpustakaan. Setelah pencarian selesai, kamu ingin tahu berapa banyak buku yang ditemukan. Komponen `NumResults` seperti papan pengumuman yang menampilkan informasi jumlah buku yang ditemukan di perpustakaan. Jadi, `movies` adalah daftar buku yang ditemukan, dan `NumResults` adalah papan yang menampilkan berapa banyak buku itu.

## Penjelasan Code Tiap Baris

```js
export default function NumResults({ movies }) {
```

- Baris ini mendefinisikan komponen `NumResults` sebagai komponen fungsi yang menerima properti `movies`. Properti ini diharapkan berupa array yang berisi daftar film yang ditemukan.

```js
  return (
    <p className="num-results">
```

- Di sini, komponen ini merender elemen HTML `<p>` (paragraf) dengan kelas CSS `num-results`. Elemen ini akan menampilkan teks yang menjelaskan berapa banyak hasil yang ditemukan.

```js
    Found <strong>{movies.length}</strong> results
```

- Bagian ini merender teks "Found" dan diikuti dengan jumlah hasil yang ditemukan. `movies.length` adalah cara untuk mengakses panjang (jumlah elemen) dari array `movies`.
- `{movies.length}` disisipkan di dalam tag `<strong>`, yang membuat teks tersebut dicetak tebal, untuk menekankan jumlah hasil pencarian.

```js
  </p>
);
```

- Bagian ini menutup elemen `<p>` dan mengakhiri fungsi `NumResults`.

```js
}
```

- Menutup fungsi `NumResults`.

## Kesimpulan

Komponen `NumResults` berfungsi untuk menampilkan jumlah hasil yang ditemukan, yang dihitung berdasarkan panjang array `movies` yang diterima melalui properti. Komponen ini merender informasi tersebut dalam format teks dengan penekanan jumlah hasil menggunakan tag `<strong>`.

Komponen ini sangat berguna dalam aplikasi yang menampilkan daftar hasil pencarian, karena memberi pengguna informasi langsung mengenai banyaknya data yang ditemukan sesuai dengan query pencarian mereka.

Dengan cara kerja seperti ini, React mempermudah kita dalam membangun antarmuka yang dinamis dan responsif, di mana perubahan data secara otomatis akan memperbarui tampilan komponen tanpa perlu menulis kode tambahan untuk pengelolaan DOM secara manual.

---

# README - Komponen Search

## Pengertian

Komponen `Search` berfungsi untuk membuat input pencarian bagi pengguna. Komponen ini memungkinkan pengguna untuk mengetikkan kata kunci dalam kotak teks, dan setiap perubahan pada teks akan memperbarui status pencarian (query) yang sedang digunakan di aplikasi. Komponen ini menerima dua properti (`query` dan `setQuery`) yang digunakan untuk mengelola nilai pencarian dan memperbarui statusnya.

## Cara Berpikir React

Komponen `Search` adalah komponen yang bersifat terkontrol, artinya nilai inputnya sepenuhnya dikelola oleh React state. Dalam React, kita bisa mengontrol input atau elemen formulir lainnya dengan menghubungkan nilai elemen tersebut ke state menggunakan properti `value`. Ketika pengguna mengetik di dalam input, kita menangani perubahan ini melalui event handler (dalam hal ini, `onChange`) yang akan memperbarui state melalui fungsi `setQuery`.

## Analogi Sederhana

Bayangkan komponen `Search` seperti kotak pencarian di website. Saat kamu mengetikkan sesuatu, kotak pencarian ini akan "mengingat" apa yang kamu ketik dan memperbarui tampilannya sesuai dengan teks yang ada.

- **Query** adalah kata kunci yang kamu ketik.
- **SetQuery** adalah cara kita memberitahu kotak pencarian untuk "mengupdate" teks yang ditampilkan ketika kamu mengetik.

## Penjelasan Code Tiap Baris

```js
export default function Search({ query, setQuery }) {
```

- Baris ini mendefinisikan komponen `Search` sebagai fungsi yang menerima dua properti: `query` dan `setQuery`.
  - `query`: Nilai saat ini dari pencarian (misalnya, teks yang diketik oleh pengguna).
  - `setQuery`: Fungsi yang digunakan untuk memperbarui nilai pencarian (misalnya, mengubah teks yang diketik).

```js
  return (
    <input
```

- Di sini, komponen `Search` merender elemen input `<input />` yang memungkinkan pengguna untuk mengetikkan sesuatu.

```js
className = "search";
```

- Memberikan elemen input sebuah kelas CSS `search` untuk memberi gaya pada elemen input tersebut.

```js
type = "text";
```

- Menentukan bahwa tipe input adalah teks biasa, yang berarti pengguna dapat mengetikkan karakter apa pun di dalamnya.

```js
placeholder = "Search movies...";
```

- Menyediakan teks placeholder yang akan muncul di dalam kotak input ketika kosong. Teks ini memberi petunjuk kepada pengguna tentang apa yang dapat mereka lakukan dengan kotak pencarian, seperti "Search movies...".

```js
value = { query };
```

- Mengikat nilai dari elemen input ke properti `query`. Artinya, nilai input ini akan selalu sesuai dengan nilai dari `query`, yang dikelola oleh state di komponen induk. Ini menjadikan input elemen ini **terkontrol**.

```js
    onChange={(e) => setQuery(e.target.value)}
```

- Menambahkan event handler `onChange`, yang menangani perubahan yang terjadi pada input. Setiap kali pengguna mengetik, fungsi ini akan dipanggil.
  - `e.target.value` mengakses teks yang baru saja diketik oleh pengguna dalam input.
  - `setQuery(e.target.value)` memanggil fungsi `setQuery` untuk memperbarui state dengan teks baru yang diketik oleh pengguna, yang kemudian akan mengupdate nilai `query` dan menyebabkan input diperbarui dengan nilai yang sama.

```js
  />
```

- Menutup tag `<input />`.

```js
}
```

- Menutup fungsi `Search`.

## Kesimpulan

Komponen `Search` adalah kotak input teks yang memungkinkan pengguna untuk melakukan pencarian. Komponen ini menerima dua properti:

1. **query**: Nilai dari pencarian saat ini (teks yang diketik).
2. **setQuery**: Fungsi untuk memperbarui nilai pencarian.

Komponen ini memberikan antarmuka pencarian yang sederhana dan dinamis. Setiap kali pengguna mengetikkan sesuatu, nilai pencarian akan diperbarui secara otomatis, dan React akan menangani pembaruan antarmuka sesuai dengan nilai yang dimasukkan.

Konsep penting dalam komponen ini adalah pengelolaan status (state) input yang terkontrol. Dengan menghubungkan nilai input ke properti `query` dan memperbarui state menggunakan `setQuery`, kita dapat memastikan bahwa nilai input selalu terbarui dan sesuai dengan status aplikasi.

---
