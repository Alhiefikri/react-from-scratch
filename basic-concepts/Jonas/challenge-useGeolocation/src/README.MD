# README: Penjelasan tentang Custom Hook `useGeolocation`

### Pengertian

**Custom hook** adalah sebuah fungsi JavaScript yang menggunakan hook bawaan dari React (seperti `useState`, `useEffect`, dsb.) untuk mengelola logika tertentu, dan dapat digunakan kembali di berbagai komponen tanpa perlu menduplikasi kode. Dalam aplikasi ini, kita menggunakan custom hook yang bernama `useGeolocation` untuk menangani logika pengambilan data geolokasi pengguna (latitude dan longitude) dari browser.

Dengan membuat custom hook, kita bisa mengisolasi logika pengambilan posisi ke dalam satu tempat, sehingga komponen-komponen yang memerlukan geolokasi hanya perlu mengimpor hook ini tanpa harus mengetahui bagaimana cara kerjanya secara mendetail.

### Kenapa Membuat Custom Hook?

1. **Pemeliharaan Kode yang Lebih Mudah**  
   Dengan menggunakan custom hook, logika terkait pengambilan data posisi hanya perlu ditulis sekali, dan dapat digunakan di berbagai tempat tanpa harus mengulang kode tersebut. Ini membuat aplikasi lebih terstruktur dan mudah dipelihara.

2. **Pemecahan Masalah yang Lebih Terisolasi**  
   Custom hook memungkinkan Anda untuk memecah logika kompleks (seperti pengambilan data eksternal atau pengelolaan state yang rumit) menjadi potongan-potongan kecil yang lebih mudah dipahami dan dikelola.

3. **Kode yang Lebih Bersih dan Reusable**  
   Custom hook dapat digunakan di banyak komponen tanpa harus menulis kode yang berulang-ulang. Ini meningkatkan reusability (kemampuan untuk menggunakan kembali kode) dan mengurangi duplikasi.

### Penjelasan Kode Custom Hook `useGeolocation`

Berikut adalah implementasi custom hook `useGeolocation`, yang digunakan untuk mengambil posisi GPS pengguna.

```javascript
import { useState } from "react";

export function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}
```

#### Penjelasan Baris per Baris

1. **`import { useState } from "react";`**  
   Mengimpor hook `useState` dari React untuk membuat dan mengelola state dalam hook kustom ini.

2. **`export function useGeolocation() {`**  
   Mendefinisikan fungsi `useGeolocation`, yang akan menjadi custom hook yang kita buat. Fungsi ini mengelola state terkait pengambilan posisi GPS.

3. **`const [isLoading, setIsLoading] = useState(false);`**  
   Mendeklarasikan state `isLoading`, yang berfungsi untuk menandakan apakah aplikasi sedang memuat posisi atau tidak. Nilai awalnya adalah `false`.

4. **`const [position, setPosition] = useState({});`**  
   State `position` digunakan untuk menyimpan data posisi yang diperoleh, dalam hal ini berupa latitude dan longitude. Nilai awalnya adalah objek kosong `{}`.

5. **`const [error, setError] = useState(null);`**  
   State `error` digunakan untuk menyimpan pesan kesalahan jika ada masalah saat mengambil posisi GPS. Nilai awalnya adalah `null`.

6. **`function getPosition() {`**  
   Mendefinisikan fungsi `getPosition` yang digunakan untuk memulai proses pengambilan posisi GPS pengguna. Fungsi ini akan dipanggil ketika kita ingin mendapatkan posisi pengguna.

7. **`if (!navigator.geolocation)`**  
   Mengecek apakah browser mendukung API geolokasi. Jika tidak mendukung, kita akan menampilkan pesan error "Your browser does not support geolocation".

8. **`return setError("Your browser does not support geolocation");`**  
   Jika browser tidak mendukung geolokasi, kita set state `error` dengan pesan tersebut.

9. **`setIsLoading(true);`**  
   Sebelum memulai pengambilan posisi, kita set state `isLoading` menjadi `true`, menandakan bahwa proses pengambilan posisi sedang berlangsung.

10. **`navigator.geolocation.getCurrentPosition(...)`**  
    Menggunakan API geolokasi `navigator.geolocation.getCurrentPosition` untuk mendapatkan posisi pengguna. Fungsi ini menerima dua parameter:

    - **Callback sukses**: Jika posisi berhasil didapat, kita mendapatkan objek `pos`, yang berisi informasi posisi. Dalam hal ini, kita hanya mengambil latitude (`lat`) dan longitude (`lng`), lalu menyimpannya di state `position`.
    - **Callback error**: Jika terjadi kesalahan (misalnya, pengguna menolak permintaan akses lokasi), kita menangani kesalahan dengan menyimpan pesan kesalahan di state `error`.

11. **`setIsLoading(false);`**  
    Setelah proses pengambilan posisi selesai (baik berhasil atau gagal), kita set `isLoading` menjadi `false`, menandakan bahwa proses telah selesai.

12. **`return { isLoading, position, error, getPosition };`**  
    Hook ini mengembalikan sebuah objek yang berisi:
    - `isLoading`: Status apakah data posisi sedang dimuat.
    - `position`: Data posisi (latitude dan longitude).
    - `error`: Pesan kesalahan jika ada masalah saat mengambil posisi.
    - `getPosition`: Fungsi untuk memulai proses pengambilan posisi.

### Keuntungan Menggunakan Custom Hook `useGeolocation`

1. **Pemisahan Logika**  
   Dengan menggunakan custom hook `useGeolocation`, kita memisahkan logika terkait pengambilan posisi dari UI komponen utama. Ini membuat kode lebih bersih dan lebih terorganisir.

2. **Kemudahan Penggunaan**  
   Komponen yang membutuhkan data posisi hanya perlu memanggil `useGeolocation()`, tanpa perlu mengetahui detail implementasi pengambilan posisi. Ini meningkatkan kejelasan dan keterbacaan kode.

3. **Reusability**  
   Jika kita membutuhkan fitur geolokasi di komponen lain, kita cukup mengimpor dan menggunakan hook `useGeolocation` lagi, tanpa perlu menulis kode pengambilan posisi yang sama.

### Kesimpulan

Custom hook `useGeolocation` adalah cara yang efektif untuk mengisolasi logika pengambilan data geolokasi pengguna ke dalam satu tempat, yang kemudian dapat digunakan kembali di berbagai komponen aplikasi. Dengan menggunakan custom hook, kita mendapatkan kode yang lebih terstruktur, lebih mudah dipelihara, dan lebih mudah dipahami. Custom hook ini juga memudahkan kita dalam menangani status loading dan error dengan cara yang lebih terorganisir.
