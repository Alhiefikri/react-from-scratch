Berikut adalah penjelasan mengenai komponen `ProductList`, disusun dengan format yang mudah dipahami:

# Dokumentasi Komponen ProductList

## Pengertian

`ProductList` adalah komponen yang bertugas untuk menampilkan daftar produk dalam bentuk kartu. Komponen ini menggunakan konteks untuk mendapatkan data produk dan merender komponen `ProductCard` untuk setiap produk.

## Tujuan Komponen

Tujuan utama komponen `ProductList` adalah:

1. Mengambil daftar produk dari `ProductContext`.
2. Merender setiap produk dalam bentuk kartu menggunakan komponen `ProductCard`.
3. Menyediakan tampilan yang terorganisir untuk semua produk yang ada.

## Struktur Kode

```jsx
import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import ProductContext from "../context/products";
```

- Mengimpor React, hook `useContext`, komponen `ProductCard`, dan konteks `ProductContext`.

### Definisi Komponen

```jsx
const ProductList = () => {
  const { products } = useContext(ProductContext);
```

- Mendefinisikan komponen `ProductList`.
- Menggunakan `useContext` untuk mengambil state `products` dari `ProductContext`.

### Render Komponen

```jsx
return (
  <div className="cards">
    {products.map((product) => {
      return <ProductCard key={product.id} product={product} />;
    })}
  </div>
);
```

- Merender elemen `div` yang berfungsi sebagai wadah untuk kartu produk.
- Menggunakan `map` untuk iterasi setiap produk dalam array `products` dan merender `ProductCard` untuk setiap produk.
- Setiap `ProductCard` diberi atribut `key` menggunakan `product.id` untuk memastikan setiap elemen memiliki identitas unik.

## Kesimpulan

Komponen `ProductList` berfungsi untuk menampilkan semua produk yang ada dalam aplikasi "Belanja Mobil". Dengan menggunakan `useContext`, komponen ini dapat mengakses data produk secara langsung dari konteks, sehingga memudahkan dalam mengelola dan menampilkan daftar produk. Struktur yang sederhana membuatnya mudah dipahami dan digunakan dalam aplikasi.
