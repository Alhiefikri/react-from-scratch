Berikut adalah penjelasan detail mengenai komponen `Action`, yang digunakan untuk menyediakan tombol edit dan delete pada setiap artikel:

````markdown
# Dokumentasi Komponen - `Action.js`

## Deskripsi

Komponen `Action` digunakan untuk menampilkan ikon aksi yang memungkinkan pengguna untuk mengedit atau menghapus artikel. Komponen ini menerima props untuk artikel dan fungsi untuk menangani aksi edit dan delete.

### Kode: `Action.js`

```javascript
/* eslint-disable react/prop-types */
/** @format */

const Action = ({ item, handleEdit, handleDelete }) => {
  return (
    <div className="flex-icon">
      <div className="icons icon-edit" onClick={() => handleEdit(item.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M13.1935 4.36019L16.1398 7.30647M14.4435 3.11019C15.2571 2.2966 16.5762 2.2966 17.3898 3.11019C18.2034 3.92379 18.2034 5.24288 17.3898 6.05647L5.91667 17.5296H3V14.5537L14.4435 3.11019Z"
            stroke="#455487"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="icons icon-delete" onClick={() => handleDelete(item)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M16.3333 5.83333L15.6105 15.9521C15.5482 16.8243 14.8225 17.5 13.9481 17.5H7.05178C6.17739 17.5 5.45165 16.8243 5.38935 15.9521L4.66659 5.83333M8.83325 9.16667V14.1667M12.1666 9.16667V14.1667M12.9999 5.83333V3.33333C12.9999 2.8731 12.6268 2.5 12.1666 2.5H8.83325C8.37301 2.5 7.99992 2.8731 7.99992 3.33333V5.83333M3.83325 5.83333H17.1666"
            stroke="#B1343A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Action;
```
````

### Penjelasan Kode

1. **Import Statements**

   - Tidak ada import tambahan yang diperlukan dalam file ini.

2. **Fungsi Komponen**

```javascript
const Action = ({ item, handleEdit, handleDelete }) => {
```

- Komponen menerima tiga props:
  - **`item`**: Artikel yang sedang ditampilkan.
  - **`handleEdit`**: Fungsi untuk menangani aksi edit.
  - **`handleDelete`**: Fungsi untuk menangani aksi delete.

3. **Render UI**

```javascript
return (
  <div className="flex-icon">
    <div className="icons icon-edit" onClick={() => handleEdit(item.id)}>
```

- Komponen menghasilkan dua ikon: satu untuk mengedit dan satu untuk menghapus artikel.
- **Edit Icon**: Ketika diklik, memanggil fungsi `handleEdit` dengan `item.id` sebagai argumen.
- **Delete Icon**: Ketika diklik, memanggil fungsi `handleDelete` dengan `item` sebagai argumen.

4. **SVG Icons**

- Menggunakan elemen SVG untuk menggambar ikon edit dan delete.
- Ikon memiliki properti visual seperti `stroke` untuk menentukan warna, `strokeWidth` untuk ketebalan garis, dan `strokeLinecap` serta `strokeLinejoin` untuk sudut dan sambungan garis.

5. **Styling**

- Kelas CSS seperti `flex-icon`, `icons`, `icon-edit`, dan `icon-delete` digunakan untuk memberikan gaya pada elemen dan pengaturan tata letak.

## Cara Menggunakan

- Komponen `Action` digunakan dalam daftar artikel, memberikan pengguna kemampuan untuk mengedit atau menghapus artikel yang relevan.
- Pastikan untuk mengimplementasikan fungsi `handleEdit` dan `handleDelete` pada komponen yang memanggil `Action`.

## Catatan Tambahan

- Komponen ini dirancang untuk dapat digunakan kembali di berbagai tempat di dalam aplikasi, asalkan props yang diperlukan diberikan.

```

Silakan salin dan gunakan dokumentasi ini untuk memahami lebih baik tentang komponen `Action`. Jika ada yang ingin ditanyakan atau dijelaskan lebih lanjut, beri tahu saya!
```
