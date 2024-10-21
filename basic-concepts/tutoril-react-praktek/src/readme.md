# Dokumentasi Komponen App

## Pengertian

Komponen App adalah komponen utama (root component) dalam aplikasi React ini. Ini berfungsi sebagai container untuk seluruh aplikasi dan mengatur state serta logika utama aplikasi.

## Tujuan Komponen

Tujuan utama komponen App adalah:

1. Menyimpan dan mengelola state produk untuk seluruh aplikasi.
2. Menyediakan fungsi-fungsi untuk memanipulasi data produk (edit, create, delete).
3. Merender komponen-komponen utama aplikasi (ProductList dan ProductCreate).

## Fungsi Tiap Baris Kode

```jsx
import "./App.css";
import ProductList from "./components/ProductList";
import { useState } from "react";
import { Products } from "./data/Product";
import ProductCreate from "./components/ProductCreate";
```

- Mengimpor file CSS, komponen-komponen yang dibutuhkan (ProductList, ProductCreate), hook useState, dan data produk awal.

```jsx
function App() {
  const [products, setProducts] = useState(Products);
```

- Mendefinisikan komponen App sebagai functional component.
- Menggunakan useState hook untuk menginisialisasi state 'products' dengan data dari 'Products'.

```jsx
const onEditProduct = (id, data) => {
  const updatedProducts = products.map((prod) => {
    if (prod.id === id) {
      return { ...prod, ...data };
    }
    return prod;
  });
  setProducts(updatedProducts);
};
```

- Fungsi untuk mengedit produk berdasarkan ID.
- Membuat array baru dengan produk yang diupdate dan memperbarui state.

```jsx
const onCreateProduct = (product) => {
  setProducts([
    ...products,
    { id: Math.round(Math.random() * 7777), ...product },
  ]);
};
```

- Fungsi untuk membuat produk baru.
- Menambahkan produk baru ke array products dengan ID acak.

```jsx
const onDeleteProduct = (id) => {
  const updatedProduct = products.filter((prod) => {
    return prod.id != id;
  });
  setProducts(updatedProduct);
};
```

- Fungsi untuk menghapus produk berdasarkan ID.
- Membuat array baru tanpa produk yang dihapus dan memperbarui state.

```jsx
return (
  <>
    <div className="app-title">Belanja Mobil</div>
    <ProductCreate onCreateProduct={onCreateProduct} />
    <ProductList
      products={products}
      onDeleteProduct={onDeleteProduct}
      onEditProduct={onEditProduct}
    />
  </>
);
```

- Merender judul aplikasi, komponen ProductCreate, dan komponen ProductList.
- Meneruskan state dan fungsi-fungsi sebagai props ke komponen anak.

## Cara Berpikir React

1. **Component-Based**: App dibagi menjadi komponen-komponen yang lebih kecil dan dapat digunakan kembali (ProductList, ProductCreate).
2. **State Management**: Menggunakan useState hook untuk mengelola state aplikasi di level tertinggi.
3. **Unidirectional Data Flow**: Data mengalir dari komponen induk (App) ke komponen anak melalui props.
4. **Lifting State Up**: Fungsi-fungsi untuk memanipulasi state didefinisikan di komponen App dan diteruskan ke komponen anak.

## Analogi Sederhana

Bayangkan App sebagai manajer toko. Manajer ini:

- Memiliki daftar semua produk (state products).
- Bisa menambah produk baru (onCreateProduct).
- Bisa mengubah informasi produk (onEditProduct).
- Bisa menghapus produk (onDeleteProduct).
- Memiliki asisten untuk menampilkan produk (ProductList) dan asisten untuk membuat produk baru (ProductCreate).

## Kesimpulan

Komponen App berfungsi sebagai pusat kontrol untuk aplikasi "Belanja Mobil". Ia mengelola data produk, menyediakan fungsi-fungsi untuk memanipulasi data, dan mengatur tampilan utama aplikasi. Dengan struktur ini, aplikasi menjadi lebih mudah dikelola dan dipelihara, serta memungkinkan aliran data yang konsisten dan terprediksi.
