# README Proyek Aplikasi dengan React dan Zustand

## Deskripsi Singkat Proyek

Proyek ini adalah aplikasi React yang menggunakan **Zustand** sebagai state management untuk mengelola dua state utama: jumlah hitung (`count`) dan daftar produk (`listOfProducts`). Aplikasi ini memiliki dua fitur utama:

- **Increment Count**: Meningkatkan nilai `count` setiap kali pengguna melakukan aksi tertentu.
- **Menampilkan Daftar Produk**: Mengambil daftar produk dari API eksternal (DummyJSON) dan menyimpannya dalam state `listOfProducts`.

## Fitur Utama Aplikasi

- **Hitung Jumlah (`count`)**: Aplikasi memiliki sebuah counter yang dimulai dari nilai `5000`. Pengguna dapat menambah nilai counter ini dengan mengklik tombol atau memicu aksi lain yang memanggil fungsi `handleIncrementCount`.
- **Menampilkan Daftar Produk**: Daftar produk yang diambil dari API `https://dummyjson.com/products` akan disimpan dalam state `listOfProducts` dan dapat ditampilkan dalam aplikasi.
- **Mengelola State dengan Zustand**: Zustand digunakan untuk mengelola state secara efisien tanpa perlu menggunakan **Redux** atau **Context API**.

## Penjelasan Setiap Komponen dan Fungsinya

### `useCounter` (Store Zustand)

- **Fungsi**: `useCounter` adalah store Zustand yang menyimpan dua state utama, yaitu `count` dan `listOfProducts`. Store ini juga menyediakan dua aksi utama di bawah objek `actions`:
  - **`handleIncrementCount`**: Meningkatkan nilai `count` setiap kali dipanggil.
  - **`fetchListOfProducts`**: Mengambil daftar produk dari API eksternal dan memperbarui state `listOfProducts`.
- **State yang Disimpan**:

  - `count`: Menyimpan nilai counter yang dapat diubah dengan `handleIncrementCount`.
  - `listOfProducts`: Menyimpan data produk yang diambil dari API.

- **Code Explanation**:

  ```javascript
  import { create } from "zustand";

  const useCounter = create((set) => {
    return {
      count: 5000, // State untuk menyimpan nilai count
      listOfProducts: [], // State untuk menyimpan daftar produk
      actions: {
        // Fungsi untuk menambah nilai count
        handleIncrementCount: () =>
          set((state) => ({
            count: state.count + 1,
          })),

        // Fungsi untuk mengambil daftar produk dari API
        fetchListOfProducts: async () => {
          const apiResponse = await fetch("https://dummyjson.com/products");
          const result = await apiResponse.json();

          set({
            listOfProducts: result?.products, // Memperbarui state listOfProducts
          });
        },
      },
    };
  });

  export const useActions = () => useCounter((state) => state.actions);

  export default useCounter;
  ```

  **Penjelasan**:

  - `create` adalah fungsi dari Zustand yang digunakan untuk membuat **store**. Dalam hal ini, kita membuat store yang menyimpan `count`, `listOfProducts`, dan sebuah objek `actions` yang berisi dua fungsi: `handleIncrementCount` dan `fetchListOfProducts`.
  - `set`: Fungsi ini digunakan untuk memperbarui state dalam store. Contohnya, `set({ count: state.count + 1 })` akan meningkatkan nilai `count` sebesar 1.
  - `fetchListOfProducts`: Fungsi ini berfungsi untuk mengambil data produk dari API, kemudian menyimpannya di state `listOfProducts`.

### `useActions`

- **Fungsi**: `useActions` adalah custom hook yang memudahkan kita untuk mengakses aksi-aksi yang ada di dalam store Zustand. Dalam hal ini, kita hanya mengekstrak bagian `actions` dari store `useCounter` menggunakan `useCounter((state) => state.actions)`.

  **Code Example**:

  ```javascript
  export const useActions = () => useCounter((state) => state.actions);
  ```

  **Penjelasan**:

  - `useActions` memungkinkan kita untuk memanggil `handleIncrementCount` dan `fetchListOfProducts` dari komponen lain yang membutuhkan aksi tersebut tanpa perlu mengakses seluruh state.

## Penjelasan Cara Kerja Aplikasi Secara Keseluruhan

### Pengelolaan State dengan Zustand

- **State**: Aplikasi ini mengelola dua state utama:

  - **`count`**: Nilai ini disimpan di dalam store Zustand dan dimulai dengan nilai `5000`.
  - **`listOfProducts`**: Daftar produk yang diambil dari API eksternal, disimpan di dalam state ini.

- **Actions**:

  - **`handleIncrementCount`**: Meningkatkan nilai `count` sebesar 1 setiap kali dipanggil.
  - **`fetchListOfProducts`**: Mengambil data produk dari API `https://dummyjson.com/products` dan menyimpannya dalam `listOfProducts`.

- **Interaksi antar Komponen**:
  - Komponen lain dapat mengakses state `count` dan `listOfProducts` serta memanggil aksi-aksi seperti `handleIncrementCount` dan `fetchListOfProducts` melalui hook `useActions` atau `useCounter`.

### Cara Komponen Berinteraksi dengan Zustand

1. **Mengakses State**:
   - Komponen bisa mengakses state menggunakan `useCounter` atau hanya bagian tertentu menggunakan `useActions` untuk mendapatkan aksi yang diperlukan.
2. **Mengubah State**:

   - Ketika pengguna memicu `handleIncrementCount`, nilai `count` akan bertambah 1.
   - Ketika pengguna memicu `fetchListOfProducts`, daftar produk akan diambil dari API dan disimpan dalam `listOfProducts`.

3. **Contoh Penggunaan dalam Komponen**:

   ```jsx
   import React, { useEffect } from "react";
   import { useActions } from "./store";
   import useCounter from "./store";

   function App() {
     const { handleIncrementCount, fetchListOfProducts } = useActions();
     const { count, listOfProducts } = useCounter();

     useEffect(() => {
       fetchListOfProducts(); // Ambil daftar produk saat komponen pertama kali dimuat
     }, [fetchListOfProducts]);

     return (
       <div>
         <h1>Counter: {count}</h1>
         <button onClick={handleIncrementCount}>Tambah Count</button>
         <h2>Daftar Produk:</h2>
         <ul>
           {listOfProducts.map((product) => (
             <li key={product.id}>{product.name}</li>
           ))}
         </ul>
       </div>
     );
   }

   export default App;
   ```

   **Penjelasan**:

   - `handleIncrementCount`: Dipanggil saat tombol "Tambah Count" diklik untuk menambah nilai counter.
   - `fetchListOfProducts`: Dipanggil dalam `useEffect` untuk mengambil daftar produk saat komponen pertama kali dimuat.
   - `count`: Ditampilkan di antarmuka pengguna untuk menunjukkan nilai counter saat ini.
   - `listOfProducts`: Daftar produk yang diambil dari API dan ditampilkan dalam bentuk list.

---

Dengan menggunakan **Zustand**, aplikasi ini dapat mengelola state dengan lebih sederhana dan ringan dibandingkan dengan state management lain seperti **Redux**, sekaligus memudahkan pengelolaan data dalam aplikasi React tanpa memerlukan boilerplate kode yang berlebihan.
