Berikut adalah README yang mencakup penjelasan tentang folder API, fungsinya, serta penjelasan mendetail tentang skrip yang ada di dalamnya.

# README - Aplikasi Belanja Mobil

## Deskripsi

Aplikasi Belanja Mobil adalah aplikasi berbasis React yang memungkinkan pengguna untuk mengelola daftar produk mobil. Pengguna dapat menambah, mengedit, dan menghapus produk melalui antarmuka yang sederhana.

## Struktur Proyek

```
/src
  ├── /api          # Berisi fungsi API untuk mengelola produk
  ├── /components    # Komponen React untuk UI
  ├── /data         # Data produk awal
  ├── App.js        # Komponen utama
  └── App.css       # Styling aplikasi
```

### Folder API

Folder `/api` berfungsi sebagai tempat untuk mengelola semua interaksi dengan API eksternal. Ini memungkinkan pemisahan logika pengambilan data dari komponen UI, menjadikan kode lebih terorganisir dan mudah dikelola. Fungsi di dalam folder ini bertanggung jawab untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada produk.

## Skrip API

### 1. Mengambil Daftar Produk

```javascript
import axios from "axios";

export const fetchProductsApi = async () => {
  const response = await axios.get("http://127.0.0.1:3005/products");
  return response;
};
```

- **Fungsi**: `fetchProductsApi`
- **Deskripsi**: Mengambil data produk dari API.
- **Cara Kerja**: Menggunakan metode GET dari Axios untuk mengambil data dari server.

### 2. Menambahkan Produk Baru

```javascript
export const createProductApi = async (product) => {
  const response = await axios.post("http://127.0.0.1:3005/products", product);
  return response;
};
```

- **Fungsi**: `createProductApi`
- **Deskripsi**: Mengirimkan data produk baru ke server.
- **Cara Kerja**: Menggunakan metode POST dari Axios dengan data produk yang akan ditambahkan.

### 3. Memperbarui Produk

```javascript
export const editProductApi = async (id, data) => {
  const response = await axios.put(
    `http://127.0.0.1:3005/products/${id}`,
    data
  );
  return response;
};
```

- **Fungsi**: `editProductApi`
- **Deskripsi**: Memperbarui data produk yang ada berdasarkan ID.
- **Cara Kerja**: Menggunakan metode PUT dari Axios untuk mengirim data yang telah diperbarui.

### 4. Menghapus Produk

```javascript
export const deleteProductApi = async (id) => {
  await axios.delete(`http://127.0.0.1:3005/products/${id}`);
};
```

- **Fungsi**: `deleteProductApi`
- **Deskripsi**: Menghapus produk berdasarkan ID.
- **Cara Kerja**: Menggunakan metode DELETE dari Axios untuk menghapus data di server.

## Cara Kerja Kode

1. **Inisialisasi**: Kode ini menggunakan Axios untuk berkomunikasi dengan API yang menyediakan data produk.
2. **Fungsi**: Setiap fungsi API memiliki tanggung jawab untuk mengelola data produk.
3. **Asynchronous**: Semua fungsi didefinisikan sebagai `async`, memungkinkan penggunaan `await` untuk menangani permintaan HTTP.

## Cara Berpikir React

1. **Component-Based**: Aplikasi dibangun dari komponen-komponen kecil yang dapat digunakan kembali.
2. **State Management**: Mengelola state aplikasi di level tertinggi untuk memudahkan kontrol dan pemeliharaan.
3. **Unidirectional Data Flow**: Data mengalir dari komponen induk ke komponen anak melalui props.
4. **Lifting State Up**: Fungsi-fungsi untuk memanipulasi state didefinisikan di komponen yang lebih tinggi dan diteruskan ke komponen anak.

## Analogi Sederhana

Bayangkan aplikasi ini sebagai manajer toko mobil. Manajer ini:

- Memiliki daftar semua produk (state produk).
- Dapat menambah produk baru (fungsi untuk membuat produk).
- Dapat mengubah informasi produk (fungsi untuk mengedit produk).
- Dapat menghapus produk (fungsi untuk menghapus produk).
- Mempunyai asisten untuk menampilkan produk (komponen ProductList) dan asisten untuk membuat produk baru (komponen ProductCreate).

## Kesimpulan

Aplikasi Belanja Mobil menyediakan antarmuka yang sederhana untuk mengelola data produk mobil. Dengan menggunakan React dan Axios, aplikasi ini memastikan pengelolaan data yang efisien dan responsif. Struktur yang jelas dan cara berpikir yang terorganisir membuat aplikasi ini mudah dipahami dan dikelola. Folder API memungkinkan pemisahan logika pengambilan data, sehingga meningkatkan keterbacaan dan pemeliharaan kode.
