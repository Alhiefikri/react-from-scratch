# Penjelasan Kode Komponen `Menu`

Komponen `Menu` ini bertugas untuk menampilkan daftar menu pizza yang tersedia dari API restoran. Komponen ini menggunakan **React Router** untuk memuat data menu melalui fungsi **`loader`** dan kemudian menampilkan setiap item menu dengan komponen **`MenuItem`**.

---

## Pengertian

Komponen `Menu` mengambil data menu dari API menggunakan fungsi `loader`, dan menampilkan daftar pizza yang ada di menu. Setiap pizza akan dipetakan (mapped) menjadi komponen **`MenuItem`** yang bertanggung jawab untuk menampilkan detail masing-masing item menu.

---

## Cara Berpikir React dan React Router di Kode Ini

1. **Loader Function**:
   - **React Router** menyediakan fitur **loader** untuk memuat data sebelum komponen dirender. Di sini, fungsi **`loader`** digunakan untuk mengambil data menu dari API (dengan memanggil `getMenu`).
2. **Pengambilan Data dengan `useLoaderData`**:

   - Setelah data menu diambil oleh loader, data tersebut diproses oleh **hook `useLoaderData`**. Hook ini digunakan untuk mengakses data yang telah dimuat melalui loader dan kemudian merender UI berdasarkan data tersebut.

3. **Map dan Render Item**:
   - Data menu yang berupa array dari pizza akan di-mapping, dan untuk setiap item pizza, akan dirender komponen **`MenuItem`**.

---

## Analogi Sederhana

Bayangkan kamu sedang melihat menu restoran. Setiap jenis pizza yang ada di menu restoran ditampilkan di daftar, dan setiap pizza tersebut memiliki deskripsi singkat (misalnya nama dan harga). Dengan menggunakan kode ini, daftar pizza akan diambil dari dapur (API) dan kemudian ditampilkan di menu (UI).

---

## Penjelasan Kode Tiap Baris

### 1. Mengimpor Modul dan Fungsi

```javascript
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
```

- **`useLoaderData`**: Hook dari **React Router** yang digunakan untuk mengambil data yang dimuat melalui fungsi loader.
- **`getMenu`**: Fungsi untuk mengambil data menu dari API restoran.
- **`MenuItem`**: Komponen yang digunakan untuk menampilkan detail masing-masing pizza. Setiap item pizza akan diproses menggunakan komponen ini.

### 2. Komponen `Menu`

```javascript
function Menu() {
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
```

- **`const menu = useLoaderData();`**: Mengambil data menu yang sudah dimuat oleh fungsi loader. Data ini adalah array yang berisi item pizza.
- **`menu.map((pizza) => ( ... ))`**: Data menu (array) dipetakan menggunakan `.map()`, yang berarti untuk setiap pizza dalam menu, komponen `MenuItem` akan dirender dengan properti `pizza` yang berisi data pizza tersebut.
  - **`key={pizza.id}`**: React membutuhkan `key` yang unik untuk setiap elemen dalam array yang dirender. Di sini, `pizza.id` digunakan sebagai `key` untuk memastikan bahwa setiap elemen memiliki identitas yang unik.

### 3. Fungsi `loader` untuk Mengambil Data Menu

```javascript
export async function loader() {
  const menu = await getMenu();
  return menu;
}
```

- **`loader`**: Fungsi ini adalah bagian dari React Router yang dipanggil sebelum komponen `Menu` dirender. Fungsi ini bertugas untuk mengambil data menu dari API menggunakan `getMenu()`.
- **`await getMenu()`**: Fungsi `getMenu` memanggil API untuk mendapatkan data menu dan mengembalikannya.
- **`return menu;`**: Data menu yang diambil akan dikembalikan dan bisa digunakan di dalam komponen `Menu` melalui `useLoaderData`.

### 4. Ekspor Komponen

```javascript
export default Menu;
```

- **`export default Menu;`**: Menyediakan komponen `Menu` untuk digunakan di tempat lain dalam aplikasi, misalnya dalam routing.

---

## Kesimpulan

Komponen `Menu` menampilkan daftar menu yang terdiri dari berbagai jenis pizza.

- Menggunakan **`loader`** untuk mengambil data dari API sebelum komponen dirender.
- Data menu yang sudah diambil kemudian dipetakan menggunakan `.map()` dan ditampilkan melalui komponen **`MenuItem`** untuk setiap item pizza.
- **`useLoaderData`** digunakan untuk mengakses data menu yang dimuat melalui loader, memungkinkan kita untuk mengelola data secara terpisah dari komponen UI.

Dengan menggunakan **React Router's loader**, kita dapat memuat data sebelum halaman dirender dan memberikan pengalaman pengguna yang lebih baik, seperti menghindari tampilan kosong sebelum data tersedia.
