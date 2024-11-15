# **README untuk Aplikasi Counter React (Format Bahasa Indonesia)**

## **Deskripsi Aplikasi**

Aplikasi **Counter** ini memungkinkan pengguna untuk menghitung hari dari hari ini, baik secara maju maupun mundur. Pengguna dapat mengubah nilai penghitungan menggunakan slider atau input angka, dan aplikasi akan menampilkan tanggal yang sesuai berdasarkan jumlah hari yang dihitung. Semua tampilan teks dan tanggal ditampilkan dalam bahasa Indonesia untuk memudahkan pemahaman pengguna lokal.

<p align="center">
  <img src="/public/image.png" alt="ScrenshooT Gambar"
</p>

---

## **Pengertian Code**

Code ini menggunakan **React** untuk membuat aplikasi interaktif dengan state (keadaan) yang dikelola melalui hook **`useState`**. **`useState`** adalah fitur di React yang memungkinkan kita menyimpan dan mengubah data dalam komponen.

Aplikasi ini terdiri dari dua komponen utama:

1. **`App`** – Komponen utama yang hanya memanggil komponen **`Counter`**.
2. **`Counter`** – Komponen yang mengatur semua interaksi pengguna, termasuk input jumlah hari dan slider untuk menentukan langkah (step) perhitungan.

Aplikasi ini juga memanfaatkan **`Intl.DateTimeFormat`** untuk memformat tanggal agar sesuai dengan format bahasa Indonesia.

---

## **Penjelasan Kode**

### **1. Import dan Setup**

```js
import { useState } from "react";
import "./App.css";
```

- **`useState`**: Hook dari React yang digunakan untuk menyimpan nilai dan memperbarui nilai tersebut dalam komponen.
- **`"./App.css"`**: Mengimpor file CSS untuk memberikan styling pada aplikasi.

### **2. Komponen `App`**

```js
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
```

- **Komponen `App`** adalah komponen utama yang hanya memanggil komponen **`Counter`** untuk menampilkan antarmuka pengguna.

### **3. Komponen `Counter`**

```js
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
```

- **`count`**: Menyimpan jumlah hari yang dihitung, dimulai dengan nilai 0.
- **`step`**: Menyimpan nilai langkah untuk penghitungan, dimulai dengan nilai 1.
- Fungsi **`setCount`** dan **`setStep`** digunakan untuk memperbarui nilai `count` dan `step`.

### **4. Fungsi `handleReset`**

```js
function handleReset() {
  setCount(0);
  setStep(1);
}
```

- Fungsi **`handleReset`** digunakan untuk mereset nilai `count` dan `step` kembali ke nilai semula, yaitu `0` dan `1`. Fungsi ini akan dipanggil ketika tombol **Reset** diklik.

### **5. Menghitung dan Memformat Tanggal**

```js
const date = new Date();
date.setDate(date.getDate() + count);
```

- Membuat objek **`date`** yang berisi tanggal saat ini menggunakan **`new Date()`**.
- Kemudian, tanggal tersebut disesuaikan dengan menambahkan atau mengurangi nilai `count`.

```js
const formattedDate = new Intl.DateTimeFormat("id-ID", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(date);
```

- **`Intl.DateTimeFormat("id-ID")`**: Memformat tanggal dalam format bahasa Indonesia. Misalnya, tanggal akan ditampilkan sebagai **"Senin, 15 November 2024"**.
- **`weekday: "long"`**: Menampilkan nama hari dalam format panjang (contoh: "Senin").
- **`year: "numeric"`**: Menampilkan tahun dalam angka (contoh: "2024").
- **`month: "long"`**: Menampilkan nama bulan dalam format panjang (contoh: "November").
- **`day: "numeric"`**: Menampilkan tanggal dalam format angka (contoh: "15").

### **6. Menampilkan UI**

#### **Slider untuk Langkah**

```js
<input
  type="range"
  min="0"
  max="10"
  value={step}
  onChange={(e) => setStep(Number(e.target.value))}
/>
```

- **Slider** digunakan untuk mengubah nilai langkah **`step`** antara 0 hingga 10. Setiap kali slider digeser, nilai **`step`** diperbarui dengan nilai yang dipilih.

#### **Tombol untuk Mengubah Nilai `count`**

