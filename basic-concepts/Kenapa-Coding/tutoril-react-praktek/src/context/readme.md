Berikut adalah penjelasan mengenai `ProductContext` dengan format yang mudah dipahami, terutama bagi pemula:

# Dokumentasi ProductContext

## Pengertian

`ProductContext` adalah konteks yang digunakan dalam aplikasi React untuk menyediakan data produk dan fungsi terkait kepada komponen-komponen anak tanpa perlu mengoper props secara berlebihan (props drilling). Dengan menggunakan konteks, komponen dapat mengakses data dan fungsi secara langsung dari provider.

## Tujuan ProductContext

Tujuan utama `ProductContext` adalah:

1. Menyimpan state produk secara global agar bisa diakses oleh berbagai komponen.
2. Menyediakan fungsi untuk menambah, mengedit, menghapus, dan mengambil data produk.
3. Menghindari kebutuhan untuk mengoper props ke dalam banyak lapisan komponen.

## Struktur Kode

```jsx
import { createContext, useState } from "react";
import {
  createProductApi,
  deleteProductApi,
  editProductApi,
  fetchProductsApi,
} from "../api/productsAPI";
import axios from "axios";
import { Products } from "../data/Product";

const ProductContext = createContext();
```

- Mengimpor fungsi yang diperlukan untuk berinteraksi dengan API dan state awal produk.
- Membuat konteks baru menggunakan `createContext()`.

```jsx
function Provider({ children }) {
  const [products, setProducts] = useState(Products);
```

- Mendefinisikan komponen `Provider`, yang akan menjadi pembungkus bagi semua komponen yang membutuhkan akses ke `ProductContext`.
- Menggunakan `useState` untuk menyimpan dan mengelola daftar produk.

### Fungsi Utama

#### 1. Fetch Products

```jsx
const fetchProducts = async () => {
  const response = await fetchProductsApi();
  setProducts(response.data);
};
```

- Fungsi ini mengambil data produk dari API dan memperbarui state `products` dengan data terbaru.

#### 2. Edit Product

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

- Fungsi ini mengedit produk berdasarkan ID yang diberikan.
- Memperbarui state produk setelah menerima data terbaru dari API.

#### 3. Create Product

```jsx
const onCreateProduct = async (product) => {
  const response = await createProductApi(product);
  setProducts([...products, response.data]);
};
```

- Fungsi ini digunakan untuk menambahkan produk baru ke dalam daftar produk.
- Mengirimkan data produk baru ke API dan memperbarui state dengan produk yang baru ditambahkan.

#### 4. Delete Product

```jsx
const onDeleteProduct = async (id) => {
  await deleteProductApi(id);
  const updatedProduct = products.filter((prod) => {
    return prod.id != id;
  });
  setProducts(updatedProduct);
};
```

- Fungsi ini menghapus produk berdasarkan ID yang diberikan.
- Memperbarui state setelah produk berhasil dihapus dari API.

### Menyediakan Nilai ke Context

```jsx
const valueToShare = {
  products,
  onCreateProduct,
  onDeleteProduct,
  onEditProduct,
  fetchProducts,
};
```

- Menyusun objek `valueToShare` yang berisi state dan fungsi yang akan dibagikan ke komponen-komponen anak.

### Menyediakan Context

```jsx
return (
  <ProductContext.Provider value={valueToShare}>
    {children}
  </ProductContext.Provider>
);
```

- Menggunakan `ProductContext.Provider` untuk menyediakan nilai yang telah disusun kepada semua komponen anak.

## Kesimpulan

`ProductContext` berfungsi sebagai wadah untuk mengelola dan menyediakan akses ke data produk dan fungsi-fungsi terkait di seluruh aplikasi. Dengan menggunakan konteks, aplikasi menjadi lebih terstruktur dan mudah untuk dikelola, serta mengurangi kebutuhan untuk mengoper props di berbagai level komponen.
