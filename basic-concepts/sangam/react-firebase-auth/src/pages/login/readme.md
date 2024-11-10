# Login Page Component - `LoginPage`

### **Tujuan Kode**

Komponen `LoginPage` adalah halaman login yang memungkinkan pengguna untuk masuk ke aplikasi menggunakan akun Firebase mereka. Komponen ini menggunakan `CommonForm` untuk merender form login dengan dua input: email dan password. Setelah pengguna mengisi form dan menekan tombol login, aplikasi akan memverifikasi kredensial menggunakan Firebase Authentication.

---

### **Pengertian**

`LoginPage` adalah halaman yang berfungsi untuk menangani proses login pengguna. Pengguna dapat memasukkan email dan password mereka, kemudian form akan diproses dengan Firebase Authentication untuk memverifikasi kredensial. Jika login berhasil, pengguna akan diarahkan ke halaman profil (`/profile`). Komponen ini juga mengelola state form (`loginFormData`) dan memanggil fungsi login dari context (`loginWithFirebase`).

---

### **Cara Berpikir Kode**

1. **Menggunakan Context untuk Pengelolaan State**: Komponen ini menggunakan `useContext` untuk mendapatkan data dan fungsi terkait login, seperti `loginFormData`, `setLoginFormData`, dan `loginWithFirebase` dari `AuthContext`.
2. **Handling Form Submit**: Ketika pengguna mengirimkan form (menekan tombol login), fungsi `handleLoginOnSubmit` akan dipanggil. Fungsi ini memanggil `loginWithFirebase`, yang bertanggung jawab untuk melakukan autentikasi menggunakan Firebase.
3. **Redirect Pengguna**: Setelah login berhasil, pengguna akan diarahkan ke halaman `/profile` menggunakan `useNavigate`.

---

### **Analogi Sederhana**

Bayangkan halaman login ini seperti **pintu masuk** ke aplikasi. Ketika kamu mengisi email dan password, ini seperti menunjukkan ID dan kata sandi kepada penjaga pintu (Firebase Authentication). Jika ID dan kata sandi valid, kamu diizinkan masuk dan diarahkan ke ruang pribadi (halaman profil).

---

### **Penjelasan Masing-Masing Kode Secara Detail**

#### 1. **Import Statements**

```javascript
import { useContext } from "react";
import CommonForm from "../../components/common-form";
import { loginFormControls } from "../../config";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
```

- **`useContext`**: Hook ini digunakan untuk mengakses nilai yang disediakan oleh `AuthContext`, yang berisi state dan fungsi terkait autentikasi, seperti data form login dan fungsi `loginWithFirebase`.
- **`CommonForm`**: Komponen form yang digunakan untuk merender form login menggunakan kontrol form yang didefinisikan dalam `loginFormControls`.
- **`loginFormControls`**: Konfigurasi kontrol form login yang didefinisikan di file `config.js`. Ini menentukan elemen input apa yang akan dirender di form.
- **`AuthContext`**: Context yang mengelola status autentikasi pengguna, termasuk data login, status loading, dan fungsi login.
- **`useNavigate`**: Hook dari `react-router-dom` yang digunakan untuk melakukan navigasi programatik ke halaman lain, dalam hal ini, ke halaman profil setelah login berhasil.

#### 2. **Mengambil Data dan Fungsi dari `AuthContext`**

```javascript
const { loginFormData, setLoginFormData, loginWithFirebase, setLoading } =
  useContext(AuthContext);
```

- **`loginFormData`**: State yang menyimpan data form login, seperti email dan password.
- **`setLoginFormData`**: Fungsi untuk memperbarui `loginFormData` ketika pengguna mengetik di input.
- **`loginWithFirebase`**: Fungsi yang menangani login menggunakan Firebase Authentication.
- **`setLoading`**: Fungsi untuk mengatur status loading saat proses login berlangsung.

#### 3. **Navigasi dengan `useNavigate`**

```javascript
const navigate = useNavigate();
```

- **`navigate`**: Fungsi ini digunakan untuk melakukan navigasi ke halaman lain. Setelah login berhasil, kita akan mengarahkan pengguna ke halaman profil dengan `navigate("/profile")`.

#### 4. **Handling Submit pada Form**

```javascript
function handleLoginOnSubmit(event) {
  event.preventDefault();

  loginWithFirebase().then((result) => {
    console.log(result, "result 12345");
    if (result) {
      setLoading(false);
      navigate("/profile");
    }
  });
}
```

- **`event.preventDefault()`**: Mencegah perilaku default dari form (reloading halaman) saat form disubmit.
- **`loginWithFirebase()`**: Memanggil fungsi `loginWithFirebase` untuk melakukan autentikasi menggunakan Firebase. Fungsi ini akan mengembalikan hasil autentikasi.
- **`setLoading(false)`**: Menandakan bahwa proses login telah selesai dan loading harus dihentikan.
- **`navigate("/profile")`**: Setelah login berhasil, pengguna akan diarahkan ke halaman profil (`/profile`).

#### 5. **Form dan Penggunaan `CommonForm`**

```javascript
<CommonForm
  formControls={loginFormControls}
  formData={loginFormData}
  setFormData={setLoginFormData}
  buttonText={"Login"}
  onSubmit={handleLoginOnSubmit}
/>
```

- **`formControls={loginFormControls}`**: Mengirimkan konfigurasi kontrol form yang telah didefinisikan dalam `loginFormControls`.
- **`formData={loginFormData}`**: Data form login yang akan diikat ke input form.
- **`setFormData={setLoginFormData}`**: Fungsi untuk memperbarui state `loginFormData` saat ada perubahan nilai pada input form.
- **`buttonText={"Login"}`**: Menentukan teks pada tombol submit, yang dalam hal ini adalah "Login".
- **`onSubmit={handleLoginOnSubmit}`**: Fungsi yang dipanggil saat form disubmit, yang menangani proses login.

#### 6. **Struktur HTML dan Styling**

```javascript
<div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
  <div className="px-6 py-5">
    <h1>Welcome Back</h1>
    <p>Login Page</p>
    {/* CommonForm */}
  </div>
</div>
```

- **`className="w-full max-w-sm mx-auto rounded-lg shadow-md"`**: Menggunakan kelas Tailwind CSS untuk memberi gaya pada form login, seperti lebar maksimal, margin otomatis untuk pusatkan elemen, dan styling untuk bentuk dan bayangan.
- **`<h1>` dan `<p>`**: Menampilkan judul dan deskripsi yang memberi tahu pengguna bahwa ini adalah halaman login.

#### 7. **Export Statement**

```javascript
export default LoginPage;
```

- **`export default LoginPage;`**: Menandakan bahwa `LoginPage` adalah komponen default yang akan digunakan di bagian lain aplikasi.

---

### **Kesimpulan**

- Komponen `LoginPage` adalah halaman login yang memungkinkan pengguna masuk dengan menggunakan email dan password melalui Firebase Authentication.
- Komponen ini menggunakan `CommonForm` untuk merender form login dan mengelola state input.
- Setelah login berhasil, pengguna akan diarahkan ke halaman `/profile`.
- Proses login dan pengelolaan data form dilakukan dengan memanfaatkan context (`AuthContext`) dan hook seperti `useContext` dan `useNavigate`.
