# Login Component Documentation

Dokumentasi ini menjelaskan komponen Login yang digunakan untuk halaman login pengguna.

## Daftar Isi

- [Struktur Komponen](#struktur-komponen)
- [Dependencies](#dependencies)
- [State Management](#state-management)
- [Props & Form Data](#props--form-data)
- [Event Handlers](#event-handlers)
- [Penggunaan](#penggunaan)

## Struktur Komponen

```jsx
// Struktur dasar LoginComponent
LoginComponent
└── CommonForm
    ├── FormControls (dari loginFormElements)
    ├── Form Data & State
    └── Submit Handler
```

## Dependencies

```javascript
import { useState } from "react";
import { loginFormElements } from "../../config";
import CommonForm from "../common-form";
```

- **useState**: Hook React untuk mengelola state form
- **loginFormElements**: Array konfigurasi form dari config
- **CommonForm**: Komponen form yang dapat digunakan kembali

## State Management

### Initial State

```javascript
const initialFormData = {
  email: "",
  password: "",
};
```

### State Hook

```javascript
const [loginFormData, setLoginFormData] = useState(initialFormData);
```

- **loginFormData**: Object yang menyimpan nilai form login saat ini
- **setLoginFormData**: Function untuk mengupdate state form

## Props & Form Data

CommonForm menerima beberapa props:

```javascript
<CommonForm
  formData={loginFormData}
  setFormData={setLoginFormData}
  formControls={loginFormElements}
  buttonText={"Login"}
  onHandleSubmit={onHandleSubmit}
/>
```

- **formData**: Object yang berisi nilai form saat ini
- **setFormData**: Function untuk mengupdate form data
- **formControls**: Array yang berisi konfigurasi form elements
- **buttonText**: Text yang ditampilkan pada tombol submit ("Login")
- **onHandleSubmit**: Function yang dijalankan saat form di-submit

## Event Handlers

### onHandleSubmit

```javascript
function onHandleSubmit(event) {
  event.preventDefault();
  console.log(loginFormData, "loginFormData");
  setLoginFormData(initialFormData);
}
```

Function ini:

1. Mencegah default form submission behavior
2. Meng-log data login form ke console dengan label "loginFormData"
3. Me-reset form ke nilai awal setelah submit

## Penggunaan

```jsx
// Contoh penggunaan dalam aplikasi
import LoginComponent from "./path/to/LoginComponent";

function App() {
  return (
    <div>
      <LoginComponent />
    </div>
  );
}
```

## Alur Kerja Komponen

1. Saat komponen dimount, state diinisialisasi dengan `initialFormData`
2. CommonForm me-render input fields berdasarkan `loginFormElements`
3. Setiap perubahan pada input field akan mengupdate `loginFormData` melalui `setFormData`
4. Saat form di-submit:
   - Default form submission dicegah
   - Data form di-log ke console dengan label
   - Form di-reset ke nilai awal

## Perbandingan dengan RegisterComponent

LoginComponent memiliki struktur yang mirip dengan RegisterComponent, dengan perbedaan utama:

1. Menggunakan `loginFormElements` (hanya email dan password)
2. State initial hanya memiliki field email dan password
3. Label button adalah "Login"

## Catatan Penting

1. **State Management**:

   - Gunakan `loginFormData` untuk mengakses nilai form saat ini
   - Gunakan `setLoginFormData` untuk mengupdate nilai form
   - Form akan di-reset setelah submission

2. **Form Submission**:

   - Saat ini hanya melakukan console.log
   - Implementasikan logic autentikasi sesuai kebutuhan

3. **Security**:

   - Pastikan menerapkan praktik keamanan yang baik
   - Pertimbangkan implementasi HTTPS
   - Hindari menyimpan password di client-side

4. **Pengembangan Selanjutnya**:

   - Tambahkan validasi form
   - Integrasikan dengan authentication API
   - Tambahkan error handling
   - Implementasikan remember me feature
   - Tambahkan forgot password functionality
   - Tambahkan loading state saat proses login
   - Implementasikan session management

5. **User Experience**:
   - Tambahkan feedback visual saat submit
   - Tampilkan pesan error yang informatif
   - Pertimbangkan implementasi auto-focus pada email field
   - Tambahkan opsi "Show Password"
