### Komponen `Main`

#### Pengertian

Komponen `Main` adalah komponen stateless (tidak memiliki state) yang bertugas sebagai wadah atau pembungkus untuk menampilkan konten utama dari aplikasi. Komponen ini menerima prop `children`, yang memungkinkan komponen lain untuk ditampilkan di dalamnya.

#### Cara Berpikir React

React bekerja dengan prinsip **komponen**. Setiap komponen bisa berfungsi sebagai elemen fungsional, seperti `Main`, yang hanya mengatur bagaimana tampilan komponen lain dirender di dalamnya. Komponen `Main` tidak perlu mengelola state atau logika lainnya, cukup sebagai **container** yang mengelola layout untuk komponen-komponen lain.

#### Analogi Sederhana

Bayangkan komponen `Main` seperti **ruang utama** di sebuah rumah, di mana berbagai perabotan (komponen lainnya) diletakkan di dalamnya. `Main` hanya menyediakan ruang, sedangkan perabotan (seperti `Navbar`, `MovieList`, `MovieDetail`, dll.) adalah elemen yang mengisi ruang tersebut.

#### Penjelasan Code Tiap Baris

```js
export default function Main({ children }) {
  return <main className="main">{children}</main>;
}
```

1. **`export default function Main({ children })`**:

   - Ini mendefinisikan komponen `Main` sebagai fungsi yang menerima prop `children`.
   - `children` adalah cara React untuk menangani konten dinamis yang dipassing ke dalam komponen. Artinya, apapun yang diletakkan di dalam tag `<Main></Main>` di komponen induk akan dipassing sebagai `children`.

2. **`return <main className="main">{children}</main>;`**:
   - Komponen `Main` merender elemen HTML `<main>` yang memiliki kelas CSS `main`.
   - Semua konten yang dipassing melalui `children` akan ditampilkan di dalam tag `<main>`.
   - Dengan kata lain, komponen ini bertindak sebagai **wrapper** untuk komponen lainnya, memungkinkan pengorganisasian struktur layout.

#### Kesimpulan

Komponen `Main` adalah komponen presentasional yang berfungsi untuk membungkus dan mengorganisasi komponen lainnya dalam aplikasi. Komponen ini tidak memiliki logika atau state, hanya berfungsi untuk menyusun dan menampilkan konten yang diberikan kepadanya. Ini adalah contoh dari **presentational component** dalam React, yang fokus pada tampilan dan layout.
