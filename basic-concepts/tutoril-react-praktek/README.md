# README: Aplikasi Manajemen Produk Mobil

## Pendahuluan

Aplikasi ini memungkinkan pengguna untuk mengelola daftar produk mobil. Pengguna dapat menambah, mengedit, dan menghapus produk melalui antarmuka yang intuitif. Aplikasi ini dibangun menggunakan React dan terdiri dari beberapa komponen utama.

## Struktur Proyek

```
src/
├── components/
│   ├── ProductCard.js
│   ├── ProductCreate.js
│   ├── ProductEdit.js
│   ├── ProductList.js
├── App.js
├── App.css
└── index.js
```

## Komponen Utama

### 1. ProductCard

- **Deskripsi**: Menampilkan informasi detail dari produk, termasuk gambar, nama, dan deskripsi. Juga menyediakan opsi untuk mengedit dan menghapus produk.
- **State**:
  - `jumlahProduct`: Menyimpan jumlah produk yang ditambahkan ke keranjang.
  - `showEdit`: Menentukan apakah form edit ditampilkan.
- **Fungsi**:
  - `kurangProduct`: Mengurangi jumlah produk di keranjang.
  - `tambahProduct`: Menambahkan jumlah produk di keranjang.
  - `handleSubmit`: Menyimpan perubahan saat mengedit produk.
  - `cancelEdit`: Menutup form edit tanpa menyimpan perubahan.

**Contoh Kode**:

```javascript
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import ProductEdit from "./ProductEdit";

const ProductCard = ({ product, onDeleteProduct, onEditProduct }) => {
  // ... implementasi
};
```

### 2. ProductCreate

- **Deskripsi**: Menyediakan form untuk menambah produk baru ke daftar.
- **State**:
  - `showForm`: Menentukan apakah form ditampilkan.
  - `formData`: Menyimpan data produk baru yang akan ditambahkan.
- **Fungsi**:
  - `handleShow`: Mengelola visibilitas form.
  - `handleSubmit`: Mengirim data produk baru dan mereset form.
  - `handleChange`: Mengupdate state berdasarkan input pengguna.

**Contoh Kode**:

```javascript
import React, { useState } from "react";

const ProductCreate = ({ onCreateProduct }) => {
  // ... implementasi
};
```

### 3. ProductEdit

- **Deskripsi**: Menyediakan form untuk mengedit informasi produk yang ada.
- **State**:
  - `FormData`: Menyimpan data produk yang sedang diedit.
- **Fungsi**:
  - `handleChange`: Mengupdate state saat input berubah.
  - `handleSubmit`: Mengirim perubahan yang telah dibuat.
  - `onCancel`: Menutup form edit tanpa menyimpan perubahan.

**Contoh Kode**:

```javascript
import React, { useState } from "react";

const ProductEdit = ({ product, onEditProduct, cancelEdit }) => {
  // ... implementasi
};
```

### 4. ProductList

- **Deskripsi**: Menampilkan daftar produk dengan memetakan setiap produk ke dalam `ProductCard`.
- **Props**: Menerima daftar produk dan fungsi untuk mengedit atau menghapus produk.

**Contoh Kode**:

```javascript
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onDeleteProduct, onEditProduct }) => {
  // ... implementasi
};
```

## Alur Pengembangan Komponen

1. **Mulai dengan `ProductCard`**: Ini adalah komponen inti yang menampilkan detail produk.
2. **Buat `ProductCreate`**: Menyediakan form untuk menambah produk baru.
3. **Buat `ProductEdit`**: Menyediakan form untuk mengedit produk.
4. **Buat `ProductList`**: Untuk menampilkan semua produk.
5. **Implementasi `App.js`**: Mengelola state global dan menghubungkan komponen-komponen.

## Penggunaan

1. **Menambah Produk**: Klik tombol "Add Product" untuk membuka form. Isi data produk dan klik "Submit".
2. **Mengedit Produk**: Klik ikon edit di dalam `ProductCard`, ubah data, dan klik "Submit".
3. **Menghapus Produk**: Klik ikon hapus di dalam `ProductCard` untuk menghapus produk.

## Kesimpulan

Aplikasi ini memberikan cara yang sederhana dan efisien untuk mengelola daftar produk mobil. Dengan memisahkan setiap fungsionalitas ke dalam komponen terpisah, kode menjadi lebih mudah dipelihara dan dikembangkan. Anda dapat menambahkan fitur lebih lanjut atau melakukan perbaikan berdasarkan umpan balik pengguna.

Jika ada pertanyaan lebih lanjut atau kebutuhan klarifikasi, silakan hubungi pengembang. Selamat mencoba!
