# Register Component Documentation

Dokumentasi ini menjelaskan komponen Register yang digunakan untuk halaman pendaftaran pengguna.

## Daftar Isi

- [Struktur Komponen](#struktur-komponen)
- [Dependencies](#dependencies)
- [State Management](#state-management)
- [Props & Form Data](#props--form-data)
- [Event Handlers](#event-handlers)
- [Penggunaan](#penggunaan)

## Struktur Komponen

```jsx
// Struktur dasar RegisterComponent
RegisterComponent
└── CommonForm
    ├── FormControls (dari RegisterFormElements)
    ├── Form Data & State
    └── Submit Handler
```

## Dependencies

```javascript
import { useState } from "react";
import { RegisterFormElements } from "../../config";
import CommonForm from "../common-form";
```

- **useState**: Hook React untuk mengelola state
- **RegisterFormElements**: Array konfigurasi form dari config
- **CommonForm**: Komponen form yang dapat digunakan kembali

## State Management

### Initial State

```javascript
const initialRegisterFormData = {
  name: "",
  email: "",
  password: "",
};
```

### State Hook

```javascript
const [registerFormData, setRegisterFormData] = useState(
  initialRegisterFormData
);
```

- **registerFormData**: Object yang menyimpan nilai form saat ini
- **setRegisterFormData**: Function untuk mengupdate state form

## Props & Form Data

CommonForm menerima beberapa props:

```javascript
<CommonForm
  formControls={RegisterFormElements}
  formData={registerFormData}
  setFormData={setRegisterFormData}
  buttonText={"Register"}
  onHandleSubmit={handleRegisterOnSubmit}
/>
```

- **formControls**: Array yang berisi konfigurasi form elements
- **formData**: Object yang berisi nilai form saat ini
- **setFormData**: Function untuk mengupdate form data
- **buttonText**: Text yang ditampilkan pada tombol submit
- **onHandleSubmit**: Function yang dijalankan saat form di-submit

## Event Handlers

### handleRegisterOnSubmit

```javascript
function handleRegisterOnSubmit(event) {
  event.preventDefault();
  console.log(registerFormData);
  setRegisterFormData(initialRegisterFormData);
}
```

Function ini:

1. Mencegah default form submission behavior
2. Meng-log data form ke console
3. Me-reset form ke nilai awal setelah submit

## Penggunaan

```jsx
// Contoh penggunaan dalam aplikasi
import RegisterComponent from "./path/to/RegisterComponent";

function App() {
  return (
    <div>
      <RegisterComponent />
    </div>
  );
}
```

## Alur Kerja Komponen

1. Saat komponen dimount, state diinisialisasi dengan `initialRegisterFormData`
2. CommonForm me-render input fields berdasarkan `RegisterFormElements`
3. Setiap perubahan pada input field akan mengupdate `registerFormData` melalui `setFormData`
4. Saat form di-submit:
   - Default form submission dicegah
   - Data form di-log ke console
   - Form di-reset ke nilai awal

## Catatan Penting

1. **State Management**:

   - Gunakan `registerFormData` untuk mengakses nilai form saat ini
   - Gunakan `setRegisterFormData` untuk mengupdate nilai form
   - Form akan di-reset setelah submission

2. **Form Submission**:

   - Saat ini hanya melakukan console.log
   - Tambahkan logika API call atau validasi sesuai kebutuhan

3. **Komponen CommonForm**:

   - Komponen yang dapat digunakan kembali
   - Menerima konfigurasi melalui props
   - Menangani input changes dan form submission

4. **Pengembangan Selanjutnya**:
   - Tambahkan validasi form
   - Integrasikan dengan API
   - Tambahkan error handling
   - Tambahkan loading state
