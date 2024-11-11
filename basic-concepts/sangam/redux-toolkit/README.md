# **Blog App dengan Redux Toolkit & React-Redux**

Aplikasi ini adalah contoh implementasi **React** dengan **Redux Toolkit** dan **React-Redux** untuk mengelola state global dalam aplikasi. Aplikasi ini memungkinkan pengguna untuk membuat, mengedit, menghapus, dan menampilkan blog.

## **Fitur Aplikasi**

- Menambahkan blog baru.
- Mengedit blog yang sudah ada.
- Menghapus blog.
- Menyimpan data blog secara persisten menggunakan **localStorage**.

## **Teknologi yang Digunakan**

- **React**: Library JavaScript untuk membangun user interface.
- **Redux Toolkit**: Alat resmi untuk mempermudah penggunaan Redux dalam aplikasi React.
- **React-Redux**: Binding untuk menghubungkan React dengan Redux store.
- **CSS**: Untuk styling aplikasi.

## **Prasyarat**

Sebelum memulai, pastikan Anda memiliki **Node.js** dan **npm** (Node Package Manager) yang terinstal di sistem Anda.

Untuk memeriksa apakah Anda sudah memiliki Node.js dan npm:

```bash
node -v
npm -v
```

Jika belum menginstal, Anda bisa mendownload dan menginstalnya di [sini](https://nodejs.org/).

## **Cara Memulai**

Ikuti langkah-langkah berikut untuk menjalankan aplikasi di lingkungan lokal Anda:

### 1. **Clone repository ini**

```bash
git clone https://github.com/Alhiefikri/react-from-scratch.git
```

### 2. **Instal dependencies**

Setelah melakukan clone, masuk ke direktori proyek dan instal semua dependencies yang diperlukan:

```bash
cd react-from-sratch
npm install
```

### 3. **Jalankan aplikasi**

Setelah instalasi selesai, jalankan aplikasi menggunakan perintah berikut:

```bash
npm start
```

Aplikasi akan terbuka di browser di alamat: `http://localhost:3000`.

## **Penjelasan Struktur Proyek**

Berikut adalah penjelasan tentang struktur direktori dan fungsinya:

```
/blog-app
├── /public
│   ├── index.html              # Template HTML utama
├── /src
│   ├── /components             # Komponen React untuk tampilan aplikasi
│   │   ├── AddNewBlog.jsx      # Komponen untuk menambahkan atau mengedit blog
│   │   ├── BlogList.jsx        # Komponen untuk menampilkan daftar blog
│   ├── /store
│   │   ├── index.js            # Mengonfigurasi Redux store
│   │   ├── /slices
│   │   │   ├── blogSlice.js    # Slice untuk mengelola state blog
│   │   │   ├── counter.js      # Slice untuk contoh counter (tidak digunakan di aplikasi ini)
│   ├── App.css                 # CSS untuk styling aplikasi
│   ├── App.jsx                 # Komponen utama aplikasi
│   ├── index.css               # Styling global aplikasi
│   ├── index.js                # Titik masuk aplikasi
└── package.json                # Menyimpan konfigurasi proyek dan dependencies
```

### **Penjelasan Komponen**

1. **`App.jsx`**

   - Merupakan komponen utama yang menggabungkan seluruh bagian aplikasi.
   - Di sini, Anda dapat melihat bahwa aplikasi berisi **`AddNewBlog`** dan **`BlogList`**.

2. **`AddNewBlog.jsx`**

   - Komponen ini memungkinkan pengguna untuk menambah atau mengedit blog.
   - Menggunakan **Redux** untuk mengelola state form (judul dan deskripsi blog) dan mengirimkan data ke store Redux.
   - Jika pengguna mengedit blog, aplikasi akan mengupdate blog yang sesuai dengan perubahan form.

3. **`BlogList.jsx`**

   - Komponen ini menampilkan daftar semua blog yang ada di **Redux store**.
   - Setiap blog bisa dihapus atau diedit.
   - Data blog disimpan di **localStorage** untuk persistensi antara reload halaman.

4. **`blogSlice.js`**

   - Menggunakan **`createSlice`** dari **Redux Toolkit** untuk membuat slice state untuk blog.
   - Berisi **reducers** untuk menangani aksi-aksi seperti menambah, mengedit, menghapus, dan memuat daftar blog.
   - Menyimpan daftar blog di **Redux store** dan di **localStorage**.

5. **`main.jsx`**
   - Titik masuk utama aplikasi yang membungkus aplikasi dengan **`Provider`** dari **React-Redux** untuk memberikan akses ke Redux store di seluruh aplikasi.

### **State dan Actions di Redux**

Aplikasi ini menggunakan **Redux Toolkit** untuk mengelola state global, terutama untuk daftar blog dan form data.

#### **State pada `blogSlice`**

- **`formData`**: Menyimpan data form (judul dan deskripsi blog).
- **`blogList`**: Menyimpan daftar semua blog yang ditambahkan.
- **`currentEditedBlogId`**: Menyimpan ID blog yang sedang diedit.

#### **Reducers (Actions) pada `blogSlice`**

- **`handleInputChange`**: Mengupdate data form (judul dan deskripsi blog).
- **`handleAddTodo`**: Menambahkan blog baru ke `blogList` dan menyimpannya ke `localStorage`.
- **`setBlogListOnInitialLoad`**: Memuat daftar blog dari `localStorage` ketika aplikasi dimulai.
- **`handleDeleteBlog`**: Menghapus blog dari `blogList` berdasarkan ID.
- **`setCurrentEditedBlogId`**: Menyimpan ID blog yang sedang diedit.
- **`handleEditBlog`**: Mengupdate blog yang sedang diedit dengan data dari form.

## **Penjelasan Proses Kerja Aplikasi**

1. Ketika aplikasi pertama kali dimulai, **`useEffect`** di **`BlogList`** akan memuat daftar blog dari **localStorage** dan menyimpannya ke dalam **Redux store**.
2. Pengguna dapat menambah blog baru melalui **`AddNewBlog`**. Form akan mengirim data blog baru ke **Redux store**, dan daftar blog akan diperbarui.
3. Pengguna dapat mengedit blog dengan mengklik tombol **Edit** pada setiap blog di **`BlogList`**. Form akan diisi dengan data blog yang sedang diedit dan ketika disubmit, blog akan diperbarui.
4. Pengguna dapat menghapus blog melalui tombol **Delete** yang akan menghapus blog dari daftar dan memperbarui **localStorage**.

## **Pentingnya Redux Toolkit dalam Proyek Ini**

- **Redux Toolkit** menyederhanakan pengelolaan state aplikasi dengan menyediakan **`createSlice`** dan mengurangi boilerplate code yang biasa diperlukan dalam Redux.
- **localStorage** digunakan untuk persistensi data, memastikan bahwa data blog tetap ada meskipun aplikasi dimuat ulang.

## **Kesimpulan**

Proyek ini adalah contoh aplikasi sederhana yang menunjukkan bagaimana menggunakan **React**, **Redux Toolkit**, dan **React-Redux** untuk mengelola state global dan melakukan operasi CRUD (Create, Read, Update, Delete) pada daftar blog. Data disimpan dengan **localStorage** untuk persistensi dan diakses melalui **Redux store**.
