Saya akan membuat dokumentasi untuk komponen ReactHookFormExamplePage yang mengimplementasikan React Hook Form.

# Dokumentasi ReactHookFormExamplePage - Implementasi React Hook Form

## Penjelasan Impor

```javascript
import { useForm } from "react-hook-form";
```

- `useForm`: Hook utama dari React Hook Form untuk manajemen form

## Struktur Komponen

### 1. Setup Form Hook

```javascript
const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
} = useForm();
```

#### Destructured Features:

- `register`: Untuk mendaftarkan input fields
- `handleSubmit`: Untuk menangani submit form
- `errors`: Untuk menangani error validasi
- `reset`: Untuk mereset form

### 2. Submit Handler

```javascript
function onSubmitForm(FormData) {
  console.log(FormData);
  reset();
}
```

- Menangani data form saat submit
- Me-reset form setelah submit berhasil

### 3. Form Structure

```javascript
<form onSubmit={handleSubmit(onSubmitForm)}>{/* Form fields */}</form>
```

## Implementasi Form Fields

### 1. Email Field

```javascript
<div>
  <label htmlFor="email">Email</label>
  <input {...register("email", { required: true })} type="email" name="email" />
  {errors.email && errors.email.type === "required" ? (
    <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>
      Email is required
    </p>
  ) : null}
</div>
```

#### Validasi:

- Required field
- Email format (HTML5 validation)
- Error message untuk field kosong

### 2. Password Field

```javascript
<div>
  <label htmlFor="password">Password</label>
  <input
    {...register("password", { required: true, minLength: 8 })}
    type="password"
    name="password"
  />
  {errors.password && errors.password.type === "required" ? (
    <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>
      Password is required
    </p>
  ) : null}
  {errors.password && errors.password.type === "minLength" ? (
    <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>
      Password must be at least 8 characters
    </p>
  ) : null}
</div>
```

#### Validasi:

- Required field
- Minimum length: 8 karakter
- Error messages untuk:
  - Field kosong
  - Panjang minimum tidak terpenuhi

## Fitur React Hook Form yang Diimplementasikan

### 1. Field Registration

```javascript
{...register("fieldName", { validation })}
```

- Mendaftarkan field ke form
- Menerapkan aturan validasi

### 2. Validation Rules

- Required fields
- Minimum length
- Email format

### 3. Error Handling

- Error messages yang spesifik
- Styling untuk error messages

### 4. Form Reset

- Automatic form clearing setelah submit

## Rekomendasi Pengembangan

### 1. Yup Schema Validation

```javascript
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const { register, handleSubmit } = useForm({
  resolver: yupResolver(schema),
});
```

### 2. Custom Error Messages

```javascript
register("password", {
  required: "Password is required",
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters",
  },
});
```

### 3. Loading State

```javascript
const { isSubmitting } = formState;

<button type="submit" disabled={isSubmitting}>
  {isSubmitting ? "Submitting..." : "Submit"}
</button>;
```

### 4. Form Styling

```javascript
const formStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  error: {
    color: "red",
    fontSize: "0.875rem",
    marginTop: "0.25rem",
  },
};
```

## Best Practices

### 1. Validation Rules

```javascript
const validationRules = {
  email: {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
  password: {
    required: true,
    minLength: 8,
    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  },
};
```

### 2. Error Handling

```javascript
const ErrorMessage = ({ error }) => (
  <p className="error-message">{error?.message}</p>
);
```

### 3. Form Organization

```javascript
const FormField = ({ label, name, type, register, error }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input {...register(name)} type={type} />
    {error && <ErrorMessage error={error} />}
  </div>
);
```

## Tips Penggunaan

1. Gunakan proper validation rules
2. Implementasikan error handling yang baik
3. Berikan feedback visual yang jelas
4. Manfaatkan fitur reset form
5. Pertimbangkan accessibility

## Debugging

1. Monitor form state dengan watch()
2. Gunakan React Hook Form DevTools
3. Log validation errors
4. Test form submission
