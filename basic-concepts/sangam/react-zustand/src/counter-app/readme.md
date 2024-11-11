Komponen `ManageCounter` ini bertugas untuk mengelola dan mengubah nilai counter yang ada di dalam state store Zustand. Berikut adalah penjelasan mendetail tentang komponen ini dan bagaimana ia berinteraksi dengan **Zustand store**.

---

## Penjelasan Komponen `ManageCounter`

### Tujuan Komponen

Komponen `ManageCounter` memiliki tujuan utama untuk memberikan kontrol kepada pengguna dalam mengubah nilai **counter** yang dikelola oleh store Zustand. Ketika pengguna mengklik tombol, nilai counter akan meningkat 1 unit.

### Penjelasan Kode

```javascript
import { useActions } from "../store/use-counter";

function ManageCounter() {
  // Mengambil fungsi handleIncrementCount dari actions di store Zustand
  const { handleIncrementCount } = useActions();

  return (
    <button
      style={{
        marginBottom: "20px",
        background: "black",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
      }}
      onClick={handleIncrementCount} // Fungsi ini dipanggil saat tombol diklik
    >
      Handle Counter Value
    </button>
  );
}

export default ManageCounter;
```

### Penjelasan Setiap Bagian Kode

1. **Mengambil Aksi `handleIncrementCount` dari Store**:

   ```javascript
   const { handleIncrementCount } = useActions();
   ```

   - Menggunakan **custom hook `useActions`** untuk mengambil aksi `handleIncrementCount` yang ada di store Zustand. Fungsi ini bertanggung jawab untuk memperbarui nilai counter di dalam state store.
   - `handleIncrementCount` adalah fungsi yang sudah didefinisikan dalam store yang mengubah state `count` dengan menambahkannya 1 setiap kali dipanggil.

2. **Membuat Tombol dengan Styling**:
   ```javascript
   <button
     style={{
       marginBottom: "20px",
       background: "black",
       color: "white",
       fontSize: "20px",
       fontWeight: "bold",
     }}
     onClick={handleIncrementCount} // Panggil fungsi saat tombol diklik
   >
     Handle Counter Value
   </button>
   ```
   - Tombol ini memiliki beberapa gaya CSS untuk mempercantik tampilannya: margin bawah 20px, latar belakang hitam, teks putih, ukuran font 20px, dan teks yang tebal (`fontWeight: "bold"`).
   - Ketika tombol ini diklik, akan memicu fungsi `handleIncrementCount` yang telah diambil dari store menggunakan `useActions`. Fungsi ini akan menambah nilai counter yang disimpan dalam state `count` di store.

### Alur Kerja Komponen

1. **Pengambilan Aksi**:

   - Ketika komponen pertama kali dimuat, `useActions` akan mengekstrak aksi `handleIncrementCount` dari store Zustand. Fungsi ini dapat digunakan untuk memanipulasi state di dalam store.

2. **Penanganan Klik Tombol**:

   - Ketika pengguna mengklik tombol "Handle Counter Value", event handler `onClick` akan memanggil fungsi `handleIncrementCount` yang ada di store.
   - `handleIncrementCount` kemudian memperbarui state `count` dalam store Zustand.

3. **Perubahan State**:
   - Setelah tombol diklik dan `handleIncrementCount` dipanggil, nilai `count` akan bertambah 1 di dalam store Zustand.
   - Komponen lain yang mengakses state `count` akan dirender ulang dengan nilai baru.

---

## Interaksi Komponen dengan Store Zustand

Komponen `ManageCounter` sangat sederhana, namun efisien dalam mengelola dan memperbarui state counter. Berikut adalah cara komponen ini berinteraksi dengan **Zustand**:

1. **Mengakses Fungsi di Store**:

   - Komponen ini menggunakan hook `useActions` untuk mengakses fungsi `handleIncrementCount` dari store. Fungsi ini digunakan untuk mengubah state `count` dalam store.

2. **Memperbarui State dengan Aksi**:

   - Setiap kali tombol diklik, fungsi `handleIncrementCount` akan dipanggil, yang menyebabkan store memperbarui nilai `count` dengan menambahkannya 1.

3. **Menggunakan State di Komponen Lain**:
   - Meskipun komponen `ManageCounter` hanya bertugas untuk mengubah nilai counter, komponen lain yang mengakses state `count` dari store akan mendapatkan nilai yang diperbarui secara otomatis.

---

## Kesimpulan

Komponen `ManageCounter` adalah contoh komponen yang sederhana namun fungsional untuk mengelola nilai counter dengan **Zustand**. Dengan mengakses aksi `handleIncrementCount` dari store menggunakan `useActions`, komponen ini memungkinkan pengguna untuk menambah nilai counter setiap kali tombol diklik. Interaksi ini terjadi secara efisien melalui Zustand, yang menangani pembaruan state dan memastikan komponen lain yang memerlukan state ini mendapatkan data yang terbaru tanpa perlu merender ulang secara manual.

