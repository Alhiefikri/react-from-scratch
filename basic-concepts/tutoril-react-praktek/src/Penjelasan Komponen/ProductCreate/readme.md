# Dokumentasi Komponen ProductCreate

## Pengertian

ProductCreate adalah komponen React yang menyediakan antarmuka pengguna untuk membuat produk baru dalam aplikasi "Belanja Mobil". Komponen ini menampilkan tombol untuk menampilkan/menyembunyikan form dan form input untuk memasukkan detail produk baru.

## Tujuan Komponen

1. Menyediakan UI untuk menambahkan produk baru
2. Mengelola state form input
3. Mengirimkan data produk baru ke komponen induk

## Kode Komponen dengan Komentar dan Penjelasan

```jsx
import React from "react";
import { useState } from "react";

// Mendefinisikan komponen ProductCreate
const ProductCreate = ({ onCreateProduct }) => {
  // State awal untuk form input
  const initialState = {
    nama: "",
    deskripsi: "",
    imageUrl: "",
  };

  // State untuk menampilkan/menyembunyikan form
  const [showForm, setShowForm] = useState(false);
  // State untuk menyimpan data form
  const [formData, setFormData] = useState(initialState);
  // Destructuring formData untuk kemudahan penggunaan
  const { nama, deskripsi, imageUrl } = formData;

  // Fungsi untuk menampilkan/menyembunyikan form
  const handleShow = () => {
    setShowForm(!showForm);
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProduct(formData);
    setFormData(initialState);
  };

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="product-create">
      {/* Tombol untuk menampilkan/menyembunyikan form */}
      <div className="toggle-add">
        <button onClick={handleShow} className="edit-input-submit add-toggle">
          {showForm ? "Close Form" : "Add Product"}
        </button>
      </div>
      {/* Form input yang ditampilkan ketika showForm true */}
      {showForm && (
        <form onSubmit={handleSubmit} action="" className="form">
          <div className="form-add-title">Add Product</div>
          {/* Input untuk nama produk */}
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
          {/* Input untuk deskripsi produk */}
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
          {/* Input untuk URL gambar produk */}
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
          {/* Tombol submit */}
          <input
            type="submit"
            className="edit-input-submit add"
            value="Submit"
          />
        </form>
      )}
    </div>
  );
};

export default ProductCreate;
```

Penjelasan detail:

1. **Inisialisasi State**:

   - `initialState`: Objek yang berisi nilai awal untuk form input (nama, deskripsi, imageUrl).
   - `showForm`: Boolean state untuk mengontrol tampilan form.
   - `formData`: State yang menyimpan nilai input form.

2. **Event Handlers**:

   - `handleShow`: Toggle tampilan form dengan mengubah state `showForm`.
   - `handleSubmit`: Menangani submit form, memanggil `onCreateProduct` dengan data form, lalu mereset form.
   - `handleChange`: Memperbarui `formData` saat input berubah, menggunakan computed property name untuk dinamis update.

3. **Render**:
   - Tombol "Add Product" / "Close Form" untuk menampilkan/menyembunyikan form.
   - Form input yang muncul ketika `showForm` true, berisi input untuk nama, deskripsi, dan URL gambar produk.
   - Setiap input terhubung ke `formData` state dan `handleChange` function.

## Cara Berpikir React

1. **Controlled Components**: Semua input form dikendalikan oleh React state.
2. **Conditional Rendering**: Form hanya ditampilkan ketika `showForm` true.
3. **Lifting State Up**: Data produk baru dikirim ke komponen induk melalui `onCreateProduct` prop.
4. **Single Source of Truth**: `formData` state menjadi sumber kebenaran untuk nilai input form.

## Analogi Sederhana

Bayangkan ProductCreate sebagai formulir pendaftaran produk di toko:

- Ada tombol "Daftarkan Produk Baru" di meja resepsionis (tombol "Add Product").
- Ketika ditekan, resepsionis mengeluarkan formulir dari laci (menampilkan form).
- Anda mengisi detail produk pada formulir (input form).
- Setelah selesai, Anda menyerahkan formulir ke resepsionis (submit form).
- Resepsionis menyimpan data dan memberikan formulir kosong baru (reset form).

## Kesimpulan

ProductCreate adalah komponen yang menangani proses penambahan produk baru. Ia mendemonstrasikan penggunaan state untuk mengelola tampilan UI dan data form, serta menunjukkan bagaimana data dapat diteruskan ke komponen induk melalui props. Komponen ini memanfaatkan prinsip-prinsip React seperti controlled components dan conditional rendering untuk menciptakan antarmuka yang responsif dan mudah digunakan.
