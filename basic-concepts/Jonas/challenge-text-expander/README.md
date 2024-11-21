# **TextExpander Component in React**

## **Pengertian**

Komponen **`TextExpander`** adalah komponen React yang memungkinkan Anda untuk menampilkan teks dalam jumlah terbatas dan memperluasnya saat dibutuhkan. Misalnya, jika Anda memiliki teks panjang, komponen ini hanya menampilkan sebagian teks dan menyediakan tombol untuk memperlihatkan seluruh teks atau menguranginya kembali. Komponen ini dapat digunakan untuk membuat antarmuka pengguna yang lebih bersih dan ramah pengguna.

## **Cara Berpikir React**

React adalah library JavaScript yang memungkinkan kita membuat antarmuka pengguna (UI) dengan membagi UI menjadi komponen-komponen kecil yang dapat digunakan kembali. Dalam React, setiap komponen dapat memiliki status internal yang dapat berubah seiring waktu. Ketika status berubah, React akan merender ulang komponen tersebut dengan data baru.

**TextExpander** adalah contoh komponen yang mengelola status teks yang ditampilkan berdasarkan apakah pengguna telah mengklik tombol untuk memperluas teks atau tidak.

---

## **Analogi Sederhana**

Bayangkan Anda memiliki sebuah surat kabar yang panjang. Anda hanya ingin menampilkan sebagian dari surat kabar itu di meja Anda (misalnya, 3 paragraf pertama). Namun, jika pembaca ingin membaca seluruh isi surat kabar, Anda memberi mereka tombol untuk membuka seluruh isi surat kabar. Begitu tombol ditekan, seluruh surat kabar akan terbuka.

Komponen `TextExpander` bekerja dengan cara yang mirip: pada awalnya hanya menampilkan sebagian teks, dan ketika pengguna mengklik tombol, seluruh teks akan terbuka.

---

## **Penjelasan Code Tiap Baris**

### **Impor dan Pengaturan Komponen**

```javascript
import { useState } from "react";
```

- **`useState`**: Hook ini digunakan untuk menyimpan dan mengubah status di dalam komponen React. Dalam hal ini, kita menyimpan status apakah teks sedang diperluas atau tidak.

### **Mendefinisikan Komponen `TextExpander`**

```javascript
export default function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  className,
  expanded = false,
}) {
```

- **`children`**: Ini adalah teks atau konten yang akan ditampilkan oleh komponen.
- **`collapsedNumWords`**: Menentukan jumlah kata yang akan ditampilkan ketika teks dipersingkat (default: 10 kata).
- **`expandButtonText`**: Teks untuk tombol ketika teks dipersingkat (default: "Show More").
- **`collapseButtonText`**: Teks untuk tombol ketika teks diperluas (default: "Show less").
- **`buttonColor`**: Menentukan warna tombol (default: "#1f09cd").
- **`className`**: Kelas CSS tambahan untuk styling komponen.
- **`expanded`**: Status awal apakah teks sudah diperluas atau belum (default: `false`).

### **Menyimpan Status `isExpanded` dengan `useState`**

```javascript
const [isExpanded, setIsExpanded] = useState(expanded);
```

- **`isExpanded`**: Status apakah teks sedang diperluas atau tidak.
- **`setIsExpanded`**: Fungsi untuk memperbarui status **`isExpanded`**.
- **`useState(expanded)`**: Menginisialisasi status **`isExpanded`** dengan nilai awal yang diterima melalui prop `expanded`.

### **Menentukan Teks yang Akan Ditampilkan**

```javascript
const displayText = isExpanded
  ? children
  : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
```

- **`isExpanded ? children : ...`**: Jika **`isExpanded`** bernilai `true`, maka seluruh teks (children) akan ditampilkan. Jika tidak, teks akan dipersingkat.
- **`children.split(" ")`**: Memecah teks menjadi array kata berdasarkan spasi.
- **`slice(0, collapsedNumWords)`**: Mengambil sejumlah kata pertama sesuai dengan **`collapsedNumWords`**.
- **`join(" ")`**: Menggabungkan kembali array kata menjadi string dengan spasi di antara kata-kata.
- **`+ "..."`**: Menambahkan tanda ellipsis (`...`) di akhir teks yang dipersingkat.

