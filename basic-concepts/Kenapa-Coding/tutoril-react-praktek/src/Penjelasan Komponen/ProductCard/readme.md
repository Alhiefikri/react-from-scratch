Berikut adalah penjelasan mengenai komponen `ProductCard` yang telah menerapkan `useContext`, disusun dengan format yang mudah dipahami:

# Dokumentasi Komponen ProductCard

## Pengertian

`ProductCard` adalah komponen yang menampilkan informasi tentang produk, termasuk nama, deskripsi, dan gambar. Komponen ini juga menyediakan fungsionalitas untuk mengedit dan menghapus produk, serta mengelola jumlah produk yang ditambahkan ke keranjang.

## Tujuan Komponen

Tujuan utama komponen `ProductCard` adalah:

1. Menampilkan informasi produk dengan cara yang menarik.
2. Mengizinkan pengguna untuk mengedit atau menghapus produk.
3. Mengelola jumlah produk yang ingin ditambahkan ke keranjang.

## Struktur Kode

```jsx
import { useContext, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import ProductEdit from "./ProductEdit";
import ProductContext from "../context/products";
```

- Mengimpor hook `useContext` dan `useState`, ikon untuk edit dan hapus, serta komponen `ProductEdit` dan konteks `ProductContext`.

### Definisi Komponen

```jsx
const ProductCard = ({ product }) => {
  const { onDeleteProduct, onEditProduct } = useContext(ProductContext);
```

- Mendefinisikan komponen `ProductCard` yang menerima `product` sebagai props.
- Menggunakan `useContext` untuk mengambil fungsi `onDeleteProduct` dan `onEditProduct` dari `ProductContext`.

### State Lokal

```jsx
const [jumlahProduct, setJumlahProduct] = useState(0);
const [showEdit, setShowEdit] = useState(false);
```

- `jumlahProduct`: Mengelola jumlah produk yang ingin ditambahkan ke keranjang.
- `showEdit`: Menentukan apakah tampilan edit produk aktif atau tidak.

### Fungsi untuk Mengelola Produk

#### 1. Menambah dan Mengurangi Jumlah Produk

```jsx
const kurangProduct = () => {
  setJumlahProduct(jumlahProduct - 1);
};
const tambahProduct = () => {
  setJumlahProduct(jumlahProduct + 1);
};
```

- Fungsi ini menambah atau mengurangi jumlah produk di keranjang.

#### 2. Mengelola Edit Produk

```jsx
const handleSubmit = (id, data) => {
  setShowEdit(false);
  onEditProduct(id, data);
};
const cancelEdit = () => {
  setShowEdit(false);
};
```

- `handleSubmit`: Mengirimkan data produk yang telah diedit.
- `cancelEdit`: Menutup tampilan edit tanpa menyimpan perubahan.

### Render Komponen

```jsx
return (
  <div className="card">
    {showEdit ? (
      <ProductEdit
        product={product}
        onEditProduct={handleSubmit}
        cancelEdit={cancelEdit}
      />
    ) : (
      <>
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
        <img
          style={{
            width: "100%",
            height: "200px",
            borderRadius: "10px 10px 0px 0px",
          }}
          src={imageURL}
          alt=""
        />
        <div className="container">
          <h4>
            <b>{nama}</b>
          </h4>
          <p>{deskripsi}</p>
        </div>
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
```

- Komponen merender tampilan edit jika `showEdit` true. Jika tidak, menampilkan informasi produk, tombol edit dan hapus, serta kontrol untuk jumlah produk.

## Kesimpulan

Komponen `ProductCard` berfungsi untuk menampilkan dan mengelola informasi produk dalam aplikasi "Belanja Mobil". Dengan memanfaatkan `useContext`, komponen ini dapat mengakses fungsi untuk mengedit dan menghapus produk secara langsung, meningkatkan pengalaman pengguna dan memudahkan interaksi dengan data produk.
