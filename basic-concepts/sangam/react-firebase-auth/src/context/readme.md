# React Firebase Authentication - `AuthState`

### **Tujuan Kode**

Komponen `AuthState` mengelola status autentikasi pengguna dalam aplikasi, menggunakan Firebase untuk login dan registrasi. Komponen ini menyediakan konteks autentikasi untuk aplikasi dan menyimpan data pengguna yang sedang aktif.

---

### **Pengertian**

`AuthState` adalah komponen yang menyediakan fungsionalitas autentikasi dalam aplikasi menggunakan Firebase Authentication. Ini mencakup:

- Registrasi pengguna baru dengan email dan password.
- Login pengguna menggunakan email dan password.
- Pemantauan status autentikasi pengguna dan penyimpanan data pengguna yang sedang login.
- Menyediakan status loading saat memproses login atau registrasi.
- Mengelola logout dan pengalihan pengguna ke halaman profil setelah login.

---

### **Cara Berpikir Kode**

1. **State Management**: Menggunakan React `useState` untuk menyimpan data formulir login dan registrasi, status loading, dan data pengguna yang sedang aktif.
2. **Firebase Authentication**: Menggunakan API Firebase untuk registrasi (`createUserWithEmailAndPassword`), login (`signInWithEmailAndPassword`), dan pemantauan status pengguna (`onAuthStateChanged`).
3. **Navigasi**: Menggunakan React Router `useNavigate` untuk mengalihkan pengguna ke halaman yang sesuai (misalnya, halaman profil setelah login).
4. **Konteks Global**: `AuthContext` digunakan untuk menyediakan state autentikasi ke seluruh aplikasi, sehingga komponen lain dapat mengaksesnya tanpa perlu mengulang logika autentikasi.

---

### **Analogi Sederhana**

Bayangkan aplikasi ini seperti sebuah sistem login di sebuah situs:

- **Registrasi** adalah pendaftaran pengguna baru di sistem dengan mengisi nama, email, dan password.
- **Login** adalah proses masuk ke akun menggunakan email dan password yang sudah didaftarkan.
- **Autentikasi** adalah proses memeriksa apakah pengguna sudah terdaftar dan memastikan mereka bisa mengakses halaman tertentu (seperti halaman profil) setelah login.

`AuthState` bertindak sebagai "pencatat" yang mengelola siapa yang sudah login dan siapa yang belum, serta mengarahkan mereka ke tempat yang tepat dalam aplikasi.

---

### **Penjelasan Masing-Masing Kode Secara Detail**

#### 1. **Import Statement**

```javascript
import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
```

- **`useState`**: Hook untuk mengelola state lokal seperti data formulir (login dan registrasi), data pengguna (`user`), dan status loading.
- **`createContext`**: Membuat konteks global untuk autentikasi, sehingga nilai autentikasi bisa diakses oleh komponen lain tanpa harus melewatkan props secara manual.
- **`createUserWithEmailAndPassword`** dan **`signInWithEmailAndPassword`**: Fungsi dari Firebase Authentication untuk registrasi dan login dengan email/password.
- **`onAuthStateChanged`**: Fungsi Firebase untuk memantau status autentikasi pengguna (apakah pengguna sudah login atau belum).
- **`auth`**: Objek konfigurasi Firebase yang sudah diinisialisasi di `firebaseConfig.js` untuk mengakses layanan autentikasi.
- **`useNavigate`**: Hook dari React Router untuk melakukan navigasi antar halaman programmatically.

#### 2. **State Management**

```javascript
const [registerFormData, setRegisterFormData] = useState({
  name: "",
  email: "",
  password: "",
});
const [loginFormData, setLoginFormData] = useState({
  email: "",
  password: "",
});
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
```

- **`registerFormData`**: Menyimpan data formulir untuk registrasi, termasuk nama, email, dan password.
- **`loginFormData`**: Menyimpan data formulir login, hanya email dan password.
- **`user`**: Menyimpan informasi pengguna yang sedang login. Nilai awalnya adalah `null`, yang akan berubah setelah pengguna berhasil login.
- **`loading`**: Menyimpan status apakah aplikasi sedang dalam proses login/registrasi. Ini akan digunakan untuk menampilkan pesan loading.

#### 3. **Fungsi Registrasi dan Login**

```javascript
function registerWithFirebase() {
  setLoading(true);
  const { email, password } = registerFormData;

  return createUserWithEmailAndPassword(auth, email, password);
}

function loginWithFirebase() {
  setLoading(true);
  const { email, password } = loginFormData;

  return signInWithEmailAndPassword(auth, email, password);
}
```

- **`registerWithFirebase`**: Fungsi ini memanggil `createUserWithEmailAndPassword` dari Firebase untuk mendaftarkan pengguna baru menggunakan email dan password.
- **`loginWithFirebase`**: Fungsi ini memanggil `signInWithEmailAndPassword` dari Firebase untuk login pengguna yang sudah terdaftar.

#### 4. **Fungsi Logout**

```javascript
function handleLogout() {
  return auth.signOut(auth);
}
```

- **`handleLogout`**: Fungsi ini memanggil `signOut` dari Firebase untuk melakukan logout pengguna yang sedang aktif.

#### 5. **Pemantauan Status Autentikasi Pengguna**

```javascript
useEffect(() => {
  const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });

  return () => {
    checkAuthState();
  };
}, []);
```

- **`useEffect`** ini memantau status autentikasi pengguna menggunakan `onAuthStateChanged`.
  - Jika ada pengguna yang sedang login (`currentUser`), maka data pengguna akan disimpan di state `user` dan status `loading` diubah menjadi `false`.
  - Jika tidak ada pengguna yang login, `user` tetap `null`.

#### 6. **Navigasi Setelah Login**

```javascript
useEffect(() => {
  if (user) navigate("/profile");
}, [user]);
```

- **`useEffect`** ini akan dijalankan setiap kali `user` berubah. Jika ada pengguna yang berhasil login (`user` tidak `null`), maka pengguna akan diarahkan ke halaman `/profile` menggunakan `navigate`.

#### 7. **Loading Screen**

```javascript
if (loading) return <h1>Loading! Please wait</h1>;
```

- Jika aplikasi sedang memuat data (misalnya, menunggu login atau registrasi selesai), akan menampilkan pesan "Loading! Please wait".

#### 8. **AuthContext.Provider**

```javascript
<AuthContext.Provider value={{...}}>
  {children}
</AuthContext.Provider>
```

- **`AuthContext.Provider`**: Menyediakan nilai-nilai autentikasi (seperti data formulir, status loading, data pengguna, dll) ke seluruh aplikasi agar bisa diakses oleh komponen lain.
- **`children`**: Komponen-komponen yang dibungkus oleh `AuthState` akan menerima nilai yang diberikan melalui konteks.

---

### **Kesimpulan**

- `AuthState` adalah komponen yang mengelola status autentikasi di aplikasi menggunakan Firebase Authentication.
- Komponen ini menyediakan fitur registrasi, login, logout, dan pemantauan status autentikasi pengguna.
- Data autentikasi disediakan melalui **React Context** (`AuthContext`), sehingga komponen lain dapat mengaksesnya tanpa harus melakukan prop-drilling.
- Status loading ditangani dengan menggunakan state `loading`, dan pengguna akan dialihkan ke halaman profil setelah berhasil login.
