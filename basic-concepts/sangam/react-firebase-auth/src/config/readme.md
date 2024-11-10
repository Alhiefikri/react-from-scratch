# Config for Form Controls - `config.js`

### **Tujuan Kode**

File ini berfungsi untuk mendefinisikan konfigurasi kontrol form yang digunakan untuk form registrasi (`registerFormControls`) dan form login (`loginFormControls`). Konfigurasi ini akan digunakan oleh komponen `CommonForm` untuk merender elemen-elemen input yang sesuai di form.

---

### **Pengertian**

Konfigurasi `registerFormControls` dan `loginFormControls` adalah array yang berisi objek-objek yang menggambarkan elemen form yang perlu dirender. Setiap objek mendefinisikan properti dari kontrol input seperti nama, placeholder, tipe komponen, dan tipe input (seperti `text`, `email`, atau `password`). Konfigurasi ini memungkinkan komponen form untuk merender form yang disesuaikan hanya dengan data yang diberikan.

---

### **Cara Berpikir Kode**

1. **Pengelompokan Form**: Ada dua grup konfigurasi yang berbeda: satu untuk registrasi (`registerFormControls`) dan satu lagi untuk login (`loginFormControls`). Masing-masing grup ini berisi daftar elemen form yang diperlukan untuk tiap form.
2. **Keterhubungan dengan Komponen `CommonForm`**: Konfigurasi ini digunakan oleh komponen `CommonForm` untuk merender elemen form. Berdasarkan data yang diberikan, `CommonForm` akan merender setiap input sesuai dengan konfigurasi, seperti menampilkan kolom input untuk email dan password.

---

### **Analogi Sederhana**

Bayangkan konfigurasi ini sebagai **daftar barang yang perlu dibeli**. Ketika kamu ingin membuat form untuk registrasi atau login, kamu hanya perlu memberikan daftar barang yang ingin dibeli (elemen form), seperti nama, email, dan password. Konfigurasi ini berfungsi untuk memberi tahu komponen form apa saja yang perlu ditampilkan dan apa pengaturannya.

---

### **Penjelasan Masing-Masing Kode Secara Detail**

#### 1. **Konfigurasi untuk Form Registrasi (`registerFormControls`)**

```javascript
export const registerFormControls = [
  {
    name: "name",
    placeholder: "Enter Your Name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    placeholder: "Enter Your Email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    placeholder: "Enter Your Password",
    componentType: "input",
    type: "password",
  },
];
```

- **`name`**: Nama kontrol form. Ini digunakan untuk mengidentifikasi elemen input, yang juga akan digunakan sebagai nama state di komponen induk (`formData`).
- **`placeholder`**: Teks yang muncul di dalam input sebagai petunjuk bagi pengguna tentang apa yang harus dimasukkan.
- **`componentType`**: Jenis komponen yang digunakan. Dalam hal ini, semuanya adalah `input` yang akan dirender oleh komponen `CommonForm`.
- **`type`**: Tipe dari input. Tipe ini menentukan jenis data yang diharapkan untuk dimasukkan, seperti `text`, `email`, atau `password`. Ini mempengaruhi tampilan dan validasi input pada browser.

Pada form registrasi, ada tiga input:

1. **Nama** (`name`) - Tipe `text`
2. **Email** (`email`) - Tipe `email`
3. **Password** (`password`) - Tipe `password`

#### 2. **Konfigurasi untuk Form Login (`loginFormControls`)**

```javascript
export const loginFormControls = [
  {
    name: "email",
    placeholder: "Enter Your Email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    placeholder: "Enter Your Password",
    componentType: "input",
    type: "password",
  },
];
```

- **`email`** dan **`password`** memiliki properti yang hampir sama dengan form registrasi, tetapi hanya terdiri dari dua input karena login hanya membutuhkan informasi email dan password.

Pada form login, ada dua input:

1. **Email** (`email`) - Tipe `email`
2. **Password** (`password`) - Tipe `password`

---

### **Kesimpulan**

- **`registerFormControls`** dan **`loginFormControls`** adalah konfigurasi untuk elemen-elemen input yang akan digunakan di form registrasi dan login.
- Setiap kontrol input didefinisikan dengan properti yang menjelaskan nama, placeholder, tipe input, dan tipe komponen. Hal ini memungkinkan form untuk dirender secara dinamis menggunakan komponen `CommonForm`.
- Dengan memisahkan konfigurasi ini, kamu bisa dengan mudah menambah atau mengubah elemen form tanpa harus merubah banyak kode, cukup dengan mengubah data dalam konfigurasi ini.
