# **Dokumentasi Kode `blogSlice` (Redux Toolkit)**

### **1. Pengertian**

Kode `blogSlice` ini menggunakan **`createSlice`** dari **Redux Toolkit** untuk mengelola state terkait dengan daftar blog (`blogList`) dan form data (`formData`) dalam aplikasi.

- **`initialState`** mendefinisikan state awal untuk blog, yang terdiri dari:
  - `formData`: Menyimpan informasi tentang blog yang sedang diisi oleh pengguna (misalnya, `title` dan `description`).
  - `blogList`: Menyimpan daftar semua blog yang ada.
  - `currentEditedBlogId`: Menyimpan ID dari blog yang sedang diedit.

Dengan menggunakan **reducers**, kita dapat mengubah state ini sesuai dengan aksi yang dilakukan oleh pengguna, seperti menambah, mengedit, atau menghapus blog.

### **2. Cara Berpikir Redux Toolkit**

Dalam **Redux Toolkit**, kita mengelola state melalui **slices** yang terdiri dari **reducers**. Reducer adalah fungsi yang menerima **state** dan **action**, lalu mengembalikan state yang diperbarui berdasarkan action tersebut.

Di dalam slice ini, ada beberapa reducer yang mengelola berbagai aspek aplikasi **blog**:

- **Menambahkan blog**
- **Mengedit blog**
- **Menghapus blog**
- **Mengelola form input**
- **Menyimpan blog di `localStorage`** untuk persistensi data

### **3. Analogi Sederhana**

Bayangkan Anda sedang mengelola sebuah **buku catatan** yang berisi daftar blog. Dalam buku catatan ini:

- **Formulir** adalah tempat Anda menulis blog baru, yaitu tempat Anda mengisi **judul** dan **deskripsi**.
- **Blog List** adalah halaman buku catatan tempat semua blog yang sudah ditulis ditampilkan.
- **LocalStorage** berfungsi seperti **rak penyimpanan** yang menyimpan buku catatan Anda agar tetap ada meskipun Anda menutup aplikasi.

Setiap kali Anda menambahkan atau mengedit blog, Anda membuka buku catatan, menulis blog baru atau mengedit yang sudah ada, dan kemudian menyimpan catatan tersebut di rak penyimpanan (localStorage).

### **4. Penjelasan Code dengan Sangat Lengkap dan Detail**

```javascript
import { nanoid } from "@reduxjs/toolkit"; // Mengimpor nanoid untuk menghasilkan ID unik
import { createSlice } from "@reduxjs/toolkit"; // Mengimpor createSlice dari Redux Toolkit untuk membuat slice

const initialState = {
  formData: {
    title: "",
    description: "",
  },
  blogList: [],
  currentEditedBlogId: null,
};

export const BlogSlice = createSlice({
  name: "blog", // Nama slice ini adalah "blog"
  initialState, // Menggunakan state awal yang didefinisikan di atas
  reducers: {
    handleInputChange: (state, action) => {
      let copyFormData = { ...state.formData };
      copyFormData = { ...copyFormData, ...action.payload };
      state.formData = copyFormData;
    },

    handleAddTodo: (state, action) => {
      console.log("handleAddTodo is called");

      state.blogList.push({
        id: nanoid(), // Menghasilkan ID unik untuk blog baru
        ...state.formData, // Menambahkan data dari form (title dan description)
      });

      state.formData = {
        title: "",
        description: "",
      };

      // Menyimpan daftar blog ke localStorage
      localStorage.setItem("blogList", JSON.stringify(state.blogList));
    },

    setBlogListOnInitialLoad: (state, action) => {
      // Mengatur blogList saat aplikasi pertama kali dimuat
      state.blogList = action.payload.blogList;
    },

    handleDeleteBlog: (state, action) => {
      console.log(action.payload);
      const { payload } = action;
      const { currentBlogId } = payload;

      let copyBlogList = [...state.blogList];
      copyBlogList = copyBlogList.filter(
        (singleBlogItem) => singleBlogItem.id !== currentBlogId
      );

      state.blogList = copyBlogList;
      localStorage.setItem("blogList", JSON.stringify(copyBlogList));
    },

    setCurrentEditedBlogId: (state, action) => {
      console.log(action.payload);
      const { payload } = action;
      const { currentBlogId } = payload;

      state.currentEditedBlogId = currentBlogId;
    },

    handleEditBlog: (state, action) => {
      console.log("handleEditBlog is called");

      let copyBlogList = [...state.blogList];
      const findIndexOfCurrentBlogItem = copyBlogList.findIndex(
        (singleBlogItem) => singleBlogItem.id === state.currentEditedBlogId
      );
      console.log(findIndexOfCurrentBlogItem);

      copyBlogList[findIndexOfCurrentBlogItem] = {
        ...copyBlogList[findIndexOfCurrentBlogItem],
        ...state.formData, // Mengupdate data blog yang sedang diedit
      };

      state.blogList = copyBlogList;
      localStorage.setItem("blogList", JSON.stringify(copyBlogList));
    },
  },
});

// Mengekspor action yang didefinisikan di dalam slice
export const {
  handleInputChange,
  handleAddTodo,
  setBlogListOnInitialLoad,
  handleDeleteBlog,
  setCurrentEditedBlogId,
  handleEditBlog,
} = BlogSlice.actions;

// Mengekspor reducer untuk digunakan di store
export default BlogSlice.reducer;
```