### **Menentukan Gaya Tombol**

```javascript
const buttonStyle = {
  background: "none",
  border: "none",
  font: "inherit",
  cursor: "pointer",
  marginLeft: "6px",
  color: buttonColor,
};
```

- **`buttonStyle`**: Menentukan gaya CSS untuk tombol (misalnya, menghapus latar belakang dan border, mengubah warna teks tombol sesuai dengan prop `buttonColor`).

### **Render Komponen**

```javascript
return (
  <div className={className}>
    <span>{displayText}</span>
    <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
      {isExpanded ? collapseButtonText : expandButtonText}
    </button>
  </div>
);
```

- **`<div className={className}>`**: Membungkus seluruh konten dalam sebuah elemen `<div>` dan memberikan kelas CSS tambahan sesuai dengan prop `className`.
- **`<span>{displayText}</span>`**: Menampilkan teks yang sudah disiapkan berdasarkan apakah teks tersebut diperluas atau dipersingkat.
- **`<button>`**: Tombol untuk memperluas atau mempersingkat teks. Ketika tombol diklik, **`setIsExpanded`** dipanggil untuk membalikkan status **`isExpanded`**.

---

## **Komponen `App.js`**

### **Pengertian**

Komponen **`App.js`** adalah komponen utama yang merender beberapa instance dari komponen **`TextExpander`**. Di sini, kita memberikan teks yang berbeda ke setiap **`TextExpander`** dan beberapa pengaturan berbeda, seperti jumlah kata yang ditampilkan atau warna tombol.

### **Penjelasan Code Tiap Baris**

```javascript
import "./App.css";
import TextExpander from "./components/TextExpander";
```

- **`import "./App.css";`**: Mengimpor file CSS untuk styling komponen `App`.
- **`import TextExpander from "./components/TextExpander";`**: Mengimpor komponen `TextExpander` yang sudah kita buat sebelumnya.

```javascript
export default function App() {
  return (
    <div>
      <TextExpander>{/* Text Content */}</TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        {/* Text Content */}
      </TextExpander>

      <TextExpander expanded={true} className="box">
        {/* Text Content */}
      </TextExpander>
    </div>
  );
}
```

- **Komponen pertama**: Menampilkan teks tanpa kustomisasi tambahan. Teks akan dipersingkat ke 10 kata pertama secara default.
- **Komponen kedua**: Menampilkan teks dengan kustomisasi tambahan:
  - **`collapsedNumWords={20}`**: Teks akan dipersingkat ke 20 kata pertama.
  - **`expandButtonText="Show text"`**: Mengubah teks tombol.
  - **`buttonColor="#ff6622"`**: Menentukan warna tombol.
- **Komponen ketiga**: Menampilkan teks secara penuh sejak awal karena **`expanded={true}`** dan memberikan kelas CSS **`className="box"`**.

---

## **Kesimpulan**

- **Komponen `TextExpander`** memungkinkan kita untuk menampilkan teks yang bisa dipersingkat atau diperluas, memberikan pengalaman pengguna yang lebih baik.
- **React Hooks (`useState`)** digunakan untuk mengelola status apakah teks diperluas atau tidak.
- **Props** memungkinkan kita untuk menyesuaikan perilaku dan tampilan komponen, seperti jumlah kata yang ditampilkan, teks tombol, dan warna tombol.
- **Komponen `App`** menunjukkan bagaimana kita bisa menggunakan **`TextExpander`** dengan berbagai pengaturan dan konten teks.
- Konsep seperti **state**, **props**, dan **event handling** adalah kunci untuk membuat antarmuka interaktif di React.

Dengan memahami cara kerja komponen seperti **`TextExpander`**, kamu bisa membuat antarmuka yang lebih dinamis dan fleksibel dalam aplikasi React.
