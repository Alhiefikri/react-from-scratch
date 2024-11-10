# Register Page Component - `RegisterPage`

### **Tujuan Kode**

Komponen `RegisterPage` berfungsi untuk memungkinkan pengguna mendaftar (register) ke aplikasi menggunakan Firebase Authentication. Pengguna akan diminta untuk mengisi nama, email, dan password. Setelah pendaftaran berhasil, nama pengguna akan diperbarui di Firebase, dan pengguna akan diarahkan ke halaman profil.

---

### **Pengertian**

`RegisterPage` adalah halaman registrasi yang memungkinkan pengguna untuk membuat akun baru di aplikasi menggunakan email dan password. Halaman ini juga memungkinkan pengguna untuk memasukkan nama mereka, yang akan disimpan di Firebase sebagai bagian dari profil pengguna. Setelah pendaftaran berhasil, pengguna akan diarahkan ke halaman profil mereka.

---

### **Cara Berpikir Kode**

1. **Menggunakan Context untuk Mendapatkan Form Data**: Komponen ini menggunakan `useContext` untuk mengakses data form pendaftaran (`registerFormData`), serta fungsi-fungsi seperti `registerWithFirebase` untuk melakukan pendaftaran dan `setLoading` untuk mengatur status loading.
2. **Pendaftaran dengan Firebase**: Ketika pengguna mengirimkan formulir pendaftaran, aplikasi akan mencoba untuk membuat akun baru di Firebase menggunakan email dan password. Setelah itu, profil pengguna akan diperbarui dengan nama yang dimasukkan.
3. **Navigasi Setelah Pendaftaran**: Setelah pendaftaran berhasil dan profil pengguna diperbarui, pengguna akan diarahkan ke halaman profil menggunakan `navigate`.

---

### **Analogi Sederhana**

Bayangkan halaman ini seperti **formulir pendaftaran** untuk membuat akun baru di aplikasi. Pengguna mengisi formulir dengan nama, email, dan password mereka. Setelah formulir dikirimkan, aplikasi akan memproses pendaftaran, menambahkan nama pengguna ke profil mereka, dan mengarahkan pengguna ke halaman profil mereka, yang menunjukkan data akun mereka yang baru saja dibuat.

---

### **Penjelasan Masing-Masing Kode Secara Detail**

#### 1. **Import Statements**

```javascript
import { useContext } from "react";
import CommonForm from "../../components/common-form";
import { AuthContext } from "../../context";
import { registerFormControls } from "../../config";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
```

- **`useContext`**: Hook untuk mengakses nilai yang disediakan oleh `AuthContext`, yang berisi status autentikasi pengguna dan fungsi terkait seperti registrasi dan login.
- **`CommonForm`**: Komponen formulir umum yang digunakan untuk membuat elemen form berdasarkan konfigurasi yang diberikan. Formulir ini digunakan untuk input nama, email, dan password.
- **`AuthContext`**: Context yang berisi data terkait autentikasi, termasuk form data pengguna dan fungsi terkait login, registrasi, dll.
- **`registerFormControls`**: Konfigurasi form untuk pendaftaran yang berisi pengaturan input (seperti nama, email, dan password).
- **`updateProfile`**: Fungsi dari Firebase untuk memperbarui profil pengguna setelah registrasi, seperti menambahkan nama pengguna.
- **`useNavigate`**: Hook dari `react-router-dom` untuk memudahkan navigasi ke rute lain setelah pendaftaran berhasil.
- **`auth`**: Konfigurasi Firebase untuk autentikasi pengguna, digunakan untuk mengambil informasi pengguna yang terautentikasi.

#### 2. **Mendapatkan Data dari Context**

```javascript
const {
  registerFormData,
  setRegisterFormData,
  registerWithFirebase,
  setLoading,
} = useContext(AuthContext);
```

