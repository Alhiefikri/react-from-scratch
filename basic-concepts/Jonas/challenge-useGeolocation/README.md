# README: Penjelasan Komponen dan Fungsi dalam Aplikasi React

### Pengertian

Aplikasi ini adalah contoh penggunaan React yang mengakses data geolokasi pengguna (posisi GPS) dengan menggunakan hook `useGeolocation` dan menampilkan informasi posisi serta jumlah klik pada tombol yang diminta oleh pengguna.

### Cara Berpikir React

React bekerja dengan konsep _komponen_, di mana setiap komponen dapat mengelola _state_ (status internalnya) dan merender (menampilkan) UI sesuai dengan perubahan state tersebut. Ketika suatu event terjadi, React akan menghitung perubahan state dan merender ulang UI sesuai dengan kondisi baru.

Dalam aplikasi ini, kita menggunakan React hooks seperti `useState` dan `useGeolocation` untuk menangani state dan mengakses data geolokasi. UI akan diperbarui setiap kali state berubah, seperti ketika pengguna mengklik tombol untuk meminta posisi mereka.

### Analogi Sederhana

Bayangkan Anda sedang menggunakan aplikasi peta di ponsel Anda. Ketika Anda mengklik tombol "Dapatkan Posisi Saya", aplikasi akan mencoba untuk menemukan lokasi Anda dan menampilkannya di layar. Sambil menunggu proses pencarian lokasi selesai, aplikasi menampilkan pesan "Memuat posisi...". Setelah lokasi ditemukan, aplikasi akan menunjukkan koordinatnya (misalnya, latitude dan longitude), serta memberi tahu Anda berapa kali Anda telah meminta lokasi tersebut.

### Penjelasan Code Tiap Baris

```javascript
import { useState } from "react";
import { useGeolocation } from "./useGeolocation";
```

- **`import { useState } from "react";`**  
  Mengimpor hook `useState` dari React. `useState` digunakan untuk membuat dan mengelola state dalam komponen. Di sini, kita menggunakannya untuk menyimpan jumlah klik tombol dan status pengambilan posisi GPS.

- **`import { useGeolocation } from "./useGeolocation";`**  
  Mengimpor hook kustom `useGeolocation`, yang mungkin mengakses API geolokasi untuk mendapatkan posisi GPS pengguna. Hook ini mengembalikan objek yang berisi status pengambilan posisi dan posisi GPS itu sendiri.

```javascript
export default function App() {
  const [countClicks, setCountClicks] = useState(0);
```

- **`export default function App()`**  
  Mendefinisikan komponen utama `App`. Komponen ini adalah komponen fungsional yang akan dirender ke layar.

- **`const [countClicks, setCountClicks] = useState(0);`**  
  Mendeklarasikan state `countClicks` dengan nilai awal `0`. State ini digunakan untuk melacak berapa kali pengguna telah mengklik tombol untuk meminta posisi. `setCountClicks` adalah fungsi yang digunakan untuk memperbarui nilai state ini.

```javascript
const {
  isLoading,
  position: { lat, lng },
  error,
  getPosition,
} = useGeolocation();
```

- **`const { isLoading, position: { lat, lng }, error, getPosition } = useGeolocation();`**  
  Memanggil hook `useGeolocation` yang mengembalikan objek berisi status pengambilan data posisi:
  - `isLoading`: Menandakan apakah data posisi sedang dimuat.
  - `lat` dan `lng`: Koordinat latitude dan longitude yang didapat dari posisi pengguna.
  - `error`: Menyimpan pesan error jika terjadi kesalahan dalam mendapatkan posisi.
  - `getPosition`: Fungsi untuk memulai pengambilan data posisi.

```javascript
function handleClick() {
  setCountClicks((count) => count + 1);
  getPosition();
}
```

- **`function handleClick()`**  
  Fungsi ini dipanggil ketika tombol diklik. Di dalamnya:
  - `setCountClicks((count) => count + 1)`: Mengupdate state `countClicks`, menambahkan 1 ke nilai sebelumnya untuk menghitung jumlah klik tombol.
  - `getPosition()`: Memanggil fungsi `getPosition` dari `useGeolocation` untuk mencoba mendapatkan posisi GPS.

```javascript
  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        Get my position
      </button>
```

- **`return (...)`**  
  Bagian ini merender JSX (HTML-like syntax) untuk UI aplikasi. Di dalamnya terdapat:
  - **`<button onClick={handleClick} disabled={isLoading}>`**  
    Tombol yang ketika diklik akan memanggil fungsi `handleClick`. Tombol ini juga dinonaktifkan (disabled) jika posisi masih dalam proses pengambilan (`isLoading` bernilai `true`).

```javascript
{
  isLoading && <p>Loading position...</p>;
}
{
  error && <p>{error}</p>;
}
```

- **`{isLoading && <p>Loading position...</p>}`**  
  Menampilkan pesan "Loading position..." jika status `isLoading` adalah `true` (menandakan posisi masih dalam proses pencarian).

- **`{error && <p>{error}</p>}`**  
  Jika ada error, tampilkan pesan error tersebut.

```javascript
{
  !isLoading && !error && lat && lng && (
    <p>
      Your GPS position:{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
      >
        {lat}, {lng}
      </a>
    </p>
  );
}
```

- **`{!isLoading && !error && lat && lng && (...)}`**  
  Jika posisi sudah berhasil didapatkan dan tidak ada error, tampilkan koordinat GPS pengguna dalam bentuk link ke peta (menggunakan OpenStreetMap).
  - `lat` dan `lng` adalah nilai koordinat yang didapat.
  - Link akan mengarahkan ke peta OpenStreetMap dengan posisi yang sesuai.

```javascript
      <p>You requested position {countClicks} times</p>
    </div>
  );
}
```

- **`<p>You requested position {countClicks} times</p>`**  
  Menampilkan jumlah klik tombol yang dilakukan pengguna untuk meminta posisi GPS.

### Kesimpulan

Aplikasi ini merupakan contoh sederhana penggunaan React dengan hooks untuk mengelola state dan interaksi pengguna. Komponen utama `App` melakukan hal berikut:

- Menggunakan `useState` untuk mengelola jumlah klik tombol.
- Menggunakan hook kustom `useGeolocation` untuk mendapatkan posisi GPS pengguna.
- Menampilkan status posisi, error, dan jumlah permintaan posisi dari pengguna.

Dengan memahami konsep ini, Anda dapat mulai mengembangkan aplikasi React yang lebih kompleks yang melibatkan interaksi dengan API eksternal atau manipulasi state lebih lanjut.
