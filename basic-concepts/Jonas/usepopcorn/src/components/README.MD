# **StarRating: Sistem Rating Bintang dengan React**

## **Pengertian**

Komponen `StarRating` adalah sebuah sistem rating bintang yang memungkinkan pengguna memberikan rating (nilai) dengan mengklik bintang. Setiap bintang bisa menampilkan dua keadaan: penuh (full) atau kosong. Sistem ini memungkinkan pengguna untuk mengklik dan memilih rating, serta memberikan efek hover ketika pengguna mengarahkan mouse ke bintang. Komponen ini juga menerima berbagai props untuk menyesuaikan tampilan dan perilaku.

## **Cara Berpikir React**

React adalah library JavaScript untuk membangun antarmuka pengguna (UI) yang interaktif dan dinamis. Dalam React, kita berpikir tentang **komponen** yang memiliki **state** dan **props**:

- **State** adalah tempat menyimpan data yang bisa berubah dalam komponen.
- **Props** adalah cara untuk mengirim data dari komponen induk (parent) ke komponen anak (child).

Ketika **state** berubah (misalnya, ketika rating diubah oleh pengguna), React secara otomatis akan merender ulang komponen tersebut agar UI tetap terupdate.

## **Analogi Sederhana**

Bayangkan Anda memiliki papan yang bisa menampilkan bintang-bintang. Setiap kali Anda mengklik sebuah bintang, papan tersebut akan memperbarui rating yang sudah dipilih dan menampilkan pesan yang sesuai dengan rating tersebut.

- **State** di React seperti papan yang bisa memperbarui dirinya sendiri setelah Anda mengklik bintang.
- **Props** adalah data yang diterima dari luar, seperti warna dan ukuran bintang yang Anda pilih untuk ditampilkan.

## **Penjelasan Kode per Bagian**

### **1. Import dan Setup**

```js
import { useState } from "react";
import PropTypes from "prop-types";
```

- `useState`: Hook React yang digunakan untuk mengelola **state** dalam komponen. Di sini, kita menggunakannya untuk menyimpan rating yang dipilih (`rating`) dan rating sementara saat hover (`tempRating`).
- `PropTypes`: Digunakan untuk memverifikasi tipe data yang diterima oleh props. Ini membantu memastikan kita menggunakan props dengan benar.

### **2. Style untuk Container dan Bintang**

```js
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const starContainerStyle = {
  display: "flex",
};
```

- **`containerStyle`**: Mengatur tampilan untuk **container utama** yang memuat bintang dan pesan. Menggunakan Flexbox untuk membuat elemen berada dalam satu baris (horizontal) dengan jarak antar elemen (`gap`).
- **`starContainerStyle`**: Mengatur tampilan untuk **kontainer bintang** agar bintang-bintang tampil dalam satu baris.

### **3. PropTypes (Validasi Props)**

```js
StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  clasName: PropTypes.string,
  message: PropTypes.array,
  onSetRating: PropTypes.func,
};
```

- **`PropTypes`** digunakan untuk memastikan bahwa komponen `StarRating` menerima props dengan tipe data yang benar. Ini membuat kode lebih mudah dipahami dan menghindari error jika props yang diterima tidak sesuai.

### **4. Komponen `StarRating`**

```js
function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  clasName = "",
  message = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
```

- Komponen **`StarRating`** menerima beberapa props:
  - `maxRating`: Jumlah maksimal bintang yang akan ditampilkan (default 5).
  - `color`: Warna bintang (default kuning).
  - `size`: Ukuran bintang (default 48px).
  - `clasName`: Kelas CSS tambahan untuk styling.
  - `message`: Pesan untuk setiap rating.
  - `defaultRating`: Nilai rating awal.
  - `onSetRating`: Fungsi untuk memberitahukan parent komponen jika rating berubah.
- `useState` digunakan untuk membuat dua state:
  - **`rating`**: Nilai rating yang dipilih.
  - **`tempRating`**: Nilai rating sementara saat hover.

