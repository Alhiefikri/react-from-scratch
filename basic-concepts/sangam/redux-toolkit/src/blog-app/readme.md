# **Dokumentasi Kode `AddNewBlog.jsx` (React-Redux)**

### **1. Pengertian**

Komponen **`AddNewBlog`** adalah formulir yang digunakan untuk menambah atau mengedit blog. Komponen ini mengelola dua input:

- **Title**: Judul blog.
- **Description**: Deskripsi blog.

Komponen ini berinteraksi dengan **Redux** untuk:

- Menangani perubahan data di form input (judul dan deskripsi).
- Menambah blog baru ke dalam daftar (atau mengedit blog yang ada).
- Mengatur status blog yang sedang diedit.

### **2. Cara Berpikir React-Redux**

Dalam **React** dan **Redux**, komponen bertanggung jawab untuk menangani interaksi pengguna dan memperbarui state. Komponen ini menggunakan dua hook utama dari **React-Redux**:

- **`useSelector`**: Untuk membaca state dari Redux store.
- **`useDispatch`**: Untuk mengirimkan aksi (actions) yang memperbarui state di store.

Dengan menggunakan **Redux**, kita dapat mengelola data global (seperti daftar blog atau status form) yang perlu diakses oleh banyak komponen tanpa harus mengoper props secara manual.

### **3. Analogi Sederhana**

Bayangkan Anda sedang membuat sebuah **formulir pengisian** untuk menambahkan atau mengedit blog di sebuah **website penerbitan**.

- **Formulir (Form)** adalah tempat Anda menulis data (judul dan deskripsi blog).
- **State (Redux)** adalah tempat penyimpanan data blog yang sudah ada atau sedang diedit.
- **Button** adalah tombol untuk **menyimpan** blog baru atau mengedit yang sudah ada.

Dengan menggunakan **Redux**, kita menyimpan informasi tentang form (judul dan deskripsi) dan status pengeditan blog di **store**, dan setiap kali pengguna mengklik tombol **Add New Blog** atau **Edit Blog**, aplikasi mengupdate **store** dan memperbarui tampilan di UI.

### **4. Penjelasan Code dengan Sangat Lengkap dan Detail**

```javascript
import { useDispatch, useSelector } from "react-redux"; // Mengimpor hook untuk berinteraksi dengan Redux store
import {
  handleAddTodo,
  handleEditBlog,
  handleInputChange,
  setCurrentEditedBlogId,
} from "../store/slices/blogSlice"; // Mengimpor action dari blogSlice

function AddNewBlog() {
  const { blog } = useSelector((state) => state); // Mengambil state blog dari Redux store
  const dispatch = useDispatch(); // Mengambil fungsi dispatch untuk mengirim aksi
  const { currentEditedBlogId } = blog; // Mendapatkan ID blog yang sedang diedit dari state

  // Fungsi untuk menangani perubahan input pada form
  function onChangeInput(event) {
    dispatch(
      handleInputChange({
        [event.target.name]: event.target.value, // Mengupdate formData di state
      })
    );
  }

  // Fungsi untuk menangani pengiriman formulir (submit)
  function handleTodoSubmit(event) {
    event.preventDefault(); // Mencegah reload halaman saat formulir disubmit

    if (currentEditedBlogId !== null) {
      // Jika ada blog yang sedang diedit, dispatch action handleEditBlog
      dispatch(handleEditBlog());
    } else {
      // Jika tidak ada blog yang sedang diedit, dispatch action handleAddTodo untuk menambah blog baru
      dispatch(handleAddTodo());
    }

    // Setelah pengeditan atau penambahan selesai, reset currentEditedBlogId
    if (currentEditedBlogId !== null)
      dispatch(
        setCurrentEditedBlogId({
          currentBlogId: null,
        })
      );

    // Mengosongkan formData setelah submit
    dispatch(handleInputChange({ title: "", description: "" }));
  }

  return (
    <div>
      <form onSubmit={handleTodoSubmit}>
        {" "}
        {/* Menangani pengiriman form */}
        <div>
          <label htmlFor="title">Enter Blog Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Blog Title"
            onChange={onChangeInput} // Menangani perubahan input judul
            value={blog?.formData.title} // Nilai input judul diambil dari state Redux
          />
        </div>
        <div>
          <label htmlFor="description">Enter Blog Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Enter Blog Description"
            onChange={onChangeInput} // Menangani perubahan input deskripsi
            value={blog?.formData.description} // Nilai input deskripsi diambil dari state Redux
          />
        </div>
        <button type="submit">
          {blog?.currentEditedBlogId ? "Edit Blog" : "Add New Blog"}{" "}
          {/* Menampilkan teks tombol sesuai status */}
        </button>
      </form>
    </div>
  );
}

export default AddNewBlog; // Mengekspor komponen AddNewBlog
```

