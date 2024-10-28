Berikut adalah dokumentasi untuk komponen `Table`, yang berfungsi untuk menampilkan data dalam format tabel dengan dukungan untuk pengeditan dan penghapusan:

````markdown
# Dokumentasi Komponen - `Table.js`

## Deskripsi

Komponen `Table` digunakan untuk menampilkan data dalam format tabel. Komponen ini mendukung fitur pengeditan dan penghapusan untuk setiap baris data, memanfaatkan Redux untuk mengelola status dan navigasi.

### Kode: `Table.js`

```javascript
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/** @format */

import { useDispatch } from "react-redux";
import { deleteOpen } from "../slices/deleteModal";
import { useNavigate } from "react-router-dom";

const Table = ({ data, config, keyFn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (article) => {
    dispatch(deleteOpen(article));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const renderHeader = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderRows = data.map((rowData) => {
    const renderCell = config.map((column) => {
      if (column.label === "Action") {
        return <td>{column.render(rowData, handleDelete, handleEdit)}</td>;
      }
      return <td>{column.render(rowData)}</td>;
    });
    return <tr key={keyFn(rowData)}>{renderCell}</tr>;
  });

  return (
    <table id="dtables">
      <thead>
        <tr>{renderHeader}</tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
};

export default Table;
```
````

### Penjelasan Kode

1. **Import Statement**

   - `useDispatch` dan `useNavigate`: Hook dari `react-redux` dan `react-router-dom` yang digunakan untuk mengelola status dan navigasi.

2. **Fungsi `handleDelete` dan `handleEdit`**

   - `handleDelete`: Memanggil aksi `deleteOpen` dengan artikel yang dipilih.
   - `handleEdit`: Mengarahkan pengguna ke halaman edit berdasarkan ID artikel.

3. **Render Header**

   - Menggunakan fungsi `map` untuk merender header tabel berdasarkan konfigurasi (`config`) yang diberikan.

   ```javascript
   const renderHeader = config.map((column) => {
     return <th key={column.label}>{column.label}</th>;
   });
   ```

4. **Render Baris**

   - Menggunakan fungsi `map` untuk merender setiap baris data. Jika kolom adalah "Action", maka fungsi render akan menyertakan fungsionalitas untuk mengedit dan menghapus.

   ```javascript
   const renderRows = data.map((rowData) => {
     const renderCell = config.map((column) => {
       if (column.label === "Action") {
         return <td>{column.render(rowData, handleDelete, handleEdit)}</td>;
       }
       return <td>{column.render(rowData)}</td>;
     });
     return <tr key={keyFn(rowData)}>{renderCell}</tr>;
   });
   ```

5. **Struktur Tabel**
   - Tabel terdiri dari elemen `<thead>` untuk header dan `<tbody>` untuk baris data.
   ```javascript
   return (
     <table id="dtables">
       <thead>
         <tr>{renderHeader}</tr>
       </thead>
       <tbody>{renderRows}</tbody>
     </table>
   );
   ```

### Props

- `data`: Array data yang akan ditampilkan dalam tabel.
- `config`: Array objek yang mendeskripsikan konfigurasi kolom, termasuk label dan fungsi render untuk setiap kolom.
- `keyFn`: Fungsi yang digunakan untuk menghasilkan kunci unik untuk setiap item dalam data.

### Cara Menggunakan

- Komponen ini dapat digunakan untuk menampilkan data dalam format tabel di berbagai bagian aplikasi. Cukup sediakan data, konfigurasi kolom, dan fungsi kunci yang diperlukan.

## Catatan Tambahan

- Pastikan untuk menangani kondisi di mana data kosong agar tabel dapat berfungsi dengan baik. Anda mungkin ingin menambahkan logika untuk menampilkan pesan ketika tidak ada data yang tersedia.

```

Silakan salin dokumentasi ini untuk membantu Anda memahami komponen `Table`. Jika ada yang ingin Anda diskusikan lebih lanjut, beri tahu saya!
```
