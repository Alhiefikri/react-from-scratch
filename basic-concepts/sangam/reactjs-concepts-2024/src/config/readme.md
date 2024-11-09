# Form Elements Documentation

Dokumentasi ini menjelaskan struktur dan penggunaan form elements untuk halaman Login dan Register.

## Daftar Isi

- [Struktur Data](#struktur-data)
- [Login Form Elements](#login-form-elements)
- [Register Form Elements](#register-form-elements)
- [Penggunaan](#penggunaan)
- [Penjelasan Properties](#penjelasan-properties)

## Struktur Data

Setiap form element memiliki struktur data yang konsisten dengan properties berikut:

```typescript
interface FormElement {
  name: string; // Nama field untuk identifikasi
  id: string; // ID unik untuk element
  placeholder: string; // Text placeholder dalam input
  label: string; // Label yang ditampilkan
  componentType: string; // Tipe komponen (saat ini hanya "input")
  type: string; // Tipe input HTML (text/email/password)
}
```

## Login Form Elements

`loginFormElements` adalah array yang berisi 2 input field untuk proses login:

1. Email Field

   - name: "email"
   - type: "email"
   - Digunakan untuk memasukkan alamat email pengguna

2. Password Field
   - name: "password"
   - type: "password"
   - Digunakan untuk memasukkan password pengguna

## Register Form Elements

`RegisterFormElements` adalah array yang berisi 3 input field untuk proses registrasi:

1. Name Field

   - name: "name"
   - type: "text"
   - Digunakan untuk memasukkan nama pengguna

2. Email Field

   - name: "email"
   - type: "email"
   - Digunakan untuk memasukkan alamat email pengguna

3. Password Field
   - name: "password"
   - type: "password"
   - Digunakan untuk memasukkan password pengguna

## Penggunaan

```jsx
import {
  loginFormElements,
  RegisterFormElements,
} from "./path/to/formElements";

// Contoh penggunaan untuk Login Form
function LoginForm() {
  return (
    <form>
      {loginFormElements.map((element) => (
        <div key={element.id}>
          <label htmlFor={element.id}>{element.label}</label>
          <input
            type={element.type}
            id={element.id}
            name={element.name}
            placeholder={element.placeholder}
          />
        </div>
      ))}
    </form>
  );
}

// Contoh penggunaan untuk Register Form
function RegisterForm() {
  return (
    <form>
      {RegisterFormElements.map((element) => (
        <div key={element.id}>
          <label htmlFor={element.id}>{element.label}</label>
          <input
            type={element.type}
            id={element.id}
            name={element.name}
            placeholder={element.placeholder}
          />
        </div>
      ))}
    </form>
  );
}
```

## Penjelasan Properties

Setiap form element memiliki properties berikut:

- **name**: Digunakan sebagai identifier saat handling form data
- **id**: Digunakan untuk menghubungkan label dengan input (htmlFor/id)
- **placeholder**: Text yang muncul di dalam input field sebagai petunjuk
- **label**: Text yang ditampilkan di atas input field
- **componentType**: Menentukan jenis komponen yang akan di-render
- **type**: Menentukan tipe input HTML (mempengaruhi validasi dan tampilan)

### Catatan Penting

1. Pastikan `name` sesuai dengan field yang akan diproses di backend
2. Gunakan `id` yang unik untuk setiap element
3. `componentType` saat ini hanya mendukung "input", bisa dikembangkan untuk tipe komponen lain
4. Validasi tambahan bisa ditambahkan sesuai kebutuhan
