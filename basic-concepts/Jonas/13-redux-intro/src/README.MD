# README: Penjelasan Komponen `App` dalam React dengan Redux

### Pengertian

Pada kode di atas, kita akan melihat cara penggunaan React dengan Redux, serta pengintegrasian React-Redux Toolkit. `App.js` adalah komponen utama yang akan merender tampilan aplikasi dan berinteraksi dengan state global yang dikelola oleh Redux. Kita akan mengulas fungsi tiap bagian dari kode ini, serta cara berpikir yang perlu dipahami.

### Cara Berpikir React

Dalam React, aplikasi dibangun dari komponen-komponen yang saling berbagi state. React bertanggung jawab untuk merender tampilan UI berdasarkan state, dan setiap perubahan state akan meng-trigger re-render secara otomatis. Redux hadir untuk mengelola state global yang lebih besar dan kompleks, sehingga aplikasi React dapat lebih terstruktur dan mudah dipelihara.

### Analogi Sederhana

Bayangkan kita memiliki sebuah **bank** (aplikasi). Setiap nasabah (user) memiliki informasi tentang nama lengkap dan saldo akun. Setiap kali nasabah login (masuk ke aplikasi), mereka bisa melihat informasi akun, saldo, dan melakukan berbagai operasi perbankan. Redux di sini berperan sebagai **buku besar bank** yang menyimpan data-data seluruh nasabah, sementara React adalah **front-end** yang menampilkan informasi tersebut kepada nasabah.

### Penjelasan Kode Tiap Baris

```javascript
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";
```

- **Import Statements**: Baris-baris ini mengimpor komponen-komponen yang digunakan dalam aplikasi, seperti `CreateCustomer`, `Customer`, `AccountOperations`, dan `BalanceDisplay`. Semua komponen ini terkait dengan fitur tertentu (misalnya pembuatan customer, menampilkan informasi customer, melakukan operasi akun, dan menampilkan saldo akun).
- **useSelector**: Ini adalah hook dari React-Redux yang digunakan untuk mengakses state Redux. Di sini, kita mengambil data dari state global yang disimpan dalam Redux.

```javascript
function App() {
  const fullName = useSelector((state) => state.customer.fullName);
```

- **Function App**: Ini adalah komponen utama yang merender seluruh UI aplikasi.
- **`const fullName = useSelector(...)`**: Di sini, kita menggunakan hook `useSelector` untuk mengakses state global dari Redux. Fungsi ini mengambil data `fullName` dari bagian `customer` di state. `useSelector` memungkinkan kita untuk mengambil data dari Redux store secara langsung dan menjadikannya data lokal di komponen ini.

```javascript
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
```

- **`<div>` dan `<h1>`**: Bagian ini merender elemen HTML sederhana. Di dalam elemen `<h1>`, terdapat teks yang menandakan bahwa ini adalah aplikasi bank yang dibangun dengan React-Redux.

```javascript
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
```

- **Conditional Rendering**: Di sini kita menggunakan operator ternary (`? :`) untuk memeriksa apakah `fullName` kosong atau tidak.
  - **Jika `fullName` kosong**: Artinya belum ada customer yang terdaftar, sehingga kita merender komponen `CreateCustomer`, yang memungkinkan pengguna untuk memasukkan nama mereka dan membuat akun.
  - **Jika `fullName` tidak kosong**: Artinya sudah ada customer yang terdaftar, jadi kita merender komponen lain seperti:
    - `Customer`: Menampilkan informasi customer.
    - `AccountOperations`: Menyediakan kemampuan bagi customer untuk melakukan berbagai operasi akun (misalnya transfer uang, top-up saldo, dll).
    - `BalanceDisplay`: Menampilkan saldo akun customer.

```javascript
export default App;
```

- **Export Default**: Baris ini mengekspor komponen `App` agar bisa digunakan di tempat lain, seperti di `index.js` untuk merender aplikasi.

### Kesimpulan

Komponen `App` ini adalah titik awal dari aplikasi React yang menggunakan Redux. Dengan menggunakan `useSelector`, kita dapat mengakses state global yang dikelola oleh Redux untuk menentukan apakah sudah ada customer yang terdaftar atau belum. Berdasarkan itu, kita merender komponen yang sesuai. Jika belum ada customer yang terdaftar, maka kita menampilkan `CreateCustomer` untuk meminta user memasukkan nama. Jika sudah ada, kita menampilkan berbagai komponen terkait informasi customer dan akun.

Hal-hal yang perlu diingat:

- **`useSelector`** digunakan untuk mengambil state dari Redux.
- **Conditional Rendering** digunakan untuk menampilkan tampilan yang berbeda berdasarkan kondisi state.
- **Komponen terpisah**: Setiap komponen (`CreateCustomer`, `Customer`, dll.) menangani bagian fungsionalitas yang berbeda dalam aplikasi, menjaga agar kode tetap modular dan mudah dipelihara.

Dengan memahami struktur kode ini, kita bisa melihat bagaimana aplikasi React dan Redux bekerja bersama untuk menciptakan pengalaman yang lebih dinamis dan terorganisir.
