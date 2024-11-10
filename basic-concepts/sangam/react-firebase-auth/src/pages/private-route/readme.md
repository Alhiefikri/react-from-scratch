# Private Route Component - `AuthPage`

### **Tujuan Kode**

Komponen `AuthPage` adalah komponen pengaman yang digunakan untuk membatasi akses ke halaman tertentu dalam aplikasi. Hanya pengguna yang sudah terautentikasi (login) yang dapat mengakses konten yang dibungkus dalam `AuthPage`. Jika pengguna belum login, mereka akan diarahkan kembali ke halaman login (`/login`). Jika aplikasi masih dalam proses loading, sebuah pesan loading akan ditampilkan.

---

### **Pengertian**

`AuthPage` adalah komponen yang berfungsi untuk memastikan bahwa hanya pengguna yang telah login yang dapat mengakses halaman yang dibungkus di dalamnya. Jika pengguna belum login atau status autentikasi masih dalam proses (loading), pengguna akan dialihkan ke halaman login. Komponen ini menggunakan `AuthContext` untuk memeriksa status autentikasi pengguna dan memutuskan apakah konten yang dibungkus akan ditampilkan atau pengguna akan diarahkan ke halaman login.

---

### **Cara Berpikir Kode**

1. **Menggunakan Context untuk Mendapatkan Status Autentikasi**: Komponen ini menggunakan `useContext` untuk mengakses informasi status autentikasi pengguna (apakah pengguna sudah login atau belum) dan status loading.
2. **Menunggu Status Loading**: Selama status autentikasi masih dalam proses (loading), komponen akan menampilkan pesan "Loading! Please wait".
3. **Pengalihan Berdasarkan Status Pengguna**: Jika pengguna sudah terautentikasi (`user`), maka konten anak (children) akan dirender. Jika tidak, pengguna akan diarahkan ke halaman login dengan menggunakan `Navigate` dari `react-router-dom`.

---

### **Analogi Sederhana**

Bayangkan komponen ini seperti **penjaga gerbang** yang hanya mengizinkan orang-orang yang sudah memiliki kartu ID (login) untuk masuk. Jika seseorang belum menunjukkan ID-nya, penjaga akan mengarahkannya ke kantor pendaftaran (halaman login). Jika ID sudah valid, penjaga akan membiarkan orang tersebut masuk ke dalam (menampilkan halaman yang dibungkus).

---

### **Penjelasan Masing-Masing Kode Secara Detail**

#### 1. **Import Statements**

```javascript
import { useContext } from "react";
import { AuthContext } from "../../context";
import { Navigate } from "react-router-dom";
```

- **`useContext`**: Hook ini digunakan untuk mengakses nilai yang disediakan oleh `AuthContext`, yang berisi status autentikasi pengguna (seperti data pengguna dan status loading).
- **`AuthContext`**: Context yang menyimpan status autentikasi pengguna dan menyediakan fungsi terkait autentikasi seperti login dan logout.
- **`Navigate`**: Komponen dari `react-router-dom` yang digunakan untuk mengarahkan pengguna ke rute lain (misalnya, halaman login jika pengguna belum login).

#### 2. **Mendapatkan Data dari Context**

```javascript
const { loading, user } = useContext(AuthContext);
```

- **`loading`**: Menunjukkan apakah status autentikasi sedang diproses. Biasanya, ini bernilai `true` selama proses pengecekan status login pengguna, dan `false` setelah autentikasi selesai.
- **`user`**: Berisi data pengguna yang sedang login. Jika pengguna sudah login, maka objek `user` akan ada (berisi data pengguna), dan jika tidak, `user` akan bernilai `null` atau `undefined`.

#### 3. **Cek Status Loading**

```javascript
if (loading) return <h1>Loading! Please wait</h1>;
```

- Jika status autentikasi masih dalam proses (loading), komponen akan menampilkan pesan loading kepada pengguna, meminta mereka untuk menunggu sampai status autentikasi selesai.

#### 4. **Menampilkan Konten Anak Jika Pengguna Terautentikasi**

```javascript
if (user) return children;
```

- Jika `user` ada (pengguna sudah login), maka komponen akan merender `children`, yaitu konten yang dibungkus oleh komponen `AuthPage`. Ini berarti halaman yang dibungkus dengan `AuthPage` hanya bisa diakses oleh pengguna yang sudah login.

#### 5. **Pengalihan ke Halaman Login Jika Pengguna Tidak Terautentikasi**

```javascript
return <Navigate to="/login" />;
```

- Jika `user` tidak ada (pengguna belum login), maka komponen `AuthPage` akan mengalihkan pengguna ke halaman login menggunakan `Navigate`. Ini memastikan bahwa hanya pengguna yang sudah terautentikasi yang bisa mengakses halaman tersebut.

#### 6. **Export Statement**

```javascript
export default AuthPage;
```

- **`export default AuthPage;`**: Menandakan bahwa komponen `AuthPage` adalah komponen default yang dapat digunakan di bagian lain aplikasi.

---

### **Kesimpulan**

- **`AuthPage`** adalah komponen untuk mengamankan halaman tertentu, memastikan hanya pengguna yang sudah login yang bisa mengakses konten di dalamnya.
- Komponen ini menggunakan **`useContext`** untuk memeriksa status autentikasi pengguna, menampilkan pesan loading selama proses autentikasi, dan mengarahkan pengguna ke halaman login jika mereka belum login.
- **Penggunaan `Navigate`** memungkinkan pengalihan otomatis ke halaman login bagi pengguna yang tidak terautentikasi.
