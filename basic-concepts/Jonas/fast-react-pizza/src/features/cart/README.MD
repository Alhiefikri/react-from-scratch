# Penjelasan Kode Komponen `Cart`

Komponen `Cart` bertugas untuk menampilkan keranjang belanja yang berisi item pizza yang dipilih oleh pengguna. Komponen ini juga menyediakan link untuk kembali ke menu dan tombol untuk membuat pesanan baru atau menghapus keranjang belanja.

---

## Pengertian

Komponen `Cart` adalah halaman yang menampilkan isi dari keranjang belanja, yang dalam kasus ini adalah daftar pizza yang telah dipilih (dalam bentuk array `fakeCart`). Pengguna dapat kembali ke menu untuk memilih pizza lain, atau melanjutkan untuk membuat pesanan.

---

## Cara Berpikir React di Kode Ini

1. **Menampilkan Data Keranjang**:

   - Data dalam keranjang (seperti nama pizza, jumlah, harga) diambil dari array `fakeCart`. Meskipun data ini di-hardcode, seharusnya di aplikasi nyata data ini bisa berasal dari state atau API.

2. **Navigasi dengan React Router**:

   - **`Link`** dari React Router digunakan untuk membuat navigasi ke halaman lain, misalnya kembali ke halaman menu atau menuju halaman pemesanan.

3. **Tombol untuk Menghapus Keranjang**:
   - Ada tombol untuk "Clear cart" yang dapat diprogram untuk menghapus seluruh isi keranjang, meskipun saat ini tombol tersebut tidak memiliki fungsionalitas yang ditambahkan dalam kode.

---

## Analogi Sederhana

Bayangkan kamu sedang berbelanja di restoran dan menambah beberapa pizza ke keranjang belanja. Kamu bisa memeriksa keranjang untuk melihat pilihan pizza yang sudah kamu pilih. Kemudian, kamu bisa memilih untuk melanjutkan dan memesan pizza-pizza tersebut, atau kembali ke menu untuk memilih pizza lain.

---

## Penjelasan Kode Tiap Baris

### 1. Mengimpor Modul dan Data

```javascript
import { Link } from "react-router-dom";
```

- **`Link`**: Komponen dari **React Router** yang digunakan untuk membuat link navigasi antar halaman di aplikasi tanpa memuat ulang halaman.

### 2. Data Keranjang Palsu

```javascript
const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];
```

- **`fakeCart`**: Ini adalah array data yang menyimpan item pizza yang ada di keranjang belanja. Setiap item memiliki `pizzaId`, `name` (nama pizza), `quantity` (jumlah pizza), `unitPrice` (harga per pizza), dan `totalPrice` (total harga untuk setiap item).

### 3. Komponen `Cart`

```javascript
function Cart() {
  const cart = fakeCart;

  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <h2>Your cart, %NAME%</h2>

      <div>
        <Link to="/order/new">Order pizzas</Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
}
```

- **`const cart = fakeCart;`**: Menyimpan data keranjang belanja ke dalam konstanta `cart`. Di aplikasi nyata, ini bisa diambil dari state atau context.
- **`<Link to="/menu">`**: Membuat link untuk kembali ke halaman menu jika pengguna ingin memilih lebih banyak pizza. Tanda `&larr;` adalah simbol panah kiri yang menunjukkan navigasi kembali.

- **`<h2>Your cart, %NAME%</h2>`**: Menampilkan judul yang memberi tahu pengguna bahwa ini adalah halaman keranjang mereka. **`%NAME%`** adalah placeholder yang tampaknya dimaksudkan untuk menampilkan nama pelanggan. Namun, kode ini tidak mengimplementasikan pengambilan nama pelanggan, sehingga placeholder ini tidak akan digantikan dengan nama apapun.

- **`<Link to="/order/new">Order pizzas</Link>`**: Link yang mengarahkan pengguna ke halaman untuk melanjutkan pemesanan. Link ini akan membawa pengguna ke halaman pembuatan pesanan baru (seperti formulir pesanan).

- **`<button>Clear cart</button>`**: Tombol untuk menghapus keranjang belanja. Namun, saat ini tombol ini tidak memiliki fungsionalitas terkait (misalnya, tidak menghapus item dari `fakeCart`).

### 4. Ekspor Komponen

```javascript
export default Cart;
```

- **`export default Cart;`**: Menyediakan komponen `Cart` untuk digunakan di tempat lain dalam aplikasi (misalnya dalam routing).

---

## Kesimpulan

Komponen `Cart` adalah halaman yang menunjukkan isi dari keranjang belanja, yang berisi pizza-pizza yang telah dipilih pengguna.

- Menggunakan **React Router's `Link`** untuk navigasi antara halaman (menu dan pemesanan).
- Ada juga tombol untuk menghapus keranjang belanja, meskipun fungsionalitasnya belum diimplementasikan.

Secara keseluruhan, komponen ini memberi pengguna antarmuka yang sederhana untuk melihat apa yang ada di keranjang belanja dan melanjutkan ke pemesanan atau kembali ke menu untuk memilih pizza lain.