### **5. Fungsi `handleRating`**

```js
function handleRating(rating) {
  setRating(rating);
  onSetRating(rating);
}
```

- Fungsi ini dipanggil ketika bintang diklik. `setRating` akan memperbarui nilai `rating` dengan rating yang dipilih, dan `onSetRating` akan mengirimkan rating baru ke komponen induk (parent).

### **6. Render Bintang dan Pesan**

```js
return (
  <div style={containerStyle} className={clasName}>
    <div style={starContainerStyle}>
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          key={i}
          onRate={() => handleRating(i + 1)}
          full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
          onHoverIn={() => setTempRating(i + 1)}
          onHoverOut={() => setTempRating(0)}
          color={color}
          size={size}
        />
      ))}
    </div>
    <p style={textStyle}>
      {message.length === maxRating
        ? message[tempRating ? tempRating - 1 : rating - 1]
        : tempRating || rating || ""}
    </p>
  </div>
);
```

- **Menampilkan Bintang**:

  - `Array.from({ length: maxRating })`: Membuat sebuah array sebanyak `maxRating` (misalnya 5 bintang). Setiap elemen array akan digunakan untuk menampilkan sebuah komponen `Star`.
  - Untuk setiap bintang, kita memberikan beberapa props:
    - **`onRate`**: Fungsi yang dipanggil ketika bintang diklik, memperbarui rating.
    - **`full`**: Menentukan apakah bintang ini penuh atau tidak, berdasarkan nilai `rating` atau `tempRating`.
    - **`onHoverIn` dan `onHoverOut`**: Fungsi untuk mengubah nilai sementara saat hover.
    - **`color` dan `size`**: Menentukan warna dan ukuran bintang.

- **Menampilkan Pesan**:
  - Jika ada `message` yang sesuai dengan jumlah bintang (`maxRating`), tampilkan pesan yang sesuai dengan rating yang dipilih.
  - Jika tidak ada `message`, tampilkan nilai rating yang dipilih atau rating sementara.

### **7. Komponen `Star`**

```js
function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
  };
  return (
    <span
      role="button"
      style={starStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill={color} stroke={color}>
          <path d="M9.049 2.927c..." />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke={color}>
          <path d="M11.049 2.927c..." />
        </svg>
      )}
    </span>
  );
}
```

- Komponen **`Star`** adalah komponen untuk menampilkan bintang. Berdasarkan props `full`, bintang akan tampil penuh atau kosong.
  - **`onRate`**: Fungsi yang dipanggil saat bintang diklik.
  - **`onHoverIn` dan `onHoverOut`**: Fungsi untuk memperbarui `tempRating` saat hover.
  - **`color` dan `size`**: Menentukan warna dan ukuran bintang.
  - Menggunakan **SVG** untuk menggambar bintang penuh atau kosong.

## **Kesimpulan**

- **State** dan **Props** adalah dua konsep utama yang harus dipahami dalam React. State digunakan untuk menyimpan data yang bisa berubah, sedangkan props digunakan untuk mengirim data dari komponen parent ke child.
- Fungsi **event handling** di React seperti `onClick`, `onMouseEnter`, dan `onMouseLeave` digunakan untuk mengatur interaksi pengguna dengan aplikasi.
- React otomatis **re-render** komponen saat state atau props berubah, menjadikan aplikasi lebih dinamis.
- Komponen harus dirancang untuk **reuse** agar kode lebih modular dan mudah dikelola.

Dengan memahami konsep-konsep ini, Anda bisa membuat aplikasi React yang lebih kompleks dengan mudah.

---

# **Average Function - Penjelasan**

---

## **Pengertian**

Fungsi `average` adalah sebuah fungsi JavaScript yang digunakan untuk menghitung rata-rata dari sekumpulan angka yang diberikan dalam bentuk array. Fungsi ini menerima sebuah array `arr` yang berisi angka-angka, kemudian menghitung hasil rata-rata dari angka-angka tersebut.