#### **Penjelasan Baris per Baris:**

1. **`import { useDispatch, useSelector } from "react-redux";`**

   - Mengimpor hook `useDispatch` dan `useSelector` dari **React-Redux**. `useDispatch` digunakan untuk mengirimkan aksi (action) ke Redux, sementara `useSelector` digunakan untuk membaca state dari Redux.

2. **`const { blog } = useSelector((state) => state);`**

   - Mengambil **state** `blog` dari Redux store. Ini akan berisi data tentang form (judul dan deskripsi) dan daftar blog (`blogList`), serta ID blog yang sedang diedit.

3. **`const dispatch = useDispatch();`**

   - Mengambil fungsi `dispatch` untuk mengirimkan aksi ke Redux.

4. **`const { currentEditedBlogId } = blog;`**

   - Mengambil ID dari blog yang sedang diedit (jika ada) dari state Redux.

5. **`function onChangeInput(event) { ... }`**

   - Fungsi ini akan dipanggil setiap kali ada perubahan pada form input. Ketika input berubah, data form akan diperbarui di state Redux menggunakan **`handleInputChange`** action.

6. **`function handleTodoSubmit(event) { ... }`**

   - Fungsi ini akan dipanggil saat form disubmit (tombol diklik). Jika ada blog yang sedang diedit (ditandai dengan ID yang tidak `null`), maka action **`handleEditBlog`** akan dipanggil untuk mengedit blog tersebut. Jika tidak ada blog yang sedang diedit, maka **`handleAddTodo`** akan dipanggil untuk menambahkan blog baru.
   - Setelah itu, action **`setCurrentEditedBlogId`** digunakan untuk mereset status pengeditan (`currentEditedBlogId`) dan mengosongkan data form dengan **`handleInputChange`**.

7. **Form dan Input:**

   - Form ini berisi dua input: **`title`** dan **`description`**. Setiap input memiliki:
     - **`onChange={onChangeInput}`**: Event handler untuk memperbarui state setiap kali input berubah.
     - **`value={blog?.formData.title}`** dan **`value={blog?.formData.description}`**: Nilai input diambil dari state Redux untuk memastikan data tetap ter-update dengan benar.

8. **Tombol Submit:**
   - Tombol di form akan menampilkan teks yang berbeda tergantung apakah ada blog yang sedang diedit atau tidak. Jika ada blog yang sedang diedit (`currentEditedBlogId` tidak `null`), tombol akan menampilkan "Edit Blog", jika tidak, tombol akan menampilkan "Add New Blog".

### **5. Kesimpulan**

Komponen **`AddNewBlog`** bertanggung jawab untuk menangani input form dan pengiriman data untuk menambah atau mengedit blog.

- Komponen ini menggunakan **Redux** untuk:
  - Mengambil data form (judul dan deskripsi) dari state global.
  - Menambahkan atau mengedit blog dalam daftar blog.
  - Mengelola status blog yang sedang diedit.

Dengan memanfaatkan **`useDispatch`** dan **`useSelector`** dari **React-Redux**, komponen ini dapat memperbarui state secara efisien dan terintegrasi dengan aplikasi global.

# **Dokumentasi Kode `BlogList.jsx` (React-Redux)**

### **1. Pengertian**

