# Common Input Component - `CommonInput`

### **Tujuan Kode**

Komponen `CommonInput` adalah komponen input yang dapat digunakan secara umum untuk berbagai form input di aplikasi React. Komponen ini fleksibel karena bisa menerima berbagai jenis input (misalnya, teks, email, password) dan dapat disesuaikan dengan properti seperti placeholder, nama, nilai, dan kelas CSS.

---

### **Pengertian**

`CommonInput` adalah komponen input yang dirancang untuk digunakan di berbagai form di aplikasi React. Dengan menggunakan komponen ini, kita tidak perlu membuat elemen input secara manual setiap kali dibutuhkan. Komponen ini mendukung pengaturan tipe input, placeholder, nilai input, pengelolaan perubahan nilai, serta penyesuaian kelas CSS untuk styling.

---

### **Cara Berpikir Kode**

1. **Fleksibilitas**: Komponen ini dirancang agar bisa digunakan untuk berbagai tipe input hanya dengan mendefinisikan beberapa props.
2. **Reusable**: Komponen ini dapat digunakan di banyak tempat dalam aplikasi dengan parameter yang berbeda tanpa duplikasi kode.
3. **Kontrol Nilai dan Perubahan**: Menggunakan `value` dan `onChange` untuk mengelola nilai input secara terkontrol dari komponen induk.

---

### **Analogi Sederhana**

Bayangkan `CommonInput` sebagai sebuah **formulir pengisian** yang sangat fleksibel. Setiap kali Anda membutuhkan formulir untuk pengisian teks, email, atau password, Anda hanya perlu memberinya instruksi (seperti tipe input, placeholder, dan nilai), dan formulir tersebut akan disiapkan dengan tampilan dan fungsi yang benar. Anda tidak perlu menyiapkan setiap detail input secara manual setiap kali.

---

### **Penjelasan Masing-Masing Kode Secara Detail**

#### 1. **Import Statement**

```javascript
function CommonInput({ type, placeholder, name, value, onChange, className }) {
```

- **Props**:
  - `type`: Menentukan tipe input (misalnya, `text`, `password`, `email`). Jika tidak diberikan, default-nya adalah `text`.
  - `placeholder`: Menentukan teks placeholder yang muncul di dalam input sebelum pengguna mengetikkan sesuatu.
  - `name`: Menentukan nama input, yang berguna untuk pengelolaan data form atau pengiriman data.
  - `value`: Menentukan nilai yang terkini dari input, yang akan dikontrol oleh komponen induk.
  - `onChange`: Fungsi untuk menangani perubahan pada nilai input.
  - `className`: Kelas CSS untuk styling, agar komponen ini dapat disesuaikan dengan tampilan desain aplikasi.

#### 2. **Return Statement**

```javascript
return (
  <div>
    <input
      type={type || "text"}
      placeholder={placeholder || "Enter Value Here"}
      name={name}
      value={value}
      onChange={onChange}
      className={
        className || "w-full block px-5 py-2 mt-2 text-white border rounded-lg"
      }
    />
  </div>
);
```

- **`<div>`**: Pembungkus untuk elemen `input`. Meskipun tidak diperlukan, ini bisa membantu jika kita ingin menambahkan elemen lain (seperti label atau error message) di masa depan.
- **`<input>`**: Elemen input ini adalah elemen utama di dalam komponen. Di sini kita memberikan berbagai properti untuk memodifikasi perilaku dan tampilannya:
  - **`type={type || "text"}`**: Jika `type` tidak diberikan melalui props, maka input default-nya adalah `text`. Ini memberikan fleksibilitas untuk menyesuaikan tipe input.
  - **`placeholder={placeholder || "Enter Value Here"}`**: Jika `placeholder` tidak diberikan, maka teks placeholder yang ditampilkan adalah "Enter Value Here". Ini membantu memberikan instruksi kepada pengguna tentang apa yang harus dimasukkan.
  - **`name={name}`**: Nama untuk input, yang digunakan untuk pengidentifikasi dan pengelolaan data input.
  - **`value={value}`**: Nilai yang dikendalikan oleh komponen induk. Artinya, ini adalah input terkontrol, dan setiap perubahan nilai input akan dipantau oleh komponen induk.
  - **`onChange={onChange}`**: Fungsi yang dipanggil setiap kali nilai input berubah. Biasanya, fungsi ini digunakan untuk memperbarui state di komponen induk.
  - **`className={className || "w-full block px-5 py-2 mt-2 text-white border rounded-lg"}`**: Menentukan kelas CSS untuk input. Jika tidak ada kelas yang diberikan, maka input akan memiliki gaya default seperti lebar penuh, padding, border, dan border-radius. Ini memungkinkan komponen untuk disesuaikan dengan mudah menggunakan CSS atau utility class seperti dari Tailwind CSS.

#### 3. **Export Statement**

```javascript
export default CommonInput;
```

- **`export default CommonInput;`**: Menandakan bahwa komponen ini akan diekspor dan dapat digunakan di komponen lain dalam aplikasi.

---

### **Kesimpulan**

- `CommonInput` adalah komponen input fleksibel yang dapat digunakan untuk berbagai tipe input di aplikasi React.
- Komponen ini memungkinkan pengelolaan nilai input secara terkontrol dengan props `value` dan `onChange`, yang menjadikannya sangat berguna dalam form yang memerlukan pengolahan data input.
- Penggunaannya sangat sederhana dan dapat disesuaikan dengan berbagai tipe input, placeholder, dan kelas CSS untuk memenuhi kebutuhan desain aplikasi.
