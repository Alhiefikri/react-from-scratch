# **TextExpander: Membuat Komponen Reusable dengan React**

## **Pengantar**

Komponen `TextExpander` ini adalah contoh komponen React yang digunakan untuk memperluas dan mempersingkat teks secara dinamis. Komponen ini akan menampilkan sebagian teks pada awalnya (tergantung pada jumlah kata yang ingin ditampilkan), dan memberikan tombol untuk memperluas atau mengurangi teks yang ditampilkan.

### **Fitur Utama:**

- Menampilkan sebagian teks pada awalnya.
- Memberikan tombol untuk memperluas atau mempersingkat teks.
- Menggunakan konsep **React hooks** dan **ternary operator** untuk logika tampilan.

---

## **Struktur Kode**

Berikut adalah kode lengkap dari komponen `TextExpander`:

```javascript
import { useState } from "react";

export default function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  className,
  expanded = false,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
```

---

## **Penjelasan Kode:**

### 1. **Destructuring Props**

Komponen menerima beberapa props untuk menyesuaikan tampilannya:

- `children`: Isi teks yang akan ditampilkan.
- `collapsedNumWords`: Jumlah kata yang ingin ditampilkan sebelum teks dipersingkat (default: 10).
- `expandButtonText`: Teks untuk tombol ketika teks dipersingkat (default: "Show More").
- `collapseButtonText`: Teks untuk tombol ketika teks diperluas (default: "Show less").
- `buttonColor`: Warna tombol (default: `"#1f09cd"`).
- `className`: Kelas tambahan untuk styling (default: kosong).
- `expanded`: Menentukan apakah teks sudah diperluas atau belum saat komponen pertama kali dirender (default: `false`).

### 2. **React Hook: `useState()`**

```javascript
const [isExpanded, setIsExpanded] = useState(expanded);
```

- **`isExpanded`**: Menyimpan status apakah teks dalam kondisi diperluas atau tidak.
- **`setIsExpanded`**: Fungsi untuk mengubah status **`isExpanded`**.
- **`useState(expanded)`**: Hook ini menginisialisasi nilai awal **`isExpanded`** dengan nilai yang diterima dari prop `expanded`.

### 3. **Manipulasi Teks:**

```javascript
const displayText = isExpanded
  ? children
  : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
```

- **`isExpanded ? children : ...`**: Menggunakan **ternary operator** untuk memutuskan apakah menampilkan teks lengkap (`children`) atau teks yang dipersingkat.
- **`children.split(" ")`**: Memecah teks menjadi array kata berdasarkan spasi.
- **`slice(0, collapsedNumWords)`**: Memilih sejumlah kata pertama dari array, sesuai dengan nilai `collapsedNumWords`.
- **`join(" ")`**: Menggabungkan kembali array kata menjadi string dengan spasi sebagai pemisah.
- **`+ "..."`**: Menambahkan tanda ellipsis di akhir teks yang dipersingkat.

### 4. **Tombol untuk Memperluas atau Mempersingkat Teks:**

```javascript
<button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
  {isExpanded ? collapseButtonText : expandButtonText}
</button>
```

- **`onClick={() => setIsExpanded((exp) => !exp)}`**: Ketika tombol diklik, status **`isExpanded`** akan dibalik (`true` menjadi `false` dan sebaliknya) menggunakan `setIsExpanded`.
- **`{isExpanded ? collapseButtonText : expandButtonText}`**: Menampilkan teks tombol yang berbeda tergantung pada status **`isExpanded`**.

---

## **Penjelasan Mendalam tentang Manipulasi String dan Array:**

### **1. Manipulasi String**

#### **`split(" ")`**

- Fungsi ini digunakan untuk membagi string menjadi array berdasarkan pemisah yang diberikan, dalam hal ini adalah spasi (`" "`).
- Contoh:
  ```javascript
  let kalimat = "Saya belajar React";
  let kataArray = kalimat.split(" ");
  console.log(kataArray); // ["Saya", "belajar", "React"]
  ```

#### **`slice(0, collapsedNumWords)`**

- Fungsi **`slice()`** mengambil bagian dari array atau string dari indeks yang diberikan.
- **`slice(0, 3)`** misalnya, akan mengambil 3 kata pertama dari array.
- Contoh:
  ```javascript
  let array = ["Saya", "belajar", "React", "dan", "JavaScript"];
  let potongan = array.slice(0, 3);
  console.log(potongan); // ["Saya", "belajar", "React"]
  ```

#### **`join(" ")`**

- Fungsi **`join()`** digunakan untuk menggabungkan elemen-elemen array menjadi string dengan separator yang ditentukan (dalam hal ini spasi `" "`).
- Contoh:
  ```javascript
  let array = ["Saya", "belajar", "React"];
  let kalimat = array.join(" ");
  console.log(kalimat); // "Saya belajar React"
  ```

---

### **2. Manipulasi Array**

#### **`push()` dan `pop()`**

- **`push()`** menambah elemen ke akhir array.
- **`pop()`** menghapus elemen terakhir dari array.
- Contoh:

  ```javascript
  let angka = [1, 2, 3];
  angka.push(4); // Menambah 4 ke akhir array
  console.log(angka); // [1, 2, 3, 4]

  angka.pop(); // Menghapus elemen terakhir
  console.log(angka); // [1, 2, 3]
  ```

#### **`slice()`**

- **`slice()`** digunakan untuk mengambil bagian dari array tanpa mengubah array asli.
- Contoh:
  ```javascript
  let angka = [1, 2, 3, 4, 5];
  let subArray = angka.slice(1, 4);
  console.log(subArray); // [2, 3, 4]
  ```

---

## **Kenapa Komponen `TextExpander` Berguna?**

Komponen `TextExpander` sangat berguna ketika kita memiliki teks yang panjang dan ingin menampilkan hanya sebagian dari teks tersebut, memberikan pengalaman pengguna yang lebih baik dengan menggunakan tombol untuk memperluas atau menyembunyikan sisa teks.

### **Keuntungan Komponen Reusable**

- **Modularitas**: Komponen ini dapat digunakan di berbagai tempat dalam aplikasi tanpa perlu menulis kode yang sama berulang kali.
- **Kustomisasi**: Dengan menggunakan props seperti `collapsedNumWords` dan `buttonColor`, kita dapat menyesuaikan tampilan komponen sesuai kebutuhan.
- **Efisiensi**: Penggunaan React Hooks seperti `useState()` memudahkan kita untuk mengelola status komponen tanpa perlu mengelola DOM secara langsung.

---

## **Kesimpulan**

- Komponen **`TextExpander`** memungkinkan kita untuk membuat teks yang dapat diperluas dan dipersingkat secara dinamis menggunakan React.
- Kita memanfaatkan berbagai metode JavaScript untuk memanipulasi string dan array, seperti **`split()`**, **`slice()`**, dan **`join()`**.
- Dengan menggunakan **ternary operator** dan **React hooks**, kita dapat membuat komponen yang lebih interaktif dan mudah dikelola.

Semoga penjelasan ini memberikan pemahaman yang lebih baik tentang React dan manipulasi string serta array di JavaScript. Jangan ragu untuk mengadaptasi dan mengembangkan komponen ini sesuai dengan kebutuhan aplikasimu!

---

### **Referensi**

- [Dokumentasi React](https://reactjs.org/docs/getting-started.html)
- [MDN Web Docs - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Web Docs - String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
