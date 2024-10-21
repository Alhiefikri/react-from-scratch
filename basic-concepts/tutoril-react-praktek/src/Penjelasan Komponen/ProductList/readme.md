# README untuk Komponen React: ProductList

## Penjelasan Komponen

`ProductList` adalah komponen React yang bertugas untuk menampilkan daftar produk dalam bentuk kartu. Komponen ini menerima props yang berisi data produk dan fungsi untuk mengedit atau menghapus produk.

## Tujuan Komponen

Tujuan utama dari `ProductList` adalah untuk menyajikan informasi tentang produk dalam format yang mudah dibaca dan interaktif. Dengan komponen ini, pengguna dapat melihat daftar produk dan melakukan tindakan seperti mengedit atau menghapus produk tersebut.

## Penjelasan Fungsi Kode

```javascript
import React from "react";
import ProductCard from "./ProductCard";
```

- **Import**: Komponen `React` dan `ProductCard` diimpor untuk digunakan dalam `ProductList`.

```javascript
const ProductList = ({ products, onDeleteProduct, onEditProduct }) => {
```

- **Definisi Komponen**: `ProductList` didefinisikan sebagai fungsi yang menerima props `products`, `onDeleteProduct`, dan `onEditProduct`.
  - `products`: Array objek yang berisi data produk.
  - `onDeleteProduct`: Fungsi yang dipanggil saat produk dihapus.
  - `onEditProduct`: Fungsi yang dipanggil saat produk diedit.

```javascript
return (
  <div className="cards">
    {products.map((product) => {
      return (
        <ProductCard
          key={product.id}
          product={product}
          onDeleteProduct={onDeleteProduct}
          onEditProduct={onEditProduct}
        />
      );
    })}
  </div>
);
```

- **Render**: Komponen mengembalikan sebuah `<div>` yang berisi kartu produk.
  - `products.map(...)`: Mengiterasi setiap produk dalam array `products`.
  - `ProductCard`: Untuk setiap produk, komponen `ProductCard` dibuat dengan props yang diperlukan.
    - `key`: Memberikan key unik untuk setiap produk agar React dapat melacak perubahan.
    - `product`: Data produk yang akan ditampilkan.
    - `onDeleteProduct` dan `onEditProduct`: Fungsi yang diteruskan untuk menangani penghapusan dan pengeditan.

```javascript
export default ProductList;
```

- **Ekspor**: Komponen diekspor sehingga dapat digunakan di tempat lain dalam aplikasi.

## Cara Berpikir React

React berfokus pada komposisi komponen dan pengelolaan state. Komponen `ProductList` adalah contoh yang baik dari prinsip ini, di mana komponen yang lebih besar (list) terdiri dari beberapa komponen yang lebih kecil (kartu produk). Setiap perubahan pada state produk akan menyebabkan re-rendering, memastikan bahwa antarmuka pengguna selalu sinkron dengan data.

## Analogi Sederhana

Bayangkan `ProductList` seperti rak display di toko. Setiap kartu produk adalah barang yang ditampilkan di rak tersebut. Ketika kamu ingin menghapus atau mengubah sesuatu, kamu langsung berinteraksi dengan barang tersebut. `ProductList` berfungsi sebagai rak yang mengorganisir dan menampilkan semua barang (produk) untuk dilihat dan diubah.

## Kesimpulan

Komponen `ProductList` merupakan bagian penting dalam aplikasi React yang memudahkan pengguna untuk berinteraksi dengan daftar produk. Dengan memisahkan logika tampilan dan interaksi melalui props, komponen ini mendemonstrasikan kekuatan React dalam membangun antarmuka pengguna yang dinamis dan responsif.
