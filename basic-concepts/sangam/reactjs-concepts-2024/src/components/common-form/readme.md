# Common Form Component Documentation

Dokumentasi ini menjelaskan komponen CommonForm yang merupakan komponen form yang dapat digunakan kembali (reusable) dan dinamis.

## Daftar Isi

- [Overview](#overview)
- [Constants](#constants)
- [Props](#props)
- [Component Logic](#component-logic)
- [Penggunaan](#penggunaan)
- [Rekomendasi Pengembangan](#rekomendasi-pengembangan)

## Overview

CommonForm adalah komponen form dinamis yang dapat me-render berbagai jenis input berdasarkan konfigurasi. Saat ini mendukung input fields dan dapat diperluas untuk select dan textarea.

## Constants

```javascript
const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};
```

Konstanta ini mendefinisikan tipe-tipe form element yang didukung.

## Props

```typescript
interface CommonFormProps {
  formControls: Array<FormControl>; // Array konfigurasi form elements
  formData: Object; // Data form saat ini
  setFormData: Function; // Function untuk update form data
  buttonText?: string; // Text untuk tombol submit (optional)
  onHandleSubmit: Function; // Handler untuk form submission
}

interface FormControl {
  componentType: "input" | "select" | "textarea";
  label: string;
  name: string;
  id: string;
  type?: string;
  placeholder?: string;
  // ... properti lain yang mungkin diperlukan
}
```

### Detail Props

1. **formControls**

   - Type: Array
   - Required: Ya
   - Format: Array of form control objects
   - Menentukan struktur dan tipe form elements

2. **formData**

   - Type: Object
   - Required: Ya
   - Menyimpan nilai-nilai form saat ini

3. **setFormData**

   - Type: Function
   - Required: Ya
   - Mengupdate form data state

4. **buttonText**

   - Type: string
   - Required: Tidak
   - Default: "Submit"
   - Text yang ditampilkan pada tombol submit

5. **onHandleSubmit**
   - Type: Function
   - Required: Ya
   - Handler untuk form submission

## Component Logic

### renderFormElement Function

```javascript
function renderFormElement(getCurrentElement) {
  let content = null;
  switch (getCurrentElement?.componentType) {
    case formTypes.INPUT:
      content = (
        <CommonInput
          label={getCurrentElement.label}
          name={getCurrentElement.name}
          id={getCurrentElement.id}
          type={getCurrentElement.type}
          placeholder={getCurrentElement.placeholder}
          value={formData[getCurrentElement.name]}
          onChange={(event) =>
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            })
          }
        />
      );
      break;
    default:
      break;
  }
  return content;
}
```

Function ini:

1. Menerima konfigurasi element form
2. Menentukan tipe komponen yang akan di-render
3. Me-render komponen yang sesuai dengan properti yang diperlukan

## Penggunaan

### Basic Usage

```jsx
import CommonForm from "./path/to/CommonForm";

function MyFormPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const formControls = [
    {
      componentType: "input",
      label: "Username",
      name: "username",
      id: "username",
      type: "text",
      placeholder: "Enter username",
    },
    {
      componentType: "input",
      label: "Email",
      name: "email",
      id: "email",
      type: "email",
      placeholder: "Enter email",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <CommonForm
      formControls={formControls}
      formData={formData}
      setFormData={setFormData}
      buttonText="Save"
      onHandleSubmit={handleSubmit}
    />
  );
}
```

## Rekomendasi Pengembangan

1. **Tambahan Form Types**

```javascript
const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
  CHECKBOX: "checkbox",
  RADIO: "radio",
  FILE: "file",
  DATE: "date",
  SWITCH: "switch",
};
```

2. **Implementasi Select dan Textarea**

```javascript
case formTypes.SELECT:
  content = (
    <select
      name={getCurrentElement.name}
      id={getCurrentElement.id}
      value={formData[getCurrentElement.name]}
      onChange={(event) =>
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        })
      }
    >
      {getCurrentElement.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
  break;

case formTypes.TEXTAREA:
  content = (
    <textarea
      name={getCurrentElement.name}
      id={getCurrentElement.id}
      value={formData[getCurrentElement.name]}
      placeholder={getCurrentElement.placeholder}
      onChange={(event) =>
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        })
      }
    />
  );
  break;
```

3. **Validasi**

   - Tambahkan properti required
   - Implementasi validasi custom
   - Handling error messages

4. **Styling**

   - Tambahkan CSS modules atau styled-components
   - Implementasi tema dan variasi
   - Responsif design

5. **Performance**

   - Memoize renderFormElement
   - Optimasi re-renders
   - Lazy loading untuk form elements

6. **Accessibility**

   - ARIA labels
   - Keyboard navigation
   - Error announcements

7. **Error Handling**

```javascript
interface FormControl {
  // ... properti yang ada
  validation?: {
    required?: boolean,
    pattern?: RegExp,
    minLength?: number,
    maxLength?: number,
    custom?: (value: any) => boolean,
  };
  errorMessage?: string;
}
```

8. **Loading State**

```jsx
<button type="submit" disabled={loading}>
  {loading ? "Submitting..." : buttonText || "Submit"}
</button>
```

## Tips Penggunaan

1. Selalu berikan unique id untuk setiap form element
2. Gunakan proper type untuk input fields
3. Implementasi proper error handling
4. Pertimbangkan accessibility
5. Validasi formControls array sebelum rendering
