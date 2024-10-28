Berikut adalah dokumentasi untuk komponen `ArticleEdit`, yang digunakan untuk mengedit artikel dalam aplikasi:

````markdown
# Dokumentasi Komponen - `ArticleEdit.js`

## Deskripsi

Komponen `ArticleEdit` digunakan untuk memungkinkan pengguna mengedit artikel yang sudah ada. Pengguna dapat memperbarui judul, konten, kategori, dan status artikel sebelum menyimpannya.

### Kode: `ArticleEdit.js`

```javascript
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editArticle } from "../slices/article";
import { useDispatch } from "react-redux";

const ArticleEdit = ({ article }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    id: article.id,
    title: article.title,
    content: article.content,
    category: article.category,
    status: article.status,
  };
  const [formData, setFormData] = useState(initialState);
  const { title, content, category, status } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editArticle(formData));
    navigate("/");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="new">
      <div className="title mb-20">Edit Article</div>
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
            type="text"
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
            type="text"
            className="select"
            onChange={handleChange}
          >
            <option value="" selected disabled hidden>
              Choose Here
            </option>
            <option value="publish">publish</option>
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
  );
};

export default ArticleEdit;
```
````

### Penjelasan Kode

1. **Import Statements**

   - `useState`: Hook untuk mengelola state lokal dalam komponen.
   - `useNavigate`: Hook dari `react-router-dom` untuk navigasi antar halaman.
   - `editArticle`: Aksi dari Redux yang digunakan untuk mengedit artikel.
   - `useDispatch`: Hook dari Redux untuk mengirimkan aksi ke store.

2. **Fungsi Komponen**

```javascript
const ArticleEdit = ({ article }) => {
```

- Komponen menerima satu prop:
  - **`article`**: Objek artikel yang ingin diedit, berisi atribut seperti `id`, `title`, `content`, `category`, dan `status`.

3. **State Management**

```javascript
const initialState = {
  id: article.id,
  title: article.title,
  content: article.content,
  category: article.category,
  status: article.status,
};
const [formData, setFormData] = useState(initialState);
```

- `initialState` diinisialisasi dengan data dari artikel yang diterima.
- `formData` adalah state lokal yang menyimpan data form saat ini.

4. **Fungsi Handlers**

- **handleChange**: Memperbarui state `formData` saat pengguna mengubah input.

```javascript
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
```

- **handleSubmit**: Menangani pengiriman form. Mengirimkan data artikel yang telah diedit ke Redux dan mengarahkan kembali ke halaman utama.

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(editArticle(formData));
  navigate("/");
};
```

- **handleCancel**: Mengarahkan pengguna kembali ke halaman utama tanpa menyimpan perubahan.

```javascript
const handleCancel = (e) => {
  e.preventDefault();
  navigate("/");
};
```

5. **Render UI**

- Komponen menghasilkan form dengan input untuk `title`, `content`, `category`, dan `status`, serta tombol untuk menyimpan perubahan atau membatalkan.

```javascript
return (
  <div className="new">
    <div className="title mb-20">Edit Article</div>
    <form onSubmit={handleSubmit} className="flex-col gap-16">
      {/* Input Fields */}
    </form>
  </div>
);
```

### Cara Menggunakan

- Gunakan komponen `ArticleEdit` di halaman edit artikel dengan mengoper artikel yang ingin diedit sebagai prop. Pastikan untuk menyambungkan fungsi edit di Redux.

## Catatan Tambahan

- Pastikan data `article` yang diberikan telah terisi untuk menghindari error saat mengakses property yang mungkin tidak ada.

```

Silakan salin dokumentasi ini untuk membantu Anda memahami komponen `ArticleEdit`. Jika ada pertanyaan lebih lanjut, jangan ragu untuk bertanya!
```
