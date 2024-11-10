# Common Form Component - `CommonForm`

### **Tujuan Kode**

Komponen `CommonForm` adalah form dinamis yang dapat menangani berbagai jenis elemen form, seperti input teks, select, dan textarea. Komponen ini menggunakan `CommonInput` untuk merender elemen input dan mengelola pengisian data form secara terkontrol dengan React. Dengan menggunakan komponen ini, form dapat disesuaikan dengan mudah berdasarkan data yang diberikan.

---

### **Pengertian**

`CommonForm` adalah komponen form yang fleksibel dan dapat digunakan untuk membuat form dengan berbagai jenis kontrol input (misalnya, input teks, dropdown select, textarea) menggunakan konfigurasi `formControls`. Setiap kontrol input memiliki properti yang dapat disesuaikan, dan data form dikelola menggunakan state (`formData`) serta fungsi pembaruan state (`setFormData`).

---

### **Cara Berpikir Kode**

1. **Dinamisme dan Reusabilitas**: Komponen ini dirancang untuk membuat form yang fleksibel, di mana tipe kontrol input bisa disesuaikan hanya dengan memberikan konfigurasi yang tepat dalam `formControls`.
2. **Pengelolaan Data Form Terpusat**: Menggunakan state `formData` untuk menyimpan nilai setiap input di form. Ketika nilai input berubah, komponen memperbarui `formData`.
3. **Elemen Form Berbeda**: Berdasarkan tipe elemen form (seperti `input`, `select`, atau `textarea`), komponen akan merender elemen yang sesuai secara dinamis.

---

### **Analogi Sederhana**

Bayangkan `CommonForm` seperti **formulir yang bisa diubah**. Kamu bisa menentukan apa saja yang ingin kamu masukkan ke dalam formulir tersebut (apakah input teks, dropdown, atau area teks panjang), dan formulir itu akan beradaptasi sesuai dengan instruksi yang diberikan. Komponen ini mempermudah pembuatan form dinamis yang membutuhkan pengelolaan banyak kontrol input dengan cara yang efisien.

---

### **Penjelasan Masing-Masing Kode Secara Detail**

#### 1. **Import Statement**

```javascript
import CommonInput from "../common-input";
```

- **`CommonInput`**: Mengimpor komponen `CommonInput` untuk digunakan dalam merender elemen input di form.

#### 2. **Form Element Types**

```javascript
const formElementTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};
```

- **`formElementTypes`**: Objek yang mendefinisikan tipe kontrol form yang tersedia. Ini memudahkan untuk menambah jenis elemen form baru di masa depan. Saat ini, terdapat tiga jenis elemen: `INPUT`, `SELECT`, dan `TEXTAREA`. Meskipun hanya `INPUT` yang digunakan di kode ini, struktur ini memungkinkan ekstensi yang lebih mudah.

#### 3. **Fungsi `renderFormElements`**

```javascript
function renderFormElements(getCurrentFormControl, getFormData) {
  let element = null;

  switch (getCurrentFormControl.componentType) {
    case formElementTypes.INPUT:
      element = (
        <CommonInput
          type={getCurrentFormControl.type}
          placeholder={getCurrentFormControl.placeholder}
          value={getFormData[getCurrentFormControl.name]}
          name={getCurrentFormControl.name}
          onChange={(event) =>
            setFormData({
              ...formData,
              [getCurrentFormControl.name]: event.target.value,
            })
          }
        />
      );
      break;

    default:
      element = (
        <CommonInput
          type={getCurrentFormControl.type}
          placeholder={getCurrentFormControl.placeholder}
          value={getFormData[getCurrentFormControl.name]}
          name={getCurrentFormControl.name}
          onChange={(event) =>
            setFormData({
              ...formData,
              [getCurrentFormControl.name]: event.target.value,
            })
          }
        />
      );
      break;
  }
  return element;
}
```

- **`renderFormElements`**: Fungsi ini merender elemen form berdasarkan konfigurasi yang diberikan dalam `formControls`. Fungsi ini menerima dua argumen:

  - **`getCurrentFormControl`**: Objek yang mewakili kontrol input saat ini, berisi informasi seperti tipe input (`type`), placeholder, nama kontrol, dan tipe komponen (`componentType`).
  - **`getFormData`**: Objek yang menyimpan nilai-nilai terkini dari setiap kontrol input di form.

  Fungsi ini memeriksa tipe elemen yang perlu dirender dengan menggunakan `switch` pada `getCurrentFormControl.componentType`. Jika elemen tipe `INPUT`, maka akan merender `CommonInput` dengan properti yang sesuai, seperti `type`, `placeholder`, `value`, dan `onChange` untuk menangani perubahan nilai.

  **`onChange`** memperbarui `formData` dengan nilai yang baru. Ini memastikan form bersifat terkontrol, di mana setiap perubahan pada input akan mengubah state global aplikasi yang menyimpan nilai-nilai form.

#### 4. **Formulir dan Pengiriman**

```javascript
<form onSubmit={onSubmit}>
  {formControls.map((singleFormControl) =>
    renderFormElements(singleFormControl, formData)
  )}
  <button type="submit">{buttonText || "Submit"}</button>
</form>
```

- **`<form onSubmit={onSubmit}>`**: Elemen form utama, yang memanggil fungsi `onSubmit` saat pengguna mengirimkan form.
- **`formControls.map(...)`**: Iterasi melalui setiap kontrol input yang disediakan dalam `formControls`. Untuk setiap kontrol, fungsi `renderFormElements` dipanggil untuk merender elemen form yang sesuai.
- **`<button type="submit">`**: Tombol untuk mengirimkan form. Teks tombol dapat disesuaikan melalui prop `buttonText`. Jika tidak diberikan, tombol akan menampilkan teks default "Submit".

#### 5. **Export Statement**

```javascript
export default CommonForm;
```

- **`export default CommonForm;`**: Menandakan bahwa `CommonForm` akan diekspor sebagai komponen default, sehingga dapat digunakan di komponen lain dalam aplikasi.

---

### **Kesimpulan**

- `CommonForm` adalah komponen form dinamis yang dapat menangani berbagai jenis elemen input (seperti teks, select, textarea) dengan cara yang sangat fleksibel.
- Dengan menggunakan konfigurasi `formControls`, kita bisa membuat form yang disesuaikan tanpa harus menulis kode form secara manual untuk setiap elemen input.
- Form ini juga mengelola data input secara terkontrol menggunakan state `formData`, dan mengirim data tersebut melalui `onSubmit` yang dapat disesuaikan.
- Komponen ini mudah digunakan dan dapat diperluas dengan menambahkan tipe elemen form baru di masa depan (misalnya, `SELECT`, `TEXTAREA`).
