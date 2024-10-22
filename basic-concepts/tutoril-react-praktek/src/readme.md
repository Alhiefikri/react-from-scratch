Berikut adalah dokumentasi yang telah direvisi dan diperluas, termasuk pengertian tambahan untuk membuatnya lebih jelas dan mudah dipahami oleh orang awam.

# Dokumentasi Komponen App

## Pengertian

Komponen App adalah komponen utama (root component) dalam aplikasi React ini. Ini berfungsi sebagai kontainer untuk seluruh aplikasi dan mengatur state serta logika utama aplikasi. Komponen ini bertanggung jawab untuk mengelola produk, yang merupakan item yang ditawarkan dalam aplikasi "Belanja Mobil".

## Tujuan Komponen

Tujuan utama komponen App adalah:

1. Menyimpan dan mengelola state produk untuk seluruh aplikasi.
2. Menyediakan fungsi-fungsi untuk memanipulasi data produk (menambah, mengedit, dan menghapus).
3. Merender komponen-komponen utama aplikasi (ProductList dan ProductCreate).
4. Mengambil data produk dari API eksternal untuk memastikan aplikasi memiliki data terkini.

## Fungsi Tiap Baris Kode

```jsx
import "./App.css";
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import { Products } from "./data/Product";
import ProductCreate from "./components/ProductCreate";
import axios from "axios";

import {
  createProductApi,
  deleteProductApi,
  editProductApi,
  fetchProductsApi,
} from "./api/productsAPI";
```

- Mengimpor file CSS, komponen-komponen yang dibutuhkan (ProductList, ProductCreate), hook `useEffect` dan `useState`, data produk awal, dan modul untuk berinteraksi dengan API.

```jsx
function App() {
  const [products, setProducts] = useState(Products);
```

- Mendefinisikan komponen App sebagai functional component.
- Menggunakan `useState` hook untuk menginisialisasi state 'products' dengan data dari 'Products'.

```jsx
const fetchProducts = async () => {
  const response = await fetchProductsApi();
  setProducts(response.data);
};
useEffect(() => {
  fetchProducts();
}, []);
```

- Fungsi `fetchProducts` digunakan untuk mengambil data produk dari API dan memperbarui state 'products'.
- `useEffect` memastikan bahwa fungsi `fetchProducts` dijalankan saat komponen pertama kali dimuat.

```jsx
const onEditProduct = async (id, data) => {
  const response = await editProductApi(id, data);

  const updatedProducts = products.map((prod) => {
    if (prod.id === id) {
      return { ...prod, ...response.data };
    }
    return prod;
  });
  setProducts(updatedProducts);
};
```

- Fungsi untuk mengedit produk berdasarkan ID.
- Mengupdate produk yang diedit dengan data terbaru dari API dan memperbarui state.

```jsx
const onCreateProduct = async (product) => {
  const response = await createProductApi(product);
  setProducts([...products, response.data]);
};
```

- Fungsi untuk membuat produk baru.
- Mengirimkan data produk baru ke API dan menambahkan produk baru ke array products.

```jsx
const onDeleteProduct = async (id) => {
  await deleteProductApi(id);
  const updatedProduct = products.filter((prod) => {
    return prod.id != id;
  });
  setProducts(updatedProduct);
};
```

- Fungsi untuk menghapus produk berdasarkan ID.
- Menghapus produk dari array dan memperbarui state setelah produk berhasil dihapus dari API.

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

- Merender judul aplikasi, komponen `ProductCreate`, dan komponen `ProductList`.
- Meneruskan state dan fungsi-fungsi sebagai props ke komponen anak.

## Cara Berpikir React

1. **Component-Based**: App dibagi menjadi komponen-komponen yang lebih kecil dan dapat digunakan kembali (ProductList, ProductCreate).
2. **State Management**: Menggunakan `useState` hook untuk mengelola state aplikasi di level tertinggi.
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

Komponen App berfungsi sebagai pusat kontrol untuk aplikasi "Belanja Mobil". Ia mengelola data produk, menyediakan fungsi-fungsi untuk memanipulasi data, dan mengatur tampilan utama aplikasi. Dengan struktur ini, aplikasi menjadi lebih mudah dikelola dan dipelihara, serta memungkinkan aliran data yang konsisten dan terprediksi. Penggunaan API juga memastikan bahwa aplikasi selalu memiliki data produk yang terbaru, meningkatkan pengalaman pengguna secara keseluruhan.
