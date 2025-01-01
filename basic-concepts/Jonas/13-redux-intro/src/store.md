# README: Penjelasan Store dengan `configureStore` dari Redux Toolkit

### Pengertian

Pada bagian ini, kita membuat **Redux store** menggunakan `configureStore` dari Redux Toolkit. Store ini menyimpan seluruh state aplikasi dan mengatur bagaimana state tersebut bisa berubah melalui reducer yang sudah kita tentukan sebelumnya.

Store adalah tempat pusat di mana semua data global aplikasi kita disimpan. Dengan menggunakan `configureStore` dari Redux Toolkit, kita bisa mengonfigurasi store dengan lebih mudah dan efisien tanpa memerlukan boilerplate code yang berlebihan.

### Cara Berpikir React-Redux

1. **Store** adalah tempat penyimpanan state global aplikasi. Dalam hal ini, kita memiliki dua bagian dari state yang dikelola:
   - **`account`**: Berisi data terkait akun (seperti saldo, pinjaman, dll).
   - **`customer`**: Berisi data terkait customer (seperti nama lengkap dan ID nasional).
2. **Reducers**: Redux store memerlukan reducer untuk mengelola perubahan state. Di sini, kita sudah mendefinisikan reducer untuk akun (`accountReducer`) dan customer (`customerReducer`).

3. **`configureStore`**: Fungsi ini digunakan untuk membuat store dengan cara yang lebih sederhana dan lebih aman. Ini juga secara otomatis mengonfigurasi Redux DevTools dan middleware default.

### Analogi Sederhana

Bayangkan aplikasi ini seperti sebuah **perpustakaan digital**. Perpustakaan ini menyimpan dua jenis informasi:

- **Data customer**: Siapa saja yang terdaftar di perpustakaan.
- **Data akun**: Apa saja buku yang telah dipinjam oleh tiap pelanggan.

**Store** di sini berfungsi sebagai **rak penyimpanan** tempat kita menyimpan seluruh data pelanggan dan akun, dan kita menggunakan **reducers** untuk mengubah data tersebut.

### Penjelasan Kode Tiap Baris

#### 1. **Import Reducer**

```javascript
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
```

- Kita mengimpor **reducers** yang sudah kita buat sebelumnya:
  - `accountReducer`: Mengelola state terkait dengan akun pengguna (saldo, pinjaman, dll.).
  - `customerReducer`: Mengelola state terkait dengan informasi pelanggan (nama lengkap, ID, dll.).

#### 2. **Membuat Store**

```javascript
const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
```

- **`configureStore`** adalah fungsi dari Redux Toolkit yang digunakan untuk membuat Redux store dengan konfigurasi yang lebih mudah dan efisien.
- **`reducer`** adalah objek yang mendefinisikan bagian-bagian state yang dikelola oleh masing-masing reducer:
  - **`account`** akan dikelola oleh `accountReducer`.
  - **`customer`** akan dikelola oleh `customerReducer`.

Ini berarti Redux store akan memiliki dua bagian:

- **`state.account`**: Berisi state terkait akun.
- **`state.customer`**: Berisi state terkait customer.

#### 3. **Mengekspor Store**

```javascript
export default store;
```

- Setelah store berhasil dibuat, kita mengekspornya agar dapat digunakan di seluruh aplikasi, misalnya dengan `Provider` dari `react-redux` untuk menghubungkan store dengan komponen React.

### Kesimpulan

Dengan menggunakan **`configureStore`** dari Redux Toolkit, kita dapat membuat store dengan lebih mudah. Store ini akan mengelola state global aplikasi kita:

- **`account`**: Berisi state terkait akun pengguna (misalnya saldo dan pinjaman).
- **`customer`**: Berisi state terkait informasi pelanggan (seperti nama dan ID).

Store ini kemudian digunakan di seluruh aplikasi untuk menyimpan dan mengelola data yang dibutuhkan oleh berbagai komponen. Keuntungan menggunakan **Redux Toolkit** adalah pengaturan store menjadi lebih mudah dan kode menjadi lebih terstruktur dan ringkas tanpa banyak boilerplate.
