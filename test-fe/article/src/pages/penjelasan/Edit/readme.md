Berikut adalah penjelasan detail mengenai kode di halaman `Edit`, yang memungkinkan pengguna untuk mengedit artikel berdasarkan ID yang diberikan:

````markdown
# Dokumentasi Halaman - `Edit.js`

## Deskripsi

Halaman ini digunakan untuk mengedit artikel yang sudah ada. Pengguna akan diarahkan ke halaman ini dengan ID artikel tertentu, dan dapat melakukan perubahan pada artikel tersebut.

### Kode: `Edit.js`

```javascript
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import ArticleEdit from "../components/ArticleEdit";

const Edit = () => {
  const { id } = useParams();
  const article = useSelector((state) => {
    const edited = state.articles.data.find((item) => item.id == id);
    return edited;
  });
  return (
    <div className="app">
      <Navbar />
      <div className="layout">
        <ArticleEdit article={article} />
      </div>
    </div>
  );
};

export default Edit;
```
````

### Penjelasan Kode

1. **Import Statements**

   - `import { useParams } from "react-router-dom";`: Mengimpor hook `useParams` untuk mendapatkan parameter dari URL, dalam hal ini ID artikel yang ingin diedit.
   - `import Navbar from "../components/Navbar";`: Mengimpor komponen `Navbar` yang ditampilkan di atas halaman.
   - `import { useSelector } from "react-redux";`: Mengimpor hook `useSelector` untuk mengakses state dari store Redux.
   - `import ArticleEdit from "../components/ArticleEdit";`: Mengimpor komponen `ArticleEdit`, yang digunakan untuk menampilkan form edit artikel.

2. **Fungsi Komponen**

```javascript
const Edit = () => {
  const { id } = useParams();
```

- **`const { id } = useParams();`**: Mengambil ID artikel dari URL menggunakan `useParams`.

3. **Mengambil Data Artikel dari Redux**

```javascript
const article = useSelector((state) => {
  const edited = state.articles.data.find((item) => item.id == id);
  return edited;
});
```

- Menggunakan `useSelector` untuk mengambil artikel dari Redux berdasarkan ID yang diperoleh dari parameter URL.
- `state.articles.data.find(...)` digunakan untuk mencari artikel dengan ID yang cocok.

4. **Render UI**

```javascript
return (
  <div className="app">
    <Navbar />
    <div className="layout">
      <ArticleEdit article={article} />
    </div>
  </div>
);
```

- UI terdiri dari `Navbar` dan komponen `ArticleEdit` yang menerima artikel yang ditemukan sebagai props. Komponen `ArticleEdit` akan menangani tampilan dan logika untuk mengedit artikel tersebut.

## Cara Menggunakan

- Halaman ini diakses dengan URL yang berisi ID artikel, misalnya `/edit/1`.
- Setelah halaman dimuat, pengguna dapat melihat detail artikel dan melakukan perubahan melalui form yang disediakan oleh komponen `ArticleEdit`.

## Catatan Tambahan

- Pastikan komponen `ArticleEdit` sudah siap untuk meng-handle props artikel dan melakukan penyimpanan perubahan.

```

Silakan salin dan gunakan dokumentasi ini untuk memahami lebih baik tentang halaman `Edit`. Jika ada lagi yang ingin kamu bahas atau jika ada pertanyaan lebih lanjut, silakan beri tahu!
```
