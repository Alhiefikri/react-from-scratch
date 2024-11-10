# Profile Page Component - `ProfilePage`

### **Tujuan Kode**

Komponen `ProfilePage` menampilkan informasi profil pengguna yang telah berhasil login. Informasi yang ditampilkan meliputi nama pengguna dan email. Pengguna juga diberikan tombol untuk logout yang akan mengakhiri sesi login mereka dan mengalihkan mereka kembali ke halaman login.

---

### **Pengertian**

`ProfilePage` adalah halaman yang menampilkan informasi terkait pengguna yang sudah login, seperti nama pengguna (display name) dan email yang terkait dengan akun Firebase mereka. Halaman ini juga menyediakan opsi bagi pengguna untuk keluar (logout) dari aplikasi, yang akan mengarahkan mereka kembali ke halaman login.

---

### **Cara Berpikir Kode**

1. **Menggunakan Context untuk Mengakses Data Pengguna**: Komponen ini menggunakan `useContext` untuk mendapatkan data pengguna (`user`) dari `AuthContext`. Data pengguna ini berisi informasi yang dibutuhkan untuk menampilkan profil.
2. **Menampilkan Informasi Pengguna**: Jika pengguna sudah login, halaman ini akan menampilkan nama pengguna (`displayName`) dan email pengguna.
3. **Logout**: Terdapat tombol logout yang memungkinkan pengguna keluar dari aplikasi. Saat tombol ini diklik, fungsi `handleLogout` akan dipanggil untuk mengakhiri sesi login.

---

### **Analogi Sederhana**

Bayangkan `ProfilePage` seperti **kamar pribadi** di aplikasi. Ketika kamu masuk (login), kamu akan bisa melihat informasi pribadimu di dalam kamar ini, seperti nama dan email. Ada juga tombol untuk keluar dari kamar jika kamu ingin mengakhiri sesi (logout).

---

### **Penjelasan Masing-Masing Kode Secara Detail**

#### 1. **Import Statements**

```javascript
import { useContext } from "react";
import { AuthContext } from "../../context";
```

- **`useContext`**: Hook ini digunakan untuk mengakses nilai dari context yang disediakan oleh `AuthContext`. Dengan menggunakan `useContext`, kita bisa mengakses data autentikasi pengguna (seperti data pengguna yang sedang login dan fungsi untuk logout).
- **`AuthContext`**: Context yang menyediakan data terkait autentikasi, seperti status login pengguna dan fungsi untuk mengatur login/logout.

#### 2. **Mendapatkan Data Pengguna dan Fungsi Logout**

```javascript
const { user, handleLogout } = useContext(AuthContext);
```

- **`user`**: Data pengguna yang saat ini sedang login. Jika pengguna telah berhasil login melalui Firebase, data ini akan berisi objek pengguna yang mencakup informasi seperti `displayName` dan `email`.
- **`handleLogout`**: Fungsi untuk mengeluarkan pengguna dari sesi login mereka. Fungsi ini diambil dari `AuthContext` dan digunakan untuk mengakhiri sesi login ketika pengguna menekan tombol logout.

#### 3. **Menampilkan Data Pengguna**

```javascript
<h3>Welcome {user.displayName}</h3>
<p>Your email is {user.email}</p>
```

- **`{user.displayName}`**: Menampilkan nama pengguna yang tersimpan di `displayName` milik objek `user`. Ini biasanya diatur saat pendaftaran atau login pengguna melalui Firebase.
- **`{user.email}`**: Menampilkan alamat email pengguna yang terdaftar di Firebase.

#### 4. **Tombol Logout**

```javascript
<button onClick={handleLogout}>Logout</button>
```

- **`onClick={handleLogout}`**: Ketika tombol logout diklik, fungsi `handleLogout` akan dipanggil, yang akan mengeluarkan pengguna dari sesi login mereka. Setelah logout, pengguna akan diarahkan ke halaman login, bergantung pada implementasi di `AuthContext` (biasanya menggunakan `signOut` dari Firebase).

#### 5. **Struktur HTML dan Styling**

```javascript
<div>
  <h3>Welcome {user.displayName}</h3>
  <p>Your email is {user.email}</p>
  <button onClick={handleLogout}>Logout</button>
</div>
```

- **`<h3>` dan `<p>`**: Digunakan untuk menampilkan nama pengguna dan alamat email pengguna.
- **`<button>`**: Tombol untuk logout, yang akan memicu proses logout saat diklik.

#### 6. **Export Statement**

```javascript
export default ProfilePage;
```

- **`export default ProfilePage;`**: Menandakan bahwa komponen `ProfilePage` adalah komponen default yang dapat digunakan di bagian lain aplikasi.

---

### **Kesimpulan**

- **`ProfilePage`** adalah halaman yang menampilkan informasi profil pengguna yang sudah login, seperti nama dan email pengguna.
- Komponen ini juga menyediakan tombol logout yang memungkinkan pengguna untuk keluar dari aplikasi, yang akan memicu pengalihan ke halaman login.
- Dengan menggunakan `useContext`, komponen ini mengakses informasi pengguna dari `AuthContext`, membuatnya mudah untuk mendapatkan data terkait autentikasi di seluruh aplikasi.