---

## **Cara Berpikir JavaScript**

Fungsi `average` menggunakan metode **`reduce`** yang ada pada array untuk menjumlahkan seluruh elemen dalam array dan kemudian membagi hasil penjumlahan tersebut dengan panjang (jumlah elemen) array. Dengan cara ini, kita bisa mendapatkan nilai rata-rata dari sebuah array.

---

## **Analogi Sederhana**

Bayangkan kamu memiliki sekumpulan nilai, misalnya nilai ujian beberapa siswa. Kamu ingin mengetahui rata-rata nilai ujian mereka. Caranya adalah dengan menjumlahkan semua nilai tersebut dan membaginya dengan jumlah siswa yang ada. Fungsi `average` melakukan hal yang sama, yaitu menjumlahkan semua elemen dalam array dan membaginya dengan panjang array tersebut.

---

## **Penjelasan Code Tiap Baris**

```js
export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
```

1. **`export const average = (arr) =>`**

   - Di sini, kita mendeklarasikan fungsi `average` yang diekspor sehingga bisa digunakan di file lain. Fungsi ini menerima satu parameter, yaitu `arr`, yang merupakan array angka yang akan dihitung rata-ratanya.

2. **`arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);`**

   - Fungsi ini menggunakan metode **`reduce`**, yang berfungsi untuk mengakumulasi atau mengurangi elemen-elemen dalam array menjadi satu nilai tunggal (dalam hal ini, hasil rata-rata).
   - **`reduce()`** menerima dua argumen:
     1. Sebuah fungsi callback yang menerima empat parameter:
        - `acc` (accumulator): Menyimpan hasil akumulasi sementara. Di awal, ini diinisialisasi dengan nilai `0` (lihat bagian berikutnya).
        - `cur` (current value): Merupakan nilai elemen array yang sedang diproses saat ini.
        - `i` (index): Indeks elemen saat ini dalam array (tidak digunakan di sini).
        - `arr` (array): Merupakan array yang sedang diproses (juga tidak digunakan di sini).
     2. **`0`**: Nilai inisialisasi untuk accumulator (`acc`). Ini berarti bahwa perhitungan rata-rata dimulai dari 0.

3. **`acc + cur / arr.length`**
   - Di dalam fungsi callback, kita menambahkan nilai `cur` yang merupakan nilai elemen array saat ini, dibagi dengan panjang array (`arr.length`). Ini dilakukan untuk menghitung kontribusi setiap elemen terhadap rata-rata secara langsung.
     - Sebagai contoh, jika array memiliki 3 elemen `[2, 4, 6]`, untuk elemen pertama, `cur = 2`, dan `arr.length = 3`. Maka, `acc + 2 / 3` akan menghasilkan nilai sementara yang dihitung secara bertahap.
   - Hal yang perlu diperhatikan di sini adalah bahwa setiap elemen dibagi dengan panjang array di setiap iterasi, yang mungkin bukan cara yang paling tepat untuk menghitung rata-rata. Biasanya, kita hanya menjumlahkan semua elemen dan baru kemudian membaginya di akhir.

---

## **Kesimpulan**

Fungsi `average` bertujuan untuk menghitung rata-rata dari angka-angka dalam array. Namun, cara yang digunakan dalam implementasi ini agak tidak tepat karena membagi setiap elemen dengan panjang array (`arr.length`) di dalam `reduce`. Sebaiknya, kita menjumlahkan semua elemen terlebih dahulu, kemudian membagi hasil penjumlahan dengan panjang array di luar `reduce`.

### Perbaikan yang disarankan:

Untuk menghitung rata-rata dengan benar, berikut adalah cara yang lebih tepat:

```js
export const average = (arr) =>
  arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
```

Dengan cara ini, kita pertama-tama menjumlahkan semua elemen menggunakan `reduce`, dan setelah itu membagi jumlahnya dengan panjang array (`arr.length`) untuk mendapatkan rata-rata.
