Berikut adalah dokumentasi untuk komponen `DeleteModal`, yang digunakan untuk mengonfirmasi penghapusan artikel:

````markdown
# Dokumentasi Komponen - `DeleteModal.js`

## Deskripsi

Komponen `DeleteModal` menampilkan modal konfirmasi saat pengguna ingin menghapus artikel. Modal ini memberikan opsi untuk membatalkan atau melanjutkan penghapusan.

### Kode: `DeleteModal.js`

```javascript
/** @format */

import { deleteClose } from "../slices/deleteModal";
import { useDispatch, useSelector } from "react-redux";
import { removeArticle } from "../slices/article";

const DeleteModal = () => {
  const dispatch = useDispatch();
  const article = useSelector((state) => {
    return state.deleteModal.data;
  });

  return (
    <div
      className="modalContainer"
      onClick={(e) => {
        if (e.target.className === "modalContainer") {
          dispatch(deleteClose());
        }
      }}
    >
      <div className="modal flex-col gap-16">
        <div className="title">Delete {article.title}</div>
        <div className="text">Are you sure to delete this article?</div>
        <div className="flex-row gap-16">
          <button
            className="flex-1 button-cancel"
            onClick={() => {
              dispatch(deleteClose());
            }}
          >
            Cancel
          </button>
          <button
            className="flex-1 button-submit"
            onClick={() => {
              dispatch(deleteClose());
              dispatch(removeArticle(article.id));
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
```
````

### Penjelasan Kode

1. **Import Statements**

   - `deleteClose`: Aksi dari Redux untuk menutup modal.
   - `useDispatch`: Hook dari Redux untuk mengirimkan aksi ke store.
   - `useSelector`: Hook dari Redux untuk memilih bagian state dari store.
   - `removeArticle`: Aksi dari Redux untuk menghapus artikel.

2. **Fungsi Komponen**

```javascript
const DeleteModal = () => {
```

- Komponen ini tidak menerima props secara langsung, tetapi menggunakan Redux untuk mendapatkan data artikel yang akan dihapus.

3. **State Management**

- **Mengambil Artikel dari Redux**:

```javascript
const article = useSelector((state) => {
  return state.deleteModal.data;
});
```

- Mengambil artikel yang akan dihapus dari state `deleteModal` di Redux.

4. **Render Modal**

- Modal ditampilkan dengan dua tombol: satu untuk membatalkan dan satu lagi untuk mengonfirmasi penghapusan.

```javascript
return (
  <div
    className="modalContainer"
    onClick={(e) => {
      if (e.target.className === "modalContainer") {
        dispatch(deleteClose());
      }
    }}
  >
    <div className="modal flex-col gap-16">
      <div className="title">Delete {article.title}</div>
      <div className="text">Are you sure to delete this article?</div>
      <div className="flex-row gap-16">{/* Tombol Cancel dan Delete */}</div>
    </div>
  </div>
);
```

5. **Fungsi untuk Tombol**

- **Tombol Cancel**: Menghentikan penghapusan dan menutup modal.

```javascript
<button
  className="flex-1 button-cancel"
  onClick={() => {
    dispatch(deleteClose());
  }}
>
  Cancel
</button>
```

- **Tombol Delete**: Menutup modal dan menghapus artikel dari state.

```javascript
<button
  className="flex-1 button-submit"
  onClick={() => {
    dispatch(deleteClose());
    dispatch(removeArticle(article.id));
  }}
>
  Delete
</button>
```

### Cara Menggunakan

- Komponen `DeleteModal` harus dipanggil ketika pengguna mencoba menghapus artikel. Modal ini akan muncul dan meminta konfirmasi sebelum melakukan penghapusan.

## Catatan Tambahan

- Pastikan untuk menampilkan modal ini hanya ketika ada artikel yang dipilih untuk dihapus agar tidak terjadi error saat mengakses property `title`.

```

Silakan salin dokumentasi ini untuk membantu Anda memahami komponen `DeleteModal`. Jika ada pertanyaan lebih lanjut atau bagian yang ingin diperjelas, jangan ragu untuk bertanya!
```