Komponen **`BlogList`** digunakan untuk menampilkan semua blog yang ada dalam aplikasi, serta menyediakan tombol untuk mengedit atau menghapus blog tertentu. Komponen ini berinteraksi dengan **Redux** untuk:

- Mengambil daftar blog (`blogList`) dari **Redux store**.
- Memuat daftar blog dari **localStorage** saat pertama kali aplikasi dimuat.
- Menghapus dan mengedit blog menggunakan **Redux actions**.

### **2. Cara Berpikir React-Redux**

Komponen **React** ini berfungsi untuk menampilkan daftar blog yang disimpan di dalam **state** global yang dikelola oleh **Redux**. **Redux** memungkinkan kita untuk mengelola state global (seperti daftar blog) yang dapat diakses oleh berbagai komponen. Dengan menggunakan **`useDispatch`** dan **`useSelector`**, komponen ini dapat:

- Membaca data blog dari **Redux store**.
- Mengirimkan aksi (action) untuk menghapus atau mengedit blog.
- Memuat data awal dari **localStorage** untuk persistensi setelah halaman dimuat ulang.

### **3. Analogi Sederhana**

Bayangkan Anda memiliki sebuah **daftar catatan** blog di sebuah **buku catatan** digital:

- Setiap blog adalah sebuah **catatan** yang bisa diedit atau dihapus.
- **Tombol Edit** memungkinkan Anda untuk membuka dan mengedit catatan tertentu.
- **Tombol Hapus** memungkinkan Anda untuk menghapus catatan dari daftar.
- **localStorage** berfungsi sebagai tempat penyimpanan **cadangan** buku catatan, sehingga jika Anda menutup atau me-reload aplikasi, catatan yang sudah ditambahkan tetap tersimpan.

### **4. Penjelasan Code dengan Sangat Lengkap dan Detail**

```javascript
import { useEffect } from "react"; // Mengimpor hook useEffect dari React untuk efek samping
import { useDispatch, useSelector } from "react-redux"; // Mengimpor hook Redux untuk mengakses state dan dispatch action
import {
  handleDeleteBlog,
  handleInputChange,
  setBlogListOnInitialLoad,
  setCurrentEditedBlogId,
} from "../store/slices/blogSlice"; // Mengimpor action dari blogSlice

function BlogList() {
  const dispatch = useDispatch(); // Mendapatkan fungsi dispatch untuk mengirim aksi ke Redux
  const { blog } = useSelector((state) => state); // Mengambil state blog dari Redux store
  const { blogList } = blog; // Mengambil daftar blog (blogList) dari state

  // useEffect untuk memuat daftar blog dari localStorage saat pertama kali aplikasi dimuat
  useEffect(() => {
    dispatch(
      setBlogListOnInitialLoad({
        blogList: JSON.parse(localStorage.getItem("blogList") || "[]"), // Mengambil blogList dari localStorage, jika ada
      })
    );
  }, [dispatch]);

  // Fungsi untuk menghapus blog berdasarkan ID
  function onDeleteBlog(getCurrentBlogId) {
    console.log(getCurrentBlogId); // Menampilkan ID blog yang akan dihapus
    dispatch(
      handleDeleteBlog({
        currentBlogId: getCurrentBlogId, // Mengirim ID blog yang akan dihapus
      })
    );
  }

  // Fungsi untuk mengedit blog
  function onEditBlog(getCurrentBlog) {
    dispatch(
      setCurrentEditedBlogId({
        currentBlogId: getCurrentBlog?.id, // Mengirim ID blog yang sedang diedit
      })
    );

    dispatch(
      handleInputChange({
        title: getCurrentBlog?.title, // Mengisi form dengan data blog yang dipilih
        description: getCurrentBlog?.description,
      })
    );
  }

  console.log(blogList); // Menampilkan daftar blog di console untuk debugging

  return (
    <ul>
      {/* Jika ada blog, tampilkan dalam daftar */}
      {blogList?.length > 0 ? (
        blogList.map((singleBlogItem) => (
          <div
            style={{ border: "1px solid black", padding: "10px" }}
            key={singleBlogItem.id}
          >
            <h3>{singleBlogItem.title}</h3>
            <p>{singleBlogItem.description}</p>
            <button onClick={() => onEditBlog(singleBlogItem)}>
              Edit Blog
            </button>
            <button onClick={() => onDeleteBlog(singleBlogItem.id)}>
              Delete Blog
            </button>
          </div>
        ))
      ) : (
        // Jika tidak ada blog, tampilkan pesan
        <h1>No Blog Found | Please Add New Blog</h1>
      )}
    </ul>
  );
}

export default BlogList; // Mengekspor komponen BlogList
```

