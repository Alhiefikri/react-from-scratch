# React Zustand Counter & Products Example

Proyek ini adalah aplikasi React yang menggunakan **Zustand** untuk mengelola state secara global. Aplikasi ini mencakup pengelolaan nilai **counter** dan penampilan daftar produk yang diambil dari API eksternal.

## Deskripsi Singkat Proyek

Proyek ini terdiri dari beberapa komponen React yang berinteraksi dengan **Zustand** untuk mengelola dan menampilkan data:

- **Counter** yang dapat dimodifikasi dengan tombol untuk meningkatkan nilai.
- **Products** yang menampilkan daftar produk yang diambil dari API menggunakan **Zustand** untuk mengelola state produk.

## Fitur Utama Aplikasi

1. **Mengelola Nilai Counter**:
   - Aplikasi ini memiliki tombol yang memungkinkan pengguna untuk menambah nilai counter.
   - Nilai counter ini dikelola menggunakan **Zustand**.
2. **Menampilkan Daftar Produk**:
   - Aplikasi mengambil data produk dari API eksternal menggunakan `fetch` dan menampilkannya di UI.
   - Produk yang ditampilkan mencakup judul dan thumbnail gambar produk.

## Penjelasan Setiap Komponen dan Fungsinya

### 1. **Store Zustand (`use-counter.js`)**

Store ini mengelola dua bagian state: `count` dan `listOfProducts`.

- `count` digunakan untuk menyimpan nilai counter yang dapat diperbarui.
- `listOfProducts` menyimpan data produk yang diambil dari API.

Fungsi dalam store:

- **`handleIncrementCount`**: Meningkatkan nilai counter (`count`).
- **`fetchListOfProducts`**: Mengambil daftar produk dari API dan memperbarui state `listOfProducts`.

```javascript
import { create } from "zustand";

const useCounter = create((set) => {
  return {
    count: 5000,
    listOfProducts: [],
    actions: {
      handleIncrementCount: () =>
        set((state) => ({
          count: state.count + 1,
        })),

      fetchListOfProducts: async () => {
        const apiResponse = await fetch("https://dummyjson.com/products");
        const result = await apiResponse.json();

        set({
          listOfProducts: result?.products,
        });
      },
    },
  };
});

export const useActions = () => useCounter((state) => state.actions);

export default useCounter;
```

### 2. **ManageCounter (`ManageCounter.js`)**

Komponen ini berfungsi untuk menambah nilai counter setiap kali tombol diklik. Ia memanfaatkan fungsi **`handleIncrementCount`** yang diambil dari store Zustand.

```javascript
import { useActions } from "../store/use-counter";

function ManageCounter() {
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
      onClick={handleIncrementCount}
    >
      Handle Counter Value
    </button>
  );
}

export default ManageCounter;
```

### 3. **CounterValue (`CounterValue.js`)**

Komponen ini digunakan untuk menampilkan nilai **counter** yang dikelola oleh store Zustand. Komponen ini mengakses nilai `count` dari store dan menampilkannya di UI.

```javascript
import useCounter from "../store/use-counter";

function CounterValue() {
  const count = useCounter((state) => state.count);

  console.log(count); // Debugging

  return <div>Counter Value is {count}</div>;
}

export default CounterValue;
```

### 4. **Products (`Products.js`)**

Komponen ini menampilkan daftar produk yang diambil dari API menggunakan **Zustand** untuk mengelola state produk. Produk ditampilkan dalam bentuk daftar dengan judul dan gambar thumbnail.

```javascript
import { useEffect } from "react";
import useCounter, { useActions } from "../store/use-counter";

function Products() {
  const productList = useCounter((state) => state.listOfProducts);
  const { fetchListOfProducts } = useActions();

  useEffect(() => {
    fetchListOfProducts(); // Panggil API untuk mengambil produk
  }, []);

  console.log(productList); // Debugging

  return (
    <div>
      <h1>List of Products</h1>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {productList?.length > 0 ? (
          productList.map((singleProductItem) => (
            <div key={singleProductItem.id}>
              <p>{singleProductItem?.title}</p>
              <img src={singleProductItem?.thumbnail} alt="" />
            </div>
          ))
        ) : (
          <h1>No products</h1>
        )}
      </ul>
    </div>
  );
}

export default Products;
```

---

## Cara Kerja Aplikasi Secara Keseluruhan

1. **Mengelola State Counter**:

   - Komponen **`ManageCounter`** memungkinkan pengguna untuk menambah nilai counter dengan memanggil fungsi **`handleIncrementCount`** dari store.
   - Ketika tombol diklik, fungsi ini memperbarui nilai `count` di store.
   - Komponen **`CounterValue`** secara otomatis mendapatkan nilai terbaru dari `count` dan menampilkannya di UI.

2. **Mengambil dan Menampilkan Daftar Produk**:

   - Komponen **`Products`** memanggil **`fetchListOfProducts`** untuk mengambil daftar produk dari API dan memperbarui state `listOfProducts` di store.
   - Produk yang berhasil diambil ditampilkan dengan judul dan gambar thumbnail.

3. **Reaktivitas dengan Zustand**:
   - Karena aplikasi menggunakan **Zustand**, setiap kali state `count` atau `listOfProducts` diperbarui, komponen-komponen yang mengakses state tersebut akan merender ulang secara otomatis untuk menampilkan nilai terbaru.

---

## Langkah-langkah untuk Menjalankan Aplikasi

### 1. Instalasi Dependensi

Untuk memulai, pastikan Anda memiliki **Node.js** dan **npm** terpasang di komputer Anda. Jika belum, Anda bisa mengunduhnya dari [nodejs.org](https://nodejs.org).

Kemudian, ikuti langkah-langkah berikut:

```bash
# Clone repositori proyek ini
git clone https://github.com/username/repository-name.git

# Masuk ke direktori proyek
cd repository-name

# Instal dependensi proyek
npm install
```

### 2. Menjalankan Aplikasi

Setelah semua dependensi terinstal, Anda dapat menjalankan aplikasi dengan perintah berikut:

```bash
npm start
```

Aplikasi akan dijalankan di [http://localhost:3000](http://localhost:3000) dan dapat diakses melalui browser.

---

## Kesimpulan

Proyek ini adalah contoh sederhana yang memanfaatkan **Zustand** untuk mengelola state dalam aplikasi React. Aplikasi ini memungkinkan pengguna untuk:

- Menambah nilai counter.
- Melihat daftar produk yang diambil dari API eksternal.

Dengan menggunakan **Zustand**, pengelolaan state menjadi lebih mudah, dan komponen-komponen aplikasi dapat tetap terpisah dan modular, sambil memastikan data tetap konsisten di seluruh aplikasi.
