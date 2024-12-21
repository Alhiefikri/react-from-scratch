# React App with React Router, useReducer, and Context API

## Pengertian

Pada aplikasi React ini, kita menggunakan beberapa fitur penting untuk membangun aplikasi yang lebih kompleks dan mudah dipelihara. Fitur yang digunakan adalah:

1. **React Router** - untuk menangani navigasi atau routing dalam aplikasi.
2. **useReducer** - untuk mengelola state yang lebih kompleks.
3. **Context API** - untuk menyediakan data ke seluruh aplikasi tanpa harus mengoper props secara manual dari komponen induk ke anak.

Berikut ini penjelasan secara rinci mengenai bagian-bagian penting dari kode dan fungsinya.

## Cara Berpikir React

React berfokus pada pembangunan antarmuka pengguna (UI) berdasarkan komponen yang dapat digunakan kembali. Dalam React:

- **Komponen** adalah unit dasar dari UI. Setiap komponen dapat memiliki state, yang mengatur data yang ditampilkan.
- React menggunakan **state** dan **props** untuk berinteraksi antar komponen.
- React Router memungkinkan navigasi tanpa me-reload halaman, membuat aplikasi terasa seperti aplikasi native.
- **Context API** adalah cara untuk berbagi data antara komponen tanpa harus melewati props secara eksplisit.
- **useReducer** adalah hook yang digunakan untuk mengelola state yang lebih kompleks dalam aplikasi.

## Analogi Sederhana

Bayangkan aplikasi React seperti sebuah **rumah** yang terdiri dari beberapa **ruangan** (komponen).

- **React Router** berfungsi seperti **peta rumah** yang membantu Anda berpindah dari satu ruangan ke ruangan lain.
- **useReducer** berfungsi seperti **manual kontrol** yang membantu Anda mengatur kondisi tertentu dalam satu ruangan yang membutuhkan pengelolaan lebih kompleks (misalnya mengatur suhu atau pencahayaan).
- **Context API** seperti **sistem komunikasi di rumah** yang memungkinkan semua penghuni rumah tahu informasi penting tanpa harus berjalan ke satu ruangan untuk bertanya.

## Penjelasan Kode Tiap Baris

```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { Navigate } from "react-router-dom";
import { CitiesProvider } from "./context/CitiesContext";
import { useContext } from "react";
import { AuthProvider } from "./context/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
```

### Penjelasan Import

- **BrowserRouter, Route, Routes**: Digunakan untuk menambahkan navigasi (routing) dalam aplikasi.
- **Homepage, Product, Pricing, etc.**: Komponen-komponen halaman yang berbeda dalam aplikasi.
- **Navigate**: Digunakan untuk mengarahkan pengguna ke halaman lain.
- **CitiesProvider dan AuthProvider**: Provider untuk Context API, yang memungkinkan kita membagikan state ke seluruh aplikasi.
- **ProtectedRoute**: Komponen yang memastikan hanya pengguna yang terautentikasi yang dapat mengakses halaman tertentu.

```jsx
function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
```

### Penjelasan:

- **AuthProvider dan CitiesProvider**: Ini adalah dua konteks yang dibungkus di sekitar aplikasi. Mereka menyediakan data global untuk aplikasi ini, seperti status autentikasi pengguna dan data kota.
- **BrowserRouter**: Mengatur routing pada aplikasi. BrowserRouter mengelola URL dan memastikan navigasi terjadi tanpa me-refresh halaman.
- **Routes**: Container yang mengelola daftar route (jalur URL) dan menentukan komponen mana yang ditampilkan berdasarkan URL saat ini.

```jsx
<Route
  path="app"
  element={
    <ProtectedRoute>
      <AppLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<Navigate replace to="cities" />} />
  <Route path="cities" element={<CityList />} />
  <Route path="cities/:id" element={<City />} />
  <Route path="countries" element={<CountryList />} />
  <Route path="form" element={<Form />} />
</Route>
```

### Penjelasan:

- **ProtectedRoute**: Komponen ini membungkus `AppLayout`. Jika pengguna tidak terautentikasi, maka pengguna akan diarahkan ke halaman login. Jika terautentikasi, maka `AppLayout` akan dirender.
- **Route dengan path `cities/:id`**: Menggunakan parameter dinamis (`:id`) untuk menangani tampilan detail dari kota tertentu.
- **Navigate**: Digunakan untuk mengarahkan pengguna secara otomatis ke halaman tertentu (misalnya, dari halaman utama `app` langsung ke halaman `cities`).

```jsx
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
```

### Penjelasan:

- **Route path="\*"**: Ini adalah wildcard route, yang akan menangkap semua URL yang tidak terdaftar sebelumnya dan menampilkan halaman `PageNotFound` (404).
- **Export App**: Menandakan bahwa komponen `App` ini dapat digunakan di tempat lain dalam aplikasi.

## Kesimpulan

Pada dasarnya, kode di atas membangun aplikasi React yang terstruktur dengan baik menggunakan **React Router** untuk navigasi, **useReducer** untuk pengelolaan state kompleks (meskipun dalam contoh ini tidak digunakan secara eksplisit), dan **Context API** untuk berbagi state global di seluruh aplikasi.

- **React Router** mengatur bagaimana aplikasi merespons perubahan URL dan merender komponen terkait.
- **Context API** memungkinkan Anda untuk berbagi data global (misalnya, informasi autentikasi dan data kota) ke seluruh aplikasi tanpa perlu meneruskan props secara manual.
- **ProtectedRoute** memastikan hanya pengguna yang terautentikasi yang dapat mengakses halaman tertentu.

Dengan memanfaatkan ketiga fitur ini, aplikasi menjadi lebih modular, terstruktur, dan mudah dikelola, terutama ketika aplikasi semakin besar dan kompleks.
