# Dokumentasi Komponen ProductCard

## Pengertian

ProductCard adalah komponen React yang merepresentasikan sebuah kartu produk dalam aplikasi "Belanja Mobil". Komponen ini menampilkan informasi produk, memungkinkan pengeditan dan penghapusan produk, serta mengelola jumlah produk yang ingin dibeli.

## Tujuan Komponen

1. Menampilkan informasi produk (gambar, nama, deskripsi)
2. Menyediakan antarmuka untuk mengedit dan menghapus produk
3. Mengelola jumlah produk yang ingin dibeli
4. Menampilkan form edit produk ketika diperlukan

## Kode Komponen dengan Komentar dan Penjelasan

```jsx
// Mengimpor dependencies dan komponen yang dibutuhkan
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import ProductEdit from "./ProductEdit";
```

Penjelasan:

- Mengimpor useState hook dari React untuk mengelola state lokal.
- Mengimpor ikon-ikon dari react-icons untuk tombol edit dan delete.
- Mengimpor komponen ProductEdit yang akan digunakan untuk mengedit produk.

```jsx
// Mendefinisikan komponen ProductCard
const ProductCard = ({ product, onDeleteProduct, onEditProduct }) => {
  // Melakukan destructuring props product
  const { id, nama, deskripsi, imageURL } = product;

  // Menginisialisasi state untuk jumlah produk dan status tampilan form edit
  const [jumlahProduct, setJumlahProduct] = useState(0);
  const [showEdit, setShowEdit] = useState(false);
```

Penjelasan:

- Komponen ProductCard menerima props: product (data produk), onDeleteProduct (fungsi untuk menghapus), dan onEditProduct (fungsi untuk mengedit).
- Melakukan destructuring pada props product untuk memudahkan penggunaan.
- Menginisialisasi dua state lokal: jumlahProduct (jumlah produk dalam keranjang) dan showEdit (status tampilan form edit).

```jsx
// Fungsi untuk mengurangi jumlah produk
const kurangProduct = () => {
  setJumlahProduct(jumlahProduct - 1);
};

// Fungsi untuk menambah jumlah produk
const tambahProduct = () => {
  setJumlahProduct(jumlahProduct + 1);
};
```

Penjelasan:

- kurangProduct: Fungsi untuk mengurangi jumlah produk dalam keranjang.
- tambahProduct: Fungsi untuk menambah jumlah produk dalam keranjang.

```jsx
// Fungsi untuk menangani submit form edit
const handleSubmit = (id, data) => {
  setShowEdit(false);
  onEditProduct(id, data);
};

// Fungsi untuk membatalkan edit
const cancelEdit = () => {
  setShowEdit(false);
};
```

Penjelasan:

- handleSubmit: Fungsi yang dipanggil ketika form edit disubmit. Menutup form edit dan memanggil fungsi onEditProduct dari props.
- cancelEdit: Fungsi untuk membatalkan proses edit dan menutup form edit.

```jsx
  return (
    <div className="card">
      {/* Conditional rendering: menampilkan form edit atau kartu produk */}
      {showEdit ? (
        <ProductEdit
          product={product}
          onEditProduct={handleSubmit}
          cancelEdit={cancelEdit}
        />
      ) : (
        <>
          {/* Tombol edit dan delete */}
          <div className="edit-delete">
            <AiTwotoneEdit
              onClick={() => setShowEdit(!showEdit)}
              className="icon-edit"
            />
            <MdDeleteForever
              onClick={() => onDeleteProduct(id)}
              className="icon-delete"
            />
          </div>

          {/* Gambar produk */}
          <img
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "10px 10px 0px 0px",
            }}
            src={imageURL}
            alt=""
          />

          {/* Informasi produk */}
          <div className="container">
            <h4><b>{nama}</b></h4>
            <p>{deskripsi}</p>
          </div>

          {/* UI untuk menambah/kurangi jumlah produk atau tombol "Keranjang" */}
          <div
            className={`card-keranjang ${
              jumlahProduct > 0 ? "jumlah-product" : "show-keranjang"
            }`}
          >
            {jumlahProduct > 0 ? (
              <>
                <button className="button" onClick={kurangProduct}>
                  -
                </button>
                <div>{jumlahProduct}</div>
                <button className="button" onClick={tambahProduct}>
                  +
                </button>
              </>
            ) : (
              <div className="keranjang" onClick={tambahProduct}>
                + Keranjang
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
```

Penjelasan:

- Komponen menggunakan conditional rendering untuk menampilkan form edit (ProductEdit) atau kartu produk berdasarkan nilai showEdit.
- Kartu produk menampilkan tombol edit dan delete, gambar produk, nama, deskripsi, dan UI untuk mengelola jumlah produk dalam keranjang.
- UI keranjang berubah berdasarkan jumlahProduct: menampilkan tombol "+" dan "-" jika ada produk, atau tombol "Keranjang" jika belum ada.

## Cara Berpikir React

1. **Composability**: ProductCard dapat digunakan berulang kali untuk setiap produk.
2. **State Management**: Menggunakan useState untuk mengelola state lokal (jumlahProduct, showEdit).
3. **Conditional Rendering**: Menampilkan konten berbeda berdasarkan state (showEdit, jumlahProduct).
4. **Props Drilling**: Menerima dan menggunakan fungsi dari komponen induk (onDeleteProduct, onEditProduct).
5. **Lifting State Up**: Perubahan pada produk (edit, delete) dikomunikasikan ke komponen induk melalui props.

## Analogi Sederhana

Bayangkan ProductCard sebagai sebuah katalog produk fisik:

- Halaman katalog menampilkan gambar dan informasi produk (seperti tampilan kartu).
- Ada stiker "Edit" dan "Hapus" di sudut halaman (ikon edit dan delete).
- Terdapat counter kecil yang bisa digeser naik-turun untuk menentukan jumlah produk (fungsi tambah/kurang).
- Jika Anda ingin mengubah informasi, Anda bisa membuka halaman khusus untuk mengedit (komponen ProductEdit).

## Kesimpulan

ProductCard adalah komponen yang kaya fitur dan interaktif. Ia menggabungkan tampilan informasi produk dengan fungsionalitas untuk mengedit, menghapus, dan mengelola jumlah produk dalam keranjang. Komponen ini mendemonstrasikan penggunaan state lokal, props, dan rendering bersyarat dalam React, sambil tetap menjaga prinsip komponen yang dapat digunakan kembali dan mudah dipelihara.
