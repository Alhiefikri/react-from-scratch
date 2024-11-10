# React Login with Firebase - `App.js`

### **Tujuan Kode**

Komponen `App.js` mengatur rute navigasi dalam aplikasi menggunakan **React Router**, yang memungkinkan pengguna untuk mengakses halaman login, registrasi, dan profil. Selain itu, halaman profil dilindungi dengan proteksi autentikasi menggunakan komponen `AuthPage`.

---

### **Pengertian**

`App.js` adalah komponen utama dalam aplikasi React yang menangani rute (routes) dan menavigasi antar halaman aplikasi. Rute yang ada adalah:

- Halaman **Login**: Untuk pengguna yang belum login.
- Halaman **Register**: Untuk pengguna yang belum memiliki akun.
- Halaman **Profile**: Halaman profil pengguna yang hanya bisa diakses setelah login.

---

### **Cara Berpikir Kode**

- Menggunakan **React Router** untuk membuat aplikasi berbasis halaman.
- Halaman login dan register bisa diakses secara bebas, sementara halaman profil hanya bisa diakses jika pengguna sudah login (melalui proteksi `AuthPage`).
- `Routes` dan `Route` digunakan untuk menghubungkan URL dengan komponen yang sesuai.

---

### **Analogi Sederhana**

Bayangkan aplikasi ini seperti sebuah rumah dengan berbagai kamar:

- **Login** adalah pintu masuk utama.
- **Register** adalah pintu cadangan untuk orang yang belum memiliki kunci.
- **Profile** adalah kamar pribadi, yang hanya bisa dimasuki oleh orang yang sudah memiliki kunci (yang sudah login).

Pengguna yang sudah memiliki kunci (login) dapat masuk ke kamar pribadi (profile). Jika mereka belum login, mereka akan diarahkan kembali ke pintu masuk (login).

---

### **Penjelasan Masing-Masing Kode Secara Detail**

#### 1. **Import Statement**

```javascript
import { Routes } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import AuthPage from "./pages/private-route";
import ProfilePage from "./pages/profile";
```

- **`import { Routes }`** dan **`import { Route }`**: Mengimpor komponen `Routes` dan `Route` dari `react-router-dom` untuk menangani navigasi antar halaman.
- **`import "./App.css"`**: Mengimpor file CSS untuk memberikan gaya pada komponen `App`.
- **Mengimpor Halaman**: Komponen-komponen seperti `LoginPage`, `RegisterPage`, `AuthPage`, dan `ProfilePage` diimpor agar dapat digunakan dalam routing aplikasi.

#### 2. **Fungsi `App` dan Struktur `Routes`**

```javascript
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/profile"
          element={
            <AuthPage>
              <ProfilePage />
            </AuthPage>
          }
        />
      </Routes>
    </div>
  );
}
```

- **Fungsi `App`**: Komponen utama yang merender seluruh aplikasi, di dalamnya terdapat `Routes` yang mengelola seluruh navigasi rute.
- **`<Routes>`**: Container untuk mengelola semua `Route`. `Routes` menggantikan `Switch` dari versi lama React Router.

#### 3. **Rute untuk Login**

```javascript
<Route path="/login" element={<LoginPage />} />
```

- **Rute `/login`**: Ketika pengguna mengakses `/login` di URL, komponen `LoginPage` akan dirender. Ini adalah halaman tempat pengguna dapat masuk dengan akun mereka.

#### 4. **Rute untuk Register**

```javascript
<Route path="/register" element={<RegisterPage />} />
```

- **Rute `/register`**: Ketika pengguna mengakses `/register`, komponen `RegisterPage` akan dirender. Ini adalah halaman untuk pengguna yang belum memiliki akun dan ingin mendaftar.

#### 5. **Rute untuk Profile (Dengan Proteksi Autentikasi)**

```javascript
<Route
  path="/profile"
  element={
    <AuthPage>
      <ProfilePage />
    </AuthPage>
  }
/>
```

- **Rute `/profile`**: Halaman profil hanya dapat diakses oleh pengguna yang sudah login. Oleh karena itu, komponen `ProfilePage` dibungkus oleh komponen `AuthPage`.
  - **`AuthPage`**: Komponen ini memeriksa apakah pengguna sudah terautentikasi. Jika tidak, pengguna akan diarahkan ke halaman login. Jika sudah, maka `ProfilePage` akan dirender.
  - **`ProfilePage`**: Ini adalah halaman yang menampilkan informasi profil pengguna yang sudah login.

---

### **Kesimpulan**

- `App.js` mengatur navigasi antar halaman aplikasi dengan menggunakan **React Router**.
- Halaman yang ada di aplikasi ini adalah login, registrasi, dan profil. Namun, halaman profil dilindungi agar hanya bisa diakses oleh pengguna yang sudah login.
- Dengan cara ini, aplikasi dapat memastikan bahwa hanya pengguna yang sudah terautentikasi yang dapat mengakses halaman profil.
