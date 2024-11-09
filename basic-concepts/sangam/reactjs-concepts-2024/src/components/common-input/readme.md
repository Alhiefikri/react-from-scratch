# Common Input Component Documentation

Dokumentasi ini menjelaskan komponen CommonInput yang merupakan komponen input yang dapat digunakan kembali (reusable) dengan label.

## Daftar Isi

- [Struktur Komponen](#struktur-komponen)
- [Props](#props)
- [Bug Fixes](#bug-fixes)
- [Penggunaan](#penggunaan)
- [Best Practices](#best-practices)

## Struktur Komponen

```jsx
// Struktur dasar CommonInput
CommonInput
├── Label
└── Input Field
```

## Props

```typescript
interface CommonInputProps {
  label: string; // Label text untuk input
  onChange: Function; // Handler function untuk perubahan nilai
  type?: string; // Tipe input (default: "text")
  name: string; // Nama input untuk form handling
  id: string; // ID unik untuk input
  value: string; // Nilai input
  placeholder?: string; // Placeholder text (default: "Enter value here")
}
```

### Detail Props

1. **label**

   - Type: string
   - Required: Ya
   - Kegunaan: Menampilkan label untuk input field
   - Terhubung dengan input melalui htmlFor

2. **onChange**

   - Type: Function
   - Required: Ya
   - Kegunaan: Menangani perubahan nilai input
   - Menerima event sebagai parameter

3. **type**

   - Type: string
   - Required: Tidak
   - Default: "text"
   - Possible values: "text", "email", "password", "number", dll

4. **name**

   - Type: string
   - Required: Ya
   - Kegunaan: Mengidentifikasi input dalam form

5. **id**

   - Type: string
   - Required: Ya
   - Kegunaan: Menghubungkan label dengan input
   - Harus unik dalam halaman

6. **value**

   - Type: string
   - Required: Ya
   - Kegunaan: Nilai controlled input

7. **placeholder**
   - Type: string
   - Required: Tidak
   - Default: "Enter value here"
   - Kegunaan: Text petunjuk dalam input kosong

## Bug Fixes

```javascript
// Sebelum - Bug dalam nama prop
onChange = { onChange1 };

// Setelah - Perbaikan
onChange = { onChange };
```

## Penggunaan

### Basic Usage

```jsx
import CommonInput from "./path/to/CommonInput";

function MyForm() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <CommonInput
      label="Username"
      name="username"
      id="username"
      value={value}
      onChange={handleChange}
      placeholder="Enter your username"
    />
  );
}
```

### Different Input Types

```jsx
// Email Input
<CommonInput
  label="Email Address"
  type="email"
  name="email"
  id="email"
  value={email}
  onChange={handleEmailChange}
  placeholder="Enter your email"
/>

// Password Input
<CommonInput
  label="Password"
  type="password"
  name="password"
  id="password"
  value={password}
  onChange={handlePasswordChange}
  placeholder="Enter your password"
/>
```

## Komponen yang Ditingkatkan

Berikut versi yang ditingkatkan dari komponen dengan tambahan fitur:

```jsx
function CommonInput({
  label,
  onChange,
  type = "text",
  name,
  id,
  value,
  placeholder = "Enter value here",
  required = false,
  error,
  className = "",
}) {
  return (
    <div className={`input-wrapper ${className}`}>
      <label htmlFor={name} className="input-label">
        {label}
        {required && <span className="required-mark">*</span>}
      </label>
      <input
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`input-field ${error ? "input-error" : ""}`}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <span id={`${id}-error`} className="error-message">
          {error}
        </span>
      )}
    </div>
  );
}
```

## Best Practices

1. **Accessibility**:

   - Selalu gunakan label dengan htmlFor yang sesuai
   - Tambahkan aria-labels jika diperlukan
   - Pertimbangkan menambahkan aria-describedby untuk error messages

2. **Validasi**:

   - Tambahkan prop required
   - Tambahkan prop untuk error message
   - Implementasikan proper error handling

3. **Styling**:

   - Tambahkan className prop untuk kustomisasi
   - Gunakan CSS modules atau styled-components
   - Implementasikan proper error states

4. **Performance**:

   - Gunakan React.memo jika perlu
   - Pastikan onChange handler di-memoize dengan useCallback

5. **Type Safety**:
   - Tambahkan PropTypes atau TypeScript
   - Validasi props yang required

## Rekomendasi Pengembangan

1. **Tambahan Props**:

   ```typescript
   interface ExtendedCommonInputProps {
     required?: boolean;
     error?: string;
     disabled?: boolean;
     className?: string;
     onBlur?: Function;
     onFocus?: Function;
     maxLength?: number;
     minLength?: number;
     pattern?: string;
   }
   ```

2. **Error Handling**:

   - Tambahkan visual feedback untuk error states
   - Implementasikan inline validation
   - Tambahkan helper text

3. **Styling Enhancement**:

   - Tambahkan focus states
   - Tambahkan disabled states
   - Tambahkan hover states
   - Implementasikan proper transitions

4. **Accessibility Enhancement**:
   - Tambahkan keyboard navigation
   - Implementasikan ARIA attributes
   - Tambahkan proper focus management