#### **Penjelasan Baris per Baris:**

1. **`import { nanoid } from "@reduxjs/toolkit";`**

   - Mengimpor **`nanoid`** dari Redux Toolkit untuk menghasilkan ID unik untuk setiap blog yang ditambahkan.

2. **`const initialState = { ... };`**

   - Mendefinisikan **state awal** untuk slice blog. Ada tiga bagian utama dalam state ini:
     - `formData`: Menyimpan data form (judul dan deskripsi) untuk blog baru.
     - `blogList`: Menyimpan daftar semua blog yang telah ditambahkan.
     - `currentEditedBlogId`: Menyimpan ID blog yang sedang diedit.

3. **`createSlice({ ... })`**

   - Fungsi ini digunakan untuk membuat slice baru. Slice adalah bagian dari state aplikasi yang dikelola oleh Redux, dan `createSlice` memudahkan pembuatan action dan reducer secara otomatis.
   - Di sini, `name: "blog"` mendefinisikan nama slice ini, dan `initialState` adalah state awal yang akan digunakan.

4. **Reducers:**

   - **`handleInputChange`**: Menangani perubahan data input form. Action payload akan mengupdate nilai `formData` dengan data baru.
   - **`handleAddTodo`**: Menambahkan blog baru ke dalam `blogList` dan mengosongkan form setelahnya. Blog baru diberi ID unik dengan `nanoid()`, dan data disimpan di `localStorage` agar tetap ada setelah reload.
   - **`setBlogListOnInitialLoad`**: Mengatur `blogList` saat aplikasi pertama kali dimuat (biasanya data ini diambil dari `localStorage`).
   - **`handleDeleteBlog`**: Menghapus blog dari `blogList` berdasarkan ID dan memperbarui `localStorage`.
   - **`setCurrentEditedBlogId`**: Menyimpan ID blog yang sedang diedit, untuk mempermudah pengeditan.
   - **`handleEditBlog`**: Mengupdate blog yang sedang diedit dengan data terbaru dari `formData`.

5. **`export default BlogSlice.reducer;`**

   - Mengekspor **reducer** yang dihasilkan oleh `createSlice`. Reducer ini akan digunakan untuk memperbarui state di store.

6. **`export const { ... } = BlogSlice.actions;`**
   - Mengekspor semua action yang didefinisikan dalam slice. Setiap action ini dapat dipanggil untuk memperbarui state sesuai kebutuhan.

### **5. Kesimpulan**

`blogSlice` ini mengelola state aplikasi terkait blog, seperti menambah, mengedit, menghapus, dan menyimpan daftar blog.

- **Form Input** digunakan untuk menambah atau mengedit blog.
- **`blogList`** menyimpan daftar blog yang ada.
- Setiap kali data berubah (seperti menambah atau menghapus blog), data tersebut disimpan di **`localStorage`** untuk persistensi.
- Redux Toolkit menyederhanakan pembuatan **action** dan **reducer** yang mengelola state ini, menjadikannya lebih mudah dipahami dan digunakan.