```js
<button onClick={() => setCount((c) => c - step)}>-</button>
<input
  type="number"
  value={count}
  onChange={(e) => setCount(Number(e.target.value))}
/>
<button onClick={() => setCount((c) => c + step)}>+</button>
```

- **Tombol `-`**: Mengurangi nilai **`count`** dengan jumlah **`step`**.
- **Input**: Mengizinkan pengguna untuk mengubah nilai **`count`** secara langsung dengan mengetikkan angka.
- **Tombol `+`**: Menambah nilai **`count`** dengan jumlah **`step`**.

#### **Menampilkan Tanggal yang Dihitung**

```js
<p style={{ fontSize: "2rem" }}>
  <span>
    {count === 0
      ? "Hari ini adalah"
      : count > 0
      ? `${count} hari dari hari ini adalah`
      : `${Math.abs(count)} hari yang lalu adalah`}
  </span>
  <span> {formattedDate}</span>
</p>
```

- Teks di atas akan menampilkan informasi tentang tanggal berdasarkan nilai **`count`**:
  - Jika **`count === 0`**, teks yang ditampilkan adalah "Hari ini adalah".
  - Jika **`count > 0`**, teks yang ditampilkan adalah **`count`** hari dari hari ini.
  - Jika **`count < 0`**, teks yang ditampilkan adalah **`Math.abs(count)`** hari yang lalu.
- **`formattedDate`** adalah tanggal yang telah diformat sesuai dengan bahasa Indonesia.

#### **Tombol Reset**

```js
{
  count !== 0 || step !== 1 ? (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  ) : null;
}
```

- Tombol **Reset** hanya akan muncul jika **`count`** bukan 0 atau **`step`** bukan 1. Tombol ini digunakan untuk mengembalikan nilai ke kondisi awal.

### **7. Ekspor Komponen**

```js
export default App;
```

- **`export default App;`**: Mengekspor komponen `App` agar dapat digunakan di file lain.

---

## **Cara Berpikir di React**

1. **Mengelola State dengan `useState`**:

   - React mengelola data menggunakan state. Dalam kode ini, kita memiliki dua state: `count` untuk jumlah hari yang dihitung, dan `step` untuk langkah penghitungan.
   - `useState` digunakan untuk mendeklarasikan state dan memperbaruinya.

2. **Interaksi Pengguna**:

   - Pengguna dapat mengubah nilai `count` dan `step` dengan mengklik tombol atau menggeser slider. Setiap interaksi menyebabkan **state berubah**, yang memicu **render ulang** UI untuk menampilkan nilai yang baru.

3. **Pemformatan Tanggal**:

   - React memanfaatkan JavaScript `Intl.DateTimeFormat` untuk memformat tanggal sesuai dengan bahasa Indonesia, memastikan aplikasi lebih mudah dipahami oleh pengguna lokal.

4. **Komponen yang Sederhana dan Terpisah**:
   - Setiap bagian UI ditangani dalam komponen terpisah, misalnya `App` dan `Counter`, yang membuat kode lebih terstruktur dan mudah dipahami.

---

## **Cara Mengingat Kode dan Pemahaman React**

- **State dan SetState**: React menggunakan state untuk mengelola data. Saat state berubah, React secara otomatis merender ulang komponen untuk memperbarui UI.
- **Event Handling**: Event seperti klik tombol atau perubahan nilai input mengubah state, dan React memperbarui UI sesuai dengan perubahan tersebut.
- **Format Tanggal**: Gunakan `Intl.DateTimeFormat` untuk memformat data tanggal sesuai dengan lokal pengguna.
- **Komponen Terpisah**: Pisahkan setiap bagian UI menjadi komponen yang terpisah agar lebih mudah dibaca dan dirawat.

---

## **Kesimpulan**

Aplikasi ini adalah contoh sederhana tentang bagaimana React mengelola state dan interaksi pengguna. Dengan menggunakan hook **`useState`**, kita dapat menyimpan dan memperbarui data, dan **`Intl.DateTimeFormat`** memungkinkan kita untuk menampilkan tanggal dengan format bahasa Indonesia. Aplikasi ini juga mengajarkan kita bagaimana cara berpikir di React, dengan memisahkan komponen, mengelola state, dan merespons perubahan data untuk memperbarui tampilan antarmuka secara otomatis.
