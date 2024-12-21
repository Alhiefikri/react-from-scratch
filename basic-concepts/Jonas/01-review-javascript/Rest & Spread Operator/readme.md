# Rest & Spread Operator dalam JavaScript

## Penjelasan Sederhana

Rest dan Spread operator menggunakan simbol yang sama (...) tapi fungsinya berbeda:

- Rest operator: mengumpulkan beberapa elemen menjadi satu array
- Spread operator: menyebarkan elemen dari array atau object

### Analogi Sederhana

- Rest operator seperti menyapu remah-remah ke dalam satu tempat sampah (mengumpulkan)
- Spread operator seperti menaburkan garam ke makanan (menyebarkan)

### Kenapa Perlu Dipelajari?

- Membuat code lebih fleksibel
- Memudahkan penggabungan array/object
- Sering digunakan dalam React untuk props dan state management

## Penjelasan Code

### 1. Rest Operator

```javascript
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);
// Output: "science fiction" "novel" ["adventure"]
```

Penjelasan:

- `primaryGenre` mendapat nilai pertama
- `secondaryGenre` mendapat nilai kedua
- `...otherGenres` mengumpulkan sisa nilai dalam array baru

### 2. Spread Operator dengan Array

```javascript
const newGenres = ["epic fantasy", ...genres];
// Output: ["epic fantasy", "science fiction", "novel", "adventure"]
```

Penjelasan:

- Membuat array baru dengan menambahkan "epic fantasy"
- `...genres` menyebarkan semua nilai dari array genres ke array baru

### 3. Spread Operator dengan Object

```javascript
const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
};
```

Penjelasan:

- Membuat object baru dengan semua properti dari book
- Menambahkan properti baru `moviePublicationDate`
- Bisa juga untuk mengupdate properti yang sudah ada

## Tujuan & Manfaat

### 1. Apa yang Bisa Diselesaikan

- Menggabungkan array atau object
- Membuat salinan array/object dengan modifikasi
- Mengumpulkan sisa parameter dalam fungsi
- Memisahkan data menjadi bagian yang diinginkan

### 2. Kapan Menggunakannya

Rest Operator:

- Saat ingin mengumpulkan sisa parameter
- Dalam destructuring untuk mengambil nilai tersisa

Spread Operator:

- Saat membuat salinan array/object
- Saat menggabungkan beberapa array/object
- Saat memperbarui state di React

### 3. Keuntungan

- Code lebih bersih dan mudah dibaca
- Menghindari mutasi langsung pada data asli
- Lebih fleksibel dalam mengelola data
- Memudahkan pembuatan komponen yang reusable di React