Komponen `CounterValue` ini bertugas untuk menampilkan nilai **counter** yang dikelola di dalam store Zustand. Komponen ini mengambil nilai **`count`** dari store dan menampilkannya di UI. Berikut adalah penjelasan mendetail tentang komponen ini dan bagaimana ia berinteraksi dengan **Zustand store**.

---

## Penjelasan Komponen `CounterValue`

### Tujuan Komponen

Komponen `CounterValue` digunakan untuk menampilkan nilai dari **counter** yang ada di dalam state store Zustand. Komponen ini membaca nilai counter secara langsung dari store dan menampilkan nilai tersebut di UI.

### Penjelasan Kode

```javascript
import useCounter from "../store/use-counter";

function CounterValue() {
  // Mengambil nilai 'count' dari store Zustand
  const count = useCounter((state) => state.count);

  // Mencetak nilai count ke konsol untuk debugging
  console.log(count);

  return <div>Counter Value is {count}</div>;
}

export default CounterValue;
```

### Penjelasan Setiap Bagian Kode

1. **Mengakses State dari Store Zustand**:

   ```javascript
   const count = useCounter((state) => state.count);
   ```

   - `useCounter` adalah hook yang digunakan untuk mengakses state dari store Zustand. Di sini, kita menggunakan `useCounter` untuk mengambil nilai `count` dari store.
   - `useCounter((state) => state.count)` berarti kita hanya mengambil nilai `count` dari state, bukan seluruh state. Dengan ini, komponen ini hanya berfokus pada bagian `count` dari store.

2. **Mencetak Nilai `count` ke Console**:

   ```javascript
   console.log(count);
   ```

   - Untuk tujuan debugging, kita mencetak nilai `count` ke konsol setiap kali komponen dirender ulang. Ini memungkinkan kita untuk memantau apakah nilai `count` berubah setiap kali state diperbarui.

3. **Menampilkan Nilai `count` di UI**:
   ```javascript
   return <div>Counter Value is {count}</div>;
   ```
   - Komponen ini menampilkan nilai `count` yang diambil dari store di dalam elemen `div`. Setiap kali nilai `count` berubah (misalnya, karena tombol di komponen lain yang menambah nilai counter), komponen ini akan secara otomatis diperbarui dengan nilai terbaru.

---

### Alur Kerja Komponen

1. **Pengambilan Data dari Store**:

   - Komponen `CounterValue` pertama kali dimuat, kemudian menggunakan `useCounter` untuk mendapatkan nilai `count` dari store Zustand.

2. **Pembaruan State**:

   - Ketika ada perubahan pada nilai `count` (misalnya, ketika tombol di komponen lain ditekan untuk menambah nilai counter), store Zustand akan memperbarui nilai `count`.
   - Karena `CounterValue` mengakses `count` secara langsung dari store, komponen ini akan dirender ulang secara otomatis setiap kali nilai `count` berubah.

3. **Rendering UI**:
   - Komponen menampilkan nilai terbaru dari `count` di UI, memungkinkan pengguna untuk melihat perubahan secara langsung saat nilai counter berubah.

---

## Interaksi Komponen dengan Store Zustand

Komponen `CounterValue` mengandalkan **Zustand** untuk mengelola state secara terpusat. Berikut adalah bagaimana interaksi antara komponen ini dan store terjadi:

1. **Membaca State**:

   - `CounterValue` menggunakan `useCounter` untuk mengakses nilai `count` dari store. State `count` ini berasal dari store Zustand yang dikelola dengan hook `create`.

2. **Mengupdate State**:

   - Meskipun komponen ini hanya membaca data, komponen lain, seperti `ManageCounter`, dapat mengubah nilai `count` (misalnya, dengan menambahkannya 1). Ketika nilai `count` berubah, `CounterValue` akan secara otomatis mendapatkan nilai terbaru dari store dan merender ulang UI.

3. **Reaktivitas**:
   - Karena Zustand bersifat reaktif, setiap kali nilai state berubah, komponen yang mengakses state tersebut (seperti `CounterValue`) akan langsung dirender ulang untuk menampilkan nilai yang baru.

---

## Kesimpulan

Komponen `CounterValue` adalah contoh sederhana untuk menampilkan nilai **counter** yang dikelola dengan **Zustand**. Komponen ini mengakses nilai `count` dari store Zustand menggunakan `useCounter` dan menampilkan nilai tersebut di UI. Karena Zustand secara otomatis mengelola pembaruan state secara reaktif, komponen ini akan diperbarui setiap kali nilai `count` berubah. Dengan cara ini, aplikasi dapat menampilkan nilai counter yang selalu terkini tanpa perlu melakukan render ulang secara manual.