- **`registerFormData`**: Menyimpan data formulir pendaftaran yang dimasukkan pengguna (nama, email, password).
- **`setRegisterFormData`**: Fungsi untuk memperbarui data formulir pendaftaran.
- **`registerWithFirebase`**: Fungsi untuk mendaftarkan pengguna baru menggunakan email dan password di Firebase.
- **`setLoading`**: Fungsi untuk mengatur status loading, yang digunakan untuk menampilkan status loading saat pendaftaran sedang diproses.

#### 3. **Fungsi `handleRegisterFormSubmit`**

```javascript
function handleRegisterFormSubmit(event) {
  event.preventDefault();

  registerWithFirebase()
    .then((result) => {
      if (result.user) {
        updateProfile(result.user, {
          displayName: registerFormData.name,
        }).then(() => {
          console.log(
            auth.currentUser.displayName,
            "auth.currentUser.displayName"
          );

          if (auth.currentUser.displayName) {
            setLoading(false);
            navigate("/profile");
          }
        });
      }
    })
    .catch((error) => console.log(error));
}
```

- **`event.preventDefault()`**: Mencegah halaman melakukan reload ketika formulir disubmit.
- **`registerWithFirebase()`**: Memanggil fungsi untuk mendaftarkan pengguna baru di Firebase dengan menggunakan email dan password yang diberikan oleh pengguna.
- **`updateProfile(result.user, { displayName: registerFormData.name })`**: Setelah pendaftaran berhasil, memperbarui profil pengguna dengan nama yang dimasukkan di formulir.
- **Navigasi ke Halaman Profil**: Setelah profil pengguna berhasil diperbarui, aplikasi akan memeriksa apakah `displayName` sudah terisi. Jika sudah, status loading akan disetel ke `false` dan pengguna akan diarahkan ke halaman profil menggunakan `navigate("/profile")`.

#### 4. **Formulir Pendaftaran**

```javascript
<CommonForm
  formControls={registerFormControls}
  formData={registerFormData}
  setFormData={setRegisterFormData}
  onSubmit={handleRegisterFormSubmit}
  buttonText={"Save"}
/>
```

- **`formControls`**: Menyediakan konfigurasi elemen formulir, seperti input nama, email, dan password.
- **`formData`**: Data yang saat ini ada di formulir pendaftaran, seperti nama, email, dan password.
- **`setFormData`**: Fungsi untuk memperbarui data formulir saat pengguna mengisi input.
- **`onSubmit={handleRegisterFormSubmit}`**: Mengatur fungsi yang akan dipanggil saat formulir disubmit.
- **`buttonText={"Save"}`**: Teks yang ditampilkan di tombol submit.

#### 5. **Struktur HTML dan Styling**

```javascript
<div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
  <div className="px-6 py-5">
    <h3>Welcome Back </h3>
    <p>Register Page</p>
    <CommonForm
      formControls={registerFormControls}
      formData={registerFormData}
      setFormData={setRegisterFormData}
      onSubmit={handleRegisterFormSubmit}
      buttonText={"Save"}
    />
  </div>
</div>
```

- **`<h3>` dan `<p>`**: Menampilkan judul dan keterangan halaman untuk memberi tahu pengguna bahwa ini adalah halaman pendaftaran.
- **`<CommonForm>`**: Merender formulir pendaftaran yang memungkinkan pengguna untuk mengisi data pendaftaran mereka.

#### 6. **Export Statement**

```javascript
export default RegisterPage;
```

- **`export default RegisterPage;`**: Menandakan bahwa `RegisterPage` adalah komponen default yang dapat digunakan di bagian lain aplikasi.

---

### **Kesimpulan**

- **`RegisterPage`** adalah halaman yang memungkinkan pengguna untuk mendaftar di aplikasi menggunakan email dan password.
- Setelah pendaftaran berhasil, nama pengguna diperbarui di Firebase dan pengguna diarahkan ke halaman profil mereka.
- Komponen ini menggunakan Firebase Authentication untuk menangani proses pendaftaran dan pembaruan profil pengguna.
- Menggunakan `CommonForm` untuk membuat formulir pendaftaran dan `useNavigate` untuk mengarahkan pengguna setelah pendaftaran berhasil.
