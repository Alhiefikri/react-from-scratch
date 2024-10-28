Berikut adalah penjelasan detail mengenai kode di folder `slices` untuk Redux yang kamu berikan. Ini mencakup deskripsi dari setiap bagian, sehingga kamu dapat lebih memahami cara kerja Redux dalam aplikasi ini.

````markdown
# Dokumentasi Redux - `articleSlice.js`

## Deskripsi

File ini menggunakan Redux Toolkit untuk mengelola state artikel dalam aplikasi. Ini mencakup pengaturan state awal, serta reducer untuk menambah, mengedit, dan menghapus artikel.

### Kode: `articleSlice.js`

```javascript
import { createSlice, nanoid } from "@reduxjs/toolkit";

const article = createSlice({
  name: "article",
  initialState: {
    data: [
      {
        id: 1,
        title: "Indonesia Maju",
        content: "Lorem Ipsum ...",
        category: "news",
        status: "publish",
      },
      {
        id: 2,
        title: "Ada Udang dibalik bakwan",
        content: "Lorem Ipsum ...",
        category: "news",
        status: "draft",
      },
      // ... artikel lainnya
    ],
  },
  reducers: {
    addArticle(state, action) {
      state.data.push({
        id: nanoid(),
        title: action.payload.title,
        content: action.payload.content,
        category: action.payload.category,
        status: action.payload.status,
      });
    },
    editArticle(state, action) {
      const updated = state.data.map((article) => {
        if (article.id == action.payload.id) {
          return { ...article, ...action.payload };
        }
        return article;
      });
      state.data = updated;
    },
    removeArticle(state, action) {
      const updatedArticle = state.data.map((article) => {
        if (article.id == action.payload) {
          return { ...article, status: "trash" };
        }
        return article;
      });
      state.data = updatedArticle;
    },
  },
});

export const { removeArticle, editArticle, addArticle } = article.actions;
export const articlesReducer = article.reducer;
```
````

### Penjelasan Kode

1. **Import Statements**

   - `import { createSlice, nanoid } from "@reduxjs/toolkit";`:
     - **`createSlice`**: Fungsi dari Redux Toolkit yang menyederhanakan pembuatan slice Redux.
     - **`nanoid`**: Fungsi yang digunakan untuk menghasilkan ID unik bagi artikel baru.

2. **Membuat Slice**

```javascript
const article = createSlice({
  name: "article",
  initialState: {
    data: [
      /* data artikel */
    ],
  },
  reducers: {
    /* reducer */
  },
});
```

- **`createSlice`**: Menggunakan fungsi ini untuk membuat slice Redux dengan nama `article`.
  - **`name: "article"`**: Nama slice ini, yang juga akan digunakan sebagai prefix untuk action types.
  - **`initialState`**: State awal dari slice ini, yang berisi array `data` yang menyimpan objek artikel. Setiap artikel memiliki ID, judul, konten, kategori, dan status.

3. **Reducers**

   - **`reducers`**: Berisi fungsi-fungsi yang mendefinisikan bagaimana state akan diperbarui berdasarkan aksi yang diterima.
   - **`addArticle(state, action)`**: Fungsi untuk menambah artikel baru ke dalam state.

     - `state.data.push(...)`: Menambahkan artikel baru menggunakan `action.payload` yang dikirim saat aksi dipanggil. ID baru dihasilkan dengan `nanoid()`.

   - **`editArticle(state, action)`**: Fungsi untuk mengedit artikel yang sudah ada.

     - `const updated = state.data.map(...)`: Menggunakan metode `map` untuk mencari artikel berdasarkan ID. Jika ID artikel cocok dengan `action.payload.id`, artikel tersebut diperbarui dengan data baru.

   - **`removeArticle(state, action)`**: Fungsi untuk menghapus artikel dengan mengubah statusnya menjadi "trash".
     - `const updatedArticle = state.data.map(...)`: Menggunakan metode `map` untuk memperbarui status artikel yang dihapus.

4. **Ekspor Aksi dan Reducer**

```javascript
export const { removeArticle, editArticle, addArticle } = article.actions;
export const articlesReducer = article.reducer;
```

- **`export const {...}`**: Mengekspor aksi yang didefinisikan dalam slice, sehingga dapat digunakan di komponen lain untuk memanggil perubahan state.
- **`export const articlesReducer`**: Mengekspor reducer dari slice ini agar dapat digunakan dalam pengaturan store Redux.

## Cara Menggunakan

- **Menambah Artikel**: Panggil aksi `addArticle` dengan payload yang berisi informasi artikel baru.
- **Mengedit Artikel**: Panggil aksi `editArticle` dengan payload yang berisi ID artikel dan data baru.
- **Menghapus Artikel**: Panggil aksi `removeArticle` dengan ID artikel yang ingin dihapus.

## Catatan Tambahan

- Pastikan untuk mengimpor dan menambahkan `articlesReducer` ke dalam store Redux agar dapat menggunakan state ini di aplikasi.
