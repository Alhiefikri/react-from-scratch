# React Router 6: Penjelasan Komponen dan Fungsi

## Pengertian

React Router adalah library yang digunakan untuk mengatur navigasi (routing) dalam aplikasi berbasis React. Dengan React Router, kamu bisa membuat aplikasi yang memiliki banyak halaman dan berpindah antar halaman tanpa me-reload seluruh halaman. React Router memungkinkan kita untuk membuat link antar komponen dengan cara deklaratif. Di versi 6, React Router menyediakan API yang lebih sederhana dan powerful untuk melakukan routing di aplikasi React.

Pada contoh kode di bawah ini, kita akan menjelaskan cara kerja dan komponen-komponen utama yang terlibat dalam pengaturan routing menggunakan React Router 6.

---

## Cara Berpikir React

React berpikir berdasarkan **komponen**. Setiap komponen adalah bagian terpisah dari aplikasi yang dapat di-render, yang masing-masing memiliki tampilan dan logika sendiri. **Routing** di React berarti kita menentukan komponen mana yang harus ditampilkan ketika URL tertentu diakses. React Router menghubungkan antara URL dan komponen, sehingga aplikasi kita dapat menampilkan halaman yang sesuai dengan URL yang diminta pengguna.

---

## Analogi Sederhana

Bayangkan aplikasi kamu adalah sebuah buku yang terdiri dari beberapa halaman. Setiap halaman memiliki isi yang berbeda, dan untuk membuka halaman tertentu, kamu cukup mengunjungi nomor halaman yang sesuai. React Router bertindak seperti **penanda halaman** di dalam buku, yang menentukan halaman mana yang harus kamu buka berdasarkan permintaan (URL).

---

## Penjelasan Kode Tiap Baris

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
```

- `createBrowserRouter` dan `RouterProvider`:

  - **`createBrowserRouter`** digunakan untuk membuat router yang berbasis pada browser (menggunakan URL di address bar).
  - **`RouterProvider`** adalah komponen yang menyediakan router kepada aplikasi React kamu. Komponen ini akan menghubungkan aplikasi React dengan router yang sudah kita buat.

- Impor komponen-komponen lain (seperti `Home`, `Menu`, `Cart`, dll.) yang akan digunakan di dalam rute aplikasi.

```javascript
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);
```

- **`createBrowserRouter`** menerima sebuah array yang mendefinisikan **routes** (rute) yang ada di aplikasi.

  - **`element`** adalah komponen yang akan dirender ketika URL cocok dengan rute ini.
  - **`path`** adalah URL atau pola URL yang cocok dengan rute ini.
  - **`loader`** adalah fungsi yang digunakan untuk memuat data sebelum komponen dirender (misalnya mengambil data dari API).
  - **`action`** adalah fungsi yang dipanggil saat melakukan aksi (seperti submit form atau mengubah data).

  Di dalam array, terdapat rute-rute berikut:

  - `/` → akan menampilkan komponen `Home`.
  - `/menu` → akan menampilkan komponen `Menu` dan memuat data menggunakan `menuLoader`.
  - `/cart` → akan menampilkan komponen `Cart`.
  - `/order/new` → akan menampilkan komponen `CreateOrder` dan memanggil `createOrderAction` saat terjadi aksi.
  - `/order/:orderId` → akan menampilkan komponen `Order` untuk ID tertentu yang diteruskan lewat URL (misalnya `/order/123`), dan memuat data dengan `orderLoader`.

  **`errorElement`** digunakan untuk menampilkan tampilan error jika ada masalah saat memuat komponen atau data.

```javascript
function App() {
  return <RouterProvider router={router} />;
}
```

- **`App`** adalah komponen utama yang merender **`RouterProvider`**. Komponen ini akan menyediakan router yang telah kita definisikan kepada seluruh aplikasi. Ini berarti, aplikasi akan merender rute-rute yang telah kita buat sebelumnya.

```javascript
export default App;
```

- **`export default App;`**: Menyediakan komponen `App` untuk digunakan di luar file ini.

---

## Kesimpulan

React Router 6 memungkinkan kita untuk mengatur navigasi antar halaman dalam aplikasi React dengan cara yang lebih sederhana. Dengan menggunakan `createBrowserRouter` dan `RouterProvider`, kita dapat menentukan rute-rute aplikasi, memuat komponen-komponen yang tepat berdasarkan URL, dan bahkan memuat data atau menangani error dengan lebih mudah.

Beberapa konsep penting yang perlu dipahami:

- **`element`**: Komponen yang akan dirender.
- **`path`**: Pola URL yang cocok dengan rute tersebut.
- **`loader`**: Fungsi untuk memuat data sebelum komponen dirender.
- **`action`**: Fungsi yang menangani aksi tertentu (misalnya submit form).
- **`errorElement`**: Komponen yang ditampilkan jika terjadi error.

Dengan memahami komponen dan fungsi di atas, kamu dapat dengan mudah mengatur navigasi dan rute di aplikasi React kamu, serta memanfaatkan berbagai fitur seperti pemuatan data dan penanganan error secara otomatis.
