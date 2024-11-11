## Penjelasan Komponen `Products`

### Tujuan Komponen

Komponen `Products` bertujuan untuk menampilkan daftar produk yang diambil dari API. Komponen ini:

1. Mengambil daftar produk menggunakan fungsi `fetchListOfProducts` yang ada di dalam store Zustand.
2. Menampilkan produk dalam bentuk list menggunakan elemen `ul` dan `li`.
3. Jika produk tersedia, menampilkan judul dan thumbnail produk. Jika tidak ada produk, menampilkan pesan "No products".

### Penjelasan Kode

```javascript
import { useEffect } from "react";
import useCounter, { useActions } from "../store/use-counter";

function Products() {
  // Mengambil state listOfProducts dari store Zustand
  const productList = useCounter((state) => state.listOfProducts);

  // Mengambil fungsi fetchListOfProducts dari actions di store
  const { fetchListOfProducts } = useActions();

  // Mengambil data produk saat komponen pertama kali dimuat
  useEffect(() => {
    fetchListOfProducts(); // Panggil fungsi untuk mengambil produk dari API
  }, [fetchListOfProducts]); // Dependensi kosong berarti hanya dijalankan sekali saat komponen pertama kali dimuat

  console.log(productList); // Mencetak listOfProducts ke console untuk debugging

  return (
    <div>
      <h1>List of Products</h1>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {/* Cek apakah produk ada di listOfProducts */}
        {productList?.length > 0 ? (
          // Jika ada produk, tampilkan masing-masing produk
          productList.map((singleProductItem) => (
            <div key={singleProductItem.id}>
              <p>{singleProductItem?.title}</p>
              <img src={singleProductItem?.thumbnail} alt="" />
            </div>
          ))
        ) : (
          // Jika tidak ada produk, tampilkan pesan "No products"
          <h1>No products</h1>
        )}
      </ul>
    </div>
  );
}

export default Products;
```

### Penjelasan Setiap Bagian Kode

1. **Mengambil Data dari Zustand Store**:

   ```javascript
   const productList = useCounter((state) => state.listOfProducts);
   ```

   - `useCounter` digunakan untuk mengakses state `listOfProducts` yang ada di store Zustand.
   - `state.listOfProducts` adalah array yang berisi daftar produk yang diperoleh dari API. State ini dikelola oleh Zustand, dan setiap kali state berubah, komponen akan di-render ulang dengan data terbaru.

2. **Mengambil Aksi `fetchListOfProducts` dari Store**:

   ```javascript
   const { fetchListOfProducts } = useActions();
   ```

   - `useActions` adalah custom hook yang mengakses **actions** dari store Zustand. Dalam hal ini, kita mengambil aksi `fetchListOfProducts` yang bertanggung jawab untuk mengambil data produk dari API dan memperbarui state `listOfProducts`.

3. **Efek Samping dengan `useEffect`**:

   ```javascript
   useEffect(() => {
     fetchListOfProducts(); // Ambil data produk dari API saat komponen pertama kali dimuat
   }, [fetchListOfProducts]);
   ```

   - `useEffect` digunakan untuk menjalankan efek samping (side effect) ketika komponen dimuat. Dalam hal ini, kita memanggil `fetchListOfProducts` hanya sekali saat komponen pertama kali dimuat (karena dependensinya adalah `fetchListOfProducts` yang tidak berubah selama masa hidup komponen).
   - Fungsi `fetchListOfProducts` akan melakukan **fetch request** ke API, dan hasilnya akan disimpan dalam state `listOfProducts`.

4. **Menampilkan Data Produk**:

   ```javascript
   {
     productList?.length > 0 ? (
       productList.map((singleProductItem) => (
         <div key={singleProductItem.id}>
           <p>{singleProductItem?.title}</p>
           <img src={singleProductItem?.thumbnail} alt="" />
         </div>
       ))
     ) : (
       <h1>No products</h1>
     );
   }
   ```

   - Jika `productList` ada dan memiliki panjang lebih dari 0 (berarti ada produk), maka kita akan melakukan **mapping** terhadap array `productList` dan menampilkan setiap item produk di dalam sebuah `div`. Setiap produk ditampilkan dengan judul (`title`) dan gambar (`thumbnail`).
   - Jika `productList` kosong atau tidak ada produk, komponen akan menampilkan pesan "No products".

5. **Styling untuk Daftar Produk**:

   ```javascript
   <ul style={{ display: "flex", flexWrap: "wrap" }}>
   ```

   - Menggunakan styling `flex` untuk menampilkan daftar produk secara horizontal dan membungkus elemen-elemen produk agar rapi (dengan `flexWrap: "wrap"`). Ini memastikan tampilan produk dapat beradaptasi dengan lebar layar yang tersedia.

6. **Debugging dengan `console.log`**:
   ```javascript
   console.log(productList);
   ```
   - Untuk membantu debugging, `console.log(productList)` mencetak isi dari `productList` ke konsol setiap kali komponen dirender ulang.

---

## Cara Komponen `Products` Berinteraksi dengan Store

### Interaksi dengan Zustand Store:

1. **Mengambil Data**: Komponen ini menggunakan hook `useCounter` untuk mengambil data produk dari state `listOfProducts` yang disimpan di store Zustand.
2. **Menambah Data**: Komponen ini tidak secara langsung mengubah data, tetapi fungsi `fetchListOfProducts` digunakan untuk memperbarui state `listOfProducts` dengan data yang diambil dari API.
3. **State Management**: Ketika data produk berhasil diambil dari API, store Zustand memperbarui state `listOfProducts`, yang menyebabkan komponen ini dirender ulang dengan data produk terbaru.

### Alur Kerja:

1. Komponen `Products` pertama kali dimuat, kemudian memanggil `fetchListOfProducts` melalui `useEffect` untuk mengambil data produk dari API.
2. Data yang berhasil diambil disimpan di `listOfProducts` dalam store Zustand.
3. Komponen `Products` mendengarkan perubahan pada `listOfProducts` dan secara otomatis menampilkan produk-produk yang ada di dalamnya.
4. Jika tidak ada produk, pesan "No products" ditampilkan.

---

## Kesimpulan

Komponen `Products` memanfaatkan **Zustand** untuk mengelola state produk secara efisien. Dengan menggunakan `useCounter` untuk mengakses state dan `useActions` untuk memanggil aksi seperti `fetchListOfProducts`, komponen ini bisa menampilkan daftar produk yang diambil dari API secara dinamis. Penggunaan **Zustand** memungkinkan komponen untuk memisahkan logika pengelolaan state dari UI dan menjaga kode tetap sederhana dan mudah dipelihara.
