# Form Component Documentation

Dokumentasi ini menjelaskan komponen Form dasar dengan implementasi controlled form di React.

## Daftar Isi

- [Struktur Komponen](#struktur-komponen)
- [Dependencies](#dependencies)
- [State Management](#state-management)
- [Event Handlers](#event-handlers)
- [Bug Fixes & Improvements](#bug-fixes--improvements)
- [Penggunaan](#penggunaan)

## Struktur Komponen

```jsx
// Struktur dasar FormComponent
FormComponent
└── Form
    ├── Name Input
    ├── Email Input
    └── Submit Button
```

## Dependencies

```javascript
import { useState } from "react";
```

- **useState**: Hook React untuk mengelola state form

## State Management

### State Hooks

```javascript
const [nameValue, setNameValue] = useState(""); // Tidak digunakan saat ini
const [emailValue, setEmailValue] = useState(""); // Tidak digunakan saat ini
const [formData, setFormData] = useState({
  name: "",
  email: "",
});
```

**Catatan**: `nameValue` dan `emailValue` state tidak digunakan dalam implementasi saat ini dan bisa dihapus.

## Event Handlers

### handleOnChange

```javascript
function handleOnChange(event) {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value,
  });
}
```

Function ini:

1. Mengambil `name` dan `value` dari event target
2. Mengupdate formData dengan menjaga nilai field lain tetap ada

### handleSubmit

```javascript
function handleSubmit(event) {
  event.preventDefault(); // Perbaiki typo 'preventvDefault'
  console.log(nameValue, emailValue, "nameValue"); // Perlu diupdate ke formData
}
```

## Bug Fixes & Improvements

### 1. Typo dalam preventDefault

```javascript
// Sebelum
event.preventvDefault();

// Setelah
event.preventDefault();
```

### 2. Email Input onChange Handler

```javascript
// Sebelum - Bug dalam key object
onChange={(e) =>
  setFormData({
    ...formData,
    [e.target.email]: e.target.value,  // Salah
  })
}

// Setelah - Perbaikan
onChange={(e) =>
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,  // Benar
  })
}
```

### 3. Konsistensi Event Handler

Saat ini ada dua cara menangani onChange:

1. Inline function dalam input
2. handleOnChange function (dikomentari)

Lebih baik menggunakan satu pendekatan, contoh perbaikan:

```javascript
function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleOnChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData, "formData");
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.name}
          name="name"
          id="name"
          placeholder="Enter your name"
          onChange={handleOnChange}
        />
        <input
          value={formData.email}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleOnChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```

## Penggunaan

```jsx
import FormComponent from "./path/to/FormComponent";

function App() {
  return (
    <div>
      <FormComponent />
    </div>
  );
}
```

## Alur Kerja Komponen

1. Saat komponen dimount, state diinisialisasi dengan nilai kosong
2. User mengisi input fields:
   - Setiap perubahan mengupdate formData melalui handleOnChange
   - State selalu mencerminkan nilai terkini dari form
3. Saat form di-submit:
   - Default submission dicegah
   - Data form bisa diproses (saat ini hanya console.log)

## Rekomendasi Pengembangan

1. **Validasi**:

   - Tambahkan validasi email
   - Tambahkan validasi required fields
   - Tampilkan pesan error

2. **UX Improvements**:

   - Tambahkan labels untuk accessibility
   - Tambahkan styling
   - Tambahkan feedback saat submit

3. **Form Handling**:

   - Implementasikan form reset setelah submit
   - Tambahkan loading state
   - Tambahkan error handling

4. **State Management**:

   - Hapus state yang tidak digunakan (nameValue, emailValue)
   - Pertimbangkan menggunakan form library seperti Formik atau React Hook Form untuk form yang lebih kompleks

5. **Accessibility**:
   - Tambahkan aria-labels
   - Tambahkan proper form validation
   - Implementasikan keyboard navigation
