Berikut adalah penjelasan mengenai komponen `ProductCreate`, disusun dengan format yang mudah dipahami:

# Dokumentasi Komponen ProductCreate

## Pengertian

`ProductCreate` adalah komponen yang memungkinkan pengguna untuk menambahkan produk baru ke dalam aplikasi. Komponen ini menyediakan form input untuk nama, deskripsi, dan URL gambar produk, serta menggunakan konteks untuk mengelola penambahan produk.

## Tujuan Komponen

Tujuan utama komponen `ProductCreate` adalah:

1. Menyediakan antarmuka pengguna untuk memasukkan detail produk baru.
2. Mengirimkan data produk baru ke `ProductContext` untuk disimpan.
3. Menyembunyikan atau menampilkan form berdasarkan interaksi pengguna.

## Struktur Kode

```jsx
import React, { useContext, useState } from "react";
import ProductContext from "../context/products";
```

- Mengimpor React, hook `useContext` dan `useState`, serta konteks `ProductContext` untuk mengakses fungsi menambah produk.

### Definisi Komponen

```jsx
const ProductCreate = () => {
  const { onCreateProduct } = useContext(ProductContext);
```

- Mendefinisikan komponen `ProductCreate`.
- Menggunakan `useContext` untuk mengambil fungsi `onCreateProduct` dari `ProductContext`.

### State Lokal

```jsx
const initialState = {
  nama: "",
  deskripsi: "",
  imageUrl: "",
};
const [showForm, setShowForm] = useState(false);
const [formData, setFormData] = useState(initialState);
```

- `initialState`: Mengatur nilai awal untuk form input produk.
- `showForm`: Menentukan apakah form input ditampilkan atau tidak.
- `formData`: Menyimpan data yang dimasukkan pengguna dalam form.

### Fungsi untuk Mengelola Form

#### 1. Menampilkan dan Menyembunyikan Form

```jsx
const handleShow = () => {
  setShowForm(!showForm);
};
```

- Fungsi ini membalikkan nilai `showForm` untuk menampilkan atau menyembunyikan form input.

#### 2. Mengirimkan Data Produk

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  onCreateProduct(formData);
  setFormData(initialState);
};
```

- `handleSubmit`: Mengirimkan data produk yang diisi ke `onCreateProduct` dan mengatur ulang form ke nilai awal setelah pengiriman.

#### 3. Mengelola Perubahan Input

```jsx
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
```

- `handleChange`: Memperbarui state `formData` berdasarkan input pengguna.

### Render Komponen

```jsx
return (
  <div className="product-create">
    <div className="toggle-add">
      <button onClick={handleShow} className="edit-input-submit add-toggle">
        {showForm ? "Close Form" : "Add Product"}
      </button>
    </div>
    {showForm && (
      <form onSubmit={handleSubmit} action="" className="form">
        <div className="form-add-title">Add Product</div>
        <div className="form-group">
          <input
            type="text"
            className="add-input-text"
            name="nama"
            value={nama}
            placeholder="Nama Product"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="add-input-text"
            name="deskripsi"
            value={deskripsi}
            placeholder="Deskripsi Product"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="add-input-text"
            name="imageUrl"
            value={imageUrl}
            placeholder="Image Product"
            onChange={handleChange}
          />
        </div>
        <input type="submit" className="edit-input-submit add" value="Submit" />
      </form>
    )}
  </div>
);
```

- Komponen merender tombol untuk menampilkan atau menyembunyikan form input.
- Jika `showForm` true, form untuk menambahkan produk ditampilkan dengan field untuk nama, deskripsi, dan URL gambar.

## Kesimpulan

Komponen `ProductCreate` berfungsi untuk memungkinkan pengguna menambahkan produk baru ke dalam aplikasi "Belanja Mobil". Dengan memanfaatkan `useContext`, komponen ini dapat langsung mengakses fungsi untuk menambahkan produk, memudahkan pengelolaan data produk dalam aplikasi. Form input yang interaktif memastikan pengalaman pengguna yang baik saat menambah produk.
