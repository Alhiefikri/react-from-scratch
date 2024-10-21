# Dokumentasi Komponen ProductEdit

## Pengertian

ProductEdit adalah komponen React yang menyediakan antarmuka pengguna untuk mengedit produk yang sudah ada dalam aplikasi "Belanja Mobil". Komponen ini menampilkan form dengan nilai awal dari produk yang akan diedit dan memungkinkan pengguna untuk mengubah nilai-nilai tersebut.

## Tujuan Komponen

1. Menyediakan UI untuk mengedit produk yang sudah ada
2. Mengelola state form input dengan nilai awal dari produk yang diedit
3. Mengirimkan data produk yang telah diedit ke komponen induk
4. Menyediakan opsi untuk membatalkan proses pengeditan

## Kode Komponen dengan Komentar dan Penjelasan

```jsx
import React from "react";
import { useState } from "react";

// Mendefinisikan komponen ProductEdit
const ProductEdit = ({ product, onEditProduct, cancelEdit }) => {
  // State awal untuk form input, diisi dengan data produk yang akan diedit
  const initialState = {
    nama: product.nama,
    deskripsi: product.deskripsi,
    imageURL: product.imageURL,
  };

  // State untuk menyimpan data form
  const [FormData, setFormData] = useState(initialState);
  // Destructuring FormData untuk kemudahan penggunaan
  const { nama, deskripsi, imageURL } = FormData;

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProduct(product.id, FormData);
  };

  // Fungsi untuk membatalkan proses edit
  const onCancel = (e) => {
    e.preventDefault();
    cancelEdit();
  };

  return (
    <div className="product-edit">
      <div className="edit-title">Edit Product</div>
      <form onSubmit={handleSubmit}>
        {/* Input untuk nama produk */}
        <div className="form-group">
          <input
            onChange={handleChange}
            name="nama"
            value={nama}
            type="text"
            className="edit-input-text"
            placeholder="Nama Product"
          />
        </div>
        {/* Input untuk deskripsi produk */}
        <div className="form-group">
          <input
            onChange={handleChange}
            name="deskripsi"
            value={deskripsi}
            type="text"
            className="edit-input-text"
            placeholder="Deskripsi Product"
          />
        </div>
        {/* Input untuk URL gambar produk */}
        <div className="form-group">
          <input
            onChange={handleChange}
            name="imageURL"
            value={imageURL}
            type="text"
            className="edit-input-text"
            placeholder="Image Product"
          />
        </div>
        {/* Tombol submit */}
        <input
          type="submit"
          className="edit-input-submit save"
          value="Submit"
        />
        {/* Tombol cancel */}
        <button onClick={onCancel} className="edit-input-submit cancel">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
```

Penjelasan detail:

1. **Props**:

   - `product`: Objek yang berisi data produk yang akan diedit.
   - `onEditProduct`: Fungsi callback untuk mengirim data yang telah diedit ke komponen induk.
   - `cancelEdit`: Fungsi callback untuk membatalkan proses pengeditan.

2. **Inisialisasi State**:

   - `initialState`: Objek yang berisi nilai awal untuk form input, diambil dari props `product`.
   - `FormData`: State yang menyimpan nilai input form, diinisialisasi dengan `initialState`.

3. **Event Handlers**:

   - `handleChange`: Memperbarui `FormData` saat input berubah, menggunakan computed property name untuk dinamis update.
   - `handleSubmit`: Menangani submit form, memanggil `onEditProduct` dengan ID produk dan data form yang telah diupdate.
   - `onCancel`: Menangani pembatalan proses edit, memanggil fungsi `cancelEdit` dari props.

4. **Render**:
   - Form input yang berisi input untuk nama, deskripsi, dan URL gambar produk.
   - Setiap input terhubung ke `FormData` state dan `handleChange` function.
   - Tombol "Submit" untuk mengirim perubahan.
   - Tombol "Cancel" untuk membatalkan proses edit.

## Cara Berpikir React

1. **Controlled Components**: Semua input form dikendalikan oleh React state.
2. **Prop Drilling**: Menerima data dan fungsi callback dari komponen induk melalui props.
3. **Lifting State Up**: Perubahan pada produk dikirim ke komponen induk melalui `onEditProduct` prop.
4. **Single Source of Truth**: `FormData` state menjadi sumber kebenaran untuk nilai input form.

## Analogi Sederhana

Bayangkan ProductEdit sebagai formulir perubahan data produk di toko:

- Anda mendapat formulir yang sudah terisi dengan data produk saat ini (initialState).
- Anda bisa mengubah informasi pada formulir tersebut (input form).
- Setelah selesai, Anda bisa menyerahkan formulir untuk diproses (tombol Submit).
- Jika Anda berubah pikiran, Anda bisa mengembalikan formulir tanpa perubahan (tombol Cancel).

## Kesimpulan

ProductEdit adalah komponen yang menangani proses pengeditan produk yang sudah ada. Ia mendemonstrasikan penggunaan state untuk mengelola data form, serta menunjukkan bagaimana data dan fungsi callback dapat diterima dari dan dikirimkan ke komponen induk melalui props. Komponen ini memanfaatkan prinsip-prinsip React seperti controlled components dan lifting state up untuk menciptakan antarmuka pengeditan yang efektif dan mudah digunakan.