#### **Penjelasan Baris per Baris:**

1. **`import { useEffect } from "react";`**

   - Mengimpor **`useEffect`** dari React untuk menjalankan efek samping, seperti memuat data dari **localStorage** setelah komponen pertama kali dirender.

2. **`import { useDispatch, useSelector } from "react-redux";`**

   - Mengimpor **`useDispatch`** dan **`useSelector`** dari **React-Redux**:
     - **`useDispatch`** digunakan untuk mengirimkan aksi (action) ke Redux.
     - **`useSelector`** digunakan untuk membaca state dari Redux.

3. **`const dispatch = useDispatch();`**

   - Mendapatkan fungsi **`dispatch`** untuk mengirimkan aksi (action) ke Redux store.

4. **`const { blog } = useSelector((state) => state);`**

   - Mengambil state **`blog`** dari Redux store. State ini berisi daftar blog (`blogList`), data form (`formData`), dan ID blog yang sedang diedit.

5. **`const { blogList } = blog;`**

   - Mengambil **`blogList`** dari state **`blog`**.

6. **`useEffect(() => { ... }, [dispatch]);`**

   - Hook **`useEffect`** ini dijalankan hanya sekali ketika komponen pertama kali dimuat. Di sini, kita memuat daftar blog dari **`localStorage`** dan mengirimnya ke Redux dengan aksi **`setBlogListOnInitialLoad`**.

7. **`function onDeleteBlog(getCurrentBlogId) { ... }`**

   - Fungsi ini akan dipanggil ketika tombol **Delete Blog** diklik. Fungsi ini akan mengirimkan ID blog yang ingin dihapus ke Redux dengan aksi **`handleDeleteBlog`**.

8. **`function onEditBlog(getCurrentBlog) { ... }`**

   - Fungsi ini akan dipanggil ketika tombol **Edit Blog** diklik. Fungsi ini mengirimkan ID blog yang sedang diedit dan data blog ke Redux dengan aksi **`setCurrentEditedBlogId`** dan **`handleInputChange`**.

9. **`{blogList?.length > 0 ? ... : <h1>No Blog Found | Please Add New Blog</h1>}`**

   - Jika **`blogList`** memiliki blog, maka daftar blog akan dirender dalam elemen **`<ul>`**. Setiap blog akan ditampilkan dengan tombol **Edit Blog** dan **Delete Blog**. Jika tidak ada blog, pesan "No Blog Found" akan ditampilkan.

10. **`<button onClick={() => onEditBlog(singleBlogItem)}>`**

    - Ketika tombol **Edit Blog** diklik, fungsi **`onEditBlog`** dipanggil dengan parameter **`singleBlogItem`** (data blog yang sedang dipilih).

11. **`<button onClick={() => onDeleteBlog(singleBlogItem.id)}>`**
    - Ketika tombol **Delete Blog** diklik, fungsi **`onDeleteBlog`** dipanggil dengan parameter **`singleBlogItem.id`** (ID blog yang akan dihapus).

### **5. Kesimpulan**

Komponen **`BlogList`** ini bertanggung jawab untuk menampilkan daftar blog dan menyediakan opsi untuk mengedit atau menghapus blog.

- **Daftar blog** diambil dari **Redux store** dan disimpan di **localStorage** untuk persistensi.
- **Tombol Edit** dan **Delete** memungkinkan pengguna untuk mengedit atau menghapus blog dari daftar.
- Menggunakan **React-Redux**, komponen ini dapat mengelola state aplikasi dan memperbarui UI sesuai dengan perubahan data.
