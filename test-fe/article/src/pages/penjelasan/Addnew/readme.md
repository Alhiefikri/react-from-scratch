Berikut adalah penjelasan detail mengenai kode di halaman `AddNew`, yang berfungsi untuk menambahkan artikel baru dalam aplikasi:

````markdown
# Dokumentasi Halaman - `AddNew.js`

## Deskripsi

Halaman ini memungkinkan pengguna untuk menambahkan artikel baru dengan mengisi formulir. Setelah formulir dikirim, data artikel akan disimpan di state global menggunakan Redux.

### Kode: `AddNew.js`

```javascript
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addArticle } from "../slices/article";

const AddNew = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    id: "",
    title: "",
    content: "",
    category: "",
    status: "",
  };
  const [formData, setFormData] = useState(initialState);
  const { title, content, category, status } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addArticle(formData));
    navigate("/");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="app">
      <Navbar />
      <div className="layout">
        <div className="new">
          <div className="title mb-20">Tambah Article</div>
          <form onSubmit={handleSubmit} className="flex-col gap-16">
            <div className="flex-col gap-12 flex-1">
              <label className="text">Title</label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                value={title}
                className="input"
              />
            </div>
            <div className="flex-col gap-12 flex-1">
              <label className="text">Content</label>
              <textarea
                name="content"
                onChange={handleChange}
                value={content}
                className="input"
              />
            </div>
            <div className="flex-col gap-12 flex-1">
              <label className="text">Category</label>
              <input
                type="text"
                name="category"
                onChange={handleChange}
                value={category}
                className="input"
              />
            </div>
            <div className="flex-col gap-12 flex-1">
              <label className="text">Status</label>
              <select
                name="status"
                value={status}
                className="select"
                onChange={handleChange}
              >
                <option value="" selected disabled hidden>
                  Choose Here
                </option>
                <option value="publish">Publish</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            <div className="button">
              <input type="submit" value="Save" className="button-submit" />
              <button className="button-cancel" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
```
````

### Penjelasan Kode

1. **Import Statements**

   - `import { useNavigate } from "react-router-dom";`: Mengimpor hook `useNavigate` untuk mengelola navigasi antar halaman.
   - `import Navbar from "../components/Navbar";`: Mengimpor komponen `Navbar` yang akan ditampilkan di atas halaman.
   - `import { useDispatch } from "react-redux";`: Mengimpor hook `useDispatch` untuk mengirim aksi ke store Redux.
   - `import { useState } from "react";`: Mengimpor hook `useState` untuk mengelola state lokal komponen.
   - `import { addArticle } from "../slices/article";`: Mengimpor aksi `addArticle` dari slice artikel untuk menambah artikel ke state.

2. **Fungsi Komponen**

```javascript
const AddNew = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    id: "",
    title: "",
    content: "",
    category: "",
    status: "",
  };
  const [formData, setFormData] = useState(initialState);
  const { title, content, category, status } = formData;
```

- **`const navigate = useNavigate();`**: Menginisialisasi fungsi navigasi.
- **`const dispatch = useDispatch();`**: Menginisialisasi fungsi dispatch untuk mengirim aksi.
- **`const initialState`**: State awal untuk formulir, berisi ID dan atribut artikel yang kosong.
- **`const [formData, setFormData] = useState(initialState);`**: Menggunakan `useState` untuk mengelola data formulir.

3. **Handler Functions**

   - **`handleChange`**: Mengupdate state `formData` saat input berubah.

   ```javascript
   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   ```

   - **`handleSubmit`**: Mengirim data formulir ke store Redux dan menavigasi kembali ke halaman utama.

   ```javascript
   const handleSubmit = (e) => {
     e.preventDefault();
     dispatch(addArticle(formData));
     navigate("/");
   };
   ```

   - **`handleCancel`**: Menavigasi kembali ke halaman utama tanpa menyimpan data.

   ```javascript
   const handleCancel = (e) => {
     e.preventDefault();
     navigate("/");
   };
   ```

4. **Render Formulir**

```javascript
return (
  <div className="app">
    <Navbar />
    <div className="layout">
      <div className="new">
        <div className="title mb-20">Tambah Article</div>
        <form onSubmit={handleSubmit} className="flex-col gap-16">
          {/* Input Fields */}
          <div className="flex-col gap-12 flex-1">
            <label className="text">Title</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={title}
              className="input"
            />
          </div>
          <div className="flex-col gap-12 flex-1">
            <label className="text">Content</label>
            <textarea
              name="content"
              onChange={handleChange}
              value={content}
              className="input"
            />
          </div>
          <div className="flex-col gap-12 flex-1">
            <label className="text">Category</label>
            <input
              type="text"
              name="category"
              onChange={handleChange}
              value={category}
              className="input"
            />
          </div>
          <div className="flex-col gap-12 flex-1">
            <label className="text">Status</label>
            <select
              name="status"
              value={status}
              className="select"
              onChange={handleChange}
            >
              <option value="" selected disabled hidden>
                Choose Here
              </option>
              <option value="publish">Publish</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <div className="button">
            <input type="submit" value="Save" className="button-submit" />
            <button className="button-cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
```

- Halaman ini terdiri dari komponen `Navbar`, judul halaman, dan formulir untuk menambah artikel. Terdapat input untuk judul, konten, kategori, dan status, serta tombol untuk menyimpan atau membatalkan.

## Cara Menggunakan

- Pengguna dapat mengisi formulir dan mengklik "Save" untuk menyimpan artikel baru.
- Pengguna juga dapat mengklik "Cancel" untuk kembali ke halaman utama tanpa menyimpan.

## Catatan Tambahan

- Pastikan untuk mengimpor dan menggunakan komponen ini dalam routing aplikasi agar halaman ini dapat diakses.

```

Silakan salin dan gunakan dokumentasi ini untuk memahami lebih baik tentang halaman `AddNew`. Jika ada bagian lain yang ingin kamu bahas atau pertanyaan lebih lanjut, beri tahu saya!
```
